import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    return (
        <>
            <div className="App">
                <h2>Maaf Halaman Tidak Tersedia 😥</h2>
            </div>
        </>
    )
}

export default ErrorPage;
