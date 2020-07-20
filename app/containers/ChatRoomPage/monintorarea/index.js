import React, { Component, useEffect, useState } from 'react'
import MessageBox from "../../../components/messagebox";
// import MessageBox from "components";
import LikedBox from "../../../components/likedbox";
import PollBox from "../../../components/pollbox";
import PersonalMessageBox from "../../../components/personalmessagebox";


function MonitorArea() {
  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      border: 'solid 1px',
      boxSizing: 'border-box',
      // width: '100%',  
      height: '600px',
    }}
    >
      {/* <div style={{
          height: '100%',
          flexGrow: 1
        }}>
        <PersonalMessageBox></PersonalMessageBox>
      </div> */}
      <div style={{
          
          width: '700px',
          height: '100%',
          // flexGrow: 3
        }}>
        <MessageBox></MessageBox>
      </div>
{/*       
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%'
      }}>
        <LikedBox style={{
          height: '50%'
        }}>
        </LikedBox>
        <PollBox style={{
          height: '50%'
        }}>
        </PollBox>
      </div> */}

    </div>
  )
}


export default MonitorArea;