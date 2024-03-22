import { useContext } from "react";
import Special from "../Special/Special";
import { AssetContext } from "../GrandPa/GrandPa";
import Friend from "../Friend/Friend";


const Cousin = ({ name, assetNimu }) => {


    return (
        <div>
            <h3>Cousin</h3>
            <p>{name}</p>

            <section>
                {
                    assetNimu && <Special assetNimu={assetNimu} ></Special>
                }

                {
                    name === 'Rubaiya' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousin;