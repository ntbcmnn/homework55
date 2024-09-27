import React, {ReactElement} from 'react';
import {ICountIngredient} from '../../types';
import './Burger.css';

interface IBurger {
    ingredients: ICountIngredient[];
}

const Burger: React.FC<IBurger> = ({ingredients}) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map(ingredient => {
                const item: ReactElement[] = [];
                for (let i: number = 0; i < ingredient.count; i++) {
                    item.push(<div className={ingredient.name} key={ingredient.name + i}></div>);
                }
                return item;
            })}
            <div className="BreadBottom"></div>
        </div>
    )
        ;
};

export default Burger;