import React, { Component, useEffect, useState } from 'react'
import InputOptionsBox from "../../../components/inputoptionsbox";
import InputAndSubmitBox from "../../../components/inputandsubmitbox";
// import PersonalMessageBox from "./personalmessagebox";



function ChatSelectionArea() {
  return (
    <div
    style={{
      border: 'solid 1px',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    }}
    >
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'antiquewhite',
        justifyContent: 'center',
        // alignSelf: 'center',
        // border: 'solid 1px',
        boxSizing: 'border-box',
        width: '700px', 
        // height: '50%',
      }}>
        <InputAndSubmitBox></InputAndSubmitBox>
        <InputOptionsBox></InputOptionsBox>
      </div>
    </div>
  )
}


export default ChatSelectionArea;