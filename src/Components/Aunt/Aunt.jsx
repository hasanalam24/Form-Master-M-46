import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = () => {
    return (
        <div>
            <h1>Aunt</h1>
            <section>
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
                {/* name hocce prop hisabe jacche */}
            </section>
        </div>
    );
};

export default Aunt;