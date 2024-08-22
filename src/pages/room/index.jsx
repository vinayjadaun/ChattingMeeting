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
        const appID=1445511239;
        const serverSecret="1daedad0e075fcadcc769e57edd36959";
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