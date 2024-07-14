import React from 'react'
import messageImg1 from "../../../../src/assets/image/MessageImg1.png"

export default function ContactForm() {
    return (
        <div className='lg:flex items-end justify-center gap-7 mx-auto container mb-24 pt-16 lg:pt-20 bg-white px-5'>
            <img src={messageImg1} alt="Munshi Wholesale Conatct"
                className='h-[350px] 2xl:h-[450px] hidden lg:block'
            />
            <div>
                <h1 className="text-3xl text-[#333] font-extrabold text-center">Leave a message</h1>
                <form className="mt-8 space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600" />
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-yellow-600"></textarea>
                    <button type='button'
                        className="text-white bg-red-600 hover:bg-red-400 font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
                </form>
            </div>
        </div>
    )
}
