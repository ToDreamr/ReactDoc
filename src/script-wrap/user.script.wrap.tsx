//在tsx中可以使用引号来进行字面变量的属性传递
//tsx中，大括号可以进行函数的调用，变量以及对象
import { getImageUrl } from "../utils/generalUtils";

export function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return (
    <img
      className="avatar" /*当你想把一个字符串属性传递给 JSX 时，把它放到单引号或双引号中：*/
      src={
        avatar
      } /*src={avatar} 这种写法会去读取 JavaScript 中 avatar 这个变量的值。这是因为大括号可以使你直接在标签中使用 JavaScript*/
      alt={description}
    />
  );
}

export function DateList() {
  const today = new Date();

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(date);
  }
  return <h1>To Do List for {formatDate(today)}</h1>;
}

const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      <ul>
        <li
          style={{
            marginLeft: 0,
          }}
        >
          Improve the videophone
        </li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
