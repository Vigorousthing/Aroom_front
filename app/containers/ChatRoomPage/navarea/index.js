import React, { Component, useEffect, useState } from 'react'
// import { Navbar, NavDropdown } from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'



function NavArea() {
  return (
    <div 
    style={{
      // display: 'flex',
      // flexDirection: 'row',
      justifyContent: 'center',
      border: 'solid 1px',
      boxSizing: 'border-box',
      // width: '100%',  
      // height: '400px',
    }}
    >
      <Navbar bg="light" expand="lg" 
      style={{
        display: 'flex', 
        border:'solid 1px',
        justifyContent: 'space-between'
      }}
      >
        <Navbar.Brand href="#home">AnonymousDiscussion</Navbar.Brand>
        <Badge variant="warning" 
        style={{
          height:'30px',
          fontSize: '15px',
          display: 'flex',
          alignItems: 'center'
        }}
        >Particitants {100}
        </Badge>
      </Navbar>
      <Navbar bg="light" expand="lg" style={{border:'solid 1px'}}>
        Current Topic : {'Who is the best football player in the history?'}
      </Navbar>

    </div>
  )
}

export default NavArea;