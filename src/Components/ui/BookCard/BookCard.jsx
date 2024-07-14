import React from 'react'


export default function BookCard({ book }) {
    console.log(book);

    const { name, image, description, semester, department } = book || {}

    const truncateDescription = (desc, length) => {
        if (!desc) return '';
        return desc.length > length ? desc.substring(0, length) + '...' : desc;
    };

    return (
        <>
            <div className="lg:w-[300px] lg:h-[500px]  w-full lg:px-2 md:px-2 px-1 bg-white rounded-lg pb-2 cursor-pointer">
                <img className=' lg:w-[250px]  lg:h-[280px] h-[200px]  mx-auto rounded ' src="https://worldscientific.com/cms/10.1142/10940/asset/18ee2a3d-dd18-e2a3-bdd1-ee2a3dbdd18e/10940.cover.jpg" alt="" />
                <div className="uppercase sm:text-xs  font-sans text-blue-600 pt-2 lg:px-1 px-3  hover:cursor-pointer">
                    <h1
                        className="lg:text-[16px] text-sm truncate uppercase  font-semibold  pt-1
                         hover:cursor-pointer "
                        title={name}
                    >
                        {name}
                    </h1>

                </div>
                <div className="font-normal text-gray-700 lg:p-1.5 p-1 lg:text-[16px]  text-sm hover:cursor-pointer lg:px-1 px-3">
                    <p className=' border-t border-gray-300 pt-2'>
                        {truncateDescription(description, 60)}
                    </p>

                </div>
                <div className=' flex items-center lg:justify-between  gap-3 lg:px-1 px-3 '>
                    <h1> Semester : </h1>
                    <p> {semester} </p>
                </div>
                <div className=' flex items-center lg:justify-between  gap-3 lg:px-1 px-3 '>
                    <h1> {department} </h1>
                    
                </div>
                <div>
                    <p> Resource </p>
                </div>
            </div>
        </>
    )
}
