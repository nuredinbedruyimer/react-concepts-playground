import { DevTool } from "@hookform/devtools";
import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const form = useForm({
    defaultValues: {
      username: "fullusername",
      email: "user@gmail.com",
      password: "",
      address: {
        country: "Ethiopia",
        city: "Addis Ababa",
        zipcode: "1234",
      },
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  console.log("Form Error  : ", errors);
  const onSubmit = (data) => {
    console.log("Form Data : ", data);
  };
  return (
    <div className="  bg-gray-200 p-6 w-[700px] shadow-md rounded-md border-2 border-lime-500">
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="username">Your Name</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username Is Required",
              },
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
              required: {
                value: true,
                message: "E-mail Is Required",
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
              required: {
                value: true,
                message: "Password Is Required",
              },
              validate: {
                passLength: (fieldValue) => {
                  return fieldValue.length >= 8 || "Password is To Short";
                },
              },
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.password?.message}
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="country">Country</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="country"
            id="country"
            {...register("address.country", {
              required: {
                value: true,
                message: "Country Is Required",
              },
              validate: {
                passLength: (fieldValue) => {
                  return fieldValue.length >= 4 || "Country is To Short";
                },
              },
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.country?.message}
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="city">City</label>
          <input
            className="py-1 rounded-sm w-full px-2"
            type="city"
            id="city"
            {...register("address.city", {
              required: {
                value: true,
                message: "city Is Required",
              },
              validate: {
                passLength: (fieldValue) => {
                  return fieldValue.length >= 4 || "city is To Short";
                },
              },
            })}
          />
          <p className="text-sm mt-4 text-red-600 font-normal">
            {errors.city?.message}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <label className="text-md font-bold pl-1">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              value="newsletter"
              className="pr-2 "
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
