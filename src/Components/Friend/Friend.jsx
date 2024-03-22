import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Friend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Friend : {gift}</h3>
        </div>
    );
};

export default Friend;