import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../Validation/LoginSchema";
import { useNavigate } from "react-router-dom";
import Input from "../Component/Input";

const Signin = () => {
  const router = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const email = data?.email;

    if (email) {
      localStorage.setItem("userEmail", email);
      router("/");
    }
  };

  return (
    <div className="flex justify-center md:mt-24 mt-10">
      <div className="flex justify-center flex-col  w-[350px]">
        <div className="flex justify-center">
          <h1 className="py-2 text-[28px] font-semibold">Sign In</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            labelName="Enter Your Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            errors={errors}
            labelName="password"
            name="password"
            register={register}
            type="text"
          />
          <div className="flex justify-between text-xs">
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <label htmlFor="vehicle1"> keep me sign in</label>
            </div>
            <p className="text-blue-500">Forget Password?</p>
          </div>
          <div className="flex w-full bg-blue-500 py-2 rounded-md">
            <button className="text-sm text-center mx-auto text-white">
              Continue With Email
            </button>
          </div>

          <p className="text-[14px] mx-auto">or Use one of this option</p>
          <div className=" p-2 flex justify-center text-sm">
            <button className="">
              <img src="/Frame 17.jpg" alt="" />
            </button>
          </div>
          <div className=" p-2 flex justify-center text-sm text-white">
            <button>
              <img src="/Frame 18.jpg" alt="" />
            </button>
          </div>
          <div className="flex justify-center text-[16px] mt-8">
            <p>
              Don`t have an account?
              <span className="text-blue-500">Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
