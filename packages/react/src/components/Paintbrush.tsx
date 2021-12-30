import React from 'react'

const Paintbrush = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M14.57 27.673c2.814-1.692 6.635-3.807 9.899-7.071 7.03-7.029 12.729-16.97 11.314-18.385C34.369.803 24.428 6.502 17.398 13.531c-3.265 3.265-5.379 7.085-7.071 9.899l4.243 4.243z"/><path fill="#C1694F" d="M.428 34.744s7.071 1.414 12.021-3.536c2.121-2.121 2.121-4.949 2.121-4.949l-2.829-2.829s-3.535.708-4.95 2.122c-1.414 1.414-2.518 4.232-2.888 5.598-.676 2.502-3.475 3.594-3.475 3.594z"/><path fill="#CCD6DD" d="M17.882 25.328l-5.168-5.168c-.391-.391-.958-.326-1.27.145l-1.123 1.705c-.311.471-.271 1.142.087 1.501l4.122 4.123c.358.358 1.03.397 1.501.087l1.705-1.124c.472-.311.536-.878.146-1.269z"/><path fill="#A0041E" d="M11.229 32.26c-1.191.769-1.826.128-1.609-.609.221-.751-.12-1.648-1.237-1.414-1.117.233-1.856-.354-1.503-1.767.348-1.393-1.085-1.863-1.754-.435-.582 1.16-1.017 2.359-1.222 3.115-.677 2.503-3.476 3.595-3.476 3.595s5.988 1.184 10.801-2.485z"/></svg>
  )
}

export default Paintbrush