FROM nginx:alpine

# Installer envsubst
RUN apk add --no-cache gettext

# Copier les fichiers de config
COPY conf/nginx.conf /etc/nginx/nginx.conf.template
COPY conf/default.conf /etc/nginx/conf.d/default.conf.template

# Script d'entrée pour substituer les variables
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

EXPOSE 80 443

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
