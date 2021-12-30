import React from 'react'

const Sari = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFAC33" d="M24.514 12.533c-.07 3.269 2.955 8.108 5.753 14.942.707 1.939-7.686 2.98-9.914.295-2.228-2.684 4.161-15.237 4.161-15.237z"/><path fill="#5C913B" d="M24.972 11.47c.343 2.981 2.398 8.469 4.874 14.995.214 2.258-7.355 2.65-9.583-.035-1.526-1.839.903-12.203 2.697-15.632.825-1.576 2.012.672 2.012.672z"/><path fill="#77B255" d="M27.748 32.719c-.064-.286-.134-.589-.209-.905v.001l-.008-.034c-1.08-4.519-3.244-11.863-3.486-17.258l1.199-3.946-.038-1.248-.132-4.258-1.491 1.821c-.293.1-.597.399-.883.973-.763 1.527-7.102 5.891-11.113 8.903-.28 4.644-1.843 12.197-2.581 15.567l-.007-.021c-.041.211-.081.424-.124.616-.44 2.159 2.826 3.046 5.594 1.851l.006-.002c.363.352.784.611 1.231.803 2.182.938 5.055.146 5.686-.724l.001-.002c.393.144.804.248 1.22.321 2.693.47 5.582-.51 5.135-2.458z"/><path fill="#9266CC" d="M12.634.029c-2.84.169-4.932 2.766-6.355 4.968-.458.756-1.023 1.641-1.213 2.515.58 3.53 26.747 3.968 25.38-.912-1.423-2.578-3.399-5.268-5.775-6.226l-1.44-.336c-.4-.033-.792-.035-1.194-.035-2.464 3.742-7.892 2.315-9.403.026z"/><path fill="#66A141" d="M14.565 33.948L15 35l.654-.562.001.019c-.115-2.8-.178-5.868-.319-7.604-.147.115-.297.229-.448.34-.047 1.846-.131 4.775-.323 6.755zm6.867.075L22 35l.548-.817c-.365-5.66-.717-12.253-.99-14.746l-.197.331c.114 2.994.22 10.454.071 14.255z"/><path fill="#5C913B" d="M25.244 5.071L11.019 22.233s-.896 5.049-1.46 7.532c2.001-.514 3.77-1.429 5.33-2.573.151-.111.3-.225.448-.34 2.578-2.014 4.555-4.644 6.025-7.083.067-.111.133-.221.197-.331 1.129-1.92 1.944-3.693 2.487-4.915l1.199-3.946-.001-5.506z"/><path fill="#553788" d="M17.562 2.008c-3.014 0-4.666-2.004-4.666-2.004-.088 0-.261.023-.261.025.023 2.286 3.414 7.984 5.677 7.984 2.271 0 3.726-5.739 3.726-8.01h-.173c0 .001-1.29 2.005-4.303 2.005z"/><path fill="#FFAC33" d="M25.455 9.111l.188 1.341 3.989-1.253c.911-.286 1.385-1.285 1.026-2.17-.064-.157-.211-.445-.212-.429-.127 1.367-.939 1.558-4.991 2.511zm2.293 23.608c-.064-.286-.134-.589-.209-.905v.001c-.368 1.639-2.311 2.611-4.991 2.368-.262-.024-.536-.069-.811-.117-.086-.015-.183-.029-.304-.044-1.732.9-3.657 1.25-5.777.433l-.001-.019c-.058-.009-.117-.028-.176-.045-.291-.086-.596-.261-.913-.444-1.423.345-4.579.705-5.56-1.614l-.007-.021c-.041.211-.081.424-.124.616-.44 2.159 2.826 3.046 5.594 1.851l.006-.002c.363.352.784.611 1.231.803 2.182.938 5.055.146 5.686-.724l.001-.002c.393.144.804.248 1.22.321 2.693.472 5.582-.508 5.135-2.456z"/><path fill="#FF960D" d="M22.548 34.188c-.393-.034-.554-.077-.812-.121-.086-.015-.183-.029-.304-.044-.012.305-.026.579-.041.833l.001-.002c.393.144.804.248 1.22.321l-.064-.987zm-6.893.268l-.001-.019c-.058-.009-.117-.028-.176-.045-.291-.086-.596-.261-.913-.444-.03.305-.062.578-.097.832l.006-.002c.363.352.784.611 1.231.803-.019-.391-.031-.655-.05-1.125z"/><path fill="#553788" d="M25.245 10.578l-.351-7.255 2.242-.828s.077 1.843-1.121 6.258c.161.78.304 1.486.304 1.486l-1.074.339z"/><path fill="#FFAC33" d="M22.037.004c-.309.616-2.257 5.411-11.415 9.233-.001.006-.548-.12-.553-.121-2.77-.652-4.28-1.007-5.003-1.604-.173.795.278 1.615 1.083 1.868l3.628 1.019.826.179.001-.001c.095 1.917.572 4.781.982 6.19-.327 5.09-1.706 11.491-1.706 11.491S22.639 24.49 27.214 2.133C25.595.356 23.425.004 22.866.004h-.829z"/><path fill="#77B255" d="M10.215 26.565c.074-.997 1.13-6.244 1.371-9.799-1.371-3.57-.985-5.678-.984-6.189 0 0 8.392-2.444 12.268-10.573 2.204.034 3.359 1.253 3.677 1.498-1.964 14.507-13.016 23.958-16.332 25.063z"/><path fill="#5C913B" d="M18.159 11.21c-1.912 1.822-4.229 3.134-6.958 4.433.111.359.234.728.385 1.123-.054.791-.149 1.667-.263 2.559l.001.002c1.344-.776 5.998-6.355 6.835-8.117z"/><path fill="#553788" d="M10.603 10.577s-.132-.859.283-4.539c-.203.81-1.135 4.353-1.135 4.353l.852.186z"/><path d="M12.905 21.832l.367.671.672.368-.672.367-.367.671-.367-.671-.672-.367.672-.368zM16.619 18l.367.671.671.368-.671.367-.367.671-.368-.671-.671-.367.671-.368zm3.162-4.188l.367.671.671.368-.671.367-.367.671-.367-.671-.672-.367.672-.368zm2.411-3.641l.318.582.582.318-.582.318-.318.582-.318-.582-.582-.318.582-.318zm1.924-3.965l.248.452.452.247-.452.248-.248.452-.247-.452-.452-.248.452-.247zm1.244-3.884l.192.351.351.192-.351.193-.192.351-.193-.351-.351-.193.351-.192z" fill="#FFAC33"/></svg>
  )
}

export default Sari