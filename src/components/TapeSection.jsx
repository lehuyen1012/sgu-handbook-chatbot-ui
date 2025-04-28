import StarIcon from "../assets/star.svg";

const words = [
    "Giáo dục mầm non",
    "Giáo dục tiểu học",
    "Công nghệ thông tin",
    "Kỹ thuật và công nghệ",
    "Quản trị kinh doanh",
    "Toán và Ứng dụng",
    "Giáo dục",
    "Văn hóa và Du lịch",
    "Tài chính và Kế toán",
    "Ngoại ngữ",
    "Luật",
];
const TapeSection = () => {
    return (
        <div className="font-sans py-16 lg:py-24 overflow-x-clip">
            <div className="bg-gradient-to-r from-[var(--secondary)] to-[var(--light-blue)] -rotate-3 -mx-1">
                <div
                    className="flex"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <div className="flex flex-none gap-4 py-3">
                        {words.map((word) => (
                            <div
                                key={word}
                                className="inline-flex gap-4 items-center"
                            >
                                <span className="text-gray-900 uppercase font-extrabold text-sm">
                                    {word}
                                </span>
                                <img
                                    src={StarIcon}
                                    alt="Star Icon"
                                    className="size-6 text-gray-900 -rotate-12"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TapeSection;
