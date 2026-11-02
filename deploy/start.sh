#!/bin/sh
set -eu

cd /app
node server.js &
node_pid=$!

nginx -g 'daemon off;' &
nginx_pid=$!

stop() {
  kill "$node_pid" "$nginx_pid" 2>/dev/null || true
  wait "$node_pid" 2>/dev/null || true
  wait "$nginx_pid" 2>/dev/null || true
}

trap 'stop; exit 0' TERM INT

while kill -0 "$node_pid" 2>/dev/null && kill -0 "$nginx_pid" 2>/dev/null; do
  sleep 1
done

stop
exit 1
