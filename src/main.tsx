import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "",
          colorPrimary: "#7ab800",
          colorPrimaryHover: "#616365",
          colorTextLabel: "#616365",
          colorPrimaryText: "#616365",
          colorText: "#616365",
          // colorBgContainer: "#7ab800"
          colorBgTextActive: "red",
        },
        components: {
          Table: {
            headerBg: "#e8eaec",
            headerColor: "#1e1e1e",
          },
          Pagination: {
            // itemActiveBg: "#7ab800",
            // itemActiveColorDisabled: "red",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
