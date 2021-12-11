import React, { Component } from "react";
import Button from "./button/Button";
import { nanoid } from "nanoid";

class Forms extends Component {
  state = {
    books: [],
    id: "",
    title: "",
    author: "",
    priority: "",
    category: "",
  };

  componentDidMount() {
    const books = localStorage.getItem("books");
    const parsedBooks = JSON.parse(books);

    if (parsedBooks) {
      this.setState({ books: parsedBooks });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.books !== prevState.books) {
      localStorage.setItem("books", JSON.stringify(this.state.books));
    }
  }

  addBook = ({ title, author, priority, category }) => {
    const book = {
      id: nanoid(),
      title,
      author,
      priority,
      category,
    };

    const { books } = this.state;

    books.find(({ title }) => title === book.title)
      ? alert(`${title} is already added.`)
      : this.setState(({ books }) => ({ books: [...books, book] }));
  };
  deleteBook = (bookId) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((book) => book.id !== bookId),
    }));
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.addBook(this.state);

    this.setState({
      id: "",
      title: "",
      author: "",
      priority: "",
      category: "",
    });
  };
  render() {
    const { books, title, author, priority, category } = this.state;
    return (
      <div>
        <form id={nanoid()} onSubmit={this.handleSubmit}>
          <label>
            Tytuł książki
            <input
              value={title}
              id={nanoid()}
              type="text"
              minlength="1"
              name="title"
              placeholder="Wpisz tytuł (min 1 znak)"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Autor książki
            <input
              value={author}
              id={nanoid()}
              type="text"
              minlength="3"
              name="author"
              placeholder="Wpisz autora (min 3 znaki)"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Priorytet przeczytania
            <select
              id={nanoid()}
              name="priority"
              value={priority}
              required
              onChange={this.handleChange}
            >
              <option value="" disabled></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label for="category">Kategoria książki</label>
          <select
            required
            id={nanoid()}
            name="category"
            value={category}
            onChange={this.handleChange}
          >
            <option value="" disabled></option>
            <option value="Fabularna">Fabularna</option>
            <option value="Naukowa">Naukowa</option>
            <option value="Historyczna">Historyczna</option>
          </select>
          <Button func={this.handleSubmit} text={"Dodaj ksiąkę"} />
        </form>
        {books.map(({ id, title, author, priority, category }) => (
          <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{priority}</td>
            <td>{category}</td>
            <td>
              <Button func={this.deleteBook} text={"Usuń"} />
            </td>
          </tr>
        ))}
      </div>
    );
  }
}

export default Forms;
