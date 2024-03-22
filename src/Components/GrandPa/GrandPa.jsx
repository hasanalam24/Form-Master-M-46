import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Daad from "../Daad/Daad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'


export const AssetContext = createContext('gold')

const GrandPa = () => {
    const assetNimu = 'Diamond'
    return (
        <div className="grandPa">
            <h1>GrandDabba</h1>

            <AssetContext.Provider value="gold">
                <section className=" flex">
                    <Daad></Daad>
                    <Uncle assetNimu={assetNimu}></Uncle>
                    <Aunt></Aunt>
                </section>
            </AssetContext.Provider>

        </div>
    );
};

export default GrandPa;