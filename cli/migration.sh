#!/usr/bin/env bash

set -euo pipefail

# -------------------------------
# CONFIG
# -------------------------------
DATASOURCE="src/config/typeorm.config.ts"
MIGRATIONS_DIR="src/database/migrations"

# -------------------------------
# HELP MESSAGE
# -------------------------------
usage() {
    cat <<EOF
TypeORM Migration CLI for NestJS

Usage:
  $(basename "$0") <command> [options]

Commands:
  generate <Name>     Generate a new migration (e.g. CreateUserTable)
  run                 Run all pending migrations
  revert              Revert the latest migration

Examples:
  $(basename "$0") generate CreateUserTable
  $(basename "$0") run
  $(basename "$0") revert
EOF
    exit 1
}

# -------------------------------
# LOGGING
# -------------------------------
log() {
    echo -e "\033[1;34m› $1\033[0m"
}

# -------------------------------
# VALIDATION
# -------------------------------
check_env() {
    if [[ ! -f "$DATASOURCE" ]]; then
        echo "❌ DataSource file not found: $DATASOURCE"
        exit 1
    fi
}

# -------------------------------
# COMMAND: GENERATE
# -------------------------------
generate_migration() {
    local name="$1"
    if [[ -z "$name" ]]; then
        echo "❌ Migration name is required."
        usage
    fi
    local full_path="${MIGRATIONS_DIR}/${name}"
    log "Generating migration: ${full_path}"
    pnpm typeorm migration:generate -d "$DATASOURCE" "$full_path"
}

# -------------------------------
# COMMAND: RUN
# -------------------------------
run_migrations() {
    log "Running pending migrations..."
    pnpm typeorm migration:run -d "$DATASOURCE"
}

# -------------------------------
# COMMAND: REVERT
# -------------------------------
revert_migration() {
    log "Reverting last migration..."
    pnpm typeorm migration:revert -d "$DATASOURCE"
}

# -------------------------------
# MAIN ENTRYPOINT
# -------------------------------
main() {
    check_env

    local cmd="${1:-}"
    shift || true

    case "$cmd" in
    generate) generate_migration "$@" ;;
    run) run_migrations ;;
    revert) revert_migration ;;
    *) usage ;;
    esac
}

main "$@"
