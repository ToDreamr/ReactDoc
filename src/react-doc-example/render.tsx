import "./Render.css";
import React from "react";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
export function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul className={"ul-style"}>{listItems}</ul>;
}

export function ButtonWithInnerEvent() {
  function handleClick() {
    alert("You clicked me!");
  }
  function ClickEvent() {
    return <button onClick={handleClick}>Click me</button>;
  }
  return (
    /*只需要吧函数传递给事件，不要调用事件处理函数！!*/
    <div>
      <ClickEvent />
    </div>
  );
}
