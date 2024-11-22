import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function MeetingRoom() {
  const { roomId, username } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const initMeeting = async () => {
      const appID = 409592924;
      const serverSecret = "613d9410ab7fb6e46739dd5b1e8bbfce";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        `${Date.now().toString()}`,
        username
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: meetingRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    initMeeting();
  }, [roomId, username]);

  return (
    <div className="text-white flex flex-col min-h-screen">
      <div className="flex justify-center my-4 mt-2 text-3xl font-mono">
        Jadavpur Mathematics Society
      </div>
      <div ref={meetingRef} className="my-4 h-full" />
    </div>
  );
}

export default MeetingRoom;
