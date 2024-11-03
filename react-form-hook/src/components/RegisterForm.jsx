import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  username: "fullusername",
  email: "user@gmail.com",
  password: "",
  address: {
    country: "Ethiopia",
    city: "Addis Ababa",
    zipcode: "1234",
  },
  phoneNumbers: ["Primary Phone", "Secondary Phone"],
};

const RegisterForm = () => {
  const form = useForm({ defaultValues });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Data : ", data);
  };

  return (
    <div className="bg-gray-200 p-6 w-[700px] shadow-md rounded-md border-2 border-lime-500">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="username">Your Name</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.username?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.email?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.password?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="primaryPhone">Primary Phone</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="text"
            id="primaryPhone"
            {...register("phoneNumbers.0", {
              required: "Primary phone number is required",
              minLength: { value: 4, message: "Phone number is too short" },
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.phoneNumbers?.[0]?.message}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="secondaryPhone">Secondary Phone</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="text"
            id="secondaryPhone"
            {...register("phoneNumbers.1", {
              required: "Secondary phone number is required",
              minLength: { value: 4, message: "Phone number is too short" },
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.phoneNumbers?.[1]?.message}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <label className="text-md font-bold pl-1">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              value="newsletter"
            />
            Remember Me
          </label>
          <span className="text-md font-bold text-blue-500">
            Forgot Password
          </span>
        </div>

        <button
          className="w-full p-1 text-white rounded-md bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default RegisterForm;
