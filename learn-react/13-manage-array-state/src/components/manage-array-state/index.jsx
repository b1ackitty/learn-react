import { useState } from 'react'
import './style.css'

const INITIAL_ARRAY_STATE = ['A', 'B', 'C']

export default function ManageArrayState() {
  const [arrayState, setArrayState] = useState(INITIAL_ARRAY_STATE)
  const maxValue = arrayState.length - 1

  const handleRemoveFirstItem = () => {
    if (arrayState.length === 0) return
    const [, ...nextArrayState] = arrayState
    setArrayState(nextArrayState)
  }

  const handleRemoveB = () => {
    const nextArrayState = arrayState.filter((item) => item !== 'B')
    setArrayState(nextArrayState)
  }

  const handleAddFirstX = () => {
    const nextArrayState = ['X', ...arrayState]
    setArrayState(nextArrayState)
  }

  const handleAddLastY = () => {
    const nextArrayState = [...arrayState, 'Y']
    setArrayState(nextArrayState)
  }

  const handleRemoveAll = () => {
    setArrayState([])
  }

  const handleReset = () => {
    setArrayState(INITIAL_ARRAY_STATE)
  }

  const handleChangeAtoH = () => {
    const nextArrayState = arrayState.map((item) => (item === 'A' ? 'H' : item))
    setArrayState(nextArrayState)
  }

  const [addValue, setAddValue] = useState('')
  const handleAddFirstValue = () => {
    setArrayState((as) => [addValue, ...as])
    setAddValue('')
  }
  const handleEnterKey = (e) => {
    if (addValue.trim().length === 0) return
    if (e.key === 'Enter' && !e.shiftKey) handleAddFirstValue()
  }

  const [insertValue, setInsertValue] = useState('')
  const [insertIndex, setInsertIndex] = useState(0)
  const handleInsertValue = () => {
    const nextArrayState = [
      ...arrayState.slice(0, insertIndex),
      insertValue,
      ...arrayState.slice(insertIndex),
    ]
    setArrayState(nextArrayState)
    setInsertValue('')
    setInsertIndex(0)
  }

  return (
    <section className="manage-array-state">
      <h2>배열 상태 관리 실습</h2>

      <output>
        <strong>배열 상태</strong> : {arrayState.join(', ')}
      </output>

      <div role="group">
        <button type="button" onClick={handleRemoveFirstItem}>
          첫 번째 요소 제거
        </button>
        <button type="button" onClick={handleRemoveB}>
          'B' 제거
        </button>
        <button type="button" onClick={handleAddFirstX}>
          맨 앞에 'X' 추가
        </button>
        <button type="button" onClick={handleAddLastY}>
          맨 뒤에 'Y' 추가
        </button>
        <button type="button" onClick={handleRemoveAll}>
          모두 제거
        </button>
        <button type="button" onClick={handleReset}>
          초기화
        </button>
        <button type="button" onClick={handleChangeAtoH}>
          모든 'A'를 'H'로 변경
        </button>
      </div>

      <div role="group" data-layout-row>
        <input
          type="text"
          placeholder="추가할 값"
          value={addValue}
          onInput={(e) => setAddValue(e.target.value)}
          onKeyDown={handleEnterKey}
        />
        <button type="button" onClick={handleAddFirstValue}>
          맨 앞에 추가
        </button>
      </div>

      <div role="group" data-layout-row>
        <input
          type="text"
          placeholder="추가할 값"
          value={insertValue}
          onChange={(e) => setInsertValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="인덱스"
          min={0}
          max={maxValue}
          value={insertIndex}
          onInput={(e) => setInsertIndex(Number(e.target.value))}
        />
        <button type="button" onClick={handleInsertValue}>
          원하는 위치에 추가
        </button>
      </div>
    </section>
  )
}
