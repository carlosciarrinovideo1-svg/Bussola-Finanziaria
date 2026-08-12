#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GIT_ROOT="$(git -C "$PROJECT_DIR" rev-parse --show-toplevel)"

cd "$PROJECT_DIR"

echo "=== BF AGENT HANDOFF ==="
echo "Project: $PROJECT_DIR"
echo "Git root: $GIT_ROOT"
echo "Branch: $(git branch --show-current)"
echo
echo "=== GIT STATUS ==="
git status --short --branch
echo
echo "=== NEXT TASK ==="
if [ -f "$PROJECT_DIR/memory/NEXT_TASK.md" ]; then
    cat "$PROJECT_DIR/memory/NEXT_TASK.md"
else
    echo "memory/NEXT_TASK.md non trovato nel progetto"
    find "$PROJECT_DIR" -path '*/memory/NEXT_TASK.md' -print 2>/dev/null | head -10
fi
echo
echo "=== AGENT RULES ==="
echo "Primary: Roo Code"
echo "Fallback: Continue"
echo "Review: GitHub Copilot Chat"
echo "Cost: ZERO"
echo
echo "=== HANDOFF READY ==="
