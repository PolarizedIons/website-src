import { FC } from 'react';
import { IconProps } from './IconProps';

export const LocationIcon: FC<IconProps> = (props) => {
  const { className, onClick } = props;
  return (
    <svg onClick={onClick} className={className} width="64" height="64" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 5.33333C21.68 5.33333 13.3333 13.68 13.3333 24C13.3333 38 32 58.6667 32 58.6667C32 58.6667 50.6667 38 50.6667 24C50.6667 13.68 42.32 5.33333 32 5.33333ZM32 30.6667C28.32 30.6667 25.3333 27.68 25.3333 24C25.3333 20.32 28.32 17.3333 32 17.3333C35.68 17.3333 38.6667 20.32 38.6667 24C38.6667 27.68 35.68 30.6667 32 30.6667Z" fill="currentColor" />
    </svg>

  );
};
