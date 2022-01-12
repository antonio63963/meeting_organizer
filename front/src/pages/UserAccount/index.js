import { Row, Col, Collapse, Layout, Typography, Button } from 'antd';
import style from './userAccount.module.css';
import UserProfile from '../../components/UserProfile';
import MeetingList from '../../layouts/MeetingList';
import AddMeeting from '../../components/AddMeeting';
const { Panel } = Collapse;
const { Title } = Typography;
const text = 'afasdfasldfasdfhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';


function UserAccount() {
  return (
    // <div className={style.userAccount}>
    <>
      <AddMeeting />
        <Row>
          <Col span={15} offset={1}>
            <MeetingList /> 
          </Col>
          <Col span={5} offset={2}>
            <UserProfile />
          </Col>
        </Row>
    </>

    // </div>
  )
};

export default UserAccount;