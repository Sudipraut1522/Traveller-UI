import React from "react";

const Input = ({
  labelName,
  className,
  register,
  type,
  name,
  errors,
  ...props
}) => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-[16px]">
          {labelName}
        </label>
        <input
          required
          id={name}
          type={type}
          {...register(name)}
          className={`bg-gray-300 p-2 border-none ${className}`}
          {...props}
        />
        {errors?.name && (
          <span className="text-red-500 text-xs">{errors?.name?.message}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
