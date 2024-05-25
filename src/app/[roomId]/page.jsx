"use client";
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const page = ({ params }) => {
  const roomId = params.roomId;
  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  const myMeeting = async (element) => {
    // generate Kit Token
    // const appID = 696349274;
    // ceefa25d80a7898a136a1395fbfec929
    // const serverSecret = "6f5a8757f4e455e614cee5b31a5b3fce";
    const serverSecret = "ae9bf72de4a36b0ea1830e570b097f8b";
    // const serverSecret = "ceefa25d80a7898a136a1395fbfec929";
    // const serverSecret = process.env.SERVERSECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      // process.env.APPID,
      1765889532,
      serverSecret,
      roomId,
      randomID(5),
      "user"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}
    ></div>
  );
};

export default page;
