import React from "react";

const Demo = props => {
  const list = props.frameworks.map((f, index) =>
   {
      let e = <li key={index}>
        <a href={f.url}> {f.name} </a>
      </li>
      return e;
    }

  );
  return (
    <>
      <h2>{props.type}</h2>
      <ul>{list}</ul>
    </>
  );
}

export default Demo
