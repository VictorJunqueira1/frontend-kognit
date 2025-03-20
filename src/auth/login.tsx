"use client";

import { useState } from "react";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) { // Verifica se o usuário e senha foram preenchidos
      // Lógica de Login Válida
      onLogin(); // Dispara a função de login
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-slate-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl text-gray-800 font-bold mb-6 text-center">Bem-vindo!</h2>

        <input
          type="text"
          placeholder="Usuário"
          className="w-full p-3 border-2 border-gray-300 placeholder:text-gray-600 text-slate-800 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 border-2 border-gray-300 placeholder:text-gray-600 text-slate-800 rounded-lg mb-6 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
