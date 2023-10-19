import { useState } from "react";
import { Input, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons";
import request from "axios";
// import { useNavigate } from "react-router-dom";
import "./App.css";
import left from "./left.png";
import apple from "./apple.png";
import google from "./google.png";

function App() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  // const navigate = useNavigate();
  return (
    <div className="App flex w-full h-screen px-10 py-16 bg-gray-100">
      <div className="left flex flex-col flex-1 items-center px-20 border-r">
        <img src={left} className=" w-full rounded-2xl mt-10" alt="" />
        <div className="flex gap-4 mt-5">
          <img className="" alt="" src={apple} />
          <img className="" alt="" src={google} />
        </div>
      </div>
      <div className="right flex flex-col flex-1 px-20">
        <div className="login text-left text-green-500 font-semibold text-4xl">
          Login
        </div>
        <div className="mt-16">
          <div className="text-base mb-1 text-gray-600 font-semibold">
            Email
          </div>
          <Input
            className="h-[50px]"
            size="large"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            prefix={<UserOutlined className="mr-2" />}
          />
        </div>
        <div className="mt-10">
          <div className=" text-base mb-1 text-gray-600 font-semibold">
            Password
          </div>
          <Input.Password
            className="h-[50px]"
            size="large"
            prefix={<UserOutlined className="mr-2" />}
            placeholder="Enter your password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between mt-8 mb-10">
          <Checkbox onChange={() => {}}>Rember me</Checkbox>
          <a href="xxxx" className="hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="flex flex-col">
          <button
            className=" bg-green-500 text-white py-4 rounded"
            onClick={async () => {
              if (email === "" || pwd === "") {
                console.log("nope");
                return;
              }
              try {
                const { data } = await request.post(
                  "https://clare1.ngrok.io/api/v1/login",
                  {
                    name: email,
                    password: pwd,
                  }
                );
                const { data: data1 } = await request.get(
                  `https://clare1.ngrok.io/api/v1/welcome/${data.token}`
                );

                window.open(`/token?token=${data1.token}`);

                // navigate(`/token?token=${data1.token}`);
              } catch (error) {}
            }}
          >
            Login
          </button>
          <p className="w-full text-center text-xl mt-6">
            Do not have an account?{" "}
            <a href="xxxx" className="text-green-500">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
