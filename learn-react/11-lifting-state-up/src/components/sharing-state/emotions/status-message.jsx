import './status-message.css'

/**
 * StatusMessage 컴포넌트
 * @param {Object} param
 * @param {string} param.children - 감정 메시지
 */
export default function StatusMessage({ children }) {
  return <figcaption className="status-message">{children}</figcaption>
}
