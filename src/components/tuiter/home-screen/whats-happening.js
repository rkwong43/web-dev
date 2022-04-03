import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../actions/tuits-actions";

const WhatsHappening = () => {
  const dispatch = useDispatch();
  const [newTuit, setNewTuit] = useState({ tuit: "New tuit" });
  return (
    <>
      <textarea
        className="form-control bg-black mb-1 text-muted border-bottom border-bottom-dark"
        placeholder="What's happening?"
        onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
      ></textarea>
      <a href="/">
        <i className="fa fa-solid fa-image fa-remove fa-pull-left"></i>
      </a>
      <a href="/">
        <i className="fa fa-solid fa-chart-line fa-remove fa-pull-left"></i>
      </a>
      <a href="/">
        <i className="fa fa-solid fa-smile fa-remove fa-pull-left"></i>
      </a>
      <a href="/">
        <i className="fa fa-solid fa-calendar fa-remove fa-pull-left"></i>
      </a>
      <button
        className="btn btn-primary fa-pull-right rounded-pill"
        onClick={() => createTuit(dispatch, newTuit)}
      >
        Tuit
      </button>
      <br />
      <br />
    </>
  );
};
export default WhatsHappening;
