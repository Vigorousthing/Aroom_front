import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import {
  connectToWebsocket
} from './external'

import { onMessageSetting } from './connectionsetting'
import { 
  makeSelectMainMessageHistory,
  makeSelectChatRoomFilter,
  makeSelectChatRoomWebsocketConnection
} from './selectors'


function* connectToServerSaga(){
  try {
    // debugger;
    console.log('connect saga')

    const connection = yield call(connectToWebsocket, 'testparameter');
    // Lim accomended
    yield call(onMessageSetting, connection);
    yield put({type: 'WEBSOCKET_CONNECTION_SUCCESS', payload: connection})
  } catch (error) {
    yield put({type: 'WEBSOCKET_CONNECTION_FAIL'})
  }
}

function* initializeChatRoomSaga() {
  try {
    // const result = yield call()
  } catch (error) {

  }
}

function* postPollToServerSaga(pollInfo) {
  console.log(pollInfo)
}


function* sendMessageToServerSaga(message) {
  let connection = yield select(makeSelectChatRoomWebsocketConnection)
  console.log('testmessagesubmit')
  console.log(message)
}


// Individual exports for testing
export default function* chatRoomPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    takeLatest('CONNECT_TO_SERVER', connectToServerSaga),
    takeLatest('WEBSOCKET_CONNECTION_SUCCESS', initializeChatRoomSaga),
    takeLatest('SEND_TEXT_MESSAGE_TO_SERVER', sendMessageToServerSaga),
    takeLatest('POST_POLL_TO_SERVER', postPollToServerSaga),

  ])
  // 

}
