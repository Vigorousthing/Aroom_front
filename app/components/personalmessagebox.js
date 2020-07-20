import React, { Component, useEffect, useState } from 'react';
import Message from 'components/message';
// import { connect } from 'ngrok';
import { connect } from 'react-redux'
import { 
  makeSelectMainMessageHistory,
  makeSelectChatRoomFilter,
} from '../containers/ChatRoomPage/selectors'
import { createStructuredSelector } from 'reselect'

function PersonalMessageBox(props) {

  // console.log(props)
  
  var containerref = React.createRef();
  var bottom = React.createRef();

  const [preScrollHeight, setPreScrollHeight] = useState(null);
  const [m_list, setM_list] = useState(props.m_list);

  const outerStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: 'solid 1px blue',
      height: '100%',
      // overflow: 'auto',
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
    
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  mList: makeSelectMainMessageHistory(),
  filter: makeSelectChatRoomFilter(),
});

export default connect(mapStateToProps)(PersonalMessageBox);
