import { Logo } from './components/logo.js'
import { Shortcut } from './components/shortcut.js'
import Output from './components/output.js'

export default function App(props) {
  // 리스트 렌더링(List Rendering, Render Lists)
  // 배열(데이터)

  // 배열 순환문(for, while, for...of 등) -> 값이 없음(함수 내부에서 사용)
  // let renderElements = []

  // for (let i = 0; i < 3; i++) {
  //   renderElements.push(
  //     React.createElement(
  //       Output,
  //       {
  //         key: i,
  //         isAnimate: props.count < props.targetCount ? true : false
  //       },
  //       props.count + i
  //     )
  //   )
  // }

  // 배열의 forEach 메서드(값이 없음) ❌
  // 배열의 map 메서드(값을 반환) -> React.createElement() 내부에 사용 가능
  const renderElements = Array.from({ length: 3 }).map((_, index) => {
    return React.createElement(
      Output,
      {
        key: index,
        isAnimate: props.count < props.targetCount ? true : false
      },
      props.count + index
    )
  })

  return React.createElement(
    'div',
    { className: 'randomCountUpApp' },
    React.createElement(Logo),
    renderElements,
    React.createElement(Shortcut)
  )
}
