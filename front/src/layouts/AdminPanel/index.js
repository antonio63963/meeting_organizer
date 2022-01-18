import MeetingsList from '../MeetingList';
import MeetingForm from '../../components/MeetingForm';
import MeetingForm2 from '../../components/MeetingForm2';
import AddMeeting from '../AddMeeting';
import AddNewMeeting from '../AddNewMeeting';
import { Tabs, Row, Col, Layout } from 'antd';

const { TabPane } = Tabs;

function AdminPanel() {
  return (
    <Tabs>
        <TabPane tab="Meetings list" key="1">
          <MeetingsList />
        </TabPane>
        <TabPane tab="Add meeting" key="2">
          <MeetingForm2 />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
  )
};

export default AdminPanel;