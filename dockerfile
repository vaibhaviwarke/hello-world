FROM tomcat:8.0.51-jre8-alpine
MAINTAINER vaibhavi.warke@facileserv.in
RUN ls
COPY dist/hello-world/* /var/www/html/
RUN cd /var/www/html/
RUN ls -ltr
EXPOSE 8082
CMD ["catalina.sh","run"]

