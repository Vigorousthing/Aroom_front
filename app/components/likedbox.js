import React, { Component } from 'react';
import LikedMessage from 'components/likedmessage';

class LikedBox extends Component {
  constructor(props) {
    super(props);
    this.containerref = React.createRef();
    // this.lasteleref = React.createRef();
  }

  state = {
    liked_m_list: this.props.liked_m_list,
  };

  outerStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: 'solid 1px',
    overflow: 'auto',
    width: '500px',
    height: '500px',
  };

  componentDidMount() {
    this.top.scrollIntoView({ behavior: 'auto' });
  }

  componentDidUpdate() {
    if (this.containerref.scrollTop === 0) {
      this.top.scrollIntoView({ behavior: 'auto' });
    }
  }

  render() {
    return (
      <div
        ref={p => {
          this.containerref = p;
        }}
        style={this.outerStyle}
      >
        <div
          ref={p => {
            this.top = p;
          }}
        />
        {this.state.liked_m_list.map((each, idx) => (
          <LikedMessage info={each} key={`Message_${idx}`} />
        ))}
        ))}
        <button
          onClick={e => {
            this.setState({
              liked_m_list: this.state.liked_m_list.concat({
                m_id: 3,
                type: 'text',
                content: 'env',
                post_time: '23:11',
                behalf_of: 1,
                liked_num: 111,
              }),
            });
          }}
        >
          updatebutton
        </button>
      </div>
    );
  }
}

export default LikedBox;
