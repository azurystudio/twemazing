import React from 'react'

const OpenMailboxWithRaisedFlag = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1694F" d="M22 33c0 2.209-8 2.209-8 0V23c0-2.209 1.791-4 4-4s4 1.791 4 4v10z"/><path fill="#292F33" d="M10 3c-4.418 0-8 3.582-8 8v12h16V11c0-4.418-3.582-8-8-8z"/><path fill="#CCD6DD" d="M20 18.761C20 19.997 18.935 21 17.707 21H2.293C1.064 21 0 19.997 0 18.761V8.239C0 7.003 1.064 6 2.293 6h15.414C18.935 6 20 7.003 20 8.239v10.522z"/><path fill="#99AAB5" d="M20 8.239C20 7.003 18.935 6 17.707 6H2.293C1.064 6 0 7.003 0 8.239v1.419l4.879 4.904-4.78 4.806c.112.376.316.716.596.983l4.972-4.998 2.407 2.419c1.052 1.06 2.768 1.06 3.821 0l2.426-2.432 4.984 5.011c.28-.268.483-.608.596-.983l-4.792-4.818L20 9.646V8.239z"/><path fill="#E1E8ED" d="M17.707 6H2.293C1.127 6 .121 6.906.02 8.055l8.408 8.397c.869.874 2.277.84 3.145-.035l8.41-8.346C19.889 6.914 18.877 6 17.707 6z"/><path fill="#99AAB5" d="M26 3H10c4.418 0 8 3.582 8 8v12h16V11c0-4.418-3.582-8-8-8z"/><path fill="#DD2E44" d="M26 1h-4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2s2-.896 2-2V7h2c1.104 0 2-.896 2-2V3c0-1.104-.896-2-2-2z"/></svg>
  )
}

export default OpenMailboxWithRaisedFlag