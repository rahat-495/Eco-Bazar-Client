
"use client"
import Link from "next/link";
import { IoBagHandle } from "react-icons/io5";

const HomePageCard = ({item}) => {

    let rating = [] ;
    for(let i = 0 ; i < item?.rating ; i++){
        rating.push(i) ;
    }

    return (
        <Link href={`/items/${item?._id}`}>
            <div className="card bg-base-100 shadow-xl gro cursor-pointer">

                <figure>
                    <img className="w-full h-92" src={item?.image} alt="Shoes"/>
                </figure>

                <div className="flex items-start justify-between p-5">

                    <div className="">
                        <h2 className="card-title">
                            {item?.title}
                        </h2>
                        <h2 className="text-xl font-semibold">
                            ${item?.price}
                        </h2>
                        <h2 className="card-title">
                            {rating.map((rating) => <div key={rating} className="rating rating-sm">
                                <input disabled type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>)}
                        </h2>
                    </div>

                    <button className="border mt-4 hover:border-[#36f63d] hover:text-[#36f63d] duration-300 rounded-full p-2">
                        <IoBagHandle className="text-3xl"/>
                    </button>

                </div>

            </div>
        </Link>
    );
};

export default HomePageCard;
