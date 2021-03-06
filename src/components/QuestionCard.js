import React from "react"; 
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function QuestionCard ({ currentUser, questionStats: {question, reward, optionA, optionB, id, user_id}}) {
    const history = useHistory()

    function answerSurvey (e) {
        history.push(`/surveys/${id}`)
    }

    const answeredQuestion = currentUser?.questions.find((question) => question.id === id)

    return (
      <div className="ui centered olive card">
        <div className="content">
          <div className="header">{question}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Reward: {reward}</h4>
        </div>
        <div className="extra content">
          {answeredQuestion ? null: (<button className="ui button" onClick={answerSurvey}>Answer</button>)}
        </div>
      </div>
    )

}

export default QuestionCard