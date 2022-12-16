import './styles/Global.css';

import { Buttons } from './components/Buttons';
import { SocialMedia } from './components/SocialMedia';
import { PerfilPhoto } from './components/PerfilPhoto';

export function App() {
  return (
    <div id="body" className="w-screen h-screen bg-bege">
      <div id="container" className="w-96 my-0 mx-auto md:min-w-min py-36 text-center">
          <PerfilPhoto />
          <Buttons />
          <SocialMedia />
      </div>
    </div>
  )
}
