import { Section } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '추천 도서 목록',
}

export default function BooksPage() {
  return (
    <Section title="도서 목록 페이지">
      <p>도서 목록 페이지 방문</p>
    </Section>
  )
}
