import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../Redux/actions';
import { Form, Input, Button, Checkbox, Typography  } from 'antd';
import { MailOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons';
import FormHeader from '../../FormHeader';
import style from '../auth.module.css';
import axios from 'axios';


function Login({setContent}) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onSubmit = async (value) => {
    loginUser(value, dispatch);
    // const { data } = await axios.post('api/auth/login', value);
    // console.log("Login: ", data);
    
  };


  useEffect(() => {
    if(!state.uid) {
      navigate('/');
    } else {
      navigate('/account')
    };
    
    console.log("Login page: ", state);
  }, [state])

  return (
    <Form
      name="normal_login"
      className={style.form}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <FormHeader 
        title={'Login'} 
        onClose={setContent} 
        title={"Login"} 
        onCloseArg={'start'}
        titleLevel={2}
        />
  
      <Form.Item
        name="email"
        rules={[
          { type: 'email', message: 'The input is not valid E-mail!'}, {required: true, message: 'Please input your email!' }]}
      >
        <Input  prefix={ <MailOutlined className="site-form-item-icon"/>} placeholder="Email" />
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