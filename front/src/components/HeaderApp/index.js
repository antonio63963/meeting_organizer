import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { logoutUser, loginUser, initAccount } from '../../Redux/actions';
import style from './headerApp.module.css';
import Logo from '../../images/Logo.svg';
import {Menu, Row, Col, Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const linksArr = [
   
  {name:'Edit profile', link: '#'}, 
  {name:'Add meeting', link: '#'},
  {name: 'Meeting room', link: '/meetingRoom'},
  {name: 'Account', link: '/account'}
];

function HeaderApp() {
  const [ isAdmin, setIsAdmin ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOut = async() =>  {
    const {data} = await axios.get('/api/auth/logout');  
    if(data.status === 'success') navigate('/')
    logoutUser(dispatch);
  };

  return(
    <Header className={style.header}>
      <Row style={{ width: '100%'}}>
        <Col sm={{ span: 24}} md={{ span: 22, offset: 1}} style={{ width: '100%'}} className={style.headerContent}>
          <div className={style.logo}>
            <img src={Logo} onClick={() => navigate('/')}/>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item onClick={() => setIsAdmin(true)} key={`link0`}>{`Admin panel`}</Menu.Item>
            <Menu.Item onClick={onLogOut} key={`linkLogout`}>Logout</Menu.Item>
            {linksArr.map((item, index) => {
              const key = index + 1;
              return <Menu.Item onClick={() => navigate(`${item.link}`)} key={`link${key}`}>{`${item.name}`}</Menu.Item>;
            })}
          </Menu>
        </Col>
      </Row>
    </Header>
  )
};

export default HeaderApp;