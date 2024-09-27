import React from 'react';
import {IIngredient} from '../../types';
import './AddItem.css';

interface IAddItem {
    ingredient: IIngredient;
    onAdd: (id: string) => void;
}

const AddItem: React.FC<IAddItem> = ({ingredient, onAdd}) => {
    return (
        <button type="button" onClick={() => onAdd(ingredient.name)} className="add-btn">
            <img src={ingredient.image} alt={ingredient.name}/>
        </button>
    );
};

export default AddItem;