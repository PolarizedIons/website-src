import { FC } from 'react';
import { Button } from './components/Button';
import { Facts } from './components/Facts';
import { Heading } from './components/Heading';
import { Me } from './components/Me';
import { Underline } from './components/Underline';

export const App: FC = () => (
  <div className="w-full min-h-screen bg-background-purple text-white font-roboto">
    <div className="flex flex-col items-center py-8">
      <div className="flex gap-6 items-center">
        <Me />
        <div>
          <Heading>PolarizedIons</Heading>
          <Underline />
          <div className="py-4 flex flex-wrap gap-4">
            <Button direction="down" href="https://github.com/PolarizedIons">Github</Button>
            <Button direction="down" href="https://twitter.com/PolarizedIons">Twitter</Button>
            <Button direction="down" href="mailto:me@polarizedions.net">Email</Button>
          </div>
        </div>
      </div>
    </div>

    <Facts />
  </div>
);
