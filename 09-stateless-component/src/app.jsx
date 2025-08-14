import SvgIcon from './components/svg-icon/svg-icon'

export default function App() {
  return (
    <section>
      <h1>SvgIcon 컴포넌트</h1>
      <div style={{ display: 'flex', gap: 12 }}>
        <SvgIcon type="up-arrow" />
        <SvgIcon type="spinner" />
        <SvgIcon type="check-mark" />
        <SvgIcon type="cross" />
        <SvgIcon type="not-allowed" />
      </div>
    </section>
  )
}
