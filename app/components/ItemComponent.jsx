
"use client"
import { IoBagHandle } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from "react";

const ItemComponent = ({data}) => {

    const [count , setCount] = useState(0) ;

    let rating = [] ;
    for(let i = 0 ; i < data?.rating ; i++){
        rating.push(i) ;
    }

    return (
        <div className="grid grid-cols-5 items-center justify-between w-full gap-5 gro">
            
            <img src={data?.image} className="w-full rounded col-span-2" />

            <div className="divider divider-horizontal mx-auto"></div>

            <div className="flex flex-col gap-2 h-full items-start col-span-2 justify-start">
                <h1 className="font-semibold text-3xl">{data?.title}</h1>
                <p className="text-lg">{data?.description}</p>
                <h1 className="text-xl font-semibold">Available  Quantity : {data?.quantity}</h1>
                <h1 className="text-xl font-semibold">Status : {data?.status}</h1>
                <h1 className="text-xl font-semibold">Price : ${data?.price}</h1>
                <h2 className="card-title">Rating :
                    {rating.map((rating) => <div key={rating} className="rating rating-sm">
                        <input disabled type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>)}
                </h2>

                <div className="flex w-full gap-2">
                    
                    <div className="relative bg-base-200 w-40 flex items-center justify-center rounded-full px-3">
                        <button onClick={() => count > 0 && setCount(count-1)}>
                            <CiCircleMinus className="text-3xl font-bold cursor-pointer"/>
                        </button>
                        <input type="number" className="w-4/5 bg-transparent focus:outline-none text-center" defaultValue={count} min={0}/>
                        <button onClick={() => count < data?.quantity && setCount(count+1)}>
                            <CiCirclePlus className="text-3xl font-bold cursor-pointer"/>
                        </button>
                    </div>

                    <button className="flex gap-3 items-center justify-center bg-[#36f63d] px-6 py-2 rounded-full w-2/4">Add To Cart <IoBagHandle className="text-2xl mb-1"/></button>
                    
                    <div className="flex items-center justify-center bg-[#36f63d24] p-3 rounded-full">
                        <FaRegHeart className="text-3xl text-[#36f63d]"/>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default ItemComponent;
