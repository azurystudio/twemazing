import React from 'react'

const ArticulatedLorry = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M31 25H11v-1c0-2.209-1.791-4-4-4H4c-2.209 0-4 1.791-4 4v3c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-2h-5z"/><path fill="#FFCC4D" d="M10 12H7.146C4 12 3 14 3 14l-3 5.959V25h13V15c0-1.657-1.343-3-3-3z"/><path fill="#55ACEE" d="M9 20H2l2-4s1-2 3-2h2v6z"/><circle fill="#292F33" cx="6" cy="31" r="4"/><circle fill="#CCD6DD" cx="6" cy="31" r="2"/><circle fill="#292F33" cx="30" cy="31" r="4"/><circle fill="#CCD6DD" cx="30" cy="31" r="2"/><circle fill="#292F33" cx="20" cy="31" r="4"/><circle fill="#CCD6DD" cx="20" cy="31" r="2"/><path fill="#77B255" d="M32 8H19c-2.209 0-4 1.791-4 4v13h21V12c0-2.209-1.791-4-4-4z"/></svg>
  )
}

export default ArticulatedLorry