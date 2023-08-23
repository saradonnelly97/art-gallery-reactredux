import React from 'react'

function ButtonBar(props) {
  return (
    <div>
        <button value={-5} onClick={props.handleIterate}>Much Previously</button>
        <button value={-1} onClick={props.handleIterate}>Step Back</button>
        <button value={+1} onClick={props.handleIterate}>Move Forward</button>
        <button value={+5} onClick={props.handleIterate}>Jump Ahead of the Line at the -fake- Mona Lisa</button>
    </div>
  )
}

export default ButtonBar