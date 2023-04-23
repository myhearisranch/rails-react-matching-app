import React, { useEffect, useState } from "react"

import { execTest } from "lib/api/test"

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("")

  const handleExecTest = async () => {
    const res = await execTest()

    if (res.status === 200) {
      setMessage(res.data.message)
    }
  }

  useEffect(() => {
    handleExecTest()
  }, [])

  return (
    <h1>{message}</h1>
  )
}

export default App

// このコードは、Reactアプリケーションを定義するためのコンポーネントを定義しています。以下、各行の解説をします。

// import React, { useEffect, useState } from "react"
// import { execTest } from "lib/api/test"
// Reactと、先に定義されたAPI関数execTestをインポートしています。


// const App: React.FC = () => {
//   const [message, setMessage] = useState<string>("")
// AppというReactコンポーネントを定義しています。このコンポーネントは、現在のmessageという状態と、setMessageという状態を更新するための関数を持ちます。初期値として、messageは空の文字列として設定されます。


// const handleExecTest = async () => {
//   const res = await execTest()

//   if (res.status === 200) {
//     setMessage(res.data.message)
//   }
// }
// handleExecTestという関数を定義しています。この関数は、execTestを呼び出し、その結果に応じてmessageを更新します。res.status === 200は、HTTPレスポンスのステータスコードが200（OK）である場合にのみ、res.data.messageをmessageに設定します。

// useEffect(() => {
//   handleExecTest()
// }, [])
// useEffectフックを使って、handleExecTestを呼び出します。この呼び出しは、Appコンポーネントが初めてレンダリングされたとき、または依存関係が変更された場合にのみ実行されます。[]が依存関係のリストで、この場合は空の配列なので、初回のレンダリング時にのみ呼び出されます。


// return (
//   <h1>{message}</h1>
// )
// Appコンポーネントがレンダリングされたとき、messageの値を表示します。


// export default App
// Appコンポーネントをエクスポートします。これにより、このコンポーネントは他の場所でインポートできます。


// messageが定義されているのは、以下のコードを含むsrc/components/App.tsxファイルです。

// const [message, setMessage] = useState<string>("")
//このコードは、関数コンポーネントApp内で状態管理のために使用されています。useStateフックを使用して、messageという状態変数と、その変数を更新するためのsetMessage関数が宣言されています。初期値としては、空の文字列が設定されています。

