import { useState } from 'react';
import { Layout } from 'antd';
import MeetingForm from '../../components/MeetingForm';
import AddIcon from '../../components/AddIcon';

function AddMeeting() {
  const [ showForm, setShowForm ] = useState(false);
  return (
   <Layout style={{ 'maxWidth': '500px'}}>
      {
        showForm ? (<MeetingForm setShowForm={setShowForm} />) : (<AddIcon title={'Add meeting'} setShowForm={setShowForm}/>)
      }
   </Layout>
  )
};

export default AddMeeting;