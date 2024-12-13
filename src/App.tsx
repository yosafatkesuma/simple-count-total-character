import "./styles.css";
import * as React from "react";
import { isEqual, cloneDeep } from "lodash";

export default function App() {
  const [text, setText] = React.useState("");
  return (
    <div className="App">
      <h1>Simple count total character</h1>
      <textarea
        onChange={(event) => {
          setText(event.target.value);
        }}
        style={{ minHeight: 100, minWidth: 360 }}
      />
      <div>length: {text.length}</div>
    </div>
  );
}
