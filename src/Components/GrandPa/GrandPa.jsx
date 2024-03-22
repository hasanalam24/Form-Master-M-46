import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Daad from "../Daad/Daad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'


export const AssetContext = createContext('gold')

export const MoneyContext = createContext(1000)

const GrandPa = () => {
    const assetNimu = 'Diamond'

    const [money, setMoney] = useState(1000)

    return (
        <div className="grandPa">
            <h1>GrandDabba</h1>

            <p>Net Money: {money}</p>

            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className=" flex">
                        <Daad></Daad>
                        <Uncle assetNimu={assetNimu}></Uncle>
                        <Aunt></Aunt>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default GrandPa;