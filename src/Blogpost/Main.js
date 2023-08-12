import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import AddContent from "./AddContent";
import ShowContent from "./showContent";
import View from "./View";
import { TitleValues } from "./titleValue";
import { useState } from "react";

const Main = () => {
  const [post, setPost] = useState([{postTitle:"Checklists",
  postContent:"A checklist is one of the simplest types of content you can publish. We’ve all written a check-list or to-do list before and they work because they’re short, easy to digest and allow the ability to cross items off as you complete them. Translating this into a blog post is the same thing. Simply post your checklist with some supporting information.Gardening bloggers could post a checklist for planting in the spring or getting your garden ready for winter. On the other hand, interior bloggers can create a spring cleaning checklist."}]);

  return (
    <div>
      <TitleValues.Provider value={{ post, setPost }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddContent" element={<AddContent />} />
          <Route path="/showContent" element={<ShowContent />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </TitleValues.Provider>
    </div>
  );
};

export default Main;
