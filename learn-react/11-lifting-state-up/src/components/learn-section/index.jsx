/**
 * LearnSection 컴포넌트
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.title - 섹션 제목 (시각적으로 감춰짐)
 * @param {boolean} props.showTitle - 섹션 제목 표시
 * @param {React.ReactNode} props.children - 섹션 내부에서 렌더링 할 자식 요소
 * @param {string} props.className - 섹션 클래스 이름
 */
export default function LearnSection({
  title,
  showTitle = false,
  children,
  className = '',
  ...restProps
}) {
  const baseClassNames =
    'flex flex-col items-center gap-3 m-10 border-[hsl(30,100%,80%)] border-solid border-8 rounded-2xl p-8 transition-[border-color] duration-400 ease-initial'
  return (
    <section className={`${baseClassNames} ${className}`.trim()} {...restProps}>
      <h1 className={showTitle ? null : 'sr-only'}>{title}</h1>
      {children}
    </section>
  )
}
