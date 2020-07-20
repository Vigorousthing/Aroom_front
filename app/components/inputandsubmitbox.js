import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { sendTextMessageToServerAction } from '../containers/ChatRoomPage/actions'
import { createStructuredSelector } from 'reselect'
import { 
  makeSelectMainMessageHistory,
  makeSelectChatRoomBehalfOf 
} from '../containers/ChatRoomPage/selectors'



function InputAndSubmitBox(props) {
  const [textInputState, setTextInputState] = useState('');

  const onKeyDownHandler = e => {
    if (e.keyCode === 13 && e.shiftKey) {

    } else if (e.keyCode === 13) {
      submitHandler(e)
    } 
  }

  const textChangeHandler = e => {
    setTextInputState(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    setTextInputState ('');
    let d = new Date();
    let h = String(d.getHours());
    let m = String(d.getMinutes()).padStart(2, '0');

    props.sendTextMessageToServer({
      type: 'text',
      content: textInputState,
      post_time: h+':'+m,
      opinion: props.opinion,
    });
  }

  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'row',
      boxSizing: 'border-box',
      margin: '2px'
    }}
    >
      <form 
      style={{
          display: 'flex',
          boxSizing: 'border-box',
          width: '100%', 
          height: '100%',
      }}
      onSubmit={submitHandler}
      >
        <Form
        onChange={textChangeHandler}
        onKeyDown={onKeyDownHandler}

        style={{
          width: '85%'
        }}
        as='textarea'
        value={textInputState}
        rows="2" 
        />
        <Button
        onClick={submitHandler}
        style={{
        width: '16%',
        margin: '0 0 0 2px'
        }}
        variant='secondary'>
          Submit
        </Button>
      </form>
    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  mList: makeSelectMainMessageHistory(),
  opinion: makeSelectChatRoomBehalfOf(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sendTextMessageToServer: (message) => dispatch(sendTextMessageToServerAction(message))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(InputAndSubmitBox);