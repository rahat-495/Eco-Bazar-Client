
import HomePageCard from "./components/HomePageCard";

export default async function Home(){

  const res = await fetch('http://localhost:5555/api/v1/items' , {method : 'GET'}) ;
  const {data} = await res.json() ;
  console.log(data);

  return (
    <div className="min-h-screen fle flex-col items-center justify-center"> 
      <div className="grid grid-cols-3 gap-5"> 
        {
          data?.map((item) => <HomePageCard item={item} key={item?._id}/>)
        }
      </div>
    </div>
  );
}
