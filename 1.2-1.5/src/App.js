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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content name1={parts[0].name} no1={parts[0].exercises} name2={parts[1].name} no2={parts[1].exercises} name3={parts[2].name} no3={parts[2].exercises}/>
      <Total ex1={parts[0].exercises} ex2 ={parts[1].exercises} ex3={parts[2].exercises}/>
    </div>
  )
}

export default App