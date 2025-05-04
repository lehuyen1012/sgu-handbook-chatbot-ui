import HowItWorks from "../components/HowItWorks";
import Footer from "../components/footer";

const dataFAQs = [
    {
        question: "Chatbot hoạt động như thế nào?",
        answer: (
            <>
                <p>
                    Chatbot hoạt động bằng cách nhận đầu vào từ người dùng, sau
                    đó sử dụng mô hình ngôn ngữ lớn (LLM) như GPT để hiểu và
                    phản hồi lại. Khi kết hợp với LangGraph, chatbot có thể xử
                    lý luồng hội thoại phức tạp thông qua sơ đồ trạng thái –
                    giúp điều hướng giữa các bước như phân tích, gọi công cụ
                    hoặc trả lời.
                </p>
                <p className="mt-4">
                    AI Agent đóng vai trò như một trợ lý thông minh, biết tự
                    động gọi công cụ (ví dụ như tra cứu thời tiết, tính toán...)
                    và phối hợp với LLM để đưa ra câu trả lời chính xác, tự
                    nhiên. Sự kết hợp giữa LangGraph, AIAgent và LLM giúp
                    chatbot trở nên linh hoạt, thông minh và có khả năng xử lý
                    các tác vụ nâng cao.
                </p>
                <div className="mt-6">
                    <HowItWorks />
                </div>
            </>
        ),
    },
    {
        question: "Cách sử dụng chatbot để tra cứu thông tin hiệu quả.",
        answer: "Để sử dụng chatbot hiệu quả, hãy đặt câu hỏi rõ ràng, cụ thể và tránh câu dài, mơ hồ. Bạn nên cung cấp đủ thông tin đầu vào để chatbot hiểu đúng nhu cầu. Khi làm việc với chatbot AI như GPT, bạn có thể yêu cầu nó đóng vai (ví dụ: “Hãy đóng vai một chuyên gia tư vấn học tập”) để nhận được câu trả lời phù hợp hơn. Ngoài ra, hãy trao đổi theo từng bước nhỏ, không nên gộp quá nhiều yêu cầu trong một lần hỏi để tránh gây hiểu lầm cho chatbot.",
    },
    {
        question: "Thông tin từ chatbot có đáng tin cậy không?",
        answer: "Thông tin từ chatbot có thể đáng tin cậy trong nhiều trường hợp, đặc biệt khi chatbot được xây dựng trên nền tảng mô hình ngôn ngữ lớn (LLM) hiện đại và được huấn luyện kỹ lưỡng. Tuy nhiên, chatbot vẫn có thể đưa ra thông tin sai lệch, lỗi thời hoặc không chính xác, đặc biệt nếu dữ liệu huấn luyện không cập nhật hoặc thiếu nguồn xác thực. Vì vậy, người dùng nên kiểm tra chéo thông tin quan trọng từ các nguồn chính thống trước khi sử dụng, đặc biệt trong các lĩnh vực như y tế, pháp luật, hay học thuật.",
    },
    {
        question: "Liên hệ hỗ trợ như thế nào?",
        answer: "Gửi câu hỏi vào hộp thư daihocsaigoc@sgu.edu.vn của trường để có thể được liên hệ hỗ trợ 1 cách nhanh nhất. ",
    },
];
function FAQPage() {
    return (
        <div className="flex flex-col justify-center items-center h-auto">
            <div className="md:w-[50%] py-7 mb-10">
                <h1 className="text-3xl text-center font-bold p-5">
                    Những câu hỏi thường gặp (FAQs)
                </h1>
                {dataFAQs.map((item, i) => (
                    <div
                        key={i}
                        className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white"
                    >
                        <input type="checkbox" />
                        <div className="collapse-title text-base font-bold">
                            {item.question}
                        </div>
                        <div className="collapse-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center items-center pt-10">
                <Footer />
            </div>
        </div>
    );
}
export default FAQPage;
