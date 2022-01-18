import { useForm } from "react-hook-form";
import axios from 'axios';
import * as Yup from 'yup';

const MeetingForm2 = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = async(values) => {
    console.log(values);
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('speaker', values.speaker);
    formData.append('picture', values.picture[0]);
    await axios.post('/admin/addMeeting', formData)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" />
      <input {...register("speaker")} placeholder="Speaker" />
      <input {...register("picture")} type="file" />
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