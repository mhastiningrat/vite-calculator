import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

function Login() {
  return (
    <div className="bg-black w-full h-lvh flex justify-center items-center">
      <div class="bg-black border-2 w-1/4 border-green-300 rounded-lg p-6 text-white
            shadow-[0_0_10px_rgba(0,255,0,0.8),0_0_20px_rgba(0,255,0,0.6)]">
            <h2 className="font-bold">Silahkan Masuk !</h2>
            <Input type='text' label="username"/>
            <Input type='text' label="password"/>
            <Button text="Log in"/>
      </div>
    </div>
  );
}

export default Login;
