import React from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from 'axios'
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const labelStyles = {
    color: "blue", // Change this to your desired label color
  };

  const onSubmit = (data) => {
    console.log(data);
  
    // Define the data to be sent in the request body
    
  
    // Send a POST request using Axios
    axios.post('http://15.206.195.183:8080/sms', data)
      .then(response => {
        // Handle the response if needed
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
  };
  

  return (
    <div className="w-full flex justify-center p-8 space-y-4 mt-32">
      <div className="w-full md:w-[74%]">
        <div className="tracking-widest text-4xl font-bold text-center">
          CONTACT US
        </div>
        <form
          action=""
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex md:space-x  flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 p-4">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              className="w-full md:w-[30%]"
              inputProps={{
                className: "color-blue-200", // Apply your custom class here
              }}
              {...register("name", { required: true })}
            />
            <TextField
              id="standard-basic"
              label="Email Address"
              variant="standard"
              className="w-full md:w-[30%]"
              inputProps={{
                className: "color-blue-200", // Apply your custom class here
              }}
              {...register("email", { required: true })}
            />
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              className="w-full md:w-[30%]"
              inputProps={{
                className: "color-blue-200", // Apply your custom class here
              }}
              {...register("contact", { required: true })}
            />
          </div>
          <div className="flex justify-center p-4">
            <TextField
              id="standard-basic"
              label="Message"
              variant="standard"
              className="w-full"
              {...register("message", { required: true })}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 w-56 py-3 text-white font-semibold text-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
