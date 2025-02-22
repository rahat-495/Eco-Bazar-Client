"use client";
import { useEffect, useState } from "react";
import HomePageCard from "../components/HomePageCard";
import getAllProducts from "../helpers/getAllProducts";
import axios from "axios";
import Swal from "sweetalert2";

const AllItemsPage = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const result = await getAllProducts();
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const {data} = await axios.delete(`http://localhost:5555/api/v1/items/${id}` , {withCredentials : true, headers : {Authorization : localStorage.getItem("token")}}) ;
                if(data?.success){
                    fetchData() ;
                    Swal.fire({
                    title: "Deleted",
                    text: "This product has been deleted.",
                    icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div className="grid grid-cols-3 gap-5"> 
            {
                data?.map((item) => (
                    <HomePageCard key={item._id} handleDelete={handleDelete} item={item} />
                ))
            }
        </div>
    );
};

export default AllItemsPage;
