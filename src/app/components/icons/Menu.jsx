import React from 'react'

export default function Menu({theme}) {
  return (
    <svg stroke="currentColor"  fill={theme==="dark"?"white":"black"} strokeWidth="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
  )
}
