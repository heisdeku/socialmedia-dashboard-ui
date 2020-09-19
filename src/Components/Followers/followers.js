import React from 'react';
import './followers.css';
import Cards from './followers-cards/followers-cards';
import { ReactComponent as FacebookIcon} from '../../images/icon-facebook.svg';
import { ReactComponent as TwitterIcon} from '../../images/icon-twitter.svg';
import { ReactComponent as InstagramIcon} from '../../images/icon-instagram.svg';
import { ReactComponent as YoutubeIcon} from '../../images/icon-youtube.svg';

const Followers = ({mode}) => {
   
    return (
        <div className="followers-section">
            <Cards 
                mode={mode} 
                className="facebook" 
                logo={<FacebookIcon />} 
                site={"facebook"} 
                number={1987} 
                amount={12} 
            />
            <Cards 
                mode={mode} 
                site={"twitter"} 
                logo={<TwitterIcon />} 
                number={1044} 
                amount={99}
            />
            <Cards 
                mode={mode} 
                site={"instagram"} 
                logo={<InstagramIcon />} 
                number={"11k"} 
                amount={1099}
            />
            <Cards 
                mode={mode} 
                site={"youtube"} 
                logo={<YoutubeIcon />} 
                number={8239} 
                amount={144}
            />
        </div>
    )
}


export default Followers