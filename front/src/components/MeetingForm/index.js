import React, { useState } from 'react';
import {
  Upload,
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Switch,
} from 'antd';
import { UploadOutlined, StarOutlined } from '@ant-design/icons';

const { Option } = Select;
const tags = ['web', 'cyber protection', 'managment', 'front end', 'backend', 'data', 'data base', 'time managment'];

const AddMeeting = ({ setShowForm }) => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ( SizeType ) => {
    console.log('size: ', SizeType)
    setComponentSize(SizeType);
  };
  const onSubmit = (value) => {
    console.log(value);
  }

  return (
    <Form
      onFinish={onSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={ componentSize.size }
      style={{ padding: '20px', 'borderRadius': '5px', color: '#fff'}}
      shape="round"
    >

      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
{/* title */}
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>
{/* speaker */}
      <Form.Item label="Speaker" name="speaker">
        <Input />
      </Form.Item>
{/* upload */}
      <Form.Item label="Picture" name="Picture">
        <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
        </Upload>
      </Form.Item>
{/* date start */}
      <Form.Item label="Date start" name="dateStart">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
      </Form.Item>

{/* description */}
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

{/* tags */}
      <Form.Item label="tags">
        <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={(f)=> f}>
          {tags.map((tag, ind) => <Option key={`tag ${ind}`}>{tag}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default AddMeeting;
