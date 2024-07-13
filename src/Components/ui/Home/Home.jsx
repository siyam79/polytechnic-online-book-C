import { useEffect, useState } from "react"
import BookCard from "../BookCard/BookCard";

export default function Home() {

    const [books, setBooks] = useState([])
    const [visibleBooks, setVisibleBooks] = useState(10);

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

    const loadMoreBooks = () => {
        setVisibleBooks((prev) => prev + 10);
    };


    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 md:gap-4 gap-4">
                {books.slice(0, visibleBooks).map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
            {visibleBooks < books.length && (
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={loadMoreBooks}
                >
                    Load More
                </button>
            )}
        </div>
    )
}
