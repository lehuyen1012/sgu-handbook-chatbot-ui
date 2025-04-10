import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

function HomePage() {
    return (
        <div className="flex items-center justify-center hero h-[85vh] w-full ">
            <div className="hero-content text-center min-w-[200px] flex flex-row-reverse items-center h-full">
                <div className="flex-1 w-full h-full relative overflow-hidden">
                    <Spline
                        className="w-full h-full object-cover hide-footer"
                        scene="https://prod.spline.design/3Gv0WqvTxzlYYXmz/scene.splinecode"
                    />
                </div>

                <div className="flex-1 text-center lg:text-left p-4">
                    <h1 className="text-2xl lg:text-5xl font-bold [&::selection]:text-base-content brightness-100 contrast-150 [&::selection]:bg-blue-950 ">
                        Xin chào! Mình là
                    </h1>
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#42A7C3] mt-1 lg:mt-3">
                        SGU Chatbot
                    </h1>
                    <p className="py-6 font-semibold lg:text-lg text-sm ">
                        Giúp các bạn sinh viên giải đáp thắc mắc, tra cứu thông
                        tin một cách nhanh chóng và chính xác nhất!
                    </p>
                    <Link to="/chat">
                        <button className="btn btn-info">Tra cứu ngay</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
