


export const connectToWebsocket = async (roomname) => {
  try {
    console.log(roomname)
    const chatRoomUrl = 'ws://10.0.0.119:7779/ws/chat/test/'
    let connection = new WebSocket(chatRoomUrl)
    return connection
  } catch (error) {
    console.log(error)
  }
}