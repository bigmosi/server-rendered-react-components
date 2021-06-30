export function handleModifyAnswerVotes(answerId, increment){
    state.answers = state.answers.map(answer => {
        if (answer.answerId !== answerId) {
            return answer;
        }else {
            return {... answer, upvotes:answer.upvotes + increment}
        }
    });
    render();
 }
 