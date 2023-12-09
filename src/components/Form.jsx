import { useDispatch, useSelector } from "react-redux";
import { addBook, updateBook } from "./../redux/book/actions";
import { useEffect, useState } from "react";

export default function Form() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [featured, setFeatured] = useState(false);

    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        if (filter.formContent.id) {
            setShow(true);
            setName(filter.formContent.name);
            setAuthor(filter.formContent.author);
            setPrice(filter.formContent.price);
            setRating(filter.formContent.rating);
            setFeatured(filter.formContent.featured);
            setImg(filter.formContent.thumbnail);
        }
    }, [filter.formContent]);

    const resetInputBox = () => {
        setName("");
        setAuthor("");
        setPrice("");
        setRating("");
        setFeatured(false);
        setImg("");
    };

    const dispatch = useDispatch();

    const handleAddBookSubmit = (e) => {
        e.preventDefault();

        const bookData = {
            name,
            author,
            thumbnail: img,
            price,
            rating,
            featured,
        };

        // dispatch
        dispatch(addBook(bookData));

        resetInputBox();
    };

    const handleUpdateBookSubmit = (e) => {
        e.preventDefault();

        const ubookData = {
            name,
            author,
            thumbnail: img,
            price,
            rating,
            featured,
        };

        // // dispatch
        dispatch(updateBook(filter.formContent.id, ubookData));

        if (filter) setShow(false);

        resetInputBox();
    };

    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">
                    Add New Book
                </h4>
                {/* Add Book Form */}
                <form onSubmit={handleAddBookSubmit} className="book-form">
                    <div className="space-y-2">
                        <label htmlFor="name">Book Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookname"
                            name="name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="category">Author</label>
                        <input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookauthor"
                            name="author"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="image">Image Url</label>
                        <input
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookthumbnail"
                            name="thumbnail"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="price">Price</label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                className="text-input"
                                type="number"
                                id="input-Bookprice"
                                name="price"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="quantity">Rating</label>
                            <input
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                required
                                className="text-input"
                                type="number"
                                id="input-Bookrating"
                                name="rating"
                                min={1}
                                max={5}
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input
                            checked={featured}
                            onChange={(e) => setFeatured(e.target.checked)}
                            id="input-Bookfeatured"
                            type="checkbox"
                            name="featured"
                            className="w-4 h-4"
                        />
                        <label htmlFor="featured" className="ml-2 text-sm">
                            This is a featured book
                        </label>
                    </div>
                    {!show ? (
                        <button
                            onClick={handleAddBookSubmit}
                            type="submit"
                            className="submit"
                            id="submit"
                        >
                            Add Book
                        </button>
                    ) : (
                        <button
                            onClick={handleUpdateBookSubmit}
                            type="submit"
                            className="submit"
                            id="submit"
                        >
                            Update Book
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
