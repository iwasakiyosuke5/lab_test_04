import { useState } from 'react'
import './App.css'
import Test from './Test'
import Button from './components/Button'
import From from './components/Form'

function App() {
  const[test, setTest] = useState(100);
  // 追加したuseStateです!
  const[flag, setFlag] = useState(false);

  // 新しいuseStateを追加してみました
  const[num, setNum] = useState();

  // カウントダウン実装
  const[countDown, setCountDown] = useState(99);  
  const handleCountDownClick = () => {
    setCountDown(countDown - 1);
  };




  // 更新処理の連取です
  const handleClick = () => { 
    setTest(test + 1);
  };
  // 追加したuseStateのflagを更新する処理です
  const handleFlagClick = () => {
    setFlag(!flag)
  };

  // 新しくおまじないを作ります
  const handleNumClick = () => {
    const ramdom = Math.floor(Math.random() * 3);
    setNum(ramdom);
  };

  return (
    <>

      <From />
      <br />
      <hr />

      {/* おみくじについて */}
      {/* {num === 0 && <h1>大吉</h1>}
      {num === 1 && <h1>中吉</h1>}
      {num === 2 && <h1>小吉</h1>}
      

      <h1>{num}</h1>
      <buttom  className="aa" onClick={handleNumClick}>おまじないをかける</buttom> */}



      {/* 条件分岐の練習です */}
      {flag && <h1>今はtrueです</h1>}
      {!flag && <h1>今はfalseです</h1>}
      <button onClick={handleFlagClick}>flagを変更する</button>

      {/* カウントダウンの練習です */}
      {/* 範囲は綺麗に囲う必要がある */}
      <h1>{countDown}</h1>
      {countDown > 90 && <h1>HP余裕</h1>}
      {countDown > 50 && countDown <= 90 && <h1>HP少し減ってきた</h1>}
      {countDown >= 1 && countDown <= 50 && <h1>HP危ない</h1>}
      {countDown === 0 && <h1>死亡</h1>} 
      <button onClick={handleCountDownClick}>カウントダウン</button>
    
      <div>{test}</div>

      <button onClick={handleClick}>ボタンを押してみよう</button>

      <Test 
      gs="07月30日react2回目" 
      aa="ada"
      rab={17}
      react="react"
      />
      <Button text="送信"/>
      <br />
      <Button text="登録"/>
    </>
  )
}

export default App;
