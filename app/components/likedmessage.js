import React, { Component } from 'react';


function Message(props) {
  const op_colorScheme = ['coral', 'burlywood', 'green'];
  // const op_alignScheme_text = ['left', 'right', 'center'];
  const op_alignScheme_eachchat = ['flex-start', 'flex-end', 'center'];

  const outerStyle = {
    border: 'solid 1px',
    display: 'flex',
    alignSelf: op_alignScheme_eachchat[props.info.behalf_of - 1],
    justifyContent: 'space-between',
    MozWindowDragging: 'drag',
    borderRadius: '5px',
    width: '55%',
    backgroundColor: op_colorScheme[props.info.behalf_of - 1],
  };

  const innerBoxStyle = {
    borderRadius: '5px',
    margin: '15px 15px 15px 15px',
  };

  const imageBoxStyle = {
    height: '100%',
  };

  const etcEleStyle = {
    display: 'flex',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: '15px 15px 15px 15px',
  };    

  const likeVote = e => {
      e.preventDefault();
      console.log(e.target.value);
      const obj = JSON.stringify({ ...props.info, vote: e.target.value });
      // this.state.connection.send(obj)
  };
  
  const handleDragLeave = e => {
      e.preventDefault();
      e.stopPropagation();
      console.log('leave');
  };

  return (
      <div
      draggable
      onDragStart={e => {}}
      onDragLeave={e => handleDragLeave(e)}
      style={outerStyle}
      >
          {/* chat box text area */}
          {props.info.type === 'image' ? (
          <p style={innerBoxStyle}>
              <img style={imageBoxStyle} src={props.info.content} />
          </p>
          ) : (
          <p style={innerBoxStyle}>{props.info.content}</p>
          )}
          <div style={etcEleStyle}>
              {/* time */}
              <p style={{ width: '100%' }}>{props.info.post_time}</p>
              {/* like / dislike */}
              <div>
                  <button onClick={likeVote} value={1}>^</button>
                  <button onClick={likeVote} value={-1}>v</button>
              </div>
          </div>
      </div>
  )
}








// class LikedMessage extends Component {
//   constructor(props) {
//     super(props);
//     this.yref = React.createRef();
//   }

//   state = {
//     m_id: this.props.info.m_id,
//     type: this.props.info.type,
//     content: this.props.info.content,
//     post_time: this.props.info.post_time,
//     behalf_of: this.props.info.behalf_of,
//     liked_num: this.props.info.liked_num,
//   };

//   likeVote = e => {
//     e.preventDefault();

//     console.log(e.target.value);
//     const obj = JSON.stringify({ ...this.state, vote: e.target.value });
//     // this.state.connection.send(obj)
//   };

//   handleDragLeave = e => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('leave');
//   };

//   handleDragOver = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   op_colorScheme = ['coral', 'burlywood', 'green'];

//   op_alignScheme_text = ['left', 'right', 'center'];

//   op_alignScheme_eachchat = ['flex-start', 'flex-end', 'center'];

//   outerStyle = {
//     border: 'solid 1px',
//     display: 'flex',
//     alignSelf: this.op_alignScheme_eachchat[this.state.behalf_of - 1],
//     justifyContent: 'space-between',
//     MozWindowDragging: 'drag',
//     borderRadius: '5px',
//     width: '55%',
//     backgroundColor: this.op_colorScheme[this.state.behalf_of - 1],
//   };

//   innerBoxStyle = {
//     borderRadius: '5px',
//     margin: '15px 15px 15px 15px',
//   };

//   imageBoxStyle = {
//     height: '100%',
//   };

//   etcEleStyle = {
//     display: 'flex',
//     whiteSpace: 'nowrap',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     margin: '15px 15px 15px 15px',
//   };

//   render() {
//     return (
//       <div
//         draggable
//         onDragStart={e => {}}
//         onDragLeave={e => this.handleDragLeave(e)}
//         style={this.outerStyle}
//       >
//         {/* chat box text area */}
//         {this.type === 'image' ? (
//           <p style={this.innerBoxStyle}>
//             <img style={this.imageBoxStyle} src={this.state.content} />
//           </p>
//         ) : (
//           <p style={this.innerBoxStyle}>{this.state.content}</p>
//         )}
//         <div style={this.etcEleStyle}>
//           {/* liked num */}
//           <div>like: {this.state.liked_num}</div>
//           {/* time */}
//           <p style={{ width: '100%' }}>{this.state.post_time}</p>
//           <div>
//             {/* like */}
//             <button onClick={this.likeVote} value={1}>
//               ^
//             </button>
//             {/* dislike */}
//             <button onClick={this.likeVote} value={-1}>
//               v
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LikedMessage;
