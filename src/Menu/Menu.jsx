import { Helmet } from "react-helmet";
import Hero from "../Components/Hero";
import img from '../assets/menu/banner3.jpg'
import salad1 from '../assets/menu/salad-bg.jpg'
import soup1 from '../assets/menu/soup-bg.jpg'
import pizza1 from '../assets/menu/pizza-bg.jpg'
import dessert1 from '../assets/menu/dessert-bg.jpeg'

import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/MenuCategory";
import useMenu from "../Hooks/useMenu";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Restro Mania | Menu</title>

            </Helmet>
            <Hero img={img} title={"Our Offers"}></Hero>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <Hero img={dessert1} title={"Our Desserts"}> </Hero>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Desserts"}></SectionTitle>
            <MenuCategory items={dessert}></MenuCategory>

            {/* soup menu items */}

            <Hero img={soup1} title={"Our Soups"}></Hero>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Soup"}></SectionTitle>
            <MenuCategory items={soup}></MenuCategory>

            {/* salad menu items */}

            <Hero img={salad1} title={"Our Salads"}></Hero>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Salad"}></SectionTitle>
            <MenuCategory items={salad}></MenuCategory>

            {/* pizza menu items */}

            <Hero img={pizza1} title={"Our Pizzas"}></Hero>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Pizza"}></SectionTitle>
            <MenuCategory items={pizza}></MenuCategory>
            



        </div>
    );
};

export default Menu;