/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Message from 'components/message';
import MessageBox from 'components/messagebox';
import ChatRoomPage from '../ChatRoomPage'
import STest from '../../components/stest'

import LikedBox from 'components/likedbox';
import PostPoll from 'components/postpoll';
import GlobalStyle from '../../global-styles';
import "bootstrap/dist/css/bootstrap.css"



export default function App() {
  return (
    <div
      style={{
        // width: '90vw',
        // height: "90vh",
        // border: 'solid 1px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ChatRoomPage></ChatRoomPage>
      {/* <STest></STest> */}
      
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle /> */}

    </div>
  );
}
