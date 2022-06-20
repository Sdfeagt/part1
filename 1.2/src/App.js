const Header = (props) =>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>
      {props.name} {props.no1}
      </p>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <p>
        <Part name ={props.name1} no ={props.no1} />
        <Part name ={props.name2} no ={props.no2} />
        <Part name ={props.name3} no ={props.no3} />
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
      <Content name1={part1} no1={exercises1} name2={part2} no2={exercises2} name3={part3} no3={exercises3}/>
      <Total ex1={exercises1} ex2 ={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App