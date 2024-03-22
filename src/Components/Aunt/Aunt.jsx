import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Aunt = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1>Aunt</h1>
            <section>
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
                {/* name hocce prop hisabe jacche */}
            </section>

            <p>Money:{money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunt;