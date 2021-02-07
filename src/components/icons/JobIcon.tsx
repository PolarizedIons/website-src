import { FC } from 'react';
import { IconProps } from './IconProps';

export const JobIcon: FC<IconProps> = (props) => {
  const { className, onClick } = props;
  return (
    <svg onClick={onClick} className={className} width="64" height="61" viewBox="0 0 64 61" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.6 12.6653H44.8V6.33263C44.8 2.81802 41.952 0 38.4 0H25.6C22.048 0 19.2 2.81802 19.2 6.33263V12.6653H6.4C2.848 12.6653 0.032 15.4833 0.032 18.9979L0 53.8274C0 57.342 2.848 60.16 6.4 60.16H57.6C61.152 60.16 64 57.342 64 53.8274V18.9979C64 15.4833 61.152 12.6653 57.6 12.6653ZM38.4 12.6653H25.6V6.33263H38.4V12.6653Z" fill="currentColor" />
    </svg>

  );
};
