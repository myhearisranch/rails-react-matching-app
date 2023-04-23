class Api::V1::TestController < ApplicationController
  def index
    render json: {status: 200, message: "Hello World"}
  end
end

# このコードは、Railsアプリケーションの中でAPIのエンドポイントを定義するためのコントローラーである TestController の定義です。
# このコントローラーは、 index アクションを定義しており、このアクションが実行された際に json 形式で status と message の2つのキーを持ったハッシュを返します。
# 具体的には、 status にはHTTPステータスコードの 200、 message には "Hello World!" という文字列が設定されています。このレスポンスは、JSON形式で返されるため、APIのクライアントはこのレスポンスを解析し、適切な処理を行うことができます。
