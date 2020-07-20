import produce from 'immer';
import { DEFAULT_ACTION } from './constants';


export const initialState = {
  webSocketConnection: null,
  mainMessageHistory: [{
    mId: 1,
    type: 'text',
    content: 'accdddaccdddaccdddaccdddaccdddaccddd',
    post_time: '23:05',
    opinion: 2,
    tLike: 0,
  },
  {
    mId: 2,
    type: 'text',
    content: 'no',
    post_time: '23:15',
    opinion: 1,
    tLike: 0,
  },
  {
    mId: 3,
    type: 'text',
    content: 'hihi',
    post_time: '23:15',
    opinion: 1,
    tLike: 0,
  },
  {
    mId: 4,
    type: 'text',
    content: 'dfksdkflsjdlfkjsldkfjsldkfjsldkfjslkjfslkfdfksdkflsjdlfkjsldkfjsldkfjsldkfjslkjfslkfdfksdkflsjdlfkjsldkfjsldkfjsldkfjslkjfslkfdfksdkflsjdlfkjsldkfjsldkfjsldkfjslkjfslkf',
    post_time: '23:15',
    opinion: 3,
    tLike: 0,
  },],
  likedMRankingList: [],
  personallyPreservedMessageList: [],
  postedPollList: [],
  DraggedMessageTmpInfo: {

  },
  filter: 3,
  opinion: 2,
};

/* eslint-disable default-case, no-param-reassign */
const chatRoomPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      // case 'CONNECT_TO_SERVER':
      //   // console.log('inside reducer')
      //   break;
      case 'WEBSOCKET_CONNECTION_SUCCESS':
        draft.webSocketConnection = action.payload
        break;
      case 'SELECT_MESSAGE_FILTER':
        
        break;

      default: 
        return state;
    }
  });

export default chatRoomPageReducer;
