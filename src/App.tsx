import './App.css';
import Logo from "./export/export.default";
import UseTheComponentsAbove from "./props-transfer/props.learn";
import {TicGame} from "./Tic-tac-toe/My.Tic";


function App() {
    // return (
    //     <div style={{
    //         alignItems:"center",
    //         justifyContent:"center"
    //     }}>
    //         <header className="App-header">
    //             <Logo/>
    //         </header>
    //         <UseTheComponentsAbove/>
    //     </div>
    // )
    return(
        <>
            <TicGame/>
        </>
    );
}

export default App;


