import { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Select } from 'antd';
import { UserOutlined, LockOutlined, FlagOutlined, CloseCircleOutlined, MailOutlined, FieldTimeOutlined } from '@ant-design/icons';
import style from '../auth.module.css';

const { Title } = Typography;
const { Option } = Select;


function SignUp({setContent}) {

  return (
    <Form
      name="normal_login"
      className={style.form}
      initialValues={{ remember: true }}
  
    >
     <div className={style.top}>
        <Title level={2} className={style.title}>Sign Up</Title>
        <CloseCircleOutlined onClick={() => setContent('start')}/>
     </div>

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
{/* email */}
      <Form.Item 
        name="email" 
        rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}>
        <Input prefix={ <MailOutlined className="site-form-item-icon"/>} placeholder="Email"/>

      </Form.Item>

      <Form.Item
        name="Country"
        rules={[{ required: true, message: 'Please input your Country!' }]}
      >
        <Input prefix={ <FlagOutlined className="site-form-item-icon"/>} placeholder="Country" />
      </Form.Item>

{/* TIMEZONE */}
      <Form.Item>
      <Select defaultValue="+1" >
        <Option value="+1"><FieldTimeOutlined className="site-form-item-icon"/>  UTC+1</Option>
        <Option value="+2"><FieldTimeOutlined className="site-form-item-icon"/>  UTC+2</Option>
        <Option value="+3"><FieldTimeOutlined className="site-form-item-icon"/>  UTC+3</Option>
        <Option value="+9:30"><FieldTimeOutlined className="site-form-item-icon"/>  UTC+9:30</Option>
        <Option value="+10"><FieldTimeOutlined className="site-form-item-icon"/>  UTC+10</Option>
        <Option value="-9"><FieldTimeOutlined className="site-form-item-icon"/>  UTC−9</Option>
        <Option value="-4"><FieldTimeOutlined className="site-form-item-icon"/>  UTC−4</Option>
        <Option value="+8"><FieldTimeOutlined className="site-form-item-icon"/>  UTC+8</Option>
        <Option value="-6"><FieldTimeOutlined className="site-form-item-icon"/>  UTC−6</Option>
        <Option value="-5"><FieldTimeOutlined className="site-form-item-icon"/>  UTC−5</Option>
        <Option value="0"><FieldTimeOutlined className="site-form-item-icon"/>  UTC</Option>
        <Option value="-10"><FieldTimeOutlined className="site-form-item-icon"/>  UTC−10</Option>
        <Option value="-7"><FieldTimeOutlined className="site-form-item-icon"/>  UTC−7</Option>
        <Option value="−3:30"><FieldTimeOutlined className="site-form-item-icon"/>  UTC−3:30</Option>
      </Select>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
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
        <Button  htmlType="submit" className={style.btn}>
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