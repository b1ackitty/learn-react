import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: '대시보드 | LearnMate',
}

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <div className="bg-slate-200 flex-1">{children}</div>
}
