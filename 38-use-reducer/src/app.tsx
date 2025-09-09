import { LearnSection } from '@/components'
import Counter from './counter'
import { useCounter } from './hooks'

export default function App() {
  const counterStore = useCounter({ count: 10, max: 20 })
  console.log(counterStore)

  return (
    <LearnSection
      title="랜덤 카운트 업"
      className="p-10 bg-black flex justify-center items-center h-screen"
    >
      <Counter count={9} step={3} min={8} max={22} />
    </LearnSection>
  )
}
