import React, { useContext } from "react";
import { TitleValues } from "./titleValue";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function View() {
  const { post } = useContext(TitleValues);
  const { id } = useParams();

  return (
    <div>
      <h1>{post[id].postTitle}</h1>
      <p>{post[id].postContent}</p>
      <h5>
        Go back<Link to="/showContent"> Click here</Link>
      </h5>
    </div>
  );
}

export default View;
