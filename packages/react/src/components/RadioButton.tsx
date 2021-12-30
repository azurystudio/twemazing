import React from 'react'

const RadioButton = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#269" cx="18" cy="18" r="18"/><circle fill="#BBDDF5" cx="18" cy="18" r="8"/></svg>
  )
}

export default RadioButton