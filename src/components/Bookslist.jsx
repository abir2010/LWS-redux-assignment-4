import Book from "./Book";
import { useSelector } from "react-redux";

export default function Bookslist() {
    const books = useSelector((state) => state.book);
    const filter = useSelector((state) => state.filter);

    const filterByTag = (book) => {
        if (filter.tag === "Featured") return book.featured;
        return true;
    };

    const filterBySearch = (book) => {
        if (book.name.toLowerCase().includes(filter.search.toLowerCase()))
            return true;
    };

    return (
        <div className="lws-bookContainer">
            {books
                .filter(filterByTag)
                .filter(filterBySearch)
                .map((book) => (
                    <Book key={book.id} book={book} />
                ))}
        </div>
    );
}
