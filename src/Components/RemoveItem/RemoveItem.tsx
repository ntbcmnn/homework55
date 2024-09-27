import React from 'react';
import {IIngredient} from '../../types';
import './RemoveItem.css';

interface IDeleteItem {
    ingredient: IIngredient;
    onRemove: (id: string) => void;
}

const RemoveItem: React.FC<IDeleteItem> = ({ingredient, onRemove}) => {
    return (
        <button type="button" className="removeBtn" onClick={() => onRemove(ingredient.name)}></button>
    );
};

export default RemoveItem;