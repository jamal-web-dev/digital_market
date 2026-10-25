import { useState, useEffect } from "react";




export const Button = ()=>{
  const [count, setCount] = useState(0);

  // function handleCount(){
  // }
  function increase(){
    setCount(count + 1)
    
  }
  function increaseFive(){
    setCount(count + 5)
  }
  function decrease(){
    if(count == 0){
      setCount(0);
      return;
    }
    setCount(count -1)
  }
  function reset(){
    setCount(0);
  }

  return(
    <>
    <button onClick={increase}>Inrease</button>
    <button onClick={increaseFive}>Inrease By 5</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
    <p>{count}</p>
    </>
  )
}


// RENDERING LIST WITH MAP()

export const RenderPractice = ()=>{
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 45000,
      active: true
    },
    {
      id: 2,
      name: "PHone",
      price: 6000,
      active: false
    },
    {
      id: 3,
      name: "Headphones",
      price: 8900,
      active: true
    }
  ]

  return(
    <div>
      <h1>Our Products</h1>
      {
        products.map((product)=>(
          <article key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </article>
        ))
      }
    </div>
  )
}

// CONDITIONAL RENDERING. 
export const ConditionalRendering = ()=>{
  let login = true;
  return(
    <main>
      {login ? (
      <h1>Your are login</h1>
      ) : ( <h1>Not login</h1>)}
    </main>
  )
}

// USE EFFECT 
export const EffectPractice = ()=>{
  const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   document.title = `Count: ${count}`;
  // }, [count])
  // document.title = `Count: ${count}`
  return(
    <main>
      <h1>{count}</h1>
      <h4>{count}</h4>
      <button onClick={()=>{
        setCount(prev=>prev + 1)
      }}>Increase</button>
    </main>
  )
}