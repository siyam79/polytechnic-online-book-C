import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div>
            <div className='flex items-center justify-between px-3'>

                {/* <h1 className=' text-[#62AB00] lg:text-5xl md:text-3xl text-xl font-semibold '>
                    
                </h1> */}
                <img className=" w-14 h-14 " src="https://i.ibb.co/gVnhvRL/reading-book-1-removebg-preview.png" alt="" />


                {/* input  */}
                <div className='hidden lg:block'>
                    <SearchBar />
                </div>

                {/* login and wishlist  */}

                <div className='flex items-center lg:gap-10 md:gap-8 gap-4 '>
                    <Link to={'/login'}><p className='text-xl  font-semibold '> Login </p></Link>
                    <div className="relative">
                    </div>
                </div>


            </div>
        </div>
    )
}

