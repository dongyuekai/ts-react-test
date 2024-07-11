
import React, { FC } from 'react'
import { MouseEvent } from 'react'
// import lodash from 'lodash'
// import axios from 'axios'

interface IProps {
  color?: 'red' | 'blue' | 'yellow',
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
}

type Required<T> = {
  [P in keyof T]-?: T[P]
}
type xx = Required<IProps>

const Button: FC<React.PropsWithChildren<IProps>> = ({ onClick, children, color }) => {
  return (
    <div onClick={onClick} style={{ width: '100px', height: '50px', background: color }}>
      {children}
    </div>
  )
}
export default Button

