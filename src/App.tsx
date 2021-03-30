import React from 'react'
import { render } from 'react-dom';
import Delete from './delete'
const mainElement=document.createElement("div")
mainElement.setAttribute("id","root");
document.body.appendChild(mainElement)
const App = () => {
  return (
    <div id="root">
     <h1>Hello world from electron...</h1>
     <Delete></Delete>
    </div>
  )
}
render(<App />, mainElement)

