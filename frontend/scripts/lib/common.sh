#!/usr/bin/env bash

# ==================================================
# Bussola Finanziaria
# Libreria comune
# ==================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

source "$PROJECT_ROOT/scripts/config.sh"
source "$PROJECT_ROOT/scripts/lib/ui.sh"
source "$PROJECT_ROOT/scripts/lib/log.sh"

require_command() {
    command -v "$1" >/dev/null 2>&1 || {
        log_error "Comando richiesto non trovato: $1"
        exit 1
    }
}
