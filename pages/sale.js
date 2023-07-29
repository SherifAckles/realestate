
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";

const Sale = () => {
    const router = useRouter();

    const handleGoBackClick = () => {
        router.back();
    };

    return (
        <div >
            <h1>Sale page</h1>
            <button
                className=" justify-center items-center  px-6 py-3 text-base font-semibold rounded bg-primary-400 text-white cursor-pointer transition-shadow shadow-md hover:shadow-lg active:bg-blue-700"
                onClick={handleGoBackClick}
            >
                Go Back
            </button>
        </div>
    );
};

export default Sale;
