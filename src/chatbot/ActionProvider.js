import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { createClientMessage } from "react-chatbot-kit";
import LoadingScreen from "../components/Loading";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const number = searchParams.get("number");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/chat/history?id=${id}&number=${number}`
      )
      .then((response) => {
        const startmessage = createChatBotMessage(
          "안녕하세요! 궁금한 내용을 입력해주세요."
        );
        if (response.data && response.data.data.chat) {
          const newMessages = response.data.data.chat.flatMap((item) => [
            createClientMessage(item.request),
            createChatBotMessage(item.response),
          ]);
          setState((prev) => ({
            ...prev,
            messages: [startmessage, ...newMessages],
          }));
        }
      })
      .catch((e) => {
        console.log("Request failed:", e);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }, [id, number, setState, createChatBotMessage, createClientMessage]);

  const handlemessage = async (message) => {
    setLoading(true); // Start message handling
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/chat/question`,
        {
          id,
          number,
          request: message,
        }
      );
      const botMessage = createChatBotMessage(response.data.data.response);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false); // End message handling
    }
  };

  return (
    <div>
      {loading && <LoadingScreen />}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { actions: { handlemessage } })
      )}
    </div>
  );
};

export default ActionProvider;
