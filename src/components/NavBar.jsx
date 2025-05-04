import { useLocation, useNavigate, Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isSignedIn, user } = useUser();

    return (
        <div
            className="navbar bg-base-100 w-full px-8 py-4"
            style={{
                background: "rgba(255, 255, 255, 0)",
            }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/chat">Trò chuyện</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQs</Link>
                        </li>
                    </ul>
                </div>
                <a
                    onClick={() => navigate("/")}
                    className="font-serif btn btn-ghost normal-case font-extrabold text-xl text-[#42A7C3]"
                >
                    SGU Chatbot
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    <li className="p-1">
                        <button
                            onClick={() => navigate("/")}
                            className={
                                location.pathname === "/"
                                    ? "btn btn-outline btn-primary"
                                    : ""
                            }
                        >
                            Trang chủ
                        </button>
                    </li>
                    <li className="p-1">
                        <button
                            onClick={() => navigate("/chat")}
                            className={
                                location.pathname === "/chat"
                                    ? "btn btn-outline btn-primary"
                                    : ""
                            }
                        >
                            Trò chuyện
                        </button>
                    </li>
                    <li className="p-1">
                        <button
                            onClick={() => navigate("/faq")}
                            className={
                                location.pathname === "/faq"
                                    ? "btn btn-outline btn-primary"
                                    : ""
                            }
                        >
                            FAQs
                        </button>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {isSignedIn ? (
                    <UserButton afterSignOutUrl="/" />
                ) : (
                    <button
                        onClick={() => navigate("/signin")}
                        className={
                            location.pathname === "/signin"
                                ? "btn btn-outline btn-primary"
                                : ""
                        }
                    >
                        Đăng nhập
                    </button>
                )}
            </div>
        </div>
    );
}

export default NavBar;
