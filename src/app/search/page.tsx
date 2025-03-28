'use crient'

import { ChangeEvent } from 'react'

export function SearchUser({ keyword, setKeyword }: { keyword: string; setKeyword: (value: string) => void }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <input
      className="w-full py-2 px-3 border-1 border-solid border-[#ccc] border-b-0"
      type="text"
      placeholder="名前で検索"
      value={keyword}
      onChange={handleChange}
    />
  )
}
