import './App.css';
import Logo from "./export/export.default";
import {BoxWith2Img, ButtonWithAlert} from "./export/export.named";


function App() {
    return (
        <div style={{
            alignItems:"center",
            justifyContent:"center"
        }}>
            <header className="App-header">
                <Logo/>
            </header>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                < BoxWith2Img/>
                {/*<ButtonWithAlert message="nihao"/>*/}
            </div>
        </div>
    )
}

export default App;
