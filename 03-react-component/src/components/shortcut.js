export function Shortcut() {
  const data = {
    className: 'shortcut-info',
    shortcutKey: 'Shift + Enter',
    message: ' 키를 누르면 애니메이션이 다시 시작됩니다.'
  }

  // 리액트 엘리먼트 생성 과정에서 props로 데이터 바인딩(data binding)
  return React.createElement(
    'p',
    { className: data.className },
    React.createElement('code', {}, data.shortcutKey),
    data.message
  )
}
