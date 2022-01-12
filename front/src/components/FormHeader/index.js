import { Typography } from 'antd';
import style from './formHeader.module.css';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

function FormHeader({ onClose, title, onCloseArg }) {
  const onCloseBtn = () => onClose(onCloseArg);
  return (
    <div className={style.formHeader}>
            <Title level={2} className={style.title}>{ title }</Title>
            <CloseCircleOutlined onClick={() => onCloseBtn()}/>
    </div>
  )
};

export default FormHeader;