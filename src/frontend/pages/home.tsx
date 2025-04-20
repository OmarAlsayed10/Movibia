import Hero from "../components/hero";
import Browse from "./browse";



const Home = () => {
    return (
        <>
            <Hero/>
            <div className="row m-0">
        <div className="col-8 ">
            <Browse/>
            <Browse/>
        </div>
        <div className="col-4">
            Top 10
        </div>
            </div>
        </>
    );
}

export default Home;
