import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorComp() {
    const err=useRouteError();
    
  return (
    <div>
        <h1>OOPs</h1>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
    </div>
  )
}

export default ErrorComp