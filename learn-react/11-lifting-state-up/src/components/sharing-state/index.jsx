import { useState } from 'react'
import emotions from '@/data/emotions.json'
import LearnSection from '../learn-section'
import ChangeButton from './change-button'
import { EmotionFigure } from './emotions'

export default function SharingState() {
  const calcRandomIndex = () => getRandomIndex(emotions.length)
  const [randomIndex, setRandomIndex] = useState(calcRandomIndex)
  const emotionInfo = emotions[randomIndex]

  const handleClick = () => {
    setRandomIndex(calcRandomIndex())
  }

  return (
    <LearnSection title="다른 컴포넌트와 상태 공유하기">
      <EmotionFigure info={emotionInfo} />
      <ChangeButton message={emotionInfo.message} onUpdate={handleClick} />
    </LearnSection>
  )
}

function getRandomIndex(limit) {
  return Math.floor(Math.random() * limit)
}
