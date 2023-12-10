"use client"
import { useEffect, useState , use} from "react";
import {notFound} from "next/navigation"
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: 'Hello, Next!',
  }
}

//don't use async, enable experimental features if use new feature
export default function Home() {

  const {message} = use(getData());

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={()=>{
        console.log("throw");
        throw new Error('This is a custom error message');
      }}>Trigger Error</button>
    </div>
  );
}
