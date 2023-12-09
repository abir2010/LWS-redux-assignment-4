import Bookslist from "./Bookslist";
import Form from "./Form";
import HomeBar from "./HomeBar";

export default function HomeContainer() {
    return (
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                {/* Home */}
                <div className="order-2 xl:-order-1">
                    {/* Home bar */}
                    <HomeBar />
                    <Bookslist />
                    {/* bookslist */}
                </div>
                {/* Form */}
                <Form />
            </div>
        </main>
    );
}
