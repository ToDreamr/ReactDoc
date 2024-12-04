//渲染多个元素，组件的声明必须开头大写
import { Component } from "react";

export function MultiItem() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    <>
      <ul>
        {/*对于每个元素，都将会返回出一个确定的html标签组件*/}
        {products.map((product) => (
          <li
            key={product.id}
            style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
}

//可以使用的参数类型与：any,string,number,number[],boolean,自定义的对象类型object{}
//当函数具有返回对象时，可以对函数进行返回类型的定义声明，根据返回值的类型在相应的函数位置进行静态类型定义即可
//当函数不具有任何返回类型的时候，可以使用void来进行声明或者使用never表示不具备任何的返回类型
function paramTest(msg: string): string {
  return msg + " ";
}
//使用Component接口来描述组件
export class MultiReact extends Component<{ param1: string; param2: string }> {
  constructor(props: any) {
    super(props);
    console.log("hello world");
  }

  render() {
    const { param1 } = this.props;
    return (
      <>
        <h1>{paramTest("Hello ") + param1}</h1>
      </>
    );
  }
}

//使用hooks共享父子间的数据
const ChildComponent = (props: any) => {
  return (
    <div>
      <h3>子组件</h3>
      <p>从父组件接收到的消息：{props.text}</p>
      <p>从父组件接收到的数字：{props.number}</p>
      <button onClick={props.onClick}>点击我，触发父组件函数</button>
    </div>
  );
};
const ParentComponent = () => {
  // 定义要传递给子组件的数据
  const message = "这是从父组件传递过来的消息";
  const count = 42;
  const handleClick = () => {
    console.log("子组件中按钮被点击了，在父组件中响应");
  };

  return (
    <div>
      <h2>父组件</h2>
      {/* 将数据通过props传递给子组件 */}
      <ChildComponent text={message} number={count} onClick={handleClick} />
    </div>
  );
};

//模仿：
const Son = (props: { imgUrl: string }) => {
  const imgUrl = props.imgUrl;
  console.log(imgUrl);
  return (
    <>
      <img
        src={imgUrl}
        style={{
          width: "100%",
          height: "10%",
        }}
        alt={""}
      />
    </>
  );
};
export const Father = () => {
  const props: any = {
    imgUrl: "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
  };
  return (
    <>
      <Son {...props} />
    </>
  );
};
