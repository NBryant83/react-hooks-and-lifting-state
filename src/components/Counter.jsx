import { useState, useEffect } from 'react'


export default function Counter() {
  // useState hook returns state value and a function to set the value
  const [count, setCount] = useState(1)
  // example of having an object
  const [user, setUser] = useState({ name: "Nakisha"})


  // // state would look like this in a class
  // state = {
  //   count: 1,
  //   user: {
  //     name: "Nakisha"
  //   }
  // }
  
 // use effect hooks
 // use effect runs after every render...
 useEffect(() => {
   //console.log('after every render')
   console.log(count)

   // ...return callback is invoked on unmount like componentWillUnmount()
  //  return () => {
  //    console.log('on every unmount')
  //  }
  //  })
 
   // you can have more than one useEffect hook
   // ... unless you pass it a variable in an array as a second arg
  //  useEffect(() => {
  //    console.log('I only go when user changes')
  //  }, [user])

  //  // ... or you tell it to watch nothing...so it only runs once
  //  useEffect(() => {
  //    console.log('I only run once!')
   })


 
  // event handlers
  const handleIncreaseCount = () => {
    // setCount is still async
    setCount(count + 1)
    // this code executes first
    //console.log(count)
  }
  return (
  <div>
    <h1>Hello Functional Components!</h1>

    <h2>the count is {count}</h2>

    <h3>Hello {user.name}! Are you loving functional components?</h3>

    <button onClick={handleIncreaseCount}>Increase the Count!</button>
  </div>
  )  
}