import {
  FC, ReactElement, useEffect, useRef, useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { Block } from './Block';
import { InfoIcon } from './icons/InfoIcon';
import { LocationIcon } from './icons/LocationIcon';
import { JobIcon } from './icons/JobIcon';

type Link = {
  to: string;
  icon: ReactElement;
}

const links: Link[] = [
  {
    to: '/',
    icon: <InfoIcon className="p-4" />,
  },
  {
    to: '/links',
    icon: <LocationIcon className="p-4" />,
  },
  {
    to: '/skills',
    icon: <JobIcon className="p-4" />,
  },
];

export const NavBar:FC = () => {
  const [linePos, setLinePos] = useState(0);
  const linkRefs = useRef<Array<HTMLElement | null>>([]);

  const setNavBarLine = (el: HTMLElement | undefined | null) => {
    if (!el) {
      return;
    }

    const elTop = el.getBoundingClientRect().top;
    const navTop = ((linkRefs.current && linkRefs.current[0]?.getBoundingClientRect().top) || 0);
    setLinePos(elTop - navTop);
  };

  useEffect(() => {
    setNavBarLine(linkRefs.current.find((x) => x?.classList.contains('active')));
  }, []);

  return (
    <div className="bg-dark w-16 mr-8 h-screen">
      <Block className="w-16 flex flex-col justify-center items-center text-gray-500 fixed" style={{ height: 'calc(100vh - 2rem)' }}>
        <div className="relative">
          <div className="w-1 bg-white h-16 absolute transition-all" style={{ top: linePos }} />
          {links.map((link, i) => (
            <NavLink key={link.to} to={link.to} exact className="transition-colors" activeClassName="active text-white" onClick={(e) => setNavBarLine(e.currentTarget)} ref={(el) => { linkRefs.current[i] = el; }}>{link.icon}</NavLink>
          ))}
        </div>
      </Block>
    </div>
  );
};
