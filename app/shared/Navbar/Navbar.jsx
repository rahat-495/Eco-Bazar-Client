
import NavbarCompnents from "@/app/components/NavbarComponents";

const Navbar = async () => {

    return (
        <div className={`gro sticky z-50 bg-white bg-opacity-25 backdrop-blur-md top-0 flex justify-between text-black py-3 max-w-[1440px] mx-auto`}>
            <h1 className="font-semibold text-3xl">EcoMart</h1>
            <NavbarCompnents />
        </div>
    );
};

export default Navbar;
