import React, { Component, useEffect, useState } from 'react';
import Message from 'components/message';
import { connect } from 'react-redux'
import { makeSelectMainMessageHistory } from '../containers/ChatRoomPage/selectors'
import { createStructuredSelector } from 'reselect'
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap'


function STest(props) {

    
    return (
        <div className='mb-2'>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    filter
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
        
    )
}

export default STest;