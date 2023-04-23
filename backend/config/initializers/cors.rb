Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:3000" # React側はポート番号3000で作るので「localhost:3000」を指定

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

# このコードは、Railsアプリケーションに対してCORS（Cross-Origin Resource Sharing）の設定を行うために使われます。
# CORSとは、ウェブブラウザが異なるオリジンのリソースにアクセスすることを制限するための仕組みであり、同一オリジンポリシーと異なり、異なるオリジンからのリソースのリクエストを許可することができます。
# このコードは、Reactアプリケーションからのリクエストを許可するため、許可するオリジンをlocalhost:3000に設定しています。また、リクエストで使用可能なHTTPメソッドを指定するmethodsオプションも設定されています。