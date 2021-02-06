import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';

const name="hello";
let nameChange = 'hello'
nameChange = 'hello2'

let username = 'Hello' // string型
let dummyNum = 2; // number型
let bool = true; // boolean型

// 配列
let array1 = [true,false,true] //boolean
let array2 = [0,1,"hello"] // (string | number)[]

interface NAME {
  first: string,
  last?: string | null // ? でオプション
}

let nameObj: NAME = {first: "Yamada",last: null} // NAME型（オブジェクト）

const func1 = (x:number, y:number): number => {
  return x + y;
}

// Intersection Types(インターセクションタイプ)
type PROFILE = {
  age: number
  city: string
}

type LOGIN = {
  username:string
  password:string
}

type USER = PROFILE & LOGIN

const userA: USER = {
  age:23,
  city:'Tokyo',
  username:'Taro',
  password:'userA'
}
console.log(userA)

// Union Types
let value: boolean | number //論理和
value = true
//value = 'true' No string
value = 23

// 配列（Union Types）
let arrayUni : (number | string)[]
arrayUni = [1,2,3,'1','2','3']
console.log(arrayUni)

// リテラル
let company: 'Facebook' | 'Google' | 'Amazon'
company = 'Amazon'
//company = 'Apple' 代入不可


//typeof
let msg: string = 'Hi'
let msg2: typeof msg // string型
msg2 = 'Hello'


// keyOf
type KEYS = {
  primary: string
  secondary:string
}
let key: keyof KEYS // Union型 primary | secondary
key = 'secondary'

// typeof + keyof
const SPORT = {
  tennis: 'Tennis',
  baseball: 'Baseball' // string でよくね？
}

let sports: keyof typeof SPORT //Union型 
sports = 'tennis'

// enum(列挙型) 連番をつけてくれる
enum OS {
  Windows, // 0番
  Mac, // 1番
  Linux // 2番
}

interface PC { // オブジェクト作成
  id: number
  OSType: OS
}

const PC1: PC = { // オブジェクト作成 PC型
  id: 1,
  OSType: OS.Windows // 0番
}

const PC2: PC = {
  id: 2,
  OSType: OS.Mac // 1番
}








function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
