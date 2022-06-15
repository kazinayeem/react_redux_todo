import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtodo } from "../../../redux/CrudSclice";

export default function Todo() {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    complete: false,
  });

  const handelchange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handelcheckchange = (e) => {
    if (e.target.checked) {
      setdata({ ...data, complete: true });
    } else {
      setdata({ ...data, complete: false });
    }
  };
  const navigate = useNavigate();

  const addtodos = (e) => {
    e.preventDefault();
    const datatodo = {
      id: uuidv4(),
      name: data.name,
      email: data.email,
      complete: data.complete,
    };
    dispatch(addtodo(datatodo));
    setdata({ ...data, id: uuidv4(), name: "", email: "", complete: false });
    navigate("/cart");
    // swal({
    //   title: "Good job!",
    //   text: "todo add successfull",
    //   icon: "success",
    //   button: "Aww yiss!",
    // });
  };

  return (
    <div className="w-50 m-auto">
      <br />
      <br />
      <form onSubmit={addtodos} className="form-group">
        <input
          required
          className="form-control"
          type="text"
          name="name"
          value={data.name}
          onChange={handelchange}
        />
        <br />
        <input
          required
          value={data.email}
          className="form-control"
          type="email"
          name="email"
          id="email"
          onChange={handelchange}
        />
        <br />

        <label htmlFor="checkbox">
          Are you Agree :
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={data.complete}
            onChange={handelcheckchange}
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
