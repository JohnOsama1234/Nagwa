import React, { useContext } from 'react'
import { quizContexts } from './Contexts'
import "../App.css";
export default function Menu() {
    const { setQuizstate } = useContext(quizContexts)
    return (
        <div className='Menu'>
            <button className='btn btn-light' onClick={()=>setQuizstate('quiz')}>Start Quiz</button>
        </div>
    )
}
