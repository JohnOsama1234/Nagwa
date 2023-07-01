import React, { useContext, useEffect, useState } from 'react'
import { quizContexts } from './Contexts'
import "../App.css"

export default function Quiz() {

    const { setQuizstate, getListwords, listWordsarr, score, setScore } = useContext(quizContexts)
    const [currentQuestion, setCurrentquestion] = useState(0)
    const [studentChoice, setStudentchoice] = useState(" ")
    const [progress, setProgress] = useState(0);

    //* To get next question and set the newer score
    const handleClick = () => {
        setCurrentquestion(currentQuestion + 1)
        if (studentChoice === listWordsarr[currentQuestion].pos) {
            setScore(score + 10)
            // console.log("score =" + score);
        }
        //* To increase the progress bar
        if (progress < 100) {
            setProgress(progress + 10);
        }
        setStudentchoice(" ")
    }
    //* To finish the Quiz
    const finishQuiz = () => {
        if (studentChoice === listWordsarr[currentQuestion].pos) {
            setScore(score + 10)
            // console.log("score =" + score);
        }
        // console.log("score =" + score);
        setQuizstate('finishedmenu')

    }

    useEffect(() => {
        getListwords()
        setStudentchoice(" ")
        // console.log(quizState);
    }, [])
    // console.log("final score" + score);


    return (
        <div className="Quiz">

            <div className="progress-bar w-75 m-4">
                <div className="progress" style={{ width: `${progress}%` }}><p className='text-dark text-center'>{currentQuestion + 1} / {listWordsarr.length}</p></div>
            </div>

            <h6> {currentQuestion + 1} / {listWordsarr.length}</h6>
            <h1>{currentQuestion + 1}- {listWordsarr[currentQuestion]?.word}</h1>
            
            {/* By Clicking on any button will Store student choice in (studentChoice) */}
            <div className='options'>
                <button className="btn btn-light mt-4 " onClick={() => setStudentchoice('verb')}>Verb</button>
                <button className="btn btn-light mt-4 " onClick={() => setStudentchoice('adjective')}>Adjective</button>
                <button className="btn btn-light mt-4 " onClick={() => setStudentchoice('noun')} >Noun</button>
                <button className="btn btn-light mt-4 " onClick={() => setStudentchoice('adverb')}>Adverb</button>
            </div>

            {/* To show student choice and the correct answer */}
            {/* {console.log(listWordsarr[currentQuestion]?.pos)}
            {console.log("........")}
            {console.log(studentChoice)}
            {console.log(listWordsarr)} */}

            {/* To check */}
            {
                studentChoice != " " && studentChoice === listWordsarr[currentQuestion]?.pos ?
                    <button className='btn btn-success mt-4'>True</button>
                    : studentChoice != " " && studentChoice !== listWordsarr[currentQuestion]?.pos ?
                        <button className='btn btn-danger mt-4'>False</button> :
                        <p></p>
            }


            {currentQuestion == listWordsarr.length - 1 ?
                (
                    <button className='btn btn-info m-4' onClick={finishQuiz}>Finish The Quiz</button>
                )
                :
                (
                    <button className='btn btn-warning m-4' onClick={() => handleClick()}>Next</button>
                )}
        </div>

    )
}
