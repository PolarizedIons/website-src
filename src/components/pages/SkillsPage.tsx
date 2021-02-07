import { FC } from 'react';
import { useSpring } from 'react-spring';
import { Block } from '../Block';
import { Heading } from '../Heading';
import skills from '../../assets/skills.png';

export const SkillsPage: FC = () => {
  const headingStyle = useSpring({ transform: 'translateY(0)', from: { transform: 'translateY(-100%)' } });
  const skillStyle = useSpring({ transform: 'scale(1)', opacity: 1, from: { transform: 'scale(0)', opacity: 0 } });

  return (
    <div className="flex flex-col items-center">
      <Block className="lg:w-1/2 text-center" style={headingStyle}><Heading>What am I good at?</Heading></Block>
      <Block className="lg:w-3/4" style={skillStyle}>
        <img src={skills} alt="Wordcloud of skills" className="mx-auto" />
      </Block>
    </div>
  );
};
