import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { logoutUser, loginUser, initAccount } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';
import {Menu, Row, Col, Layout } from 'antd';
import style from './account.module.css';
import UserProfile from '../../components/UserProfile';
import MeetingList from '../../layouts/MeetingList';
import AddMeeting from '../../layouts/AddMeeting';
import AdminPanel from '../../layouts/AdminPanel';
import Logo from '../../images/Logo.svg';

const { Header, Content, Footer } = Layout;
const linksArr = [
   
  {name:'Edit profile', link: '#'}, 
  {name:'Add meeting', link: '#'},
];

const getCookie = (cookieName) => {
  // const res = document.cookie.match( '(|;) ?' + cookieName + '=([;]*)(;|$)' );
  // console.log(res); 
  // if ( res ) return ( unescape ( res[2] ) ); else return null;
  const cookieValue = document.cookie.split(';').find(cookie => {
    const entries = cookie.split('=');
    return entries[0] === cookieName
  }).split('=')[1];
  return cookieValue;
}
// getCookie( 'isLogin')
function UserAccount() {
  const [ isAdmin, setIsAdmin ] = useState(false);
  const navigate = useNavigate();
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogOut = async() =>  {
    const {data} = await axios.get('/api/auth/logout');  
    if(data.status === 'success') navigate('/')
    logoutUser(dispatch);
  }
  useEffect(() => {
    console.log("State: ", state);
    initAccount(dispatch);
    console.log(state);
  }, []);

  useEffect(() => {
    console.log('state was changed: ', state);
    if(!state.uid) navigate('/')
  }, [state]);


  return (
  <Layout className={style.account}>
    <Header className={style.header}>
        <Row style={{ width: '100%'}}>
          <Col sm={{ span: 24}} md={{ span: 22, offset: 1}} style={{ width: '100%'}} className={style.headerContent}>
            <div className={style.logo}>
              <img src={Logo} />
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
    <Content style={{ padding: '0 10px', height: '100%', width: '100%' }}>
      <div className="site-layout-content">
      <Layout>
        <Row>
        </Row>
          <Row>
            <Col sm={{ span: 24}} md={{ span: 22, offset: 1}} lg={{ span: 15, offset: 1}} style={{ width: '100%', height: '100%' }}>
              { isAdmin ? (<AdminPanel />) : (<MeetingList /> )}
            </Col>
            <Col span={6} offset={1}>
              <UserProfile />
            </Col>
          </Row>
      </Layout>
      </div>
    </Content>
    <Footer className={style.footer}>Ant Design ©2018 Created by Ant UED</Footer>
    {/* style={{ textAlign: 'center', position: 'fixed', zIndex: 10, bottom: 0, width: '100%'}} */}
  </Layout>

  )
};

export default UserAccount;