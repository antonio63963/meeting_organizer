import { Input, Table, Tabs, Tag, Space, Button, Typography } from 'antd';
import style from './newMeeting.module.css';
const { Title } = Typography;
const { TabPane } = Tabs;

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => (
      <Input.Group compact >
        <Input style={{ width: 'calc(100% - 80px)' }} defaultValue="Meeting's title" />
        <Button type="primary">Submit</Button>
      </Input.Group>)
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
    title: 'John Brown',
    description: 'New York No. 1 Lake Park',
    date: '12.03.2022',
    tags: ['nice', 'developer'],
    timeUntill: '12.03.2022'
  },

];

function AddNewMeeting() {
  return (
   <div>
      {/* <Title level={3} type="secondary">Meetings list:</Title>
      <Table columns={columns} dataSource={data}/> */}

{/* <Tabs defaultActiveKey="1" onChange={() => null}>
    <TabPane tab="Title" key="1">
    <Input.Group compact >
        <Input style={{ width: 'calc(100% - 80px)' }} defaultValue="Meeting's title" />
        <Button type="primary">Submit</Button>
      </Input.Group>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs> */}
   </div>
  )
};

export default AddNewMeeting;