import { useState } from "react";
import Hero from "../Components/Hero";
import OrderIMG from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../Hooks/useMenu";
import OrderCards from "../Components/OrderCards";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className="max-w-[1170px] mx-auto text-center ">
            <Hero img={OrderIMG} title={"Order Food"}></Hero>
            <Tabs className="mt-[100px]" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            salad.map(item => <OrderCards key={item.id} item={item}></OrderCards>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            pizza.map(item => <OrderCards key={item.id} item={item}></OrderCards>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            soup.map(item => <OrderCards key={item.id} item={item}></OrderCards>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            dessert.map(item => <OrderCards key={item.id} item={item}></OrderCards>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            drinks.map(item => <OrderCards key={item.id} item={item}></OrderCards>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;