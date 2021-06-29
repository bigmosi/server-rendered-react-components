import react from 'react';
import ReactDOM  from 'react-dom';
import { App } from './App';


//ReactDOM.render(<App/>, document.querySelector("#container"));

function render() {

    ReactDOM.hydrate(<App/>, querySelector("#container"));
}

render();