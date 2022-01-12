import { Layout, Typography, Select } from 'antd';
import { VideoCameraAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

function AddIcon({title, setShowForm}) {
  const onAdd = () => setShowForm(true);
  return (
    <Layout 
      onClick={() => onAdd()}
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '20px', cursor: 'pointer'}}>
      <VideoCameraAddOutlined />
      <Title style={{ margin: '0 20px'}}level={3}>{title}</Title>
    </Layout>
  )
};

export default AddIcon;