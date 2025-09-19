export default function Output(props /* { children } */) {
  // let classNames = 'output'

  // if (props.isAnimate) {
  //   classNames += ' is-animate'
  // }

  const classNames = `output ${props.isAnimate ? 'is-animate' : ''}`.trim()

  return React.createElement('output', { className: classNames }, props.children)
}

// JavaScript 방식(명령형 프로그래밍)
// document.querySelector('.output').addEventListener('animationend', (e) => {
//   e.currentTarget.classList.remove('is-animate')
// })
