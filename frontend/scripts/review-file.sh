#!/usr/bin/env bash

set -e

if [ $# -ne 1 ]; then
    echo
    echo "Uso:"
    echo "  ./scripts/review-file.sh <percorso-file>"
    echo
    exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
    echo
    echo "Errore: file non trovato:"
    echo "  $FILE"
    echo
    exit 1
fi

echo "================================"
echo " FILE REVIEW"
echo "================================"
echo
echo "📄 File:"
echo "$FILE"
echo

nl -ba "$FILE"

echo
echo "================================"
echo

./scripts/project-check.sh
