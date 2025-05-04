import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import TapeSection from "../components/TapeSection";
import Footer from "../components/footer";
import HowItWorks from "../components/HowItWorks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center hero-full ">
            <div className=" h-[85vh] hero-content text-center min-w-[200px] flex flex-col-reverse md:flex-row-reverse items-center w-full">
                <div className="flex-1 w-full h-full relative overflow-hidden">
                    <Spline
                        className="w-full h-full object-cover hide-footer"
                        scene="https://prod.spline.design/3Gv0WqvTxzlYYXmz/scene.splinecode"
                    />
                </div>

                <div className="flex-1 text-center justify-center md:text-left pt-20">
                    <h1 className="text-4xl lg:text-6xl font-bold [&::selection]:text-base-content brightness-100 contrast-150 [&::selection]:bg-blue-950">
                        Xin chào! Mình là
                    </h1>
                    <h1 className="text-6xl sm:text-7xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#42A7C3] mt-1 lg:mt-3">
                        SGU Chatbot
                    </h1>
                    <p className="px-4 md:px-2 py-6 font-semibold text-xl lg:text-2xl">
                        Giúp các bạn sinh viên giải đáp thắc mắc, tra cứu thông
                        tin một cách nhanh chóng và chính xác nhất!
                    </p>
                    <Link to="/chat">
                        <button className="btn btn-info gap-2">
                            <span>Tra cứu ngay</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                width="24"
                                height="24"
                            />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-full flex justify-center items-center pt-10">
                <TapeSection />
            </div>
            <div className="w-full flex justify-center items-center pt-20">
                <div className="text-center mb-16 mx-auto py-12 lg:py-24 px-4 sm:px-6 lg:pt-12 lg:px-8">
                    <h2 className="font-bold text-3xl uppercase mb-4 text-[var(--light-blue)] px-4">
                        Chatbot hoạt động như thế nào?
                    </h2>
                    <HowItWorks />
                </div>
            </div>
            <div className="w-full flex justify-center items-center pt-10">
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
