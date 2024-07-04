// 使用React.ComponentProps来继承HTML原生标签的属性
// 这样可以让CardProps具有所有div标签的属性 同时不暴露ref属性给外部
interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  // className?: string
  // children: React.ReactNode
  // title?: string
  // onClick?: (e: React.MouseEvent) => void
  title?: string
}

function Card(props: CardProps) {
  const {className, children, title, ...rest} = props
  return (
    <div
      onClick={props.onClick}
      {...rest}  // 通过 {...rest} 传参 我们省去了手动绑定onClick事件
    >
      <span>{title}</span>
      {children}
    </div>
  )
}

// 泛型组件
// 动态指定标签类型
// 如果我们需要动态指定Card组件最外层的标签类型
type CardProps1<T extends React.ElementType> = 
  React.ComponentPropsWithoutRef<T> &
    React.PropsWithChildren<{
      tag?: T
      title?: string
    }>
// 这样可以通过tag属性控制Card组件最外层的标签类型 且可以通过泛型来得到对应标签的类型提示
function Card1<T extends React.ElementType = 'div'>(props: CardProps1<T>) {
  // 此时默认Card最外层的标签为div 我们仅可以传递div的属性 如果将tag属性指定为button，则可以传递button的属性，如disabled 这个属性是不在div上的
  const {tag: Component = 'div', children, title, ...rest} = props
  return (
    <Component {...rest}>
      <span>{title}</span>
      {children}
    </Component>
  )
}

// 实现可以动态渲染的列表组件
interface CardListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}
function CardList<T>(props: CardListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  )
}
interface Framework {
  id: number
  name: string
}
const data = [
  {
    id:1, name:'React',
  },
  {
    id:2, name:'Vue',
  },
  {
    id:3, name:'Angular',
  }
]
const App = () => {
   return (
    <CardList<Framework>
      items={data}
      renderItem={framework=>{
        return (
          <div>
            <span>{framework.id}</span>
            <span>{framework.name}</span>
          </div>
        )
      }}
    />
   )
}


export default Card