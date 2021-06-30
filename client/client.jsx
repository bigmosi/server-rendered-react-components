import react from 'react';
import ReactDOM  from 'react-dom';
import { App } from './App';
import { handleModifyAnswerVotes } from '../shared/utility';


let state = undefined;

fetch("http://localhost:7777/data")
     .then(data => data.json())
     .then(json =>{
         state = json;
         console.log("Got the state", state);
         
     });

     function handleVote(answersId, increment){
     state.answers = handleModifyAnswerVotes(state.answers,answersId);
      fetch(`vote/${answersId}?increment=${increment}`);
      render();
     }

//ReactDOM.render(<App/>, document.querySelector("#container"));


function render() {

    ReactDOM.hydrate(<App {...state} handleModifyAnswerVotes={handleModifyAnswerVotes}/>, querySelector("#container"));
}

//render();