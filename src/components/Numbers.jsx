import React, { Component } from "react";

class Numbers extends Component {
  state = {
    randomNumbers: [],
    evenNumbers: [],
    oddNumbers: [],
  };

  // sortNumbers = () => {
  //   const { randomNumbers, evenNumbers, oddNumbers } = this.state;
  //   this.setState((prevState) =>
  //     prevState.randomNumbers
  //       .sort((a, b) => a - b)
  //       .forEach((num) => {
  //         num % 2 === 0
  //           ? {
  //               evenNumbers: [...prevState.evenNumbers, num],
  //             }
  //           : {
  //               oddNumbers: [...prevState.oddNumbers, num],
  //             };
  //       })
  //   );
  // };

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
  render() {
    const { evenNumbers, oddNumbers } = this.state;
    return (
      <div>
        <button type="button" onClick={() => this.getRandomNumbers()}>
          Losuj liczby
        </button>
        <div>
          <div>
            <ul>
              {evenNumbers.map((num) => (
                <li>{num}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {oddNumbers.map((num) => (
                <li>{num}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Numbers;
