import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { TypeAnimation } from "react-type-animation";
import sgu_img from "../assets/sgu_img.png";
function ChatBot(props) {
  const messagesEndRef = useRef(null);
  const [timeOfRequest, SetTimeOfRequest] = useState(0);
  let [promptInput, SetPromptInput] = useState("");
  let [chatHistory, SetChatHistory] = useState([]);

  const commonQuestions = [
    "Điều kiện nhận học bổng?",
    "Bao nhiêu điểm thì học lực Xuất sắc?",
    "Bao nhiêu điểm thì học lực Giỏi?",
    "Bao nhiêu điểm thì học lực Khá?",
    "Điều kiện thực tập tốt nghiệp là gì?",
    "Điều kiện nào để được xét chuyển trường?",
    "Lệ phí cấp bảng điểm là bao nhiêu?",
    "Nếu điểm thi kết thúc học phần < 4 thì như thế nào?",
    "Phí cấp lại thẻ sinh viên khi bị mất là bao nhiêu?",
    "Để đạt loại tốt điểm rèn luyện cần bao nhiêu điểm?",
    "Nếu sinh viên không đạt ở một học phần, phải làm gì?",
  ];
  let [isLoading, SetIsLoad] = useState(false);
  let [isGen, SetIsGen] = useState(false);
  const [dataChat, SetDataChat] = useState([
    [
      "start",
      [
        "SGU Chatbot xin chào! Bạn muốn tìm kiếm thông tin gì? Đừng quên chọn nguồn tham khảo phù hợp để mình có thể giúp bạn tìm kiếm thông tin chính xác nhất nha. 😄",
      ],
    ],
  ]);
  useEffect(() => {
    ScrollToEndChat();
  }, [isLoading]);
  useEffect(() => {
    const interval = setInterval(() => {
      SetTimeOfRequest((timeOfRequest) => timeOfRequest + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function ScrollToEndChat() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onChangeHandler = (event) => {
    SetPromptInput(event.target.value);
  };

  async function SendMessageChat() {
    if (promptInput !== "" && isLoading === false) {
      SetTimeOfRequest(0);
      SetIsGen(true), SetPromptInput("");
      SetIsLoad(true);
      SetDataChat((prev) => [...prev, ["end", [promptInput]]]);
      SetChatHistory((prev) => [promptInput, ...prev]);

      // fetch(
      //     "https://toad-vast-civet.ngrok-free.app/rag/" +
      //         sourceData +
      //         "?q=" +
      //         promptInput,
      //     {
      //         method: "get",
      //         headers: new Headers({
      //             "ngrok-skip-browser-warning": "69420",
      //         }),
      //     }
      // )
      fetch("https://5717-34-81-163-149.ngrok-free.app/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({
          question: promptInput.toString(),
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          SetDataChat((prev) => [
            ...prev,
            [
              "start",
              [
                result.answer,
                result?.source_documents ? result.source_documents : [],
              ],
            ],
          ]);
          SetIsLoad(false);
        })
        .catch((error) => {
          SetDataChat((prev) => [
            ...prev,
            ["start", ["Lỗi, không thể kết nối với server"]],
          ]);
          SetIsLoad(false);
          console.error("Error:", error);
        });
    }
  }

  async function sendCommonQuestion(message) {
    if (message !== "" && isLoading === false) {
      SetTimeOfRequest(0);
      SetIsGen(true);
      SetPromptInput(""); // clear luôn ô input
      SetIsLoad(true);

      // Hiện câu hỏi của user ngay trong khung chat
      SetDataChat((prev) => [...prev, ["end", [message]]]);
      SetChatHistory((prev) => [message, ...prev]);

      try {
        const response = await fetch(
          "https://5717-34-81-163-149.ngrok-free.app/api/ask",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify({
              question: message.toString(),
            }),
          }
        );

        const result = await response.json();

        SetDataChat((prev) => [...prev, ["start", [result.answer]]]);
      } catch (error) {
        console.error("Error:", error);
        SetDataChat((prev) => [
          ...prev,
          ["start", ["Lỗi, không thể kết nối với server"]],
        ]);
      } finally {
        SetIsLoad(false);
      }
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      SendMessageChat();
    }
  };

  let [reference, SetReference] = useState({
    title: "",
    source: "",
    url: "",
    text: ``,
    keywords: [],
  });

  const handleReferenceClick = (source) => {
    SetReference({
      title: source.title,
      source: "Đại học Sài Gòn ",
      url: "https://ctsv.sgu.edu.vn/dd/trai/stsv.php",
      text: source.content,
      keywords: source.keywords,
    });
  };
  console.log("reference", reference);

  return (
    <div className=" h-[85vh] w-full">
      <div className="hidden lg:block lg:w-[30%] xl:w-[25%] 2xl:w-[20%]   drawer-side absolute left-3 mt-2 drop-shadow-md px-10">
        <div className="menu p-4 w-full min-h-full bg-gray-50 text-base-content rounded-2xl mt-3 overflow-auto scroll-y-auto max-h-[80vh]">
          {/* Sidebar content here */}
          <ul className="menu text-sm">
            <h2 className="font-bold mb-2 text-black">Lịch sử trò chuyện</h2>
            {chatHistory.length == 0 ? (
              <p className="text-sm text-gray-500 ">
                Hiện chưa có cuộc trò chuyện nào
              </p>
            ) : (
              ""
            )}
            {chatHistory.map((mess, i) => (
              <li key={i}>
                <p>
                  <FontAwesomeIcon icon={faMessage} />
                  {mess.length < 20 ? mess : mess.slice(0, 20) + "..."}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden lg:block lg:w-[30%] xl:w-[25%] 2xl:w-[20%]  drawer-side absolute mt-2 right-3 drop-shadow-md px-10">
        <div
          className="menu p-4 min-h-full bg-gray-50 text-base-content 
        rounded-2xl mt-3  overflow-auto scroll-y-auto max-h-[80vh]
        scrollbar-thin scrollbar-thumb-gray-300 
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
        "
        >
          {/* Sidebar content here */}
          <ul className="menu text-sm">
            <h2 className="font-bold mb-2 text-black">
              Những câu hỏi phổ biến
            </h2>

            {commonQuestions.map((mess, i) => (
              <li
                key={i}
                onClick={() => {
                  sendCommonQuestion(mess);
                }}
              >
                <p className="">
                  <FontAwesomeIcon icon={faMessage} />
                  {mess}
                  {/* {mess.length < 20 ? mess : mess.slice(0, 20) + "..."} */}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={"flex justify-center h-[80vh] "}>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{reference.title}</h3>{" "}
            <p className="font-normal text-sm">Nguồn: {reference.source}</p>
            <p className="py-4 text-sm">{reference.text}</p>
            {reference.keywords && reference.keywords.length > 0 && (
              <div className="my-2">
                <p className="font-semibold text-sm">Từ khóa:</p>
                <ul className="list-disc list-inside text-sm">
                  {reference.keywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="link link-primary truncate">
              <a href={reference.url} target="_blank">
                {reference.url}
              </a>
            </p>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn btn-error">
                ĐÓNG
              </label>
            </div>
          </div>
        </div>

        <div
          id="chat-area"
          className="
          mt-5 text-sm 
          scrollbar-thin scrollbar-thumb-gray-300 bg-white  
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
          rounded-3xl border-2 w-[80%] lg:w-[40%] xl:w-[50%] 2xl:w-[60%] md:p-3 p-1 overflow-auto scroll-y-auto h-[80%] "
        >
          {dataChat.map((dataMessages, i) =>
            dataMessages[0] === "start" ? (
              <div className="chat chat-start drop-shadow-md mt-3 ml-3" key={i}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full border-2 border-[var(--light-blue)]">
                    <img className="scale-150" src={sgu_img} />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-info colo break-words bg-[#f5f5f5]">
                  <TypeAnimation
                    style={{ whiteSpace: "pre-line" }}
                    sequence={[
                      // () => ScrollToEndChat(),
                      dataMessages[1][0],

                      () => SetIsGen(false),
                      // SetIsLoad(false),
                      // .replace("\n\n", "")
                      // .split("\n")
                      // .map((item, key) => {
                      //   return (
                      //     <>
                      //       {item.replace(/ /g, "\u00A0")}
                      //       <br />
                      //     </>
                      //   );
                      // })
                    ]}
                    cursor={false}
                    // wrapper="span"
                    speed={100}
                  />
                  {i !== 0 && dataMessages[1][1]?.length > 0 && (
                    <>
                      <div className="divider m-0"></div>
                      <p className="font-semibold text-xs">
                        Tham khảo:{" "}
                        {dataMessages[1][1].map((source, index) => (
                          <label
                            htmlFor="my_modal_6"
                            className="kbd kbd-xs mr-1 hover:bg-sky-300 cursor-pointer"
                            onClick={() => handleReferenceClick(source)}
                            key={index}
                          >
                            {source.title}
                          </label>
                        ))}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="chat chat-end mt-3">
                <div
                  className="chat-bubble shadow-xl chat-bubble-primary text-white"
                  style={{
                    background: "linear-gradient(to bottom, #06b6d4, #3b82f6)",
                  }}
                >
                  {dataMessages[1][0]}
                  <>
                    <div className="divider m-0"></div>
                    <p className="font-light text-xs text-cyan-50">
                      Tham khảo: SGU
                    </p>
                  </>
                </div>
              </div>
            )
          )}
          {isLoading ? (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border-2 border-[var(--light-blue)]">
                  <img src={sgu_img} />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-info">
                <ScaleLoader
                  color="#000000"
                  loading={true}
                  height={10}
                  width={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                <p className="text-xs font-medium">{timeOfRequest + "/60s"}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div ref={messagesEndRef} />
          <div className="absolute bottom-[0.2rem] grid w-[80%] lg:w-[40%] xl:w-[50%] 2xl:w-[60%] ">
            <input
              type="text"
              placeholder="Nhập câu hỏi tại đây..."
              className="mr-1 shadow-xl border-2 focus:outline-none px-2 rounded-2xl input-primary col-start-1 md:col-end-12 col-end-11 "
              onChange={onChangeHandler}
              onKeyDown={handleKeyDown}
              disabled={isGen}
              value={promptInput}
            />

            <button
              disabled={isGen}
              onClick={() => SendMessageChat()}
              className={
                " drop-shadow-md md:col-start-12 rounded-2xl col-start-11 col-end-12 md:col-end-13 btn btn-active btn-primary btn-square bg-gradient-to-tl from-transparent via-blue-600 to-indigo-500"
              }
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                color="white"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
            <p className=" text-xs col-start-1 col-end-12 text-justify p-1">
              <b>Lưu ý: </b>Mô hình có thể đưa ra câu trả lời không chính xác ở
              một số trường hợp, vì vậy hãy luôn kiểm chứng thông tin bạn nhé!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatBot;
