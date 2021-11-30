import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail image={faker.image.avatar()} author={faker.name.firstName()} time="10 Jan 8:00AM" content={faker.random.words()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail image={faker.image.avatar()} author={faker.name.firstName()} time="15 Nov 2:42PM" content={faker.random.words()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
