"use client";
import { useEffect } from "react";
import { useUserStore } from "../hooks/store/user";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Home() {
  const { user } = useUserStore();
  console.log("User:", user);
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login");
  };

  useEffect(() => {
    if (!user) {
      handleRedirect();
    }
  }, [user]);
  return (
    <div>
      {user ? (
        <div>
          <h1>Home Page</h1>
          <p>Welcome to the Anime Next Gen application!</p>
        </div>
      ) : (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 overflow-hidden text-white">
          <div className="absolute inset-0 bg-black/60 z-10" />

          <Card className="z-20 w-full max-w-md border-none bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white shadow-2xl rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
                <Sparkles className="text-yellow-300" />
                Você será redirecionado em breve
              </CardTitle>
            </CardHeader>
            <CardContent className="flex text-center items-center justify-center flex-col">
              <p className="text-sm text-zinc-300">
                Faça login para continuar sua jornada.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
