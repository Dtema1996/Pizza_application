import React from 'react';

type LabelProps = {
  text: string;
};

export const Label = ({ text }: LabelProps) => {
  return <label htmlFor={text}>{text}</label>;
};