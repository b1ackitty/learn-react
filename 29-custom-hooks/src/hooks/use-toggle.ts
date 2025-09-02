import { useState } from 'react'

export default function useToggleState(initialValue: boolean = true) {
  // [관심사] 토글 상태 관리
  // 상태
  const [toggle, setToggle] = useState<boolean>(initialValue)

  // 상태 업데이트
  const update = () => setToggle((t) => !t)

  // 사용자 정의 함수의 반환값 타입 [state, setState]
  return [toggle, update] as const
}
