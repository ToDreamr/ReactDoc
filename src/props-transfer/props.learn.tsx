// @ts-ignore
//React 组件使用 props 来互相通信。每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它
import {getImageUrl} from "../utils/generalUtils";
import {Component} from "react";
import { JSX } from "react/jsx-runtime";

//在jsx中，子组件传值的时候需要继承自对象组件。
class Avatar extends Component<{ person: any, size: any }> {
    src="jfdsjfdsl"
    render() {
        let {person, size} = this.props;
        return (
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        );
    }
}

//上面的props参数是完全给出的，现在可以进行参数的解构，将其 封装为对象
class Star extends Component<{ props: any }> {
    render() {
        let {props} = this.props;
        let person = props.person;
        let size = props.size;
        return (
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        );
    }
}

/// <summary>
/// </summary>
///
//Props 使你独立思考父组件和子组件。 实际的内涵是，子组件对传入的值进行了封装，父组件只需要传入相应的值即可使用
//无需考虑内部实现的细节
// 例如，你可以改变 Profile 中的 person 或 size props，而无需考虑 Avatar 如何使用它们。
//props 正是 组件的唯一参数！
export function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
            <Star props={{
                size: 50,
                person: {
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }
            }}/>
        </div>
    );
}

//一次性传递所有的属性
export function Disposable(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Avatar> & Readonly<{ person: any; size: any; }>) {
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    );
}

class Card extends Component<{children:any}>{
    render() {
        let children = this.props.children
        return (
            <div className="card">
                {children}
            </div>
        );
    }
}
export function CardProfile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}

//如何使props随着时间进行改变
// class Clock extends Component<{color:any},{time:any}> {
//     render() {
//         return (
//             <>
//
//             </>
//         )
//     }
// }
class Gallery extends Component<{person:any,size:any}>{
    render() {
        let {person,size} = this.props;
        return (
            <div>
                <h1>Notable Scientists</h1>
                <section className="profile">
                    <h2>Maria Skłodowska-Curie</h2>
                    <img
                        className="avatar"
                        src={getImageUrl(person)}
                        alt="Maria Skłodowska-Curie"
                        width={size}
                        height={70}
                    />
                    <ul>
                        <li>
                            <b>Profession: </b>
                            physicist and chemist
                        </li>
                        <li>
                            <b>Awards: 4 </b>
                            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
                        </li>
                        <li>
                            <b>Discovered: </b>
                            polonium (chemical element)
                        </li>
                    </ul>
                </section>
                <section className="profile">
                    <h2>Katsuko Saruhashi</h2>
                    <img
                        className="avatar"
                        src={getImageUrl(person)}
                        alt="Katsuko Saruhashi"
                        width={70}
                        height={70}
                    />
                    <ul>
                        <li>
                            <b>Profession: </b>
                            geochemist
                        </li>
                        <li>
                            <b>Awards: 2 </b>
                            (Miyake Prize for geochemistry, Tanaka Prize)
                        </li>
                        <li>
                            <b>Discovered: </b>
                            a method for measuring carbon dioxide in seawater
                        </li>
                    </ul>
                </section>
            </div>
        );
    }


}
export default function UseTheComponentsAbove(){
   return (
     <>
         <Profile/>
         <Disposable person={
             {
                 name: 'Lin Lanying',
                 imageId: '1bX5QH6'
             }
             } size={
                 50
             }
         />
         <CardProfile/>
         <Gallery  size={50}
                   person={{
                       name: 'Lin Lanying',
                       imageId: '1bX5QH6'
                   }}
         />
     </>
   );
}