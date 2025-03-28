'use client'; // Next.js appディレクトリなら必要
import { SearchUser } from '../search/page';
import { useState } from 'react';

const mockUsers = [
  { id: 1, name: '山田 太郎', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: '佐藤 花子', avatar: 'https://via.placeholder.com/40' },
  { id: 3, name: '鈴木 次郎', avatar: 'https://via.placeholder.com/40' },
];

export default function UserList() {
  const [keyword, setKeyword] = useState('');

  const filterdUsers = keyword.trim()
    ? mockUsers.filter((user) => user.name.includes(keyword))
    : mockUsers;
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2
        style={{
          backgroundColor: '#00c853',
          color: 'white',
          padding: '10px 16px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      >
        ユーザー一覧
      </h2>
      {/* 検索入力を渡す */}
      <SearchUser keyword={keyword} setKeyword={setKeyword} />
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          border: '1px solid #ccc',
          borderTop: 'none',
        }}
      >
        {filterdUsers.map((user) => (
          <li
            key={user.id}
            data-name={user.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              borderBottom: '1px solid #eee',
            }}
          >
            <img
              src={user.avatar}
              alt={user.name}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                marginRight: 12,
              }}
            />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
