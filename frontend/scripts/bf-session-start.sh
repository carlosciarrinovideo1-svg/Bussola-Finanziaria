#!/bin/bash

echo "===================================="
echo " BUSSOLA FINANZIARIA - SESSION START"
echo "===================================="

echo
echo "===== REPOSITORY ====="
echo "Branch:"
git branch --show-current

echo
echo "Stato:"
git status --short || true

echo
echo "===== ULTIMO COMMIT ====="
git log -1 --oneline

echo
echo "===== SPRINT CORRENTE ====="
if [ -f memory/NEXT_TASK.md ]; then
    grep -A5 "Sprint corrente" memory/NEXT_TASK.md || true
else
    echo "NEXT_TASK.md non presente"
fi

echo
echo "===== OBIETTIVO CORRENTE ====="
if [ -f memory/NEXT_TASK.md ]; then
    grep -A5 "Obiettivo" memory/NEXT_TASK.md || true
else
    echo "NEXT_TASK.md non presente"
fi

echo
echo "===== DECISIONI OPERATIVE ====="
if [ -f DECISIONS.md ]; then
    echo "DECISIONS.md presente"
    tail -20 DECISIONS.md
else
    echo "DECISIONS.md non presente"
fi

echo
echo "===== DOCUMENTAZIONE ====="
for file in \
    docs/development/BDS.md \
    docs/development/CONTINUITY_SPEC.md \
    PROJECT_STATUS.md \
    DECISIONS.md
do
    if [ -f "$file" ]; then
        echo "OK: $file"
    fi
done

echo
echo "===================================="
