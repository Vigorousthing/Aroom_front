import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    hidden: {
        display: 'none'
    }
});


class PostedPollView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poll_id: this.props.info.post.id,
            title: this.props.info.post.title,
            poll_items: this.props.info.post.poll_items,
            start_time: this.props.info.post.start_time,
            end: this.props.info.post.end,

            vote_state: this.props.info.vote_state,

            selected_idx: 0,
            open: false,
        }

        this.handleFormVote = this.handleFormVote.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
    }

    handleFormVote(e) {
        e.preventDefault()
        if (this.state.end === true || this.state.selected_idx === null) {
            return
        }
        let connection = store.getState().connection

        let poll_info = JSON.stringify({
            type: 'poll_vote',
            id: this.state.poll_id,
            vote_idx: this.state.selected_idx,
        })

        connection.send(poll_info)

        // for modal re-rendering
        this.setState({
            end: store.getState().poll_info_list[this.state.p_list_idx].post.end
        })
    }

    handleClickOpen() {
        this.setState({
            selected_idx: 0,
            open: true
        });
    }

    handleClose() {
        this.setState({
            selected_idx: 0,
            open: false
        })
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
                    {this.state.title}
                </button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogContent>
                        <h4 style={{textAlign: 'center'}}>{this.state.title}</h4>
                        {this.state.poll_items.map((each, idx) => 
                            this.state.end ? 
                            <div>{each.text}{": "}{this.state.vote_state[idx]}</div> 
                            :
                            <React.Fragment>
                                <button 
                                style={{
                                    width: '100%',
                                    color: this.state.selected_idx === idx ? 'red': 'black',
                                }}
                                onClick={(e)=> {
                                    e.preventDefault();
                                    this.setState({
                                        selected_idx: idx
                                    })
                                }}
                                >{each.text}</button><br/>
                            </React.Fragment>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormVote}>vote</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default withStyles(styles)(PostedPollView)

