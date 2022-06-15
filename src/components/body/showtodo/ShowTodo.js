import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  deletetodo,
  searchtodo,
  updatetodo,
  completeTodos,
} from "../../../redux/CrudSclice";
import { useSelector, useDispatch } from "react-redux";

export default function ShowTodo() {
  const data = useSelector((state) => state.crud.data);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [user, setuser] = useState({
    id: 0,
    name: "",
    email: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setuser({
      ...user,
      name: user.name,
      email: user.email,
      id: user.id,
    });
    setShow(true);
  };
  const search = (e) => {
    dispatch(searchtodo(e.target.value));
  };
  const updatehandelr = (e) => {
    e.preventDefault();
    dispatch(updatetodo(user));
    setShow(false);
  };
  return (
    <div className="container">
      <div className="w-30">
        <input
          type="search"
          className="form-control"
          name="search"
          onChange={search}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        {data.length === 0 ? (
          <h2>no data found</h2>
        ) : (
          data.map((d, index) => (
            <tbody key={index}>
              <tr className="">
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <button
                    onClick={() => handleShow(d)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => dispatch(deletetodo(d.id))}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>

                {d.complete ? (
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(completeTodos(d.id))}
                    >
                      complete
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => dispatch(completeTodos(d.id))}
                    >
                      complete
                    </button>
                  </td>
                )}
              </tr>
            </tbody>
          ))
        )}
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-group" onSubmit={updatehandelr}>
            <input
              value={user.name}
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => setuser({ ...user, name: e.target.value })}
            />
            <br />
            <input
              value={user.email}
              className="form-control"
              type="text"
              name="name"
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
            <br />
            <button type="submit" className="btn btn-secondary">
              Update
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
