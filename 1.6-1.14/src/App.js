import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  console.log("In Stats!")

  let all = props.good + props.neutral + props.bad
  let avg = (props.good - props.bad)/all
  let pos_pro = (props.good/all) * 100

  if (all === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else{

  if (props.good === 0){
    pos_pro = 0
  }

  return (
    <div>
    <p> good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {all}</p>
    <p>average {avg}</p>
    <p> positive {pos_pro}%</p>
    </div>
  )
}
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
     <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App