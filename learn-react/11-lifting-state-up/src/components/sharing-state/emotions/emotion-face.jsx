import './emotion-face.css'

/**
 * EmotionFace 컴포넌트
 * @param {Object} param
 * @param {string} param.face - 감정 키 값
 */
export default function EmotionFace({ face }) {
  return (
    <figure className="emotion-face">
      <img src={`/assets/emotions/${face}.jpg`} alt="" width={85} height={77} />
    </figure>
  )
}
