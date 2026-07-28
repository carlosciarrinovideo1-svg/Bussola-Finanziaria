#!/bin/bash

set -e

if [ $# -eq 0 ]; then
    echo ""
    echo "Uso:"
    echo "./scripts/finish-sprint.sh \"Messaggio commit\""
    exit 1
fi

MESSAGE="$1"

echo ""
echo "================================"
echo " CHIUSURA SPRINT"
echo "================================"

echo ""
echo "1) Controllo progetto..."
./scripts/project-check.sh

echo ""
echo "2) Git add..."
git add .

echo ""
echo "3) Commit..."
git commit -m "$MESSAGE"

echo ""
echo "4) Push..."
git push

echo ""
echo "5) Stato finale..."
git status

echo ""
echo "================================"
echo " SPRINT COMPLETATO"
echo "================================"
