import { useEffect, useState } from 'react'

export default function useToggleState(initialValue: boolean = true) {
  const [toggle, setToggle] = useState<boolean>(initialValue)

  const update = () => setToggle((t) => !t)

  useEffect(() => {
    setToggle(initialValue)
  }, [initialValue])

  return [toggle, update] as const
}
