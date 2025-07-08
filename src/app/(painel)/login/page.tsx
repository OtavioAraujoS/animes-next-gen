"use client";
import { Cat } from "lucide-react";
import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { toast } from "sonner";

export default function LoginPage() {
  const [userChoice, setUserChoice] = useState<"login" | "register">("login");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginOrRegister = () => {
    try {
      console.log({ userName, password });
      throw new Error("Simulação de erro");
    } catch {
      return toast("Erro ao tentar fazer login ou registrar", {
        description: "Verifique suas credenciais e tente novamente.",
        icon: "⚠️",
        duration: 5000,
        position: "top-right",
        style: {
          backgroundColor: "#c1121f",
          color: "#ffffff",
          fontSize: "0.9rem",
        },
      });
    }
  };
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Cat className="size-4" />
            </div>
            Animes Next Gen
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm
              updateUserChoice={setUserChoice}
              userChoice={userChoice}
              loginOrRegister={handleLoginOrRegister}
              userName={userName}
              setUserName={setUserName}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/loginPage.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
