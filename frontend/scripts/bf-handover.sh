#!/bin/bash

set -e

OUTPUT="memory/HANDOVER.md"

{
echo "# Bussola Finanziaria - Handover"
echo

echo "## Stato Repository"
echo
echo "Branch:"
git branch --show-current

echo
echo "Ultimo commit:"
git log -1 --oneline

echo
echo "## Stato Git"
git status --short || true

echo
echo "## Sprint Corrente"

if [ -f memory/NEXT_TASK.md ]; then
    cat memory/NEXT_TASK.md
else
    echo "NEXT_TASK.md non presente"
fi

echo
echo "## Documentazione Disponibile"

for file in \
    docs/development/BDS.md \
    docs/development/CONTINUITY_SPEC.md \
    PROJECT_STATUS.md \
    DECISIONS.md
do
    if [ -f "$file" ]; then
        echo "- $file"
    fi
done

} > "$OUTPUT"

echo "Creato: $OUTPUT"
