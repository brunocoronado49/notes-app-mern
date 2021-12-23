import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class FormNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    description: "",
    date: new Date(),
    editing: false,
    _id: "",
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/user");
    if (res.data.length > 0) {
      this.setState({
        users: res.data.map((user) => user.username),
        userSelected: res.data[0].username,
      });
    }

    if (this.props.children.match) {
      console.log(this.props.children.match);
      const resNote = axios.get(
        "http://localhost:4000/notes/edit/" + this.props.children.match
      );
      console.log(resNote.data);
      this.setState({
        title: resNote.data.title,
        description: resNote.data.description,
        date: new Date(resNote.data.date),
        userSelected: resNote.data.author,
        editing: true,
        _id: resNote.data._id,
      });
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();
    if (this.state.editing) {
      const update = {
        title: this.state.title,
        description: this.state.description,
        date: this.state.date,
        userSelected: this.state.author,
      };
      await axios.put(
        `http://localhost:4000/notes/update/${this.state._id}`,
        update
      );
    } else {
      const newNote = {
        title: this.state.title,
        description: this.state.description,
        date: this.state.date,
        author: this.state.userSelected,
      };
      await axios.post("http://localhost:4000/notes/add", newNote);
    }
    window.location.href = "/notes";
  };

  onInputChange = (event) => {
    // Se le asigna a userSelected el valor del input
    this.setState({
      // Dependiendo del nombre que den, se actualiza un dato u otro
      [event.target.name]: event.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({ date: date });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header">
            <h3>Add note</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group p-2">
                <select
                  name="userSelected"
                  className="form-control"
                  onChange={this.onInputChange}
                  value={this.state.userSelected}
                  required
                >
                  {this.state.users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="title"
                  required
                  onChange={this.onInputChange}
                  value={this.state.title}
                />
              </div>
              <div className="form-group p-2">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  required
                  onChange={this.onInputChange}
                  value={this.state.description}
                />
              </div>
              <div className="form-group p-2">
                <DatePicker
                  className="form-control"
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="form-group p-2">
                <button className="btn btn-primary" type="submit">
                  Save note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
