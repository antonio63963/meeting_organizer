import { Row, Col, Layout } from 'antd';
import style from './userAccount.module.css';
import UserProfile from '../../components/UserProfile';
import MeetingList from '../../layouts/MeetingList';
import AddMeeting from '../../layouts/AddMeeting';



function UserAccount() {
  return (
    // <div className={style.userAccount}>
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

    // </div>
  )
};

export default UserAccount;