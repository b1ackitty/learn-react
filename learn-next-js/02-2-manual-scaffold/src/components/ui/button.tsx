'use client'

import { ComponentProps } from 'react'

export default function Button({
  className,
  ...props
}: ComponentProps<'button'>) {
  return (
    <button type='button' className={`button ${className ?? ''}`} {...props} />
  )
}
