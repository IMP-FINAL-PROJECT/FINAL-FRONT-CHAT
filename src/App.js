import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./styles/chatbot.css";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Router 컴포넌트 가져오기

function App() {
  return (
    <Router>
      <div className="App">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </Router>
  );
}

export default App;
