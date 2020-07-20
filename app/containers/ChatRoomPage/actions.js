/*
 *
 * ChatRoomPage actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function connectToServerAction() {
  return {
    type: "CONNECT_TO_SERVER",
  }
}

export function sendTextMessageToServerAction(message) {
  return {
    type: 'SEND_TEXT_MESSAGE_TO_SERVER',
    message: message,
  }
}

export function sendLikeVoteToServerAction(message) {
  return {
    type: 'SEND_LIKE_VOTE_TO_SERVER',
    message: message,
  }
}

export function moveMessageToPersonalMessageBoxAction(message) {
  return {
    type: 'MOVE_MESSAGE_TO_PERSONAL_MESSAGE_BOX',
    message: message,
  }
}

export function postPollToServerAction(pollInfo) {
  return {
    type: 'POST_POLL_TO_SERVER',
    message: pollInfo,
  }
}