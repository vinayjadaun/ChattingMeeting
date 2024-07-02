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
        const appID=367181072;
        const serverSecret="406a296bf949c8e3db07ea973038ee70";
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
   
    <div className="UI"><div className='meeting' ref={(myMeeting)}/></div>
  )
}

export default Roompage