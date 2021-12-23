import React, { Component } from "react";
import axios from "axios";

export default class AddUser extends Component {
  state = {
    users: [],
    username: "",
  };

  componentDidMount() {
    this.getUsers();
  }

  // Todos los datos tipeados se establecen en el estado del componente users
  // basicamente le estamos diciendo que de estado ponga el valor del campo
  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/user");
    this.setState({ users: res.data });
  };

  postUsers = async () => {
    await axios.post("http://localhost:4000/user/add", {
      username: this.state.username,
    });
    this.setState({username: ''})
  }

  deleteUser = async (id) => {
    const res = window.confirm('Are you shure you wat to delete?')
    if(res) {
      await axios.delete(`http://localhost:4000/user/delete/${id}`)
      this.getUsers();
    }
  }

  onSubmit = async (event) => {
    // Con esto evitamos que el formulario resetee la página entera
    event.preventDefault();
    this.postUsers()
    this.getUsers()
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>Add user</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="form-group p-2">
                  <button type="submit" className="btn btn-primary">
                    Save user
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <ul className="list-group">
            {
              this.state.users.map((user) => (
                <li
                  className="list-group-item list-group-item-action"
                  key={user._id}
                  onDoubleClick={() => this.deleteUser(user._id)}
                >
                  {user.username}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
