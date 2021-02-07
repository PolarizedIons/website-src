import { FC } from 'react';
import { useSpring } from 'react-spring';
import { Block } from '../Block';
import { Heading } from '../Heading';
import github from '../../assets/socials/github.png';
import twitter from '../../assets/socials/twitter.png';
import steam from '../../assets/socials/steam.png';
import instagram from '../../assets/socials/instagram.png';
import twitch from '../../assets/socials/twitch.png';
import email from '../../assets/socials/email.png';

type Link = {
    url: string;
    name: string;
    img: string;
}

const links: Link[] = [
  {
    name: 'Github',
    url: 'https://github.com/polarizedions',
    img: github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/polarizeions',
    img: twitter,
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/polarizedions',
    img: steam,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/polarizedions',
    img: instagram,
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/polarizedions',
    img: twitch,
  },
  {
    name: 'Email',
    url: 'mailto:me@polarizedions.net',
    img: email,
  },
];

export const LinksPage: FC = () => {
  const headingStyle = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(100%)' } });
  const madeStyle = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-100%)' } });
  const linksStyle = useSpring({ transform: 'translateY(0)', from: { transform: 'translateY(200%)' } });
  return (
    <div>
      <div><Block className="lg:w-3/4" style={headingStyle}><Heading>Find me on the web</Heading></Block></div>
      <div className="flex flex-col-reverse lg:flex-row">
        <Block className="lg:w-1/4 flex flex-col justify-center" style={madeStyle}>
          <div className="text-xl text-right justify-self-start">What I&apos;ve made</div>
          <div>
            <a className="block" href="https://polarizedions.net">PolarizedIons.net</a>
            <a className="block" href="https://polarisa.dev">PolarIsA.dev</a>
            <a className="block" href="https://disquotes.xyz">disquotes.xyz</a>
            <a className="block" href="https://mytwitchbot.live">MyTwitchBot.live</a>
          </div>
        </Block>
        <Block className="lg:w-3/4 flex flex-col lg:flex-row justify-center items-center" style={linksStyle}>
          {links.map((link) => (
            <a href={link.url} className="m-6 text-center">
              <div className="bg-white rounded-full p-2 overflow-hidden inline-block">
                <img src={link.img} alt={`${link.name}'s logo`} />
              </div>
              <div className="text-xl py-2 underline">{link.name}</div>
            </a>
          ))}
        </Block>
      </div>
    </div>
  );
};
