import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      onclick={(e) => {
        e.preventDefault();
        navigate(-1);
        console.log("test");
      }}
      type={"back"}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
