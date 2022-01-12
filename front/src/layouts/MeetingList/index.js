import { Table, Tag, Space, Button, Typography } from 'antd';
import style from './meetingList.module.css';
const { Title } = Typography;

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
    render: (text, record) => (
      <Space size="middle">
         <Button disabled>Start watching</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'John Brown',
    description: 'New York No. 1 Lake Park',
    date: '12.03.2022',
    tags: ['nice', 'developer'],
    timeUntill: '12.03.2022'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function MeetingList() {
  return (
   <div className={style.meetingList}>
      <Title level={3} type="secondary">Meetings list:</Title>
      <Table columns={columns} dataSource={data} />
   </div>
  )
};

export default MeetingList;