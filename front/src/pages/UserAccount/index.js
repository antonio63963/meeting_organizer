import {Menu, Row, Col, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './userAccount.module.css';
import UserProfile from '../../components/UserProfile';
import MeetingList from '../../layouts/MeetingList';
import AddMeeting from '../../layouts/AddMeeting';

import Logo from '../../images/Logo.svg';

const { Header, Content, Footer } = Layout;
const linksArr = [{name:'Log out', link: '/'}, {name:'Edit profile', link: '#'}, {name:'Add meeting', link: '#'}]

function UserAccount() {
  const navigate = useNavigate();
  return (
  <Layout className="layout">
    <Header className={style.header}>
        <Row style={{ width: '100%'}}>
          <Col span={22} offset={1} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={style.logo}>
              <img src={Logo} />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              {linksArr.map((item, index) => {
                const key = index + 1;
                return <Menu.Item onClick={() => navigate(`${item.link}`)} key={`link${key}`}>{`${item.name}`}</Menu.Item>;
              })}
            </Menu>
          </Col>
        </Row>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
      <Layout>
        <Row>
          <Col offset={1}>
            <AddMeeting />
          </Col>
        </Row>
          <Row>
            <Col span={15} offset={1}>
              <MeetingList /> 
            </Col>
            <Col span={5} offset={2}>
              <UserProfile />
            </Col>
          </Row>
      </Layout>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

  )
};

export default UserAccount;