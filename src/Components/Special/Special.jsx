import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Special = ({ assetNimu }) => {

    const gift = useContext(AssetContext)

    return (
        <div>
            <h3>Special</h3>
            <p>has: {assetNimu}</p>

            <p>Also : {gift}</p>
        </div>

    );
};

export default Special;