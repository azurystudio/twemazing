import React from 'react'

const Warning = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z"/><path fill="#231F20" d="M15.583 28.953c0-1.333 1.085-2.418 2.419-2.418 1.333 0 2.418 1.085 2.418 2.418 0 1.334-1.086 2.419-2.418 2.419-1.334 0-2.419-1.085-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108 1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108-1.271 0-2.232-.807-2.232-2.108V10.66z"/></svg>
  )
}

export default Warning