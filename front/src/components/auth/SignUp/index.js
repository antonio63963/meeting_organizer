import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox, Typography, Select } from 'antd';
import { UserOutlined, LockOutlined, FlagOutlined, CloseCircleOutlined, MailOutlined, FieldTimeOutlined } from '@ant-design/icons';
import style from '../auth.module.css';
import FormHeader from '../../FormHeader';
const { Title } = Typography;
const { Option } = Select;


function SignUp({setContent}) {
  const [ formData, setFormData ] = useState({});
  const formRef = useRef();
  const onFinish = (values) => {
    if(!values) return;
    console.log(values);
  };
  const onInput = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };
  const onSelect = ( value ) => {
    setFormData({...formData, timezone:value})
  };
  const Submit = async(e) => {
    console.log(formData);
    const { data } = await axios.post('/auth/signUp', {val: 1});
    console.log(data);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <Form
    onFinish={Submit}
      ref={formRef}
      className={style.form}
      initialValues={{ remember: true }}
      onSubmit={()=> console.log('Submit')} 
    >
      <FormHeader 
        title={'Login'} 
        onClose={setContent} 
        title={"Sign Up"} 
        onCloseArg={'start'}
        titleLevel={2}
        />

      <Form.Item
        rules={[{ required: true, message: 'Please input your Username!' }]}
        onChange={onInput}
        name="username"
      >
        <Input name="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
{/* email */}
      <Form.Item 
        name="email"
        onChange={onInput}
        rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}> 
        <Input name="email"  prefix={ <MailOutlined className="site-form-item-icon"/>} placeholder="Email"/>
      </Form.Item>

      <Form.Item
        name="Country"
        onChange={onInput}
        rules={[{ required: true, message: 'Please input your Country!' }]}
      >
        <Input name="Country" prefix={ <FlagOutlined className="site-form-item-icon"/>} placeholder="Country" />
      </Form.Item>

{/* TIMEZONE */}
      <Form.Item>
        <Select name="timezone" onChange={onSelect} defaultValue="+1">
          <Option value="+1">UTC+1</Option>
          <Option value="+2"> UTC+2</Option>
          <Option value="+3"> UTC+3</Option>
          <Option value="+9:30"> UTC+9:30</Option>
          <Option value="+10">UTC+10</Option>
          <Option value="-9">UTC−9</Option>
          <Option value="-4"> UTC−4</Option>
          <Option value="+8">  UTC+8</Option>
          <Option value="-6"> UTC−6</Option>
          <Option value="-5"> UTC−5</Option>
          <Option value="0"> UTC</Option>
          <Option value="-10"> UTC−10</Option>
          <Option value="-7"> UTC−7</Option>
          <Option value="−3:30"> UTC−3:30</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          onChange={onInput}
          name="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="repeatPassword"
        rules={[{ required: true, message: 'Please repeat your Password!' }]}
      >
        <Input
          name="repeatPassword"
          onChange={onInput}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="repeat password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox style={{color: '#fff0f6'}}>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          {/* Forgot password */}
        </a>
      </Form.Item>

      <Form.Item style={{color: '#fff0f6'}}>
        <Button htmlType="submit" className={style.btn}>
          Sign up
        </Button>
        <span style={{ 'marginLeft': '20px'}}>
          Or <a href="">register now!</a>
        </span>
      </Form.Item>
    </Form>
  )
};

export default SignUp;