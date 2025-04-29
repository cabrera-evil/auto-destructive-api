#!/usr/bin/env bash
set -euo pipefail

# -------------------------------
# CONFIGURATION
# -------------------------------
DATA_SOURCE="config/typeorm.config.js"

# -------------------------------
# LOGGING
# -------------------------------
log() {
    echo -e "\033[1;34m› $1\033[0m"
}

err() {
    echo -e "\033[1;31m✖ $1\033[0m" >&2
}

fail() {
    err "$1"
    exit 1
}

# -------------------------------
# APPLY MIGRATIONS
# -------------------------------
log "Running TypeORM migrations..."

if pnpm exec typeorm migration:run -d "$DATA_SOURCE"; then
    log "✅ Migrations applied successfully."
else
    err "❌ Migration failed. Attempting rollback..."
    pnpm exec typeorm migration:revert -d "$DATA_SOURCE" &&
        log "↩ Rollback completed." ||
        fail "Rollback failed. Manual intervention required."
    exit 1
fi

# -------------------------------
# HAND OVER TO CMD
# -------------------------------
exec "$@"
