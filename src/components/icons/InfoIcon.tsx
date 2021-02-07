import { FC } from 'react';
import { IconProps } from './IconProps';

export const InfoIcon: FC<IconProps> = (props) => {
  const { className, onClick } = props;
  return (
    <svg onClick={onClick} className={className} width="64" height="64" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 5.33333C17.28 5.33333 5.33334 17.28 5.33334 32C5.33334 46.72 17.28 58.6667 32 58.6667C46.72 58.6667 58.6667 46.72 58.6667 32C58.6667 17.28 46.72 5.33333 32 5.33333ZM34.6667 45.3333H29.3333V29.3333H34.6667V45.3333ZM34.6667 24H29.3333V18.6667H34.6667V24Z" fill="currentColor" />
    </svg>
  );
};
