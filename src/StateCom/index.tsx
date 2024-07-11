import React,{ Component }  from 'react'

interface IProps {
  color: string,
  size?: string,
}
interface IState {
  count: number,
}
class StateCom extends Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    count: 1
  }
  public render () {
    return (
      <div>Hello world</div>
    )
  }
  public componentDidMount() {
      // this.state.count = 2  // 无法为“count”赋值，因为它是只读属性
  }
}
export default StateCom