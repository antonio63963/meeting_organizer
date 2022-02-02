import { useState, useEffect } from 'react';
// import openSocket from 'socket.io-client';
// const socket = openSocket();
import ReactPlayer from 'react-player';
import HeaderApp from '../../components/HeaderApp';
import style from './room.module.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function MeetingRoom() {

  // useEffect(() => {
  //   socket.emit('userData', {name: 'Anton', role: "admin"}, (data) => {
  //     if(data.status === 200) {
  //       console.log(data);
  //     }
  //   })
  // }, [])
  return (
    <>
      <HeaderApp />
      <div className={style.content}>
      <div >
          <ReactPlayer 
          // width="710px"
          // height="400px"
          className={style.player}
          url="https://www.youtube.com/watch?v=eBbrEQw7kcg" />
          <div className={style.chat}>
            <div className={style.userCard}>
            <Avatar size="large" icon={<UserOutlined />} />
            
            <p><span className={style.userName}>userName</span>Lorem insput adfadf an</p>
            </div>
          </div>
      </div>

      </div>

    </>

  )
}

export default MeetingRoom;