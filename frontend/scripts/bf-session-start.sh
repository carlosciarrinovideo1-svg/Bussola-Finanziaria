#!/bin/bash

echo "===================================="
echo " BUSSOLA FINANZIARIA - SESSION START"
echo "===================================="

echo
echo "===== REPOSITORY ====="
git branch --show-current
git status --short

echo
echo "===== ULTIMO COMMIT ====="
git log -1 --oneline

echo
echo "===== NEXT TASK ====="
if [ -f memory/NEXT_TASK.md ]; then
    cat memory/NEXT_TASK.md
else
    echo "NEXT_TASK.md non presente"
fi

echo
echo "===== DOCUMENTAZIONE ====="
echo "BDS:"
test -f docs/development/BDS.md && echo "OK"

echo "PROJECT STATUS:"
test -f PROJECT_STATUS.md && echo "OK"

echo "DECISIONS:"
test -f DECISIONS.md && echo "OK"

echo
echo "===================================="
