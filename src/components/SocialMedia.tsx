import '../styles/Global.css';

import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitch from '../assets/twitch.svg';
import twitter from '../assets/twitter.svg';

export function SocialMedia() {
    return (
        <div className='flex flex-row space-x-8 justify-center'>
            <a href='' ><img src={twitter} alt='twitter'></img></a>
            <a href='' ><img src={twitch} alt='twitter'></img></a>
            <a href='' ><img src={instagram} alt='twitter'></img></a>
            <a href='' ><img src={linkedin} alt='twitter'></img></a>
            <a href='' ><img src={github} alt='twitter'></img></a>
        </div>
    )
}