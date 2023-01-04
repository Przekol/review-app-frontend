import React from 'react';

interface Props {
  name: string;
  placeholder: string;
  label: string;
  type: string;
}

export const FormInput = ({ name, placeholder, label, type, ...rest }: Props) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        name={name}
        type={type}
        className="bg-transparent rounded border-2 border-dark-subtle focus:border-white p-1 w-full text-lg text-white outline-none peer"
        placeholder={placeholder}
        {...rest}
      />
      <label htmlFor={name} className="font-semibold text-dark-subtle peer-focus:text-white transition self-start">
        {label}
      </label>
    </div>
  );
};
