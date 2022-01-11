import { Form, Input, Button, Checkbox, Typography  } from 'antd';
import { UserOutlined, LockOutlined, FlagOutlined, CloseCircleOutlined, MailOutlined } from '@ant-design/icons';
import style from '../auth.module.css';

const { Title } = Typography;

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
        name="department"
        rules={[{ required: true, message: 'Please input your department!' }]}
      >
        <Input prefix={ <FlagOutlined className="site-form-item-icon"/>} placeholder="Department" />
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