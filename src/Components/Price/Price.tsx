import React from 'react';
import './Price.css';

interface ICounter {
    total: number;
}

const Price: React.FC<ICounter> = ({total}) => {
    return (
        <div className="price">
            <h4>
                Total: {total} KGS
            </h4>
        </div>

    );
};

export default Price;