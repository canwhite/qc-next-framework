"use client"
import {useState , use, useEffect} from "react";
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: 'Hello, Next!',
  }
}

//client don't use async, enable experimental features if use new feature
//server can use async
export default function Home() {

  const [message,setMessage] = useState("");
  useEffect(()=>{
    (async()=>{
      const { message } = await getData()
      setMessage(message);
    })()
  },[])

  const [error, setError] = useState(false);
  const handleGetError = () => {
    setError(true);
  };

  return (
    <>
      <h1>{message}</h1>
      {error ? Error() : <button onClick={handleGetError}>Get Error</button>}
    </>
  );
}
