import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Card from './Card/Card'
import reportWebVitals from './reportWebVitals';
// import FirstTsx from './FirstTsx';
import FunctionCom from './FunctionCom'


interface IResponse<T> {
  message: string,
  result: T,
  success: boolean
}

async function getResponse(): Promise<IResponse<number[]>> {
  return {
    message: '获取成功',
    result: [1, 2, 3],
    success: true
  }
}

// 限制props.color的值只可以是字符串 red、blue、yellow
// interface IProps {
//   color: 'red' | 'blue' | 'yellow'
// }

// 使用数字字面量类型限制值为固定的数值参数 限制IProps.index的值只可以是数字0、1、2
// interface IProps {
//   index: 0 | 1 | 2
// }

// type Partial<T> = { [P in keyof T]?: T[P] }

interface Person {
  name: string,
  age: number,
  sex: string,
}
let person: Omit<Person, 'name'> = {
  age: 1,
  sex: '男'
}

const ControledCom: React.FC = () => {
  const [files, setFiles] = useState<File | null>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files?.[0]!)
  }
  return (
    <div>
      <input type="file" onChange={handleChange} />
      {files && <div>{files.name}</div>}
    </div>
  )
}
const UnControledCom: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleChange = () => {
    console.log('dyk---', inputRef.current?.files)
  }
  return (
    <div>
      <input type="file" ref={inputRef} onChange={handleChange} />
      {inputRef.current?.files?.[0]?.name}
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Card title='我是卡片' onClick={()=>{alert(111)}}>
      <div>123</div>
    </Card> */}
    {/* <FirstTsx /> */}
    {/* <FunctionCom onClick={() => {
      getResponse().then(response => {
        console.log(response.result)
      })
    }}
      color='blue'
    >
      {123}
    </FunctionCom> */}
    <UnControledCom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
