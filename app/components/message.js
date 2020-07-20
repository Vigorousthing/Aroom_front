import React, { Component, useState } from 'react';


function Message(props) {
    const op_colorScheme = ['coral', 'burlywood', 'green'];
    // const op_alignScheme_text = ['left', 'right', 'center'];
    const op_alignScheme_eachchat = ['flex-start', 'flex-end', 'center'];
  
    const outerStyle = {
      border: 'solid 1px',
      display: 'flex',
      alignSelf: op_alignScheme_eachchat[props.info.behalfOf - 1],
      // justifyContent: 'space-between',
      flexDirection: 'column',
      MozWindowDragging: 'drag',
      borderRadius: '5px',
      width: '55%',
      // height: '20%',
      // overflow: 'auto',
      backgroundColor: op_colorScheme[props.info.behalfOf - 1],
    };
  
    const innerBoxStyle = {
      // display: 'inline-block',
      wordBreak: 'break-all',
      borderRadius: '5px',
      margin: '15px 15px 15px 15px',
    };
  
    const imageBoxStyle = {
      height: '100%',
    };
  
    const etcEleStyle = {
      display: 'flex',
      whiteSpace: 'nowrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '0 5px 3px 5px',
      height: '20px',
      // overflow: 'hidden',
      // justifyContent: 'flex-end',
      // margin: '15px 15px 15px 15px',
    };
    
    const buttonStyle = {
      width: "20px",
      height: "20px",
    }

    const likeVote = e => {
        e.preventDefault();
        const message = {
          mId: props.mId
          
        }
        console.log(e.target.value);
        const obj = JSON.stringify({ ...props.info, vote: e.target.value });
        // this.state.connection.send(obj)
    };
    
    const handleDragLeave = e => {
      e.preventDefault();
      e.stopPropagation();
      console.log('leave');
    };

    const handleDragStart = e => {
      const temp = {...props.info}
      
    }

    return (
        <div
        draggable
        onDragStart={e => {}}
        onDragLeave={e => handleDragLeave(e)}
        style={outerStyle}
        >
            {/* chat box text area */}
            {props.info.type === 'image' ? (
            <p style={innerBoxStyle}>
                <img style={imageBoxStyle} src={props.info.content} />
            </p>
            ) : (
            <p style={innerBoxStyle}>{props.info.content}</p>
            )}
            <div style={etcEleStyle}>
                {/* like / dislike */}
                <div style={{
                  display: 'flex',
                  justifyItems: 'center',
                }}>
                    <button style={buttonStyle} onClick={likeVote} value={1}></button>
                    <button style={buttonStyle} onClick={likeVote} value={-1}></button>
                </div>
                {/* time */}
                <p style={{ 
                  // width: '100%',
                  fontSize: "14px",
                  }}>{props.info.post_time}</p>
            </div>
        </div>
    )
}



export default Message;
