FROM tomcat:8.0.51-jre8-alpine
MAINTAINER vaibhavi.warke@facileserv.in
RUN ls
COPY dist.war /var/lib/tomcat/webapps
EXPOSE  8080
USER vaibhavi
WORKDIR /var/lib/tomcat/webapps
CMD ["catalina.sh","run"]
