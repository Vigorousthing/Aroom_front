import React, { Component, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectChatRoomWebsocketConnection } from '../containers/ChatRoomPage/selectors'
import { postPollToServerAction } from '../containers/ChatRoomPage/actions'


function PollButton(props) {

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [itemList, setItemList] = useState([""]);

  const handlePostPollSubmit = (e) => {    
    e.preventDefault();
    props.postPollToServer({
      title: title,
      itemList: itemList
    });
    setOpen(false);
    setTitle('');
    setItemList([""]);
  }

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemList.length === 0) {
      setItemList([""])
    } else {
      if (itemList[itemList.length-1].replace(" ", "") === "") {
        return;
      } else {
        setItemList([...itemList, ""])
      }
    }
  }

  const handleDeleteItem = (e) => {
    e.preventDefault();
    setItemList([...itemList.slice(0, itemList.length-1)])
  }
  
  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setOpen(false);
  }

  const handleItemContentChange = (e, idx) => {
    e.preventDefault();
    setItemList(
      [...itemList.slice(0, idx),
        e.target.value,
        ...itemList.slice(idx+1,)
      ]
    );
  }

  return (
    <div>
      <Button 
      variant='secondary'
      onClick={openModal}
      >
      Poll
      </Button>

      <Dialog open={open} onClose={closeModal}>
        <DialogContent>
            <TextField label="title" type="text" name="userName" value={title} 
                onChange={handleTitleChange} /><br/>
            {itemList.map((each, idx) => 
                <React.Fragment key={`poll_item_text_${idx}`}>
                    <TextField label={idx+1} type="text" id={`pollItem_${idx}`} value={each.text} 
                    onChange={e => handleItemContentChange(e, idx)}/><br/>
                </React.Fragment>
            )}
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleAddItem}>Add Item</Button>
                <Button variant="contained" color="primary" onClick={handleDeleteItem}>Del Item</Button>
            </DialogActions>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="primary" onClick={handlePostPollSubmit}>sub</Button>
            <Button variant="outlined" color="primary" onClick={closeModal}>닫기</Button>
        </DialogActions>
      </Dialog>


    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  connection: makeSelectChatRoomWebsocketConnection(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    postPollToServer: (pollInfo) => dispatch(postPollToServerAction(pollInfo))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PollButton);