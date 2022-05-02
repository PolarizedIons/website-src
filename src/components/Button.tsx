import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode
    direction: 'left' | 'down';
    href?: string;
}

export const Button: FC<Props> = (props) => {
  const { direction, href, children } = props;

  return (
    <a href={href} className="w-fit rounded-full group relative overflow-hidden bg-gradient-to-tr from-accent-1 to-accent-2 p-1 cursor-pointer">
      <div className="z-30 absolute top-1 left-1 right-1 bottom-1 bg-background-purple rounded-full border-4 border-transparent" />
      <div className={`z-40 h-full w-full absolute top-0 left-0 bg-gradient-to-tr from-accent-1 to-acccent-2 transition-transform duration-300s transform ${direction === 'down' ? 'translate-y-full' : '-translate-x-full'} group-hover:translate-x-0 group-hover:translate-y-0`} />
      <div className="relative z-50 text-xl px-6 py-2">{children}</div>
    </a>
  );
};
