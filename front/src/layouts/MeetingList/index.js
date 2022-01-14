import { Collapse, Table, Tag, Divider, Space, Button, Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './meetingList.module.css';
const { Title } = Typography;
const { Panel } = Collapse;
function callback(key) {
  console.log(key);
};

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "timeUntill",
    key: "timeUntill",
    dataIndex: "timeUntill"
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
         <Button disabled>Start watching</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'Super meeting',
    speaker: 'John Brown',
    description: 'New York No. 1 Lake Park vrey interesting description is pure magic and magnitic, no one chance to skip it',
    date: '12.03.2022',
    tags: ['nice', 'developer', 'web', 'front'],
    timeUntill: '12.03.2022'
  },
  {
    key: '2',
    title: 'Super meeting',
    speaker: 'Jim Green',
    description: 'London No. 1 Lake Park',
    tags: ['loser'],
    date: '12.03.2022',
    timeUntill: '12.03.2022'
  },
  {
    key: '3',
    title: 'Super meeting',
    speaker: 'Joe Black',
    description: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    date: '12.03.2022',
    timeUntill: '12.03.2022'
  },
];
const tagColors = ["magenta", "orange", "red", "green","volcano", "gold", "lime",  "cyan"]
function MeetingList() {
  return (
   <div style={{ width: '100%', padding: '20px 0'}}>
      <Title level={3} type="secondary">Meetings list</Title>
      {/* <Table columns={columns} dataSource={data} pagination={false}/> */}
      <Collapse defaultActiveKey={['1']} style={{ width: '100%'}}>
      {data.map(item => (
          <Panel header={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
            <h3>{item.title}</h3> <span>{item.date}</span>
          </div>
        } key={item.key}>
            <div className={style.collapseContent}>
              <div className={style.speaker}>
                <Avatar 
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
                  {item.tags.map( (item, index) => (
                    <Tag 
                      key={`tag${index}`} 
                      value={item}
                      color={tagColors[index]}
                      style={{ marginBottom: '30px' }}
                    >
                      {item}
                    </Tag>
                ))}
                <Divider orientation="left" style={{ marginTop: 0 }}>Left time</Divider>
                <h3 style={{ textAlign: 'center' }}>23:30</h3>
              </div>
            </div>
          </Panel> 
      ))}
      </Collapse>
   </div>
  )
};

export default MeetingList;