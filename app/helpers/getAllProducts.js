
const getAllProducts = async () => {
    const res = await fetch('http://localhost:5555/api/v1/items' , {method : 'GET'}) ;
    const {data} = await res.json() ;
    return data ;
};

export default getAllProducts;
