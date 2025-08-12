export default function Output(props /* { children } */) {
  return React.createElement('output', { className: 'output' }, props.children)
}
