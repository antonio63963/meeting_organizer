import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from 'axios';
import moment from 'moment';
import { getAllTags } from '../../Redux/actions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Select, DatePicker, Form } from 'antd';

import style from './meeting.module.css';

const { Option } = Select;

const schema = Yup.object().shape({
  title: Yup.string().required('Required'),
  picture: Yup
  .mixed()
  .required("You need to provide a file")
  .test('fileSize', "The file is too large", (value) => {
    console.log('size: ', value);
    return value[0] && value[0].size <= 1000000 || null
  }),
});

const MeetingForm2 = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const children = state.tags.map((tag, ind) => (<Option key={ind} value={tag.id}>{tag.name}</Option>));
  const [ selectedTags, setSelectedTags ] = useState([false]);
  const [ startDate, setStartDate ] = useState();


  function onChangeTag(value) {
    setSelectedTags(value);
    console.log(selectedTags)
  };
  function onDate(value) {
    console.log("date: " + value);
  }
  
  useEffect(() => {
    if(!state.tags) getAllTags(dispatch);
  }, []);

  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async(values) => {
    console.log("ON SUBMIT");
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('speaker', values.speaker);
    formData.append('picture', values.picture[0]);
    formData.append('tags', values.tags);
    if(startDate) formData.append('startDate', startDate);
    if(selectedTags) formData.append('tags', selectedTags);

    await axios.post('api/admin/addMeeting', formData)
  };

  return (   
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" />
        {errors.title && <p>{ errors.title.message }</p>}
        <input {...register("speaker")} placeholder="Speaker" />
        {errors.speaker && <p>{ errors.speaker.message }</p>}
        <input {...register("picture")} type="file" />
        {errors.picture && <p>{ errors.picture.message }</p>}
        {/* <input {...register('dateStart', {
          onChange: (e) => console.log(moment(e.target.value).valueOf())
        })} type="datetime-local" /> */}
      
        <Form.Item label="Date start" name="dateStart">
          <DatePicker onChange={(value) => setStartDate(moment(value).valueOf())} showTime format="YYYY-MM-DD HH:mm:ss"/>
        </Form.Item>
        <>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select any tag"
          onChange={onChangeTag}
        >
          {children}
        </Select>
        
      </>
        <input type="submit" />
      </form>
  );
};

export default MeetingForm2;