import { useState } from 'react'
import Counter from './Counter/Counter'
import './App.css'

const App = (): React.ReactElement => {
  const [count, setCount] = useState<number>(0)

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>React Typescript Webpack Template</h1>
      <Counter value={count} onDecrement={handleDecrement} onIncrement={handleIncrement} />
    </>
  )
}

export default App
