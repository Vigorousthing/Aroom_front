import React, { Component } from 'react';
import PostedPollView from 'components/postedpollview';

class PollBox extends Component {
  constructor(props) {
    super(props);
    this.containerref = React.createRef();
  }

  state = {
    poll_info_list: [],
    preT_height: null,
  };

  outerStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: 'solid 1px red',
    overflow: 'auto',
    // width: '500px',
    height: '50%',
  };

  componentDidMount() {
    this.bottom.scrollIntoView({ behavior: 'auto' });
    this.setState({
      preT_height: this.containerref.scrollHeight,
    });
  }

  componentDidUpdate() {
    if (this.containerref.scrollHeight === this.state.preT_height) {
    } else {
      if (
        this.containerref.scrollTop + this.containerref.clientHeight ===
        this.state.preT_height
      ) {
        this.bottom.scrollIntoView({ behavior: 'auto' });
      }
      this.setState({
        preT_height: this.containerref.scrollHeight,
      });
    }
  }

  render() {
    return (
      <div
        ref={p => {
          this.containerref = p;
        }}
        style={this.outerStyle}
        onScroll={this.scrollhandler}
      >
        {this.state.poll_info_list.map((each, idx) => (
          <PostedPollView
            info={each}
            p_idx={idx}
            key={`PostedPollView_${idx}`}
          />
        ))}
        <div
          ref={p => {
            this.bottom = p;
          }}
        />
      </div>
    );
  }
}

export default PollBox;
