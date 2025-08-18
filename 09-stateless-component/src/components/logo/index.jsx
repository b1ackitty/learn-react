import { LOGO_PATH, LOGO_COLOR } from './constant'
import './style.css'

/**
 *
 * @param {Object} props
 * @param {'primary' | 'secondary'} props.type - 로고 타입
 * @param {boolean} props.outline - 로고 모양
 */

export default function Logo({ type = 'primary', outline = false }) {
  let path = '',
    color = ''
  const isPrimary = type === 'primary'

  if (isPrimary) {
    path = !outline ? LOGO_PATH.PRIMARY : LOGO_PATH.PRIMARY_OUTLINE
    color = LOGO_COLOR.PRIMARY
  } else {
    path = !outline ? LOGO_PATH.SECONDARY : LOGO_PATH.SECONDARY_OUTLINE
    color = LOGO_COLOR.SECONDATY
  }

  const colorAttr = { [outline ? 'stroke' : 'fill']: color }

  return (
    <figure className="logo">
      <svg width={210} height={57} viewBox="0 0 210 57" fill="none">
        <path d={path} {...colorAttr} />
        {/* {React.createElement('path', {
          d: path,
          ...colorAttr,
        })} */}
      </svg>
    </figure>
  )
}
