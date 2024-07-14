import { useEffect, useState } from "react"
import BookCard from "../BookCard/BookCard";
import Banner from "../Banner/Banner";
import { Link, useNavigate } from "react-router-dom";


export default function Home() {

    const [books, setBooks] = useState([])
    const [visibleBooks, setVisibleBooks] = useState(4);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                const result = await response.json();
                setBooks(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const goToAllBooks = () => {
        navigate("/all-book", { state: { books } });
    };


    return (
        <div>
            <div className="!w-full ">
                <Banner />
            </div>
                <div onClick={goToAllBooks} className=" max-w-7xl flex justify-end mt-4 mx-auto">
                    <button
                        className=" px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        All Books
                    </button>

                </div>
          
            <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 md:gap-4 gap-4">
                {books.slice(0, visibleBooks).map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>

        </div>
    )
}
