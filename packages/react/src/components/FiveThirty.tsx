import React from 'react'

const FiveThirty = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#99AAB5" cx="18" cy="18" r="18"/><circle fill="#E1E8ED" cx="18" cy="18" r="14"/><path fill="#66757F" d="M17 29c0 .553.447 1 1 1 .553 0 1-.447 1-1V18c0-.552-.447-1-1-1-.553 0-1 .448-1 1v11z"/><path fill="#66757F" d="M23 26.661c-.479.276-1.09.112-1.367-.366l-4.5-7.795c-.276-.478-.112-1.089.366-1.365s1.089-.112 1.366.365l4.5 7.795c.277.478.113 1.09-.365 1.366z"/></svg>
  )
}

export default FiveThirty