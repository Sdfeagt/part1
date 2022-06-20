const Header = (props) =>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <p>
        {props.name} {props.no}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Number of exercises {props.ex1 + props.ex2 + props.ex3}
      </p>
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content name={part1} no={exercises1}/>
      <Content name={part2} no={exercises2}/>
      <Content name={part3} no={exercises3}/>
      <Total ex1={exercises1} ex2 ={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App