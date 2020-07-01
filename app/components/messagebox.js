import React, { Component } from 'react';
import Message from 'components/message'


class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.containerref = React.createRef();
    }
    state = {
        m_list: this.props.m_list,
        preT_height: null,
    }

    outerStyle = {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 1px',
        overflow: 'auto',
        width: "500px",
        height: '500px',
    }

    componentDidMount() {
        this.bottom.scrollIntoView({behavior: 'auto'})
        this.setState({
            preT_height: this.containerref.scrollHeight 
        })
    }

    componentDidUpdate() {
        if (this.containerref.scrollHeight === this.state.preT_height) {
            
        } else {
            if (this.containerref.scrollTop + this.containerref.clientHeight === this.state.preT_height) {
                this.bottom.scrollIntoView({behavior: 'auto'})
            }
            this.setState({
                preT_height: this.containerref.scrollHeight
            })
        }
    }

    scrollhandler(e) {
        console.log(e.target.scrollTop, e.target.clientHeight)
    }

    render() {
        return (    
            <div
            ref={p => {this.containerref = p;}}
            style={this.outerStyle}
            onScroll={this.scrollhandler}
            >
                {this.state.m_list.map((each, idx)=>
                <Message info={each} key={`Message_${idx}`} ></Message>)}
            <div ref={p => {this.bottom = p;}}></div>

            <button onClick={e => {
                this.setState({
                    m_list: this.state.m_list.concat({
                        m_id: 3, 
                        type:'text', 
                        content:'env', 
                        post_time:'23:11', 
                        behalf_of: 1
                    })
                })
            }}>updatebutton</button>
            </div>
        )
    }

}

export default MessageBox;
