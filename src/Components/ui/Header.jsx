import SearchBar from "./SearchBar";
import ProfileDropdown from "../Profile/ProfileDeopdown";



export default function Header() {
    return (
        <div>
            <div className='flex items-center justify-between px-3'>

                <img className="w-14 h-14 " src="https://cdn.vectorstock.com/i/500p/23/77/book-icon-logo-vector-2982377.jpg" alt="" />

                {/* input  */}
                <div className='hidden lg:block'>
                    <SearchBar />
                </div>

                <div>
                    <ProfileDropdown />
                </div>

            </div>
        </div>
    )
}

