import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { TitleValues } from "./titleValue";
import { Link } from "react-router-dom";

const AddContent = () => {
  const { post, setPost } = useContext(TitleValues);

  const TargetValue = (event) => {
    event.preventDefault();
    const blogTitleValue = event.target.blogtitle.value;
    const blogContentValue = event.target.blogcontent.value;
    if (!blogTitleValue || !blogContentValue) {
      alert("Please enter the inputs");
      return;
    }
    
    alert("Successfully submitted");
        setPost([
      ...post,
      {
        postTitle: blogTitleValue,
        postContent: blogContentValue,
      },
    ]);
    event.target.blogtitle.value = "";
    event.target.blogcontent.value = "";
  };

  return (
    <div>
      <h1>Title Content</h1>
      <form onSubmit={TargetValue}>
        <Container className="d-flex justify-content-center align-items-center flex-column vh-100">
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Title"
            className="mb-3 w-50"
          >
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="blogtitle"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Add Content">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="blogcontent"
              style={{ height: "200px", width: "650px" }}
            />
          </FloatingLabel>
          <Button
            type="submit"
            variant="primary"
            className="m-3 w-25"
            size="lg"
            value="Submit your Post"
          >
            Submit
          </Button>
          <h5>  
            For reading blogs<Link to="/showContent"> Click here</Link>
          </h5>
        </Container>
      </form>
    </div>
  );
};

export default AddContent;
