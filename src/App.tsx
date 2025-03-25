import './App.css'
import TypingModeSelector from './compontents/TestModeSelector/TestModeSelector'
import TypingStats from './compontents/TypingStats/TypingStats'
import TypingArea from './compontents/TypingArea/TypingArea'

function App() {

  return (
    <>
      <h1>CyberType</h1>
      <TypingModeSelector />
      <TypingStats />
      <TypingArea />
    </>
  )
}

export default App
