#!/bin/bash
set -e

# psql -v ON_ERROR_STOP=1 --username "postgres" --dbname "postgres" <<-EOSQL
#     CREATE USER postgres;
#     CREATE DATABASE postgres;
#     GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;
# EOSQL

psql -v 'ON_ERROR_STOP=1' -d postgres -f /data/dump.sql