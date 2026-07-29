#!/bin/bash

MESSAGE="$1"

if [ -z "$MESSAGE" ]; then
  echo "Uso:"
  echo "./scripts/bf-commit.sh \"messaggio commit\""
  exit 1
fi

echo "================================"
echo " BUSSOLA FINANZIARIA COMMIT"
echo "================================"

git status

echo
read -p "Procedere con add, commit e push? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ]; then
  echo "Operazione annullata"
  exit 0
fi

git add -A
git commit -m "$MESSAGE"
git push

echo
git status
