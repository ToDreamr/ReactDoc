import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import { ButtonWithAlert } from "../export/export.named";
import App from "../App";
import { TodoList } from "../script-wrap/user.script.wrap";
import UseTheComponentsAbove, { Profile } from "../props-transfer/props.learn";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/ButtonWithAlert">
        <ButtonWithAlert />
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/TodoList">
        <TodoList />
      </ComponentPreview>
      <ComponentPreview path="/Profile">
        <Profile />
      </ComponentPreview>
      <ComponentPreview path="/UseTheComponentsAbove">
        <UseTheComponentsAbove />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
