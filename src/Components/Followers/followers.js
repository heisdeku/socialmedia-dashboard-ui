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
            <Cards mode={mode} className="facebook" logo={<FacebookIcon />} style={facebook} number={1987} amount={12} />
            <Cards mode={mode} style={{twitter}} logo={<TwitterIcon />} number={1044} amount={99} />
            <Cards mode={mode} style={{instagram}} logo={<InstagramIcon />} number={"11k"} amount={1099} />
            <Cards mode={mode} style={{Youtube}} logo={<YoutubeIcon />} number={8239} amount={144} />
        </div>
    )
}

const facebook = {
    borderTop: '5px solid hsl(208, 92%, 53%)',
}

const twitter = {
    borderTop: 'hsl(203, 89%, 53%)',
}

const instagram = {
    borderTop: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',   
}

const Youtube = {
    borderTop: 'hsl(348, 97%, 39%)',
}

export default Followers