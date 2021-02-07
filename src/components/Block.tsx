import { CSSProperties, FC } from 'react';
import { animated } from 'react-spring';

type Props = {
    className?: string;
    style?: CSSProperties
}

export const Block: FC<Props> = (props) => {
  const { className = '', style, children } = props;
  return <animated.div style={style} className={`bg-black m-4 p-6 shadow-primary ${className}`}>{children}</animated.div>;
};
