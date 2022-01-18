import { useForm } from "react-hook-form";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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
    
    await axios.post('/admin/addMeeting', formData)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" />
      {errors.title && <p>{ errors.title.message }</p>}
      <input {...register("speaker")} placeholder="Speaker" />
      {errors.speaker && <p>{ errors.speaker.message }</p>}
      <input {...register("picture")} type="file" />
      {errors.picture && <p>{ errors.picture.message }</p>}
      <input {...register('dateStart')} type="datetime-local" />
      <select {...register("tags")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <input type="submit" />
    </form>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     type="email"
    //     {...register("email", {
    //       required: "Required",
    //       pattern: {
    //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //         message: "invalid email address"
    //       }
    //     })}
    //   />
    //   {errors.email && errors.email.message}

    //   <input
    //     {...register("username", {
    //       validate: value => value !== "admin" || "Nice try!"
    //     })}
    //   />
    //   {errors.username && errors.username.message}

    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default MeetingForm2;