import React from 'react';
import './overview-card.css';
import { ReactComponent as RateIconDown} from '../../../images/icon-down.svg'
import { ReactComponent as RateIconUp} from '../../../images/icon-up.svg'
const OverviewCard = ({logo, typeOne, typeTwo, viewNumber, viewAmount, likesNumber, likesAmount}) => {
    return (
        <div className="social">
            <div className="card view">
                <div className="part-one">
                <h4>{typeOne}</h4>
                <p className="view-number">{viewNumber}</p>
                </div>
                <div className="part-two">
                    <div className="social-icon">{logo}</div>
                    {likesAmount > 12  ? 
                        <span className="rate up"><RateIconUp className="icon"/> <p className="view-rate">{likesAmount}%</p></span>
                    : <span className="rate down"><RateIconDown className="icon"/> <p className="view-rate">{likesAmount}%</p></span>} 
                </div>
            </div>
            <div className="card likes">
                <div className="part-one">
                    <h4>{typeTwo}</h4>
                    <p className="view-number">{likesNumber}</p>
                </div>
                <div className="part-two">
                    <div className="social-icon">{logo}</div>
                    {likesAmount > 12  ? 
                        <span className="rate up"><RateIconUp className="icon"/> <p className="view-rate">{likesAmount}%</p></span>
                    : <span className="rate down"><RateIconDown className="icon"/> <p className="view-rate">{likesAmount}%</p></span>} 
                </div>
            </div>
        </div>
    )
}

export default OverviewCard;