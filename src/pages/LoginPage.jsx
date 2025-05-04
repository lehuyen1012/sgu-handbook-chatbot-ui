import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signin from "../assets/signin.png";

const LoginPage = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const navigate = useNavigate();

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            const result = await signIn.create({
                identifier,
                password,
            });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                navigate("/chat");
            } else {
                console.log(result);
            }
        } catch (err) {
            console.error(err.errors);
            setError(err.errors[0]?.message || "Đã có lỗi xảy ra");
        }
    };

    return (
        <div className="flex min-h-[85vh] items-center justify-center bg-[var(--blue-pastel)] p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="flex flex-col md:flex-row rounded-xl overflow-hidden w-full">
                <div className="hidden md:block flex-1 relative">
                    <img
                        src={signin}
                        alt="Students illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Phần form bên phải */}
                <div className="flex-1 flex justify-center items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col gap-4 w-full max-w-md bg-white rounded-md shadow"
                    >
                        <h1 className="text-2xl md:text-3xl font-bold">
                            Đăng nhập ngay!
                        </h1>
                        <h2 className="text-gray-400 text-sm max-w-xs pb-4">
                            Chào mừng bạn đến với hệ thống quản lý trường học.
                            Hãy đăng nhập để tiếp tục nhé.
                        </h2>

                        <div className="space-y-6">
                            {error && (
                                <div className="text-red-500 text-sm">
                                    {error}
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">
                                    Tên đăng nhập
                                </label>
                                <input
                                    type="text"
                                    value={identifier}
                                    onChange={(e) =>
                                        setIdentifier(e.target.value)
                                    }
                                    required
                                    className="p-2.5 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">
                                    Mật khẩu
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    className="p-2.5 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="!bg-[var(--light-blue)]  text-white font-medium rounded-md text-sm py-3 mt-6 transition-colors"
                        >
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
