"use client";
import { Cat } from "lucide-react";
import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { toast } from "sonner";
import { userService } from "@/services/userService";

export default function LoginPage() {
  const [userChoice, setUserChoice] = useState<"login" | "register">("login");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginOrRegister = async () => {
    try {
      const response = await userService.login({
        username: userName,
        password: password,
      });
      if (!response.success) {
        throw new Error(
          (response as { message?: string }).message || "Erro ao fazer login"
        );
      }
      toast("Login realizado com sucesso!", {
        description: "Você será redirecionado em breve.",
        icon: "✅",
        duration: 4000,
        position: "top-right",
        style: {
          backgroundColor: "#28a745",
          color: "#ffffff",
          fontSize: "0.85rem",
        },
      });
    } catch {
      return toast("Erro ao tentar fazer login ou registrar", {
        description: "Verifique suas credenciais e tente novamente.",
        icon: "⚠️",
        duration: 4000,
        position: "top-right",
        style: {
          backgroundColor: "#c1121f",
          color: "#ffffff",
          fontSize: "0.85rem",
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
