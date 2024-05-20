import MenuItem from "./MenuItem";


const MenuCategory = ({ items}) => {
    return (
        <div>
           
            <div className="grid md:grid-cols-2 gap-10 mt-[100px] mb-[100px]">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;