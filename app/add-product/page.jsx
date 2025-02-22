
"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AddItemPage = () => {

    const router = useRouter() ;

    const handleAddItem = async (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const title = form.title.value ;
        const description = form.description.value ;
        const image = form.image.files[0] ;
        const price = form.price.value ;
        const rating = form.rating.value ;
        const quantity = form.quantity.value ;

        const key = '9dbc68cdb2a571d4538fd1298a4ff013';
        const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

        const formData = new FormData() ;
        formData.append("image" , image)
        const { data: imageUrl } = await axios.post(apiUrl, formData, { headers: { "content-type": "multipart/form-data" } });

        const itemData = { image : imageUrl?.data?.url , title , description , price , rating , quantity } ;
        const {data} = await axios.post('http://localhost:5555/api/v1/items/create-item' , itemData , {withCredentials : true , headers: { Authorization: localStorage.getItem("token") }}) ;
        
        if(data?.success){
            toast.success(data?.message) ;
            form.reset() ;
            router.push('/')
        }
    }

    return (
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gro">
            <form onSubmit={handleAddItem} className="w-full flex flex-col gap-3">
                <input name="title" type="text" className="border w-full focus:outline-none p-2 rounded focus:border-[#36f63d]" placeholder="Title"/>
                <input name="description" type="text" className="border w-full focus:outline-none p-2 rounded focus:border-[#36f63d]" placeholder="Description"/>
                <input name="image" type="file" className="border w-full focus:outline-none p-2 rounded focus:border-[#36f63d]" placeholder="Image"/>
                <input name="price" type="text" className="border w-full focus:outline-none p-2 rounded focus:border-[#36f63d]" placeholder="Price"/>
                <input name="rating" type="text" className="border w-full focus:outline-none p-2 rounded focus:border-[#36f63d]" placeholder="Rating"/>
                <input name="quantity" type="text" className="border w-full focus:outline-none p-2 rounded focus:border-[#36f63d]" placeholder="quantity"/>
                <button className="w-full border border-[#36f63d] p-2 font-semibold rounded hover:bg-[#36f63d] duration-200">Add</button>
            </form>
            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
            transition={Bounce}
            />
        </div>
    );
};

export default AddItemPage;
