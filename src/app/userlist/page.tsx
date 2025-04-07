'use client'; // Next.js appディレクトリなら必要
import { SearchUser } from '../search/page';
import { useState } from 'react';
import styles from '../userlist/page.module.css';

//prettier-ignore
const mockUsers = [
  { id: 1, name: '山田 太郎', userid: 'U28b385197f92fde13cc689aef12d1298aaaaaaaaaaaaaaaaaaaaaaaaaaaaa' ,created_at: '2023-10-01 12:00:00'},
  { id: 2, name: '田中 一郎', userid: 'U28b385197f92fde13cc689aef12d12980' ,created_at: '2023-10-01 12:00:00'},
  { id: 3, name: '佐藤 花子', userid: 'U28b385197f92fde13cc689aef12d12981' ,created_at: '2023-10-01 12:00:00'},
  { id: 4, name: '鈴木 次郎', userid: 'U28b385197f92fde13cc689aef12d12982' ,created_at: '2023-10-01 12:00:00'},
  { id: 5, name: '高橋 三郎', userid: 'U28b385197f92fde13cc689aef12d12983' ,created_at: '2023-10-01 12:00:00'},
  { id: 6, name: '田中 四郎', userid: 'U28b385197f92fde13cc689aef12d12984' ,created_at: '2023-10-01 12:00:00'},
  { id: 7, name: '山田 五郎', userid: 'U28b385197f92fde13cc689aef12d12985' ,created_at: '2023-10-01 12:00:00'},
  { id: 8, name: '佐藤 六郎', userid: 'U28b385197f92fde13cc689aef12d12986' ,created_at: '2023-10-01 12:00:00'},
  { id: 9, name: '鈴木 七郎', userid: 'U28b385197f92fde13cc689aef12d12987' ,created_at: '2023-10-01 12:00:00'},
  { id: 10, name: '高橋 八郎', userid: 'U28b385197f92fde13cc689aef12d12988' ,created_at: '2023-10-01 12:00:00'},
  { id: 11, name: '田中 九郎', userid: 'U28b385197f92fde13cc689aef12d12989' ,created_at: '2023-10-01 12:00:00'},
  { id: 12, name: '山田 十郎', userid: 'U28b385197f92fde13cc689aef12d12990' ,created_at: '2023-10-01 12:00:00'},
  { id: 13, name: '佐藤 十一郎', userid: 'U28b385197f92fde13cc689aef12d12991' ,created_at: '2023-10-01 12:00:00'},
  { id: 14, name: '鈴木 十二郎', userid: 'U28b385197f92fde13cc689aef12d12992' ,created_at: '2023-10-01 12:00:00'},
  { id: 15, name: '高橋 十三郎', userid: 'U28b385197f92fde13cc689aef12d12993' ,created_at: '2023-10-01 12:00:00'},
  { id: 16, name: '田中 十四郎', userid: 'U28b385197f92fde13cc689aef12d12994' ,created_at: '2023-10-01 12:00:00'},
  { id: 17, name: '山田 十五郎', userid: 'U28b385197f92fde13cc689aef12d12995' ,created_at: '2023-10-01 12:00:00'},
  { id: 18, name: '佐藤 十六郎', userid: 'U28b385197f92fde13cc689aef12d12996' ,created_at: '2023-10-01 12:00:00'},
  { id: 19, name: '鈴木 十七郎', userid: 'U28b385197f92fde13cc689aef12d12997' ,created_at: '2023-10-01 12:00:00'},
  { id: 20, name: '高橋 十八郎', userid: 'U28b385197f92fde13cc689aef12d12998' ,created_at: '2023-10-01 12:00:00'},

];

export default function UserList() {
  const [keyword, setKeyword] = useState('');

  const filterdUsers = keyword.trim()
    ? mockUsers.filter((user) => user.name.includes(keyword))
    : mockUsers;
  return (
    <div className=" ml-[50px] mr-[50px] whitespace-nowrap overflow-auto h-[600px]  mt-[100px] top-0  hidden-scrollbar">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          style={{
            backgroundColor: '#00c853',
            padding: '10px 16px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
          className=" sticky top-0  z-30 color-white"
        >
          ユーザー一覧
        </h2>
        <div className=" sticky bg-white  top-[40px] z-20  text-gray-800 dark:text-gray-800">
          {/* 検索入力を渡す */}
          <SearchUser keyword={keyword} setKeyword={setKeyword} />
        </div>
        <table className="border-collapse text-grey-300 dark:text-black">
          <thead>
            <tr>
              <th className="sticky border bg-white hover:bg-gray-200 top-[80px] z-10 table-th">
                ID
              </th>
              <th className="sticky border bg-white hover:bg-gray-200 top-[80px] z-10 table-th">
                名前
              </th>
              <th className="sticky border bg-white hover:bg-gray-200 top-[80px] z-10 table-th">
                ユーザーID
              </th>
              <th className="sticky border bg-white hover:bg-gray-200 top-[80px] z-10 table-th">
                データ登録日時
              </th>
            </tr>
          </thead>
          <tbody className=" bg-white ">
            {filterdUsers.map((user) =>
              //prettier-ignore
              <tr key={user.id} data-name={user.name} className="border-b-1 border-gray-300 hover:bg-gray-200 ">
            <th className=" px-4 py-2">{user.id}</th>
            <th className=" px-4 py-2">{user.name}</th>
            <th className=" px-4 py-2 overflow-x-scroll  hidden-scrollbar">{user.userid}</th>
            <th className=" px-4 py-2">{user.created_at}</th>
          </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
