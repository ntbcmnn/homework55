import React from 'react';
import {ICountIngredient} from '../../types';
import './Info.css';

interface IProps {
    ingredient: ICountIngredient;
}

const Info: React.FC<IProps> = ({ingredient}) => {
    return (
        <div className="info-container">
            <h4>{ingredient.name}</h4>
            <h4>x{ingredient.count}</h4>
        </div>
    );
};

export default Info;