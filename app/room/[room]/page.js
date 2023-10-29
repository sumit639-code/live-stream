"use client";
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "next/navigation";

const mainroom = () => {
  const roomid = useParams();
  const idR = roomid.room.toString();
  console.log(idR);
  
  
  const myMeeting = async (ele) => {
    const appID = 2086565431;
    const serverSecret = "ac43861c47358171a8f860a0a7d8a41e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      idR,
      Date.now().toString(),
      Date.now().toString()
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: true,
      scenario: {
        mode: "LiveStreaming",
        config: {
          role: "Host",
        },
      },
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default mainroom;
