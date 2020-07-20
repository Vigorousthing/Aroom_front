import React, { Component, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ToggleButton from 'react-bootstrap/ToggleButton'
import FormFile from 'react-bootstrap/FormFile'
import PollButton from "./pollbutton";


function InputOptionsBox() {

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleInput = (e) => {
    var reader = new FileReader();
    var data = new ArrayBuffer();

    reader.onload = e => {
      data = e.target.result;
      console.log(data)
    }
    reader.readAsArrayBuffer(e.target.files[0])
  }
  

  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-Start',
      // boxSizing: 'border-box',
      // width: '700px',
      margin: '2px',
      // height: '100%',
    }}
    >
      <PollButton></PollButton>
      
      <DropdownButton 
      id="filterDropdown" title="Message Filter"
      onClick={handleChange} variant='secondary'>
        <Dropdown.Item as="button" value='1'>A</Dropdown.Item>
        <Dropdown.Item as="button" value='2'>B</Dropdown.Item>
        <Dropdown.Item as="button" value='3'>C</Dropdown.Item>
      </DropdownButton>
      <DropdownButton 
      title="Set Opinion" variant='secondary'
      onClick={handleChange}>
        <Dropdown.Item as="button" value='1'>A</Dropdown.Item>
        <Dropdown.Item as="button" value='2'>B</Dropdown.Item>
        <Dropdown.Item as="button" value='3'>C</Dropdown.Item>
      </DropdownButton>
 
      <Form
      style={{
        marginLeft: 'auto'
      }}
      onInput={handleInput}>
        <Form.File 
          id="custom-file-translate-scss"
          label="file input"
          lang="en"
          custom
          style={{
            width: '300px'
          }}
        />
      </Form>


    </div>
  )
}


export default InputOptionsBox;