import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import React from "react";

const steps = [
    {
        icon: <FileText size={64} strokeWidth={2} />,
        title: "Gửi câu hỏi",
        description:
            "Các câu hỏi và thắc mắc của sinh viên được gửi cho chatbot.",
    },
    {
        icon: <BrainCircuit size={64} strokeWidth={2} />,
        title: "Xử lý bằng AI",
        description:
            "Chatbot sử dụng AI để hiểu nội dung và tìm kiếm thông tin phù hợp.",
    },
    {
        icon: <FileOutput size={64} strokeWidth={2} />,
        title: "Phản hồi nhanh chóng",
        description:
            "Câu trả lời được phản hồi nhanh chóng và chính xác ngay trên giao diện.",
    },
];

const StepItem = ({ icon, title, description }) => {
    return (
        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-colors group w-full">
            <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-violet-500/10 to-transparent group-hover:from-violet-500/20 transition-colors">
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

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex items-stretch"
                        >
                            <StepItem {...step} />

                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <MoveRight
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
