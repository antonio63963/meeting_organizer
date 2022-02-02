import { useState, useEffect } from 'react';
import moment from "moment";
import { Collapse, Table, Tag, Divider, Space, Button, Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './meetingList.module.css';
const { Title } = Typography;
const { Panel } = Collapse;
function callback(key) {
  console.log(key);
};



const tagColors = ["magenta", "orange", "red", "green","volcano", "gold", "lime",  "cyan"];

const formatViewTime = (hh, mm, sec) => {
  const hours = hh < 10 ? `0${hh}` : hh;
  const minutes = mm < 10 ? `0${mm}` : mm;
  const seconds = sec < 10 ? `0${sec}` : sec;
  return `${hours}:${minutes}:${seconds}`;
};
const getLeftTime = (now, milliseconds) => {
  const dif = milliseconds - now;
  // if less than twenty-four hours
  if(dif <=  86400000 && dif >= 0) {
    const anHour = 3600000;
    const minute = 60000;
    let tail = dif % anHour;
    const hours = (dif - tail) / anHour;
    const secondsMillisec = (tail % minute);
    const minutes = (tail - secondsMillisec) / minute;
    const seconds = Math.floor(secondsMillisec / 1000);
    return formatViewTime(hours, minutes, seconds);
  }else {
    return '00:00:00'
  }
}


function MeetingList({meetingList}) {
  const [ meetingState, setMeetingState ] = useState([]);
  const [runTimeOut, setRunTimeOut] = useState(false);

  const changeLeftTime = (meetingList) => {
    const now = Date.now();
    const newMeetingList = meetingList.reduce((acc, item) => {
      acc = [...acc, {...item, leftTime : getLeftTime(now, item.startDate)} ]
      return acc;
    }, [])
    setMeetingState(newMeetingList);
  };
  
  const backCount = (state) => {
    const ind = setInterval(() => {
      changeLeftTime(state);
    }, 1000);
    return ind;
  };

  useEffect(() => {
    if(!meetingState.length) setMeetingState(meetingList); 
  }, []);
  
  useEffect(() => {
    if(!runTimeOut) setRunTimeOut(true);
  }, [meetingState]);
  
  useEffect(() => {
    const indCounter = backCount(meetingState)
    return () => clearTimeout(indCounter)
  }, [runTimeOut]);

  const data = meetingList || [];
  return (
   <div style={{ width: '100%', padding: '20px 0'}}>
      <Title level={3} type="secondary">Meetings list</Title>
      {/* <Table columns={columns} dataSource={data} pagination={false}/> */}
      <Collapse defaultActiveKey={['1']} style={{ width: '100%'}}>
      {meetingState.map(item => (
          <Panel header={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
            <h3>{item.title}</h3> <span>{item.date}</span>
          </div>
        } key={item._id}>
            <div className={style.collapseContent}>
              <div className={style.speaker}>
                <Avatar 
                  src={item.avatar}
                  size={64} 
                  icon={<UserOutlined />} 
                  style={{ backgroundColor: '#08979c', cursor: 'pointer' }} 
                
                />
                <span style={{ textAlign: 'center'}}>{ item.speaker }</span>
              </div>
              {/* description */}
              <div className={style.descriptionBlock}>
                {/* <h4 className={style.descriptionTitle}>Description:</h4> */}
                <Divider orientation="left">Description</Divider>
                <p>{item.description}</p>
              </div>
              {/* tagsNtime */}
              <div className={style.tagsNtime}>
                <Divider orientation="left">Tags</Divider>
                  {item.tags.map( (tag, index) => (
                    <Tag 
                      key={`tag${index}`} 
                      value={tag._id}
                      color={tagColors[index]}
                      style={{ marginBottom: '30px' }}
                    >
                      {tag.name}
                    </Tag>
                ))}
                <Divider orientation="left" style={{ marginTop: 0 }}>Left time</Divider>
                <h3 style={{ textAlign: 'center' }}>{item.leftTime}</h3>
              </div>
            </div>
          </Panel> 
      ))}
      </Collapse>
   </div>
  )
};

export default MeetingList;