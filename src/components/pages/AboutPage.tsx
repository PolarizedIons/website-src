import { FC } from 'react';
import { useSpring } from 'react-spring';
import { Block } from '../Block';
import { Heading } from '../Heading';
import me from '../../assets/me.jpg';
import { QnA } from '../QnA';

export const AboutPage: FC = () => {
  const headerStyle = useSpring({ opacity: 1, transform: 'rotateX(0)', from: { opacity: 0, transform: 'rotateX(-90deg)' } });
  const profileStyle = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(100%)' } });
  const subTitleStyle = useSpring({ opacity: 1, transform: 'rotateY(0)', from: { transform: 'rotateY(90deg)', opacity: 0 } });
  const factsStyle = useSpring({ transform: 'translateY(0)', from: { transform: 'translateY(50%)' } });

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col w-full">
        <Block style={headerStyle} className="origin-top-left">
          <Heading>About Me </Heading>
        </Block>
        <Block style={factsStyle} className="z-10">
          <QnA />
        </Block>
      </div>

      <div className="flex flex-col lg:w-96">
        <div className="sticky top-0">
          <Block style={profileStyle}>
            <img src={me} alt="Photograph of me" />
          </Block>
          <Block className="text-right text-xl z-0 origin-left" style={subTitleStyle}>
            <div>PolarizedIons</div>
            <div>Full-stack web developer</div>
            <div>me@polarizedions.net</div>
          </Block>
        </div>
      </div>
    </div>
  );
};
