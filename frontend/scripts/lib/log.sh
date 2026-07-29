#!/usr/bin/env bash

log_info() {
    echo "[INFO] $*"
}

log_success() {
    echo "[OK]   $*"
}

log_warning() {
    echo "[WARN] $*"
}

log_error() {
    echo "[ERRORE] $*" >&2
}
