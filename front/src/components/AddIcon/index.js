import { Layout, Typography, Select } from 'antd';
import { VideoCameraAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

function AddIcon({title, setShowForm}) {
  const onAdd = () => setShowForm(true);
  return (
    <Layout>
      <VideoCameraAddOutlined onClick={() => onAdd()}/>
      <Title level={3}>{title}</Title>
    </Layout>
  )
};

export default AddIcon;