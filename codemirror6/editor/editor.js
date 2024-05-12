import {EditorView} from "@codemirror/view";
import {EditorState} from "@codemirror/basic-setup";

import {darkExtensions} from "./extensions/themes.js";

const state = EditorState.create({
  // initial content of editor
  doc: ` // This is in HTML
<p>Hello World!</p>
`,
  extensions: darkExtensions
});

// use window so it can be easily accessed in other files
window.editor = new EditorView({
  state: state,
  parent: document.querySelector("#editor")
});

// import our files which don't get imported anywhere else, so that they get rolled up

import "./files/upload.js";
import "./files/download.js";
