
import HomePageCard from "../components/HomePageCard";

const ItemsPage = async () => {

    const res = await fetch('http://localhost:5555/api/v1/items' , {method : 'GET'}) ;
    const {data} = await res.json() ;

    return (
        <div className="grid grid-cols-3 gap-5"> 
            {
                data?.map((item) => <HomePageCard item={item} key={item?._id}/>)
            }
        </div>
    );
};

export default ItemsPage;
