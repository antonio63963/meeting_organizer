import { Typography } from 'antd';
import style from './formHeader.module.css';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

function FormHeader({ onClose, title, onCloseArg, titleLevel, closeColor=null }) {
  const onCloseBtn = () => onClose(onCloseArg);
  return (
    <div className={ style.formHeader }>
            <Title level={ titleLevel } className={style.title}>{ title }</Title>
            <CloseCircleOutlined style={{ color:`${closeColor ? closeColor : '#fff0f6'}` }}onClick={() => onCloseBtn()}/>
    </div>
  )
};

export default FormHeader;