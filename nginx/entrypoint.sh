#!/bin/sh

# Substituer les variables d'environnement
envsubst '${APP_PORT},${DOMAIN}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
envsubst '${APP_PORT},${DOMAIN}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Lancer nginx
exec nginx -g "daemon off;"
