FROM httpd:2.4

COPY ./dist/skill-reference /usr/local/apache2/htdocs/

EXPOSE 80
