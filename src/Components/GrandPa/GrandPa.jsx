import Aunt from "../Aunt/Aunt";
import Daad from "../Daad/Daad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

const GrandPa = () => {
    return (
        <div className="grandPa">
            <h1>GrandDabba</h1>
            <section className=" flex">
                <Daad></Daad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;