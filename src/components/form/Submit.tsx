import React from 'react';

interface Props {
  value: string;
}

export const Submit = ({ value }: Props) => {
  return (
    <input
      type="submit"
      className="w-full rounded dark:bg-white bg-secondary dark:text-secondary text-white dark:hover:bg-opacity-90 hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer p-1"
      value={value}
    />
  );
};
