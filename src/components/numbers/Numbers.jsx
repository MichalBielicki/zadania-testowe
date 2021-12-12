import React, { Component } from "react";
import style from "./Numbers.module.css";
import Button from "../button/Button";
import { nanoid } from "nanoid";

class Numbers extends Component {
  state = {
    randomNumbers: [],
    evenNumbers: [],
    oddNumbers: [],
  };

  sortNumbers = () => {
    const { randomNumbers, evenNumbers, oddNumbers } = this.state;
    this.setState(
      randomNumbers
        .sort((a, b) => a - b)
        .forEach((num) => {
          if (num % 2 === 0) {
            evenNumbers.push(num);
          } else {
            oddNumbers.push(num);
          }
        })
    );
  };

  getRandomNumbers = () => {
    const { randomNumbers } = this.state;
    for (let i = 0; i < 20; i++) {
      this.setState((prevState) => ({
        randomNumbers: [
          ...prevState.randomNumbers,
          Math.round(Math.random() * (100 - 1) + 1),
        ],
      }));
    }
    console.log(randomNumbers);
    this.sortNumbers();
  };

  zeroState = () => {
    this.setState({ randomNumbers: [], evenNumbers: [], oddNumbers: [] });
  };
  render() {
    const { evenNumbers, oddNumbers } = this.state;
    return (
      <div>
        <h2>Zadanie 1</h2>
        <Button
          type="button"
          text="Losuj liczby"
          func={() => this.getRandomNumbers()}
        />
        <Button type="button" text="Wyczyść" func={() => this.zeroState()} />
        <div className={style.wraper}>
          <h3>Parzyste</h3>
          <ul className={style.even}>
            {evenNumbers.map((num) => (
              <li id={nanoid()}>{num}</li>
            ))}
          </ul>
          <h3>Nieparzyste</h3>
          <ul className={style.odd}>
            {oddNumbers.map((num) => (
              <li id={nanoid()}>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Numbers;
