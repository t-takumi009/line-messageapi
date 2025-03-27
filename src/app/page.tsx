'use client'; // Next.js appディレクトリなら必要
import { useRef, useEffect } from 'react';

const mockUsers = [
  { id: 1, name: '山田 太郎', avatar: 'https://via.placeholder.com/40' },
  { id: 2, name: '佐藤 花子', avatar: 'https://via.placeholder.com/40' },
  { id: 3, name: '鈴木 次郎', avatar: 'https://via.placeholder.com/40' },
];

export default function UserList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // フィルター関数
  const handleInput = () => {
    const keyword = inputRef.current?.value || '';
    const items = listRef.current?.querySelectorAll('li') || [];

    items.forEach((li) => {
      const text = li.getAttribute('data-name') || '';
      const visible = text.includes(keyword);
      (li as HTMLElement).style.display = visible ? 'flex' : 'none';
    });
  };

  // 初期化で全件表示を保証（オプション）
  useEffect(() => {
    handleInput();
  }, []);

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

      <input
        className = "w-full py-2 px-3 border-1 border-solid border-[#ccc] border-b-0"
        ref={inputRef}
        type="text"
        placeholder="名前で検索"
        onInput={handleInput}
    />

      <ul
        ref={listRef}
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          border: '1px solid #ccc',
          borderTop: 'none',
        }}
      >
        {mockUsers.map((user) => (
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
