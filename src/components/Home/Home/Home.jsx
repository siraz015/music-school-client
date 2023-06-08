import Instructors from "../Instructors/Instructors";
import MusicGropu from "../MusicGroup/MusicGropu";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <MusicGropu></MusicGropu>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;