import Image from 'next/image'

import React from "react";
import  Style  from './page.module.css';

const mockUsers = [
  { id: 1, name: "山田 太郎", avatar: "https://via.placeholder.com/40" },
  { id: 2, name: "佐藤 花子", avatar: "https://via.placeholder.com/40" },
  { id: 3, name: "鈴木 次郎", avatar: "https://via.placeholder.com/40" },
];

export default function UserList() {
  return (
    <div className="h-screen w-full bg-whith-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="bg-green-500 text-white text-lg font-semibold p-4">
          ユーザー一覧
        </div>
        <ul>
          {mockUsers.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 p-4 border-b hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-800 font-medium">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

