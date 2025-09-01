import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './styles/main.css'

const root = document.getElementById('root') // as HTMLDivElement // 타입 단언. 확실하다고 타입스크립트에게 말한다.

if (!root) throw new Error('문서에 #root 요소가 존재하지 않습니다.')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
