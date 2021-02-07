import { FC } from 'react';

export const Heading: FC = (props) => {
  const { children } = props;
  return <div className="text-2xl lg:text-6xl">{children}</div>;
};
