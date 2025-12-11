FROM httpd:alpine

ARG APACHE_PORT=80

COPY ./src/ /usr/local/apache2/htdocs/

EXPOSE ${APACHE_PORT}