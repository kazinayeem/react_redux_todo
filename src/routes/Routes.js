import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Cart from "../components/body/Cart";
//import AddTodo from "../components/body/form/AddTodo";
import Todo from "../components/body/form/Todo";
import Home from "../components/body/Home";
import ShowTodo from "../components/body/showtodo/ShowTodo";
import Header from "../components/Header/Header";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<Todo />} />
          <Route path="/cart" element={<ShowTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
