import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Modal, Button, Space, Input, Form } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import style from './meeting.module.css';


const schema = Yup.object().shape({
  title: Yup.string().required('Required'),
  picture: Yup
  .mixed()
  .required("You need to provide a file")
  .test('fileSize', "The file is too large", (value) => {
    console.log('size: ', value);
    return value[0] && value[0].size <= 1 || null
  }),
})

const MeetingForm2 = () => {
  const tagRef = useRef();
  const modalRef = useRef();
  const [ visible, setVisible ] = useState(false);
  const showModal = () => {
    console.log('showModal');
    setVisible(true)
  };
  const hideModal = () => {
    setVisible(false)
    console.log(tagRef)
  };

  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async(values) => {
    console.log(values);
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('speaker', values.speaker);
    formData.append('picture', values.picture[0]);
    formData.append('tags', values.tags);
    formData.append('startDate', values.startDate);

    await axios.post('api/admin/addMeeting', formData)
  };
  const onNewTag = (value) => {
    console.log('wow', value);
    hideModal();
  }
  return (
    
  <>
    {visible && (
      <div ref={modalRef}>
      <Modal
        title="Add new tag"
        visible={visible}
        onCancel={hideModal}
        footer={null}
      >
       <Form onFinish={onNewTag}>
        <Form.Item
          label="New tag"
          name="newTag"
          rules={[{ required: true, message: 'Please input new tag name!' }]}
        >
          <Input type="text" />
        </Form.Item>
          <Button htmlType="submit">ok</Button>
       </Form>
      </Modal>
    </div>
    )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" />
        {errors.title && <p>{ errors.title.message }</p>}
        <input {...register("speaker")} placeholder="Speaker" />
        {errors.speaker && <p>{ errors.speaker.message }</p>}
        <input {...register("picture")} type="file" />
        {errors.picture && <p>{ errors.picture.message }</p>}
        <input {...register('dateStart')} type="datetime-local" />
        <select {...register("tags", {
          onChange: (e) => {
            const tag = e.target.value;
            if(tag === '') showModal();
          }
        })}>
          <option className={style.bold} value="">Create new tag</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
        <input type="submit" />
      </form>
  </>
  );
};

export default MeetingForm2;