import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface LoginFormProps {
  userChoice?: "login" | "register";
  updateUserChoice: (choice: "login" | "register") => void;
  loginOrRegister: () => void;
  userName?: string;
  password?: string;
  setUserName?: (name: string) => void;
  setPassword?: (password: string) => void;
}

export function LoginForm({
  className,
  userChoice,
  updateUserChoice,
  loginOrRegister,
  userName,
  setUserName,
  password,
  setPassword,
  ...props
}: React.ComponentProps<"form"> & LoginFormProps) {
  const isLogin = userChoice === "login";
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {isLogin ? "Entre com a sua conta" : "Crie uma nova conta"}
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          {isLogin
            ? "Insira seu nome de usuário e senha abaixo para entrar na sua conta"
            : "Insira um nome de usuário e senha abaixo para criar uma nova conta"}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="username">Nome de usuário</Label>
          <Input
            placeholder="Insira seu nome de usuário"
            required
            value={userName}
            autoComplete="username"
            onChange={(e) => setUserName?.(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <Input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword?.(e.target.value)}
          />
        </div>
        <Button
          className="w-full"
          disabled={!userName || !password}
          onClick={(e) => {
            e.preventDefault();
            loginOrRegister();
          }}
        >
          {isLogin ? "Entrar" : "Criar conta"}
        </Button>
      </div>
      <div className="text-center text-sm">
        {isLogin ? "Já tem uma conta? " : "Não tem uma conta? "}
        <a
          onClick={() => updateUserChoice(isLogin ? "register" : "login")}
          className="underline underline-offset-4 hover:cursor-pointer hover:text-blue-800 hover:text-bold"
        >
          {isLogin ? "Cadastre-se" : "Faça login"}
        </a>
      </div>
    </form>
  );
}
