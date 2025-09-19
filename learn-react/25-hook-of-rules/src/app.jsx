import { Component, useEffect, useState } from 'react'
import { LearnSection } from '@/components'
import RandomCountUp from '@/demo/app'

export default class App extends Component {
  render() {
    // 1. 클래스 컴포넌트 안에서 훅 호출 ❌
    // useEffect(() => {
    //   console.log('mounted')
    // }, [])

    // callEffect()

    return (
      <LearnSection title="리액트 훅의 규칙">
        <RandomCountUp />
        <CustomComponent />
      </LearnSection>
    )
  }
}

// 2. 일반 함수 안에서 훅 호출 ❌
// function callEffect() {
//   useEffect(() => {
//     console.log('mounted')
//   }, [])
// }

// 3. 사용자 정의 훅(use로 시작) 안에서 호출 ✅
export function useCumtomHook() {
  useEffect(() => {
    console.log('마운트 이후 실행')
  })
}

// 4. 함수형 컴포넌트(PascalCase) 훅 호출 ✅
function CustomComponent() {
  let isBlue = !true
  // if (isBlue) return null

  // 최대한 함수형 컴포넌트의 최상단에 훅을 위치시키는 것이 안전 ✅
  const [isPending] = useState(true)
  // for 문으로 감쌈 ❌
  // if 문으로 감쌈 ❌
  // if (isBlue) {
  useEffect(() => {
    if (isBlue) {
      console.log('마운트 이후 실행')
    }
  }, [isBlue])
  // }

  return <p className="text-8xl">{isPending.toString()}</p>
}
