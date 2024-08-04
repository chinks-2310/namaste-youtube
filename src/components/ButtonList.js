import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Song",
    "Live",
    "Cricket",
    "Soccer",
    "News",
    "Cooking",
    "Valentines",
    "Programming",
    "Bollywood",
  ];
  return (
    <div className="flex mx-4">
      {list?.map((btnName, index) => (
        <Button name={btnName} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
