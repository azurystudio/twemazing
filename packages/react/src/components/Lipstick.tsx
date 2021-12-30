import React from 'react'

const Lipstick = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EA596E" d="M16.522.232c2.246 0 4.832 1.375 6.703 3.249C25.098 5.355 27 7.408 27 9.479v17.204l-15.974.031V9.582c-.093-1.506 1.075-9.35 5.496-9.35"/><path fill="#DD2E44" d="M19 11.378V28c0 1.104.896 0 2 0v2c1.104 0 2-.896 2-2V12.333c-1.258-.104-2.65-.262-4-.955z"/><path fill="#F4ABBA" d="M22.072 3.455c2.664 2.391 4.277 5.236 2.961 6.699-1.314 1.463-5.06.991-7.721-1.4-2.661-2.39-3.753-5.516-2.439-6.979 1.316-1.463 4.538-.712 7.199 1.68"/><path fill="#FFCC4D" d="M30 34c0 1.104-.896 2-2 2H10c-1.104 0-2-.896-2-2v-6c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v6z"/><path fill="#FFAC33" d="M31 34c0 1.104-.896 2-2 2H9c-1.104 0-2-.896-2-2v-1c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v1z"/></svg>
  )
}

export default Lipstick