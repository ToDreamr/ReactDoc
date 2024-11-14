# React-Learn

What is jsx file -> A file that expanded from js script which allow developer write html code in javascript.The same theory in tsx.

## Get a quick konwn of React.

React is constructed by componets,which can so small to a part of any UI of pages or large to the whole page itself.And a function can also be a components.Here is an example:

```tsx
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

In React,the components must starts with the words of its uppercase,on the conposit,html starts with the lowercase.

You must return an conponents with a sealed label of scripts marks,in this case,jsx or tsx's grammer is more stricted than that of html.

## How to add style with CSS in React?

You can use 'className' to form a class of CSS,which is the same as HTML.

React doesn't stipulate what you need to do for including a css file,but the best way to do is using the label 'link'

## Render your Data

You need to use '{}' to render you data ,in jsx file ,when the compile machine read the lebel of {},it will read the param of which and render it on the screen.

```js
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

You could make a more complex calculation in this usage,with the example  below:

```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

```

In the case of above,**style={{}}** is not a speacial grammer,but a normal object of style wrapped by the outside bracket.You can use this when you wanna add an extra style of a component.

## Conditional Rendering

Just use JavaScript , the **if else** could help you render components conditionally , you  can also use 'logic and'-&& to render your components when there is no branch of else.

## Render the List of Data

You could use the 'for-circulate' to render your conponents or use the map function of array.

Suppose that you have poduction array like:

```js
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

In your conponents,use map function to convert array to list and render  it like this:

```js
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);
```

## Use State in React

Sometimes you want to storage some message and render it ,like the times of a button clicked.In order to implement that kind of effect , you can use state.

When you import the state from react,like this:

```js
import { useState } from 'react';
export function StateButton() {
    const [count, setCount] = useState(0);
}
```

Usually param and the name of which is set to be start with setParam,which is a customary to name a state method memory.

## What is the so called Hook function in React?

The function starts with "use xx" is hook function in React,with which you can also write your own hook function . And the state param of each 'Hook component'  is isolated with different components.

However，most of time,you need to refresh a param at a same time but trigger different components.You can use the 'prop way' to transfer param value to the son's properties.

## Properly Use the export grammer
