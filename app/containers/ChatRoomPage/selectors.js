import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chatRoomPage state domain
 */

const selectChatRoomPage = state => state.chatRoomPage || initialState;
  
/**
 * Other specific selectors
 */

/**
 * Default selector used by ChatRoomPage
 */

const makeSelectChatRoomPage = () =>
  createSelector(
    selectChatRoomPage,
    substate => substate,
  );

const makeSelectMainMessageHistory = () =>
  createSelector(
    selectChatRoomPage,
    (chatroom) => chatroom.mainMessageHistory
  );

const makeSelectChatRoomWebsocketConnection = () =>
  createSelector(
    selectChatRoomPage,
    (chatroom) => chatroom.webSocketConnection
  );

const makeSelectChatRoomFilter = () =>
  createSelector(
    selectChatRoomPage,
    (chatroom) => chatroom.filter
  );

const makeSelectChatRoomBehalfOf = () =>
  createSelector(
    selectChatRoomPage,
    (chatroom) => chatroom.behalfOf
  );

// const makeSelectChatRoom = () =>
//   createSelector(
//     selectChatRoomPage,
//     (chatroom) => chatroom.behalfOf
//   );


export default makeSelectChatRoomPage;
export { 
  selectChatRoomPage,
  makeSelectChatRoomPage,
  makeSelectMainMessageHistory,
  makeSelectChatRoomWebsocketConnection,
  makeSelectChatRoomFilter,
  makeSelectChatRoomBehalfOf,
  
};
