import { ChangeEvent, useState } from 'react'
import { LearnSection } from '@/components'
import { useInput, useToggleState } from '@/hooks'
import { tw } from '@/utils'

export default function App() {
  // [1] 토글 상태
  // 테마(theme)
  const [darkTheme, toggleDarkTheme] = useToggleState(false)

  const themeClassNames = darkTheme ? 'bg-slate-950 text-white' : ''
  const checkboxLabel = darkTheme ? '라이트 테마 전환' : '타크 테마 전환'

  // [2] 인풋 상태
  const [num, setNum] = useState<number>(0)
  const handleChangeNum = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value))
  }

  return (
    <LearnSection
      title="사용자 정의 훅(Custom Hooks)"
      showTitle
      className={tw('p-10 h-screen', themeClassNames)}
    >
      <div role="group" className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={darkTheme}
          onChange={toggleDarkTheme}
        />
        <label htmlFor="theme-checkbox" className="select-none">
          {checkboxLabel}
        </label>
      </div>
      <div role="group" className="flex flex-col gap-2 my-4">
        <label htmlFor="number-input">숫자</label>
        <input
          type="number"
          value={num}
          onChange={handleChangeNum}
          id="number-input"
          className="my-2"
          min={0}
          max={10}
        />
      </div>
      <output>{num}</output>
      <CustomHookDemo />
    </LearnSection>
  )
}

function CustomHookDemo() {
  const [toggle, setToggle] = useToggleState(true)

  const language = toggle ? 'ko' : 'en'
  const isKorean = language.includes('ko')

  const inputProps = useInput('')

  return (
    <>
      <div role="group" className="flex flex-col gap-2 my-4">
        <label htmlFor="user-input">이름</label>
        <input {...inputProps} type="text" id="user-input" className="my-2" />
        <output>{inputProps.value || '이름 값 출력'}</output>
      </div>
      <button
        type="button"
        className="select-none cursor-pointer bg-black text-white p-2"
        lang={isKorean ? 'en' : 'ko'}
        onClick={setToggle}
      >
        {isKorean ? 'change english' : '한국어 전환'}
      </button>
    </>
  )
}

// --------------------------------------------------------------------------
// 커스텀 훅(use로 시작하는 사용자 정의 함수)
