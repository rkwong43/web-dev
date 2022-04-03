import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits } from "../actions/tuits-actions";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), [dispatch]);
  return (
    <div>
      <ul className="list-group">
        {tuits.map &&
          tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit} />)}
      </ul>
    </div>
  );
};

export default TuitList;
