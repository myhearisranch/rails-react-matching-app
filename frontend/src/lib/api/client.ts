import applyCaseMiddleware from "axios-case-converter"
import axios from "axios"

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true 
}

const client = applyCaseMiddleware(axios.create({
  baseURL: "http://localhost:3001/api/v1"
}), options)

export default client



// import applyCaseMiddleware from "axios-case-converter"
// axios-case-converterというライブラリからapplyCaseMiddleware関数をインポートしています。この関数は、受け取ったレスポンスの値をスネークケース→キャメルケースに変換したり、送信するリクエストの値をキャメルケース→スネークケースに変換したりするためのミドルウェアを適用する関数です。

// import axios from "axios"
// axiosをインポートしています。axiosは、HTTPリクエストを送信するためのライブラリで、ブラウザとNode.jsの両方で利用できます。

// const options = {
//   ignoreHeaders: true 
// }
// axios-case-converterのオプションとして、ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを設定しています。

// const client = applyCaseMiddleware(axios.create({
//   baseURL: "http://localhost:3001/api/v1"
// }), options)
// axios.createを使って、Axiosのインスタンスを生成しています。ここでは、baseURLとしてhttp://localhost:3001/api/v1を指定しています。また、applyCaseMiddlewareを使って、axiosインスタンスにスネークケース→キャメルケースの変換を行うミドルウェアを適用しています。オプションとして、先に定義したoptionsを渡しています。

// export default client
// 定義したAxiosのインスタンスをエクスポートしています。他のファイルからimportして利用することができます。