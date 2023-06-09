
const MenuItem = ({item}) => {
    const {name, price, image, recipe} = item;

    return (
        <div className="flex justify-between space-x-4 pt-5">
            <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <p className='uppercase'>{name}----------</p>
                <p>{recipe}</p>
            </div>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;