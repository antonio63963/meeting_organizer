import { Layout, Typography, Button, Avatar  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './userProfile.module.css';

const {Title, Text} = Typography;
const { Header, Content, Footer } = Layout;

function UserProfile() {
  return (
    <Layout className={style.profile}>
      <Title type="secondary" level={3} style={{'marginBottom': '20px'}}>Your profile:</Title>
      <Avatar size={64} icon={<UserOutlined />} />
      <Title level={4} style={{'marginBottom': '0px'}}>Name LastName</Title>
      <Text style={{'marginBottom': '20px'}}>Role: user</Text>
      <Text>Email: someEmail@gmail.com</Text>
      <Text>Country: Ukraine</Text>
      <Text>Timezone: UTC +2</Text>
      <Button type="primary" style={{'marginTop': '20px'}}>Edit profile</Button>
    </Layout>
  )
};

export default UserProfile;