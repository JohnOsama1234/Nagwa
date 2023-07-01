import React, { useContext, useEffect, useState } from 'react'
import { quizContexts } from './Contexts'
import axios from 'axios';
import "../App.css";

export default function FinishedMenu() {

  const [rank, setRank] = useState(0)
  const { score, setQuizstate , setScore } = useContext(quizContexts)
  // console.log("score from finished menu " + score);
//* To send the score to get yhe rank
  async function sendScore(score) {
    try {
      const response = await axios.post('http://localhost:3000/api/rank', { "final_score": score });
      // console.log(response.data.rankPercentage);
      setRank(response.data.rankPercentage)
      // console.log(rank);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(() => {
    
    sendScore(score)
  }, [])

  return (
    <div className='finishedMenu'>
      <h2>Your Score is  {score} and your rank is {rank}</h2>
      <button className='btn btn-light' onClick={() => ( setQuizstate('menu') , setScore(0)) }>Try again</button>
    </div>
  )
}
