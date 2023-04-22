FROM ruby:3.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

ENV APP_PATH /myapp

RUN mkdir $APP_PATH
WORKDIR $APP_PATH

COPY Gemfile $APP_PATH/Gemfile
COPY Gemfile.lock $APP_PATH/Gemfile.lock
RUN bundle install

COPY . $APP_PATH

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]

# FROM で、このイメージが基づくベースイメージを指定しています。この場合は、Ruby 3.0のイメージを使用しています。
# RUN で、パッケージマネージャを更新し、必要なパッケージをインストールしています。ここでは、build-essential、libpq-dev、nodejsをインストールしています。
# ENV で、環境変数 APP_PATH を /myapp に設定しています。
# RUN で、$APP_PATH を作成して、作業ディレクトリを $APP_PATH に変更しています。
# COPY で、ホスト上のGemfileとGemfile.lockをコンテナ内の $APP_PATH にコピーします。そして、bundle install を実行して、アプリの依存関係をインストールしています。
# COPY で、アプリのソースコードを $APP_PATH にコピーします。
# COPY で、entrypoint.shを /usr/bin/ にコピーして、実行権限を与えます。 ENTRYPOINT で、entrypoint.shを実行するように設定します。 EXPOSE で、ポート番号3000を公開するように設定します。
# 最後に、 CMD でRailsサーバを起動するコマンドを指定しています。この場合は、 rails server -b 0.0.0.0 を指定しています。