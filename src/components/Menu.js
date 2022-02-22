import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () => {
  const {setAppState} = useContext(DataContext)

  return(
    <div className="container mb-5 p-5 d-md-flex flex-md-column justify-content-md-center align-items-md-center bg-info rounded-3">
      <h2>REACT QUIZ</h2>
      <button className="btn btn-warning mt-5 fs-5 text-dark" onClick={()=>setAppState('quiz')}>Begin Test</button>
    </div>
  )
}

export default Menu