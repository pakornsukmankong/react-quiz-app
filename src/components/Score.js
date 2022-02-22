import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
  const {score,setScore,setAppState} = useContext(DataContext)

  const testAgain = () => {
    setScore(0)
    setAppState("menu")
  }

  return(
    <div className="container mb-5 p-5 d-md-flex flex-md-column justify-content-md-center align-items-md-center bg-info rounded-3">
    <h2>Total Score</h2>
    <h4 className="mt-3">{`${score} / ${QuestionsData.length}`}</h4>
    <button className="btn btn-warning mt-3 fs-5 text-dark" onClick={testAgain}>Test Again</button>
    </div>
  )
}

export default Score