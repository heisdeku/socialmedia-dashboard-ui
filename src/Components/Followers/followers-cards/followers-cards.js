import React, { Component } from 'react';
import './followers-cards.css';
import {ReactComponent as RateIcon} from '../../../images/icon-up.svg';
class Card extends Component {
    
    render() {
        const props = this.props;
        return (
            <div className="card">
                <div className="account">
                    <div className="platform">
                        <span className="logo">{props.logo}</span><p>@nathanf</p>
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