import { useDispatch, useSelector } from "react-redux";
import { tagFilter } from "../redux/filter/actions";

export default function HomeBar() {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const handleTag = (tag) => {
        // dispatch
        dispatch(tagFilter(tag));
    };

    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => handleTag("All")}
                    className={`filter-btn ${
                        filter.tag === "All" && "active-filter"
                    }`}
                    id="lws-filterAll"
                >
                    All
                </button>
                <button
                    onClick={() => handleTag("Featured")}
                    className={`filter-btn ${
                        filter.tag === "Featured" && "active-filter"
                    }`}
                    id="lws-filterFeatured"
                >
                    Featured
                </button>
            </div>
        </div>
    );
}
