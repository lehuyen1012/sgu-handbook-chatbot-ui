import { BrainCircuit, FileOutput, FileText, MoveDown } from "lucide-react";
import React from "react";

const steps = [
    {
        icon: <FileText size={48} strokeWidth={2} />,
        title: "Gửi câu hỏi",
        description:
            "Các câu hỏi và thắc mắc của sinh viên được gửi cho chatbot.",
    },
    {
        icon: <BrainCircuit size={48} strokeWidth={2} />,
        title: "Xử lý bằng AI",
        description:
            "Chatbot sử dụng AI để hiểu nội dung và tìm kiếm thông tin phù hợp.",
    },
    {
        icon: <FileOutput size={48} strokeWidth={2} />,
        title: "Phản hồi nhanh chóng",
        description:
            "Câu trả lời được phản hồi nhanh chóng và chính xác ngay trên giao diện.",
    },
];

const StepItem = ({ icon, title, description }) => {
    return (
        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10  group w-full">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-2xl bg-linear-to-br from-violet-500/10 to-transparent transition-colors">
                    <div className="text-[var(--primary-button)]">{icon}</div>
                </div>
                <div className="flex flex-col flex-1 gap-1 justify-between">
                    <h4 className="text-center font-bold text-xl">{title}</h4>
                    <p className="text-center text-gray-600 text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Info() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-5xl">
                <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex items-stretch"
                        >
                            <StepItem {...step} />

                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute -bottom-10 right-1/2 transform -translate-y-1/2 translate-x-1/2 z-10">
                                    <MoveDown
                                        size={32}
                                        strokeWidth={1}
                                        className="text-[var(--light-blue)]"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
