import "./App.css";
import Logo from "./export/export.default";
import UseTheComponentsAbove from "./props-transfer/props.learn";
import { Father, MultiItem, MultiReact } from "./render/render.item";
import UseAllState from "./hook/state/state.learn";

function App() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header className="App-header">
        <Logo />
      </header>
      <Father />
      <MultiReact param1={"World"} param2={"Your Name"} />
      <MultiItem />
      <UseTheComponentsAbove />
      <UseAllState />
    </div>
  );
}

export default App;
