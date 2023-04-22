#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"

#!/bin/bash で、シェルスクリプトがBashであることを示しています。
# set -e で、シェルスクリプトが実行中にエラーが発生した場合に即座に終了するように設定しています。
# rm -f /myapp/tmp/pids/server.pid で、コンテナが前回の実行中に残ってしまった server.pid ファイルを削除しています。これは、Railsサーバが前回の実行中に異常終了した場合に発生する可能性があるためです。
# exec "$@" で、Dockerfileの CMD で指定されたコマンドを実行します。つまり、Railsサーバを起動するための rails server -b 0.0.0.0 コマンドが実行されます。 exec を使用することで、シェルスクリプトが終了することなく、実行するコマンドに制御を渡すことができます。