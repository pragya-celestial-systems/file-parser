import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import EventDetail from "./components/EventDetail";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Form />} />
          <Route path="/events" element={<EventDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
