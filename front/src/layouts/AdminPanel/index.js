import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTags} from '../../Redux/actions';
import MeetingsList from '../MeetingList';
import MeetingForm from '../../components/MeetingForm';
import MeetingForm2 from '../../components/MeetingForm2';
import AddTag from '../../components/EditDB/AddTag';
import AddMeeting from '../AddMeeting';
import AddNewMeeting from '../AddNewMeeting';
import { Tabs, Row, Col, Layout } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;

function AdminPanel() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(async() => {
    getAllTags(dispatch);
    // const {data} = await axios.get('/api/account/getMeetings');

  }, [])
  return (
    <Tabs>
        <TabPane tab="Meetings list" key="1">
          <MeetingsList meetingList={state.meetingList} />
        </TabPane>
        <TabPane tab="Add meeting" key="2">
          <MeetingForm2 />
        </TabPane>
        <TabPane tab="Edit DB" key="3">
          <AddTag />
        </TabPane>
      </Tabs>
  )
};

export default AdminPanel;