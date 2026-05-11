#!/bin/bash

# ================== CONFIG ==================
BASE_URL="https://cp-dsu.unipi.it:8000"
USERNAME="f.mezzena"
PASSWORD="Dhesymezzena.@2"
COOKIE_JAR="/tmp/pnpsense_cookies.txt"

# Header comuni
HEADERS=(
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0"
  -H "Accept: application/json, text/javascript, */*; q=0.01"
  -H "Accept-Language: it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7"
  -H "X-Requested-With: XMLHttpRequest"
)

echo ""
echo "[1] GET index.html (ottenere PHPSESSID)"
curl -sk \
  "${HEADERS[@]}" \
  --cookie-jar "$COOKIE_JAR" \
  "$BASE_URL/index.html" \
  -o /dev/null

echo "Cookie ottenuti:"
cat "$COOKIE_JAR" | grep -v "^#" | grep -v "^$" | awk '{print " - "$6"="$7}'

echo ""
echo "[2] POST logon"
curl -sk \
  "${HEADERS[@]}" \
  -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" \
  -H "Origin: $BASE_URL" \
  -H "Referer: $BASE_URL/index.html" \
  --cookie "$COOKIE_JAR" \
  --cookie-jar "$COOKIE_JAR" \
  --data "user=$USERNAME&password=$PASSWORD" \
  "$BASE_URL/api/captiveportal/access/logon/" \
  -o /dev/null

echo "Login inviato"
sleep 1

echo ""
echo "[3] POST status"
STATUS=$(curl -sk \
  "${HEADERS[@]}" \
  -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" \
  -H "Origin: $BASE_URL" \
  -H "Referer: $BASE_URL/index.html" \
  --cookie "$COOKIE_JAR" \
  --cookie-jar "$COOKIE_JAR" \
  --data "user=&password=" \
  "$BASE_URL/api/captiveportal/access/status/")

echo ""
echo "STATUS RESPONSE:"
echo "$STATUS"

# Pulizia
rm -f "$COOKIE_JAR"
