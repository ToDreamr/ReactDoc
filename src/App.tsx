import './App.css';
import Logo from "./export/export.default";
import UseTheComponentsAbove from "./props-transfer/props.learn";
import {MultiItem, MultiReact} from "./render/render.item";


function App() {

    return (
        <div style={{
            alignItems:"center",
            justifyContent:"center"
        }}>
            <header className="App-header">
                <Logo/>
            </header>
            <MultiReact param1={"World"} param2={"Your Name"} />
            <MultiItem/>
            <UseTheComponentsAbove/>
        </div>
    )
}

export default App;


