

const OrderCards = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                    <p className="absolute bg-black text-white right-0 mr-4">{price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-warning">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCards;