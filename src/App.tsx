import {useState} from 'react';
import './App.css';

import AddItem from './Components/AddItem/AddItem.tsx';
import RemoveItem from './Components/RemoveItem/RemoveItem.tsx';
import Burger from './Components/Burger/Burger.tsx';
import Price from './Components/Price/Price.tsx';
import Info from './Components/Info/Info.tsx';

import {IIngredient} from './types';
import {ICountIngredient} from './types';

import meat from './assets/meat.png';
import salad from './assets/salad.png';
import cheese from './assets/cheese.png';
import bacon from './assets/bacon.png';

const INGREDIENTS: IIngredient[] = [
    {name: 'Salad', price: 10, image: salad},
    {name: 'Cheese', price: 50, image: cheese},
    {name: 'Meat', price: 80, image: meat},
    {name: 'Bacon', price: 60, image: bacon}
];

const App = () => {
    const [price, setPrice] = useState<number>(30);

    const [ingredients, setIngredients] = useState<ICountIngredient[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ]);

    const addIngredient = (id: string): void => {
        const copyIngredients: ICountIngredient[] = ingredients.map(item => {
            if (item.name === id) {
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            return item;
        });
        setIngredients(copyIngredients);

        const i: IIngredient | undefined = INGREDIENTS.find(item => item.name === id);
        if (i) {
            setPrice(prevState => prevState + i.price);
        }
    };

    const removeIngredient = (id: string): void => {
        const copyIngredients: ICountIngredient[] = ingredients.map(item => {
            if (item.name === id && item.count > 0) {
                return {
                    ...item,
                    count: item.count - 1,
                };
            }
            return item;
        });
        setIngredients(copyIngredients);

        const i: IIngredient | undefined = INGREDIENTS.find(item => item.name === id);
        if (i) {
            const currentIngredient: ICountIngredient | undefined = ingredients.find(item => item.name === id);
            if (currentIngredient && currentIngredient.count > 0) {
                setPrice(prevState => prevState - i.price);
            }
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="ingredients-container">
                    {ingredients.map((ingredient, id: number) => {
                        const item: IIngredient | undefined = INGREDIENTS.find(i => i.name === ingredient.name);

                        return item ? (
                            <div className="ingredient" key={id}>
                                <AddItem
                                    key={id}
                                    ingredient={item}
                                    onAdd={() => addIngredient(ingredient.name)}
                                />

                                <Info ingredient={ingredient}/>

                                <RemoveItem
                                    key={id + 1}
                                    ingredient={item}
                                    onRemove={() => removeIngredient(ingredient.name)}
                                />
                            </div>
                        ) : null;
                    })}
                </div>

                <div className="burger-container">
                    <Burger ingredients={ingredients}/>
                    <Price total={price}/>
                </div>
            </div>
        </div>
    );
};

export default App;