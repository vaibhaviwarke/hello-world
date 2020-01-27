FROM tomcat:8.0.51-jre8-alpine
MAINTAINER vaibhavi.warke@facileserv.in
RUN ls
COPY dist/hello-world/. /var/www/html -f
