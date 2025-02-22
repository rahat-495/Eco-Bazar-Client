import ItemComponent from "@/app/components/ItemComponent";

const ItemPage = async ({params}) => {

    const {id} = params ;
    const res = await fetch(`http://localhost:5555/api/v1/items/${id}` , {method : 'GET'}) ;
    const {data} = await res.json() ;

    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center">
            <ItemComponent data={data}/>
        </div>
    );
};

export default ItemPage;
