"use client";
import { useEffect } from "react";
import { useUserStore } from "../hooks/store/user";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useUserStore();
  console.log("User:", user);
  const router = useRouter()

  const handleRedirect = () => { 
    router.push("/login");
  }

  useEffect(() => {
    if (!user) {
      handleRedirect();
    }
  }, [user]);
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Anime Next Gen application!</p>
    </div>
  );
}
