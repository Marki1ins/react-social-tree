import '../styles/Global.css';

import perfil from '../assets/perfil.svg';

export function PerfilPhoto() {
    return (
        <header className='flex flex-col mb-10'>
            <img src={perfil} alt='foto de uma mulher' className='w-56 h-56 rounded-full self-center mb-3 px-1 py-1 border-2 border-purple'></img>
            <a href='' className="text-base text-purple">@instagram</a>
        </header>
    )
}
