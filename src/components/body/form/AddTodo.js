import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addtodo } from "../../../redux/CrudSclice";
import swal from "sweetalert";

class AddTodo extends Component {
  state = {
    id: uuidv4(),
    name: "",
    email: "",
    complete: false,
  };

  handelchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handelcheckchange = (e) => {
    if (e.target.checked) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  addtodo = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      name: this.state.name,
      email: this.state.email,
      complete: this.state.complete,
    };
    this.props.dispatch(addtodo(data));
    this.setState({
      id: uuidv4(),
      name: "",
      email: "",
      complete: false,
    });
    swal({
      title: "Good job!",
      text: "todo add successfull",
      icon: "success",
      button: "Aww yiss!",
    });
  };



  render() {
    console.log(this.props);
    return (
      <div className="w-50 m-auto">
        <br />
        <br />
        <form onSubmit={this.addtodo} className="form-group">
          <input
            required
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            id="name"
            onChange={this.handelchange}
          />
          <br />
          <input
            required
            value={this.state.email}
            className="form-control"
            type="email"
            name="email"
            id="email"
            onChange={this.handelchange}
          />
          <br />

          <label htmlFor="checkbox">
            Are you Agree :
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={this.state.complete}
              onChange={this.handelcheckchange}
              className="form-check-input"
            />
          </label>
          <br />
          <button className="btn btn-secondary" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(AddTodo);
