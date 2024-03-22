import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({ assetNimu }) => {
    return (
        <div>
            <h3>Uncle</h3>

            <section className='flex'>
                <Cousin name={'Hasan'} assetNimu={assetNimu}></Cousin>
                <Cousin name={'Alam'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;