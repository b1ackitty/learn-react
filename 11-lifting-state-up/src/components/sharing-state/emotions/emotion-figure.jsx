import EmotionFace from './emotion-face'
import StatusMessage from './status-message'

/**
 * EmotionFigure 컴포넌트
 * @param {Object} param
 * @param {Object} param.info - 감정 키와 메시지
 */
export default function EmotionFigure({ info }) {
  return (
    <>
      <EmotionFace face={info.key} />
      <StatusMessage>{info.message}</StatusMessage>
    </>
  )
}
