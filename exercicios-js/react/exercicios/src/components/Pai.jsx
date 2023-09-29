import React from "react"

export default function Pai(props) {
  return (
    <div>
      <h1>
        {props.nome} {props.sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>
        {React.children.map(props.children, (child) => {
          return React.cloneElement(props.children, {
            ...props,
            ...props.children.props,
          })
        })}
      </ul>
    </div>
  )
}
