import React from "react";
import { TitleValues } from "./titleValue";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowContent = () => {
  const { post } = useContext(TitleValues);
  const navigate = useNavigate();

  return (
    <div className="blog-list-container">
      <ul>
        {post.map((post, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <h2>{post.postTitle}</h2>

            <Button
              onClick={() => {
                navigate(`/view/${index}`);
              }}
            >
              Read Post
            </Button>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ShowContent;
