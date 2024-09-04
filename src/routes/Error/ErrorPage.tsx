/* Components */
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function ErrorPage() {
    return (
        <>
            <Header />
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
            <Footer />
        </>
    );
}