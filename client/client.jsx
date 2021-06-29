import react from 'react';
import ReactDOM  from 'react-dom';
import { App } from './App';

let state = undefined;

fetch("http://localhost:7777/data")
     .then(data => data.json())
     .then(json =>{
         state = json;
         console.log("Got the state", state);
         render();
     })

//ReactDOM.render(<App/>, document.querySelector("#container"));

function render() {

    ReactDOM.hydrate(<App/>, querySelector("#container"));
}

//render();