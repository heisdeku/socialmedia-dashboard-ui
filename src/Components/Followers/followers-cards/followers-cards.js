import React, { Component } from 'react';
import './followers-cards.css';
import {ReactComponent as RateIcon} from '../../../images/icon-up.svg';
class Card extends Component {
    
    render() {
        const style = {
            facebook : {
                background: 'hsl(208, 92%, 53%)',
            },
            twitter : {
                background: 'hsl(203, 89%, 53%)',
            },
            instagram : {
                background: 'linear-gradient(hsl(37, 97%, 70%),hsl(329, 70%, 58%))' 
            },
            Youtube : {
                background: 'hsl(348, 97%, 39%)',
            } 
        } 
        const props = this.props;
        let classValue = props.mode ? "card card-dark" : "card";
        let value = props.site === "facebook" ? style.facebook : props.site === "twitter" ? style.twitter : props.site === "instagram" ? style.instagram : props.site === 'youtube' ? style.Youtube : ''
        return (
            <div className={classValue}>
            <div className="thick-header" style={value}></div>
                <div className="account"> 
                                               
                    <div className="platform">
                        <span className="logo">{props.logo}</span><p>@soydolos</p>
                    </div>
                    <div className="size">
                        <h3>{props.number}</h3>
                        <h5>followers</h5>
                    </div>
                    <span className="rate"><RateIcon className="icon"/>{props.amount} Today</span>
                </div>
                </div>  
        
        )
    }
}

export default Card;