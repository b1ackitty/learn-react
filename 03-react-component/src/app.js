import { Logo } from './components/logo.js'
import { Shortcut } from './components/shortcut.js'
import Output from './components/output.js'

export default function App(props) {
  return React.createElement(
    'div',
    { className: 'randomCountUpApp' },
    React.createElement(Logo),
    React.createElement(Output, {}, props.count),
    // 재사용
    // React.createElement(Output, {}, props.count - 8),
    // React.createElement(Output, {}, props.count + 8),
    React.createElement(Shortcut)
  )
}
