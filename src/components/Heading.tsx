import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode,
}

export const Heading: FC<Props> = (props) => {
  const { children } = props;

  return <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-thin">{children}</h1>;
};
