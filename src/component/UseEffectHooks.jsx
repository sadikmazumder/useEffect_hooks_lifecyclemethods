import React, { useEffect, useState } from "react";

function UseEffectHooks() {
  const [content, setContent] = useState();
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  console.log(content);
  // useEffect hooks - > using the lifeCycle methods

  //Mount
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  //Update
  useEffect(() => {
    console.log("componentDidUpdate");

    if (content) {
      fetch("https://jsonplaceholder.typicode.com/" + content)
        .then((response) => response.json())
        //.then((json) => console.log(json));
        .then((json) => setItems(json));
    }
  });

  //UnMount
  useEffect(() => {
    console.log("componentDidUnmount");
    return () => {
      //cleaning
      console.log("Unmount");
    };
  }, [count]);
  console.log(items);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setContent("posts")}>Posts</button>
      <button onClick={() => setContent("users")}> Users</button>
      <button onClick={() => setContent("comments")}> Comments</button>

      <h1>{content}</h1>

      <ul>
        {items &&
          items.map((item) => {
            // return <pre>{JSON.stringify(item)}</pre>;

            return <li key={item.id}>{item.id}</li>;
          })}
      </ul>
    </div>
  );
}

export default UseEffectHooks;
