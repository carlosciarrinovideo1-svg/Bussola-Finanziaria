#!/bin/bash

FILE="$1"

if [ -z "$FILE" ]; then
  echo "Uso: ./scripts/safe-write.sh percorso/file"
  exit 1
fi

if [ -f "$FILE" ]; then
  cp "$FILE" "$FILE.backup"
  echo "Backup creato: $FILE.backup"
fi

cat > "$FILE"

echo
echo "File aggiornato: $FILE"
echo
echo "Contenuto attuale:"
sed -n '1,220p' "$FILE"
