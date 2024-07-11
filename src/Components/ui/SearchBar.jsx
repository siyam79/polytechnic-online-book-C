import React from 'react'

export default function SearchBar() {
    return (
        <div className="flex justify-center sm:justify-start">
            <label className="hidden py-1 px-3" ></label>
            <input className=" text-md py-2 px-4  border-2 border-gray-500 placeholder-gray-500  font-semibold rounded-l" type="search" name="q" placeholder="Search entire store here" />
            <button type="submit" className="bg-[#62AB00] px-5 py-1 text-lg font-bold hover:shadow-2xl cursor-pointer transition duration-250 ease-in-out rounded-r text-white" value="Search" color="blue">Search</button>
        </div>
    )
}

