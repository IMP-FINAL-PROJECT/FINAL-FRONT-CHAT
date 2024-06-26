import styled from "styled-components";
import React from "react";
interface Bot {
  isBot?: boolean;
}

const ChatMessageContainer = styled.div<Bot>`
  max-width: 85%;
  width: fit-content;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.isBot ? "#f2f2f2" : "#3377FF")};
  border-radius: ${(props) =>
    props.isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px"};
  margin-left: 0.4rem;
  color: ${(props) => (props.isBot ? "#3d4f6e" : "#ffffff")};
  padding: ${(props) => (props.isBot ? "0.8rem 1.2rem" : "0.7rem 1.1rem")};
  font-weight: ${(props) => (props.isBot ? "500" : "400")};
  font-size: 0.97rem;
  line-height: 1.3rem;
  word-break: keep-all;
`;

function ChatMessage({ message, bot }: any) {
  return <ChatMessageContainer isBot={bot}>{message}</ChatMessageContainer>;
}

export default ChatMessage;
