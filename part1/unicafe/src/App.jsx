import { useState } from "react"
import { Content } from "./components/Content"
import { Header } from "./components/Header"
import { Statics } from "./components/Statics"

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSumGood = () => {
    const num = good + 1
    setGood(num)
  }

  const handleSumNeutral = () => {
    const num = neutral + 1
    setNeutral(num)
  }

  const handleSumBad = () => {
    const num = bad + 1
    setBad(num)
  }

 
  return (
    <>
      <Header />
      <Content 
        handleSumGood={handleSumGood}
        handleSumNeutral={handleSumNeutral}
        handleSumBad={handleSumBad}
      
      />
      <Statics 
        good={good}
        neutral={neutral}
        bad={bad}
      
      />
    </>
  )
}

export default App
