import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    hidden: {
        display: 'none'
    }
});


class PostPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poll_items: [],
            open: false
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);

    }

    handleFormSubmit(e) {
        e.preventDefault()
        if (this.state.title === "" || this.state.poll_items.length <= 1 || this.state.poll_items[this.state.poll_items.length-1].text.replace(" ", "") === "") {
            return
        }
        let connection = store.getState().connection

        let d = new Date();
        let h = String(d.getHours());
        let m = String(d.getMinutes()).padStart(2, '0');

        let poll_info = JSON.stringify({
            type: 'post_poll',
            title: this.state.title,
            poll_items: this.state.poll_items,
            start_time: h+":"+m,
            end: false,
        })

        connection.send(poll_info)

        this.setState({
            title: '',
            poll_items: [],
            open: false
        })
    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    addItem = (e) => {
        if (this.state.poll_items.length === 0) {
        } else {

            for (let i = 0; i < this.state.poll_items.length; i++) {
                let element = this.state.poll_items[i];
                let text = element.text.replace(" ", "")
                if (text === "") {
                    return
                }
            }
        }
        
        this.setState({
            poll_items: this.state.poll_items.concat({
                id: this.state.poll_items.length, 
                text: ''
            })
        })
    }

    delItem = (e) => {
        if (this.state.poll_items.length !== 0) {
            var arr = [...this.state.poll_items]
            var idx = arr.indexOf(e.target.id)
            arr.splice(idx, 1)
            this.setState({
                poll_items: arr
            })
        }
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.handleClickOpen}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    >
                    투표
                </button>

                
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogContent>
                        <TextField label="title" type="text" name="userName" value={this.state.title} 
                            onChange={(e) => {
                                e.preventDefault();
                                this.setState({
                                    title: e.target.value
                                })                                
                            }} /><br/>
                        {this.state.poll_items.map((each, idx) => 
                            <React.Fragment key={`poll_item_text_${idx}`}>
                                <TextField label={idx+1} type="text" name={String(idx)} value={this.state.poll_items[idx].text} 
                                onChange={(e) => {
                                    e.preventDefault();
                                    let items = [...this.state.poll_items];
                                    items[e.target.name] = {
                                        id: items[e.target.name].id, 
                                        text: e.target.value
                                    };
                                    this.setState({
                                        poll_items : items
                                    });
                                }}/><br/>
                            </React.Fragment>
                        )}
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={this.addItem}>Add Item</Button>
                            <Button variant="contained" color="primary" onClick={this.delItem}>Del Item</Button>
                        </DialogActions>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default withStyles(styles)(PostPoll)

