/**
 *
 * ChatRoomPage
 *
 */

import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectChatRoomPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import MonitorArea from './monintorarea'
import NavArea from './navarea'
import ChatSelectionArea from './chatselectionarea'
import { connectToServerAction } from './actions'


export function ChatRoomPage(props) {
  useInjectReducer({ key: 'chatRoomPage', reducer });
  useInjectSaga({ key: 'chatRoomPage', saga });

  useEffect(() => {
    props.connectToServer();
  }, [])

  return (
    <div
    style={{
      width: '100%',
      height: '100%',
      margin: '20px 20px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}>
      <NavArea></NavArea>
      <MonitorArea></MonitorArea>
      <ChatSelectionArea></ChatSelectionArea>
    </div>
  );
}

ChatRoomPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chatRoomPage: makeSelectChatRoomPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    connectToServer: () => dispatch(connectToServerAction())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ChatRoomPage);
