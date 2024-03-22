import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const [taka] = useContext(MoneyContext)
    return (
        <div>
            <h3>Brother</h3>
            <p>paisi: {taka}</p>
        </div>
    );
};

export default Brother;