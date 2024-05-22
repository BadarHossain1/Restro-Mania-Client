
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";


const MenuCategory = ({ items, title }) => {
    return (
        <div>

            <div className="grid md:grid-cols-2 gap-10 mt-[100px] mb-[100px] mx-auto">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
                <Link to={`/order/${title}`} className="btn btn-warning mx-auto w-[100px] flex justify-center mb-8">Buy {title}</Link>
        </div>
    );
};

export default MenuCategory;