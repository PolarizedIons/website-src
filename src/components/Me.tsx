import { FC } from 'react';
import picture from '../assets/me.jpg';

export const Me:FC = () => <div className="rounded-full bg-gradient-to-tr from-accent-1 to-accent-2 w-fit p-1 flex-shrink-0"><img src={picture} alt="Profile of Me" className="w-32 md:w-48 rounded-full border-2 border-background-purple" /></div>;
