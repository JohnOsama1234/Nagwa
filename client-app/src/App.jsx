import React, { useState, useContext } from 'react'
import "./App.css";
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Quiz from './Components/Quiz'
import Menu from './Components/Menu'
import FinishedMenu from './Components/FinishedMenu'
import { quizContexts } from './Components/Contexts'
import axios from 'axios';


export default function App() {
  const [quizState, setQuizstate] = useState('menu')
  const [listWordsarr, setListwordsArr] = useState([])
  const [currentQuestion, setCurrentquestion] = useState(0);
  const [score, setScore] = useState(0)

  //* To get words list
  async function getListwords() {
    try {
      const response = await axios.get('http://localhost:3000/api/words');
      // console.log(response.data);
      setListwordsArr(response.data); //*To set the data from api to array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <div className="App "></div>
      <Nav></Nav>
      <div className='App '>
        {/* context */}
      <quizContexts.Provider value={{ quizState, setQuizstate,  listWordsarr, getListwords, currentQuestion, setCurrentquestion , score ,setScore }}>
        {/* To go between */}
        {quizState === "menu" && <Menu></Menu>}
        {quizState === "quiz" && <Quiz></Quiz>}
        {quizState === "finishedmenu" && <FinishedMenu></FinishedMenu>}
      </quizContexts.Provider>
      </div>
      <Footer></Footer>
    </>
  )
}
