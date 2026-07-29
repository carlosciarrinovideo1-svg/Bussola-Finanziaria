#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS_DIR="$PROJECT_ROOT/docs"

mkdir -p "$DOCS_DIR"

echo "================================"
echo " AGGIORNAMENTO DOCUMENTAZIONE"
echo "================================"
echo

FILES=(
  HANDOVER.md
  CURRENT_STATE.md
  ROADMAP.md
  SPRINT_STATUS.md
  PROJECT_RULES.md
  ADR.md
  MODULES.md
  PROJECT_LOG.md
  DECISIONS.md
  TODO.md
  TECH_DEBT.md
)

for file in "${FILES[@]}"; do
    if [[ ! -f "$DOCS_DIR/$file" ]]; then
        touch "$DOCS_DIR/$file"
        echo "Creato: $file"
    else
        echo "Esiste: $file"
    fi
done

echo
echo "Documentazione verificata."
echo "================================"
