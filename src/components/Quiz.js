import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Quiz = () => {
  const [current,setCurrent] = useState(0)
  const [selectChoice,setSelectChoice] = useState('')

  const {setAppState,score,setScore} = useContext(DataContext)

  const checkAnswer = () => {
    if(selectChoice !== ""){
      if(selectChoice === QuestionsData[current].answer){
        nextQuestion()
        setScore(score+1)
      }else{
        nextQuestion()
      }
    }
  }

  const nextQuestion = () => {
    setSelectChoice('')
    if(current === QuestionsData.length-1){
      setAppState("score")
    }else{
      setCurrent(current+1)
    }
    
  }

  useEffect(()=>{
    checkAnswer()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectChoice])

  return(
    <div className="container mb-5 p-5 d-md-flex flex-md-column justify-content-md-center align-items-md-center bg-info rounded-3">
    <h2 className="text-center">{QuestionsData[current].question}</h2>
    <div className="container p-4 d-md-flex flex-md-column justify-content-md-between align-items-md-between rounded-3 space-between" style={{height: "19rem"}}>
      <button className="btn btn-light fs-5 text-lowercase" onClick={()=>setSelectChoice('A')}>{QuestionsData[current].A}</button>
      <button className="btn btn-light fs-5 text-lowercase" onClick={()=>setSelectChoice('B')}>{QuestionsData[current].B}</button>
      <button className="btn btn-light fs-5 text-lowercase" onClick={()=>setSelectChoice('C')}>{QuestionsData[current].C}</button>
      <button className="btn btn-light fs-5 text-lowercase" onClick={()=>setSelectChoice('D')}>{QuestionsData[current].D}</button>
    </div>
    <p>{`${current+1} / ${QuestionsData.length}`}</p>  
    </div>
  )
}

export default Quiz