import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({ type: "create-tuit", tuit: whatsHappening });
  };
  return (
    <>
      <textarea
        className="form-control bg-black mb-1 text-muted border-bottom border-bottom-dark"
        value={whatsHappening}
        placeholder="What's happening?"
        onChange={(event) => setWhatsHappening(event.target.value)}
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
        onClick={tuitClickHandler}
      >
        Tuit
      </button>
      <br />
      <br />
    </>
  );
};
export default WhatsHappening;
