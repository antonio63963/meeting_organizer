import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './start.module.css';
import { logoutUser, loginUser, initAccount } from '../../Redux/actions';
import Logo from '../../images/Logo.svg';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

// const initApp = async() => {
//   const { data } = await axios.post
// }

function Start({ setContent, cookie }) {
  const state = useSelector(state => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("State: ", state);
  //   initAccount(dispatch);
  //   console.log(state);
  // }, []);
  

  const navigate = useNavigate();
  return (
    <>
      <div className={style.logo}>
          <img src={Logo}/>
      </div>
      <div className={style.buttonsBlock}>
        <Button 
          onClick={() => setContent('login')}
          size={12} 
          style={{'backgroundColor': '#eb2f96', border: 'none', color: 'white', width: '80px'}}
        >
          Login
        </Button>
        <Button 
        onClick={() => setContent('signUp')}
        type="secondary" 
        size={12} 
        style={{'backgroundColor': '#9254de', border: 'none', color: 'white', width: '80px'}}
        >
          Sign Up
        </Button>
      </div>
      <Avatar 
        size={64} 
        icon={<UserOutlined />} 
        style={{ marginTop: '20px', backgroundColor: '#08979c', cursor: 'pointer' }} 
        onClick={() => navigate('/account')}  
      />
    </>
  )
};

export default Start;