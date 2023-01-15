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
        className="bg-transparent rounded border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary p-1 w-full text-lg dark:text-white text-secondary outline-none peer"
        placeholder={placeholder}
        {...rest}
      />
      <label
        htmlFor={name}
        className="font-semibold dark:text-dark-subtle text-light-subtle dark:peer-focus:text-white peer-focus:text-primary transition self-start"
      >
        {label}
      </label>
    </div>
  );
};
