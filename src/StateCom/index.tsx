import React,{ Component }  from 'react'

interface IProps {
  color: string,
  size?: string,
}
interface IState {
  count: number,
}
class StateCom extends Component<IProps, IState> {
  public state = {
    count: 1
  }
  public render () {
    return (
      <div>Hello world</div>
    )
  }
}