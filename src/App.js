import React, { useState } from "react"; // 【重要】Stateを扱うための useState Hook をインポート
import { ColoredMessage } from "./components/ColoredMessage"; // 作成した子コンポーネントをインポート

const App = () => {
  // 【★ Stateの定義】
  // [現在の値, 値を更新する関数] = useState(初期値)
  const [count, setCount] = useState(0); 

  // 【★ イベントハンドラ】
  // ボタンがクリックされたときに実行される関数
  const onClickButton = () => {
    // setCountを実行することで count が更新され、画面が再レンダリングされます
    setCount(count + 1);
  };
  
  // h1タグ用のスタイル
  const h1Style = {
    color: "red"
  };

  return (
    // 複数の要素を返すため、<></> (Fragment) で囲みます
    <>
      <h1 style={h1Style}>こんにちは！</h1>
      
      {/* 【★ Propsの受け渡し】 */}
      {/* ColoredMessageコンポーネントに 'color' と 'message' をPropsとして渡します */}
      <ColoredMessage color="blue" message="お元気ですか？" />
      
      {/* 別のメッセージも表示（Propsを別の値にしています） */}
      <ColoredMessage color="#00ff00" message="ボタンを押してみよう！" />
      
      {/* カウンターの現在の数値を表示（Stateの値を使用） */}
      <p>現在のカウント：{count}</p>
      
      {/* 【★ イベントの割り当て】 */}
      {/* ボタンのクリックイベントに onClickButton 関数を割り当てる (onClickはキャメルケース) */}
      <button onClick={onClickButton}>
        カウントアップ
      </button>
    </>
  );
};

export default App;