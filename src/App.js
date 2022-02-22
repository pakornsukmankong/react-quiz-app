import { createContext, useState } from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Score from './components/Score';

export const DataContext = createContext()

function App() {
  const [appState,setAppState] = useState("menu")
  const [score,setScore] = useState(0)
  
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="container w-50 mt-5 px-5 py-1 bg-light d-md-flex flex-md-column align-items-md-center rounded-5">
        <h1>Quiz App</h1>
        {appState === "menu" && <Menu/>}
        {appState === "quiz" && <Quiz/>}
        {appState === "score" && <Score/>}
      </div>
      <div className="fixed-bottom">
        <FooterComponent/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
