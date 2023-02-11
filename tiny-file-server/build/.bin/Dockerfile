#FROM openjdk:8-jdk-alpine
FROM openjdk:8-jdk-alpine-add-font
MAINTAINER xtpeach
ADD app/{project.name}-{project.version}.jar app.jar
ADD 操作手册.pdf /home/files/操作手册.pdf
ADD sqlite/zfile /home/.zfile-v4/db/zfile
ENV JAVA_OPTS=${JAVA_OPTS} \
    JAR_OPTS=${JAR_OPTS} \
    LANG=C.UTF-8 LC_ALL=C.UTF-8
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar /app.jar $JAR_OPTS" ]
EXPOSE 8080