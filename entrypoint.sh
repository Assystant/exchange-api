#!/bin/sh

# Scrape exchange rates in the background — files become available as they complete
node currscript.js &

# Start the static file server immediately
exec pm2-runtime ecosystem.config.cjs
