import emotions from '@/data/emotions.json'
import './change-button.css'

export default function ChangeButton({ randomIndex, handleClick }) {
  return (
    <button type="button" className="change-button" onClick={handleClick}>
      {emotions[randomIndex].message}
    </button>
  )
}
