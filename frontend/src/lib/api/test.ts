import client from "lib/api/client"

// 動作確認用
export const execTest = () => {
  return client.get("/test")
}

// このコードは、先に定義されたclientを使ってHTTPリクエストを送信する関数を定義しています。以下、各行の解説をします。
// import client from "lib/api/client"
// 先に定義されたclientをインポートしています。lib/api/clientは、Axiosを使ってHTTPリクエストを送信するためのクライアントを定義するためのファイルです。

// export const execTest = () => {
//   return client.get("/test")
// }

// execTestという関数を定義しています。この関数は、clientを使って/testにGETリクエストを送信するものです。
// return client.get("/test")は、clientによって実行されるHTTP GETリクエストを表しています。/testは、リクエストするAPIのエンドポイントのパスを表しています。Axiosのgetメソッドは、指定したパスにGETリクエストを送信するために使用されます。
//この関数は、HTTPリクエストを実行し、結果を返します。