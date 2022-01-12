import React, { useState } from 'react';
import FormHeader from '../FormHeader';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  TimePicker
} from 'antd';

const { Option } = Select;
const tags = ['web', 'cyber protection', 'managment', 'front end', 'backend', 'data', 'data base', 'time managment'];

const AddMeeting = ({ setShowForm }) => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ( SizeType ) => {
    console.log('size: ', SizeType)
    setComponentSize(SizeType);
    console.log('size2: ', componentSize)
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={ componentSize.size }
      style={{ padding: '20px', 'borderRadius': '5px', backgroundColor: '#fff7e6', color: '#fff'}}
      shape="round"
    >
      <FormHeader 
        title={'Add meeting'} 
        onClose={ setShowForm } 
        onCloseArg={false}
        titleLevel={2}
        closeColor={'#002329'}
      />

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
{/* date start */}
      <Form.Item label="Date start" name="dateStart">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
      </Form.Item>

{/* description */}
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
{/* tags */}
      <Form.Item label="tags">
        <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={(f)=> f}>
          {tags.map((tag, ind) => <Option key={`tag ${ind}`}>{tag}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
  );
};

export default AddMeeting;
