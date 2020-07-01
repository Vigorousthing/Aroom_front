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
import LikedBox from 'components/likedbox';
import PostPoll from 'components/postpoll';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle /> */}

      {/* <Message info={{
        m_id: 1,
        type: 'text',
        content: 'mycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontentmycontent',
        post_time: '21:05',
        behalf_of: 3,
      }}></Message> */}
      <MessageBox
        m_list={[
          {
            m_id: 1,
            type: 'text',
            content: 'acc',
            post_time: '23:05',
            behalf_of: 2,
          },
          {
            m_id: 2,
            type: 'text',
            content: 'no',
            post_time: '23:15',
            behalf_of: 1,
          },
          {
            m_id: 3,
            type: 'text',
            content: 'y',
            post_time: '23:25',
            behalf_of: 3,
          },
          {
            m_id: 4,
            type: 'text',
            content: 'en',
            post_time: '23:51',
            behalf_of: 1,
          },
          {
            m_id: 5,
            type: 'text',
            content: 'dic',
            post_time: '23:55',
            behalf_of: 1,
          },
          {
            m_id: 6,
            type: 'text',
            content: 'yu',
            post_time: '23:55',
            behalf_of: 2,
          },
          {
            m_id: 7,
            type: 'text',
            content: 'cne',
            post_time: '23:56',
            behalf_of: 3,
          },
          {
            m_id: 8,
            type: 'text',
            content: 'qu',
            post_time: '23:57',
            behalf_of: 2,
          },
        ]}
      />
      <LikedBox
        liked_m_list={[
          {
            m_id: 1,
            type: 'text',
            content: 'acc',
            post_time: '23:05',
            behalf_of: 2,
            liked_num: 1,
          },
          {
            m_id: 2,
            type: 'text',
            content: 'no',
            post_time: '23:15',
            behalf_of: 1,
            liked_num: 11,
          },
          {
            m_id: 3,
            type: 'text',
            content: 'y',
            post_time: '23:25',
            behalf_of: 3,
            liked_num: 1,
          },
          {
            m_id: 4,
            type: 'text',
            content: 'en',
            post_time: '23:51',
            behalf_of: 1,
            liked_num: 11,
          },
          {
            m_id: 5,
            type: 'text',
            content: 'dic',
            post_time: '23:55',
            behalf_of: 1,
            liked_num: 1,
          },
          {
            m_id: 6,
            type: 'text',
            content: 'yu',
            post_time: '23:55',
            behalf_of: 2,
            liked_num: 11,
          },
          {
            m_id: 7,
            type: 'text',
            content: 'cne',
            post_time: '23:56',
            behalf_of: 3,
            liked_num: 11,
          },
          {
            m_id: 8,
            type: 'text',
            content: 'qu',
            post_time: '23:57',
            behalf_of: 2,
            liked_num: 12,
          },
        ]}
      />

      <PostPoll />
    </div>
  );
}
