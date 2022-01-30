import { useState } from 'react';
import { addNewTags } from '../../../Redux/actions';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Tag } from 'antd';
import FormHeader from '../../FormHeader';
import style from '../editDB.module.css';

const colors = [ 'magenta', 'red', 'volcano', 'blue', 'purple', 'orange' ];

const randColor = (colors) => {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
};

function AddTag() {
  const dispatch = useDispatch();
  const [ tags, setTags ] = useState([]);
  const [ inputValue, setInputValue ] = useState();

  const onInput = (e) => {
    setInputValue(e.target.value)
  };
  const pushTag = () => {
    setTags([...tags, inputValue]);
    setInputValue('')
  };
  
  const Submit = async() => {
    if(!tags.length) return false
    addNewTags(tags, dispatch);
    setTags([])
  };

  return (
    <Form
      onFinish={Submit}
      className={style.form}
      initialValues={{ remember: true }}
    >
      <FormHeader 
        title={'Login'} 
        title={"Add Tag"} 
        onCloseArg={'start'}
        titleLevel={3}
        />
      <div>
        {
          tags.map((tag, idx) => (
            <Tag key={idx} color={randColor(colors)} style={{marginBottom: '10px'}}>{tag}</Tag>
          ))
        }
      </div>

      <Input.Group compact style={{margin: '10px 0', width: '100%'}}>
        <Input onChange={onInput} value={inputValue} style={{ width: 'calc(100% - 80px)' }} placeholder="enter new tag" />
        <Button onClick={pushTag} style={{}}type="primary">Aply</Button>
      </Input.Group>

      <Form.Item style={{color: '#fff0f6'}}>
        <Button htmlType="submit" type="primary" className={style.btn}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default AddTag;