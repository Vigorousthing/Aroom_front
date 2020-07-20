import React, { Component, useEffect, useState } from 'react';
import Message from 'components/message';
// import { connect } from 'ngrok';
import { connect } from 'react-redux'
import { 
  makeSelectMainMessageHistory,
  makeSelectChatRoomFilter,
} from '../containers/ChatRoomPage/selectors'
import { createStructuredSelector } from 'reselect'

function LikedBox(props) {

  // console.log(props)
  
  var containerref = React.createRef();
  var bottom = React.createRef();

  const [preScrollHeight, setPreScrollHeight] = useState(null);
  const [m_list, setM_list] = useState(props.m_list);

  const outerStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: 'solid 1px green',
      overflow: 'auto',
      // width: '500px',
      height: '50%',
  };

  useEffect(() => {
    if (preScrollHeight === null) {
      bottom.scrollIntoView({behavior: 'auto'});
    } else {
      if (containerref.scrollTop + containerref.clientHeight === preScrollHeight) {
        bottom.scrollIntoView({behavior: 'auto'});
      }
    }
    setPreScrollHeight(containerref.scrollHeight)
  }, [props.mList])

  return (
    <div
      ref={p => {containerref = p;}}
      style={outerStyle}
    >
      {/* {props.mList.map((each, idx) => (
        <Message info={each} key={`Message_${idx}`} />
      ))} */}
      {props.mList.map((each, idx) => ( 
        (props.filter === each.behalfOf) ? <Message info={each} key={`Message_${idx}`} />:null))}
      <div ref={p => {bottom = p;}}/>
      <button
        onClick={e => {
          setM_list(
            props.mList.concat({
              m_id: 3,
              type: 'text',
              content: 'env',
              post_time: '23:11',
              behalfOf: 1,
            })
          )
        }}
      >
        updatebutton
      </button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  mList: makeSelectMainMessageHistory(),
  filter: makeSelectChatRoomFilter(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sendTextMessageToServer: (message) => dispatch(sendTextMessageToServerAction(message))
  };
}

export default connect(mapStateToProps)(LikedBox);
