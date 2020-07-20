export const onMessageSetting= (connection) => {
  connection.binaryType = 'arraybuffer'

  connection.onmessage = e => {
    if (typeof(e.data) === "string") {
        let data = JSON.parse(e.data)
        let s_time = data.time
        
        if (data.type === 'chat_message') {
            let t_data = data.message
            let o_data = Number(data.opinion)
            let i_data = Number(data.id)
  
        } else if (data.type === 'live_like') {
            // this.setState({
            //     like_list: data.like_list.map(
            //         (each, idx) => {return {likeness: each[0], message: each[1], opinion: each[2], time: each[3], id: each[4]}})
            //     // like_list: data.like_list,
            //     // time: s_time
            // })
            // ls.set('like_list', this.state.like_list)
        } else if (data.type === 'welcome') {
          console.log('welcome')
            // this.setState({
            //     like_list: data.like_list.map(
            //         (each, idx) => {return {likeness: each[0], message: each[1], opinion: each[2], time: each[3], id: each[4]}}),
            //     poll_info_list: data.poll_info,
            //     time: s_time
            // })
        } else if (data.type === 'poll_view') {
            // this.setState({
            //     poll_info_list: data.poll_info
            // }, () => {store.dispatch({type: "POLLVIEW", poll_info_list: data.poll_info})}
            // )
        }
  
    } else if (typeof(e.data) === "object") {
        var ArrayBuffer = e.data;
        var av = new Uint8Array(ArrayBuffer)
        var blob = new Blob([av], {type: 'image/jpeg'})
        var urlCreator = window.URL || window.webkitURL
        var imageUrl = urlCreator.createObjectURL(blob);
  
        let d = new Date();
        let h = String(d.getHours());
        let m = String(d.getMinutes()).padStart(2, '0');
  
        // this.setState({
        //     imageUrl: imageUrl,
        //     text_list: this.state.text_list.concat({
        //         message: imageUrl,
        //         opinion: 3,
        //         time: h+":"+m,
        //         id: this.state.text_list.length + 1,
        //         multimedia: true,
        //     })
        // }, () => {
        //     ls.set('text_list', this.state.text_list)
        //     }
        // )
    }
  }
  return connection;
}

