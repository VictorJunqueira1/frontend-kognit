"use client";

import { useEffect, useState } from "react";
import { Bell, Github } from "lucide-react";
import "@/app/globals.css";

interface Notification {
  id: number;
  title: string;
  body: string;
}

export default function Notification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Kognit</div>

        {/* Espaço vazio */}
        <div className="flex-1"></div>

        {/* Ícones à direita */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* Sino de Notificações */}
          <div className="relative">
            <button
              className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              onClick={() => setOpen(!open)}
            >
              <Bell className="w-6 h-6 text-gray-700" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 py-[0.5px] rounded-full">
                  {notifications.length}
                </span>
              )}
            </button>

            {/* Dropdown de Notificações */}
            {open && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-200 animate-fade-in">
                <h3 className="text-lg font-bold mb-2 text-gray-800">Notificações</h3>
                <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {notifications.slice(0, 10).map((notif) => (
                    <div key={notif.id} className="border-b last:border-none p-3 hover:bg-gray-100 transition">
                      <h4 className="font-semibold text-gray-800">{notif.title}</h4>
                      <p className="text-sm text-gray-600">{notif.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
