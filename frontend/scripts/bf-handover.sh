#!/bin/bash

OUTPUT="memory/HANDOVER.md"

echo "# Bussola Finanziaria - Handover" > "$OUTPUT"
echo "" >> "$OUTPUT"

echo "## Stato Git" >> "$OUTPUT"
git branch --show-current >> "$OUTPUT"
git log -1 --oneline >> "$OUTPUT"

echo "" >> "$OUTPUT"
echo "## Prossimo Task" >> "$OUTPUT"

if [ -f memory/NEXT_TASK.md ]; then
    cat memory/NEXT_TASK.md >> "$OUTPUT"
fi

echo "" >> "$OUTPUT"
echo "## Stato Repository" >> "$OUTPUT"
git status --short >> "$OUTPUT"

echo "Creato: $OUTPUT"
