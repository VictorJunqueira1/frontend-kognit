"use client";

import { useEffect, useState } from "react";
import LoginPage from "@/auth/login";
import Notification from "@/pages/notifications";

export default function Home() {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    // Verifica se o usuário está logado
    const loggedIn = localStorage.getItem("isLogged"); // Utilizado localStorage para simular um banco de dados
    setIsLogged(loggedIn === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    setIsLogged(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  };

  return (
    <div>
      {isLogged ? (
        <div>
          <button onClick={handleLogout} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
            Sair
          </button>
          <Notification />
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}