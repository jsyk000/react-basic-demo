import React from "react"; 

/**
 * Props（引数）として渡された color と message を使って、
 * 色付きのメッセージを表示するコンポーネント
 * * @param {object} props - 親コンポーネントから渡されるデータ
 * @param {string} props.color - テキストの色
 * @param {string} props.message - 表示するテキスト
 */
export const ColoredMessage = (props) => {
  // 【Propsの分割代入】
  // propsオブジェクトから、必要な値（color, message）を直接取り出します。
  // これにより、コード内で 'props.color' ではなく 'color' だけで参照できるようになります。
  const { color, message } = props;

  // 【JSXで使えるスタイル定義】
  // CSSのプロパティ名をキャメルケース（fontSize）にして、JavaScriptオブジェクトで定義します。
  const contentStyle = {
    // colorプロパティに、Propsで受け取った color の値を適用します
    color: color, 
    fontSize: "20px"
  };

  // 受け取った message を、定義した style を適用した <p>タグで表示する
  return (
    <p style={contentStyle}>{message}</p>
  );
};

/*
関数コンポーネント: 
    const ColoredMessage = (props) => { ... } という形式で、関数として定義しています。

Propsの受け取り: 
    関数の引数として props というオブジェクトを受け取ります。

分割代入: 
    const { color, message } = props; を使うことで、
    親が渡してくる props.color や props.message をシンプルに扱えるようにしています。

スタイルの適用: 
    style 属性に JavaScriptオブジェクト（contentStyle）を渡しており、このオブジェクト内で color プロパティにPropsの値を設定しています。
*/