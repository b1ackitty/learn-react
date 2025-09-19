import { useReducer } from 'react'
import { init, minusAction, plusAction, reducer } from './reducer'

export default function useCounter({
  count = 0,
  step = 1,
  min = 0,
  max = 9,
} = {}) {
  const [state, dispatch] = useReducer(reducer, count, init)

  const isMinDisabled = state.count === min
  const isMaxDisabled = state.count === max

  const handleMinus = () => dispatch(minusAction(step, max))
  const handlePlus = () => dispatch(plusAction(step, min))

  return {
    ...state,
    isMinDisabled,
    isMaxDisabled,
    onPlus: handlePlus,
    onMinus: handleMinus,
  }
}
