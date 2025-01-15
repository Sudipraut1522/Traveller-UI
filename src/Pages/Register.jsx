import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../Validation/RegisterSchema";
import Input from "../Component/Input";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    reset();
  };

  return (
    <div className="flex justify-center md:mt-24 mt-10">
      <div className="flex justify-center flex-col gap-4 w-[350px]">
        <div className="flex justify-center">
          <h1 className="py-2 text-[28px] font-semibold">Register</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            labelName="Email"
            type="email"
            name="email"
            register={register}
            errors={errors}
          />
          <Input
            labelName="Password"
            type="text"
            name="password"
            register={register}
            errors={errors}
          />
          <div className="flex w-full bg-blue-500 py-2 rounded-md mt-4">
            <button
              type="submit"
              className="text-[16px] text-center mx-auto text-white cursor-pointer"
              disabled={!isDirty || !isValid}
            >
              Submit
            </button>
          </div>
        </form>

        <p className="text-[14px] mx-auto pt-1">or Use one of these options</p>
        <div className="p-2 flex justify-center text-sm">
          <button>
            <img src="/Frame 17.jpg" alt="Option 1" />
          </button>
        </div>
        <div className="p-2 flex justify-center text-sm text-white">
          <button>
            <img src="/Frame 18.jpg" alt="Option 2" />
          </button>
        </div>

        <div className="flex justify-center text-[14px] mt-8">
          <p>
            Already have an Account?
            <span className="text-blue-500"> Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
