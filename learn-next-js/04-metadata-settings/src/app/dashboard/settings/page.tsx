import { Section } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '대시보드 설정 | LearnMate',
}

export default function DashboardSettings() {
  return (
    <Section title="대시보드 설정 페이지">
      <p>대시보드 / 설정 페이지 방문</p>
    </Section>
  )
}
