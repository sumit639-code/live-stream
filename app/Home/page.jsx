"use client"
import React, { useState } from "react";
import "@/Style/Code.css";
import { useRouter } from "next/navigation";

const home = () => {
  const [code, setcode] = useState();
  const router = useRouter();
  const handleroom = (ev)=>{
    ev.preventDefault();
    router.push(`/room/${code}`)
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
        <button className="submit">Submit</button>
      </form>
    </>
  );
};

export default home;
