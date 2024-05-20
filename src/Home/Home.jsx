import Featured from '../Featured/Featured'

import Banner from "../Banner/Banner";
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restro Mania | Home</title>
                
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;