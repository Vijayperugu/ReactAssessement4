import React ,{useState} from 'react'




const Counter = () => {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className='container'>
        <h1 className='title'>Counter: {count}</h1>
        <div className='btnsContainer'>
            <button id='decrease' onClick={decreaseCount}>decrease</button>
            <button id='increase' onClick={increaseCount}>increase</button>
        </div>
    </div>
  )
}

export default Counter