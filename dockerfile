FROM tomcat:8.0.51-jre8-alpine
MAINTAINER vaibhavi.warke@facileserv.in

COPY dist/hello-world/* /var/www/html/
