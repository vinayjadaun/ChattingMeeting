import React from 'react'
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
// import dotenv from "dotenv";
// dotenv.config()

import "./s.css";

function Roompage() {
    
 
    const{roomId}=useParams();
    const vin=window.location.href;
    const myMeeting = async(element)=>{
        const appID=449344525;
        const serverSecret="b576b7aa7f51aed49487df7ec40ef437";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Vinay Jadaun");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        // ${roomId}
        zc.joinRoom({
          container:element,
          sharedLinks:[
            {
              name:'copy link',
              url:vin,
            }
          ],
          scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
          },
          showScreenSharingButton:true,
        })
    }
  return (
   
    <div className="UI"><div ref={(myMeeting)}/></div>
  )
}

export default Roompage