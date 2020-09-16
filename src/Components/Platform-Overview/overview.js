import React from 'react'
import OverviewCard from './overview-card/overview-card';
import './overview.css';

import { ReactComponent as FacebookIcon} from '../../images/icon-facebook.svg';
import { ReactComponent as TwitterIcon} from '../../images/icon-twitter.svg';
import { ReactComponent as InstagramIcon} from '../../images/icon-instagram.svg';
import { ReactComponent as YoutubeIcon} from '../../images/icon-youtube.svg';
const Overview = () => {
    return (
        <div className="overview-section">
            <h2>overview - Today</h2>
            <div className="overview-cards">
            <OverviewCard 
                logo={<FacebookIcon/>}
                typeOne={"Page View"}
                typeTwo={"Likes"} 
                viewNumber={87} 
                viewAmount={3} 
                likesNumber={87} 
                likesAmount={2}
                />
            <OverviewCard 
                logo={<InstagramIcon/>} 
                typeOne={"Likes"} 
                typeTwo={"Profile Views"} 
                viewNumber={5462} 
                viewAmount={2257} 
                likesNumber={87} 
                likesAmount={1375}
            />
            <OverviewCard
                 logo={<TwitterIcon/>}
                typeOne={"Retweets"} 
                typeTwo={"Likes"} 
                viewNumber={117} 
                viewAmount={303} 
                likesNumber={87} 
                likesAmount={533}
            />
            <OverviewCard 
                logo={<YoutubeIcon/>} 
                typeOne={"Likes"}  
                typeTwo={"Total Views"} 
                viewNumber={1407} 
                viewAmount={18} 
                likesNumber={87} 
                likesAmount={12}
            />
            </div>
            
        </div>
    )
}

export default Overview