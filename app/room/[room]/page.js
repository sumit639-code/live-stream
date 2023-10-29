"use client"
import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'next/navigation';

const mainroom = () => {
    const roomid =useParams();
    const idR = roomid.room;

    const myMeeting = async (ele)=>{
        const appID = 2086565431;
      const serverSecret = "ac43861c47358171a8f860a0a7d8a41e";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));
    }
  return (
    <div>mainroom: {idR}</div>
  )
}

export default mainroom;