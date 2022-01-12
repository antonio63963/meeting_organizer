import { Form, Input, Button, Checkbox, Typography  } from 'antd';
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons';
import FormHeader from '../../FormHeader';
import style from '../auth.module.css';

const { Title } = Typography;

function Login({setContent}) {

  return (
    <Form
      name="normal_login"
      className={style.form}
      initialValues={{ remember: true }}
  
    >
      <FormHeader 
        title={'Login'} 
        onClose={setContent} 
        title={"Login"} 
        onCloseArg={'start'}
        titleLevel={2}
        />
  
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          Login
        </Button>
        <span style={{ 'marginLeft': '20px'}}>
          Or <a href="">register now!</a>
        </span>
      </Form.Item>
    </Form>
  )
};

export default Login;