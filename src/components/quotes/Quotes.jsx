import Quote from "../quote/Quote";
import Button from "../button/Button";

import React, { Component } from "react";

class Quotes extends Component {
  state = {
    quotes: [],
    newQuotes: [],
    idx: -1,
  };

  componentDidMount = () => {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ quotes: response });
      })
      .then(() => {
        this.setNewQuote();
      })
      .catch(console.log);
  };

  randomNumber = () => Math.floor(Math.random() * this.state.quotes.length);

  setIdx = () => {
    this.state.newQuotes.length > 0 && this.state.newQuotes.length < 3
      ? this.setState(({ idx }) => ({
          idx: idx + 1,
        }))
      : this.setState(({ idx }) => ({
          idx: this.state.newQuotes.length,
        }));
  };

  setNewQuote = () => {
    const newQuote = this.state.quotes[this.randomNumber()];
    this.setState(({ newQuotes }) => ({
      newQuotes: [...newQuotes, newQuote],
    }));
    this.setIdx();
    return this.state.newQuotes;
  };
  prevQuote = () => {
    this.state.newQuotes.length === 1
      ? alert("There are no quotes to see")
      : this.setState(({ idx }) => ({
          idx: idx - 1,
        }));
    return this.state.newQuotes;
  };
  viewQuote = (i) => {
    return this.state.newQuotes[i];
  };

  render() {
    const quote = this.viewQuote(this.state.idx);
    return (
      <div className="App">
        <Quote quote={quote} />
        <Button func={this.prevQuote} text={"PREVIOUS QUOTE"} />
        <Button func={this.setNewQuote} text={"NEW QUOTE"} />
      </div>
    );
  }
}

export default Quotes;
