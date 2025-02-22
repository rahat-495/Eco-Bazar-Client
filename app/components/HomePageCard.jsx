
"use client"
import { IoBagHandle } from "react-icons/io5";

const HomePageCard = ({item}) => {
    
    let rating = [] ;
    for(let i = 0 ; i < item?.rating ; i++){
        rating.push(i) ;
    }

    const handleOpenDialoge = () => {

    }

    return (
        <div onClick={()=>document.getElementById('my_modal_2').showModal()} className="card bg-base-100 shadow-xl gro cursor-pointer">

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

            <dialog id="my_modal_2" className="modal">

                <div className="modal-box flex items-center justify-between">
                    <img src={item?.image} alt="" />
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>

            </dialog>

        </div>
    );
};

export default HomePageCard;
