import React from "react";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./style.css";

const HomePage = () => {

  const navigate = useNavigate();

  const CreateBlog = () => {
    navigate("/AddContent");
  };
  const ToBlog = () => {
    navigate("/showContent");
  };
  return (
    <div>
  
      <Container className="d-flex justify-content-center align-items-center flex-column vh-100">
        <Button
          variant="primary"
          className="mb-3 w-25"
          size="lg"
          onClick={CreateBlog}
        >
          Create Blog
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="mb-3 w-25"
          onClick={ToBlog}
        >
          Read Blog
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
