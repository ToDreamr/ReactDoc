//在tsx中可以使用引号来进行字面变量的属性传递
//tsx中，大括号可以进行函数的调用，变量以及对象
export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />
    );
}