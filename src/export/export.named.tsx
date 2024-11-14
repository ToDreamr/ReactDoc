import logo from '../logo.svg';

export function BoxWith2Img(){
    return(
        <div>
            <img src={logo} className="App-logo" alt=""/>
            <img src={logo} className="App-logo" alt=""/>
            <img src={logo} className="App-logo" alt=""/>
        </div>
    )
}

export function ButtonWithAlert(data: any){
    function alertMsg(){
        window.alert(data.message);
    }
    return(
        <button style={
            {
                margin:"80px",
                padding:"100px",
                width:"250px",
                height:"250px",
                borderRadius:"25%",
                background:"burlywood",
        }} onClick={alertMsg}>Alert!</button>
    )
}

export default function TodoList(){
    return (
        <>
            <h1>海蒂·拉玛的待办事项</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>发明一种新式交通信号灯</li>
                <li>排练一个电影场景</li>
                <li>改进频谱技术</li>
            </ul>
        </>)
}