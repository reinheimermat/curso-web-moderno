import React from "react"

export function childrenWithProps(props) {
  React.children.map(props.children, (child) => {
    return React.cloneElement(props.children, {
      ...props,
      ...props.children.props,
    })
  })
}
