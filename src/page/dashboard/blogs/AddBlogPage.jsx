import * as React from "react";

import ReactQuill from "react-quill";

import Dashboard from "../../../layouts/dashboard";

const AddBlogPage = () => {
  const [value, setValue] = React.useState("");
  console.log(value);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video"],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <Dashboard title="Create New Blog" isButton={true}>
      <div className="max-w-xl mx-auto z-1000">
        <ReactQuill modules={module} className="w-full" theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..." />
      </div>
    </Dashboard>
  );
};

export default AddBlogPage;
