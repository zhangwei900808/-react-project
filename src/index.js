import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider, message } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/index.css";
import "./assets/css/base.scss";
import "./assets/css/override-antd.scss";

moment.locale("zh-cn");
message.config({
  duration: 2,
  maxCount: 1
});
//去掉所有页面的console.log
if (process.env.NODE_ENV === "production") {
  console.log = function() {};
}
ReactDOM.render(
  //增加antd对中文的支持
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
