"use client"
import React, { useState } from "react";
import "@/Style/Code.css";
import { useRouter } from "next/navigation";

const home = () => {
  const [code, setcode] = useState("");
  const router = useRouter();
  const handleroom = (ev)=>{
    ev.preventDefault();
    router.push(`/room/${code}`)
  }
  const gen = ()=>{
    setcode(Math.random().toString(16).substr(2, 8))
  }
  return (
    <>
      <form onSubmit={handleroom} className="form">
        <label className="title">enter room code</label>
        <input
        value={code}
        onChange={(e)=>{
          setcode(e.target.value)
        }}
          type="text"
          required
          placeholder="enter the code"
          className="input"
        />
        <span type="button" className="generate" onClick={gen}>Generate</span>
        <button className="submit">Submit</button>
      </form>
    </>
  );
};

export default home;
