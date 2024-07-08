FROM openjdk:8
ARG TARGETARCH
MAINTAINER yaoyuanming "yaoyuanming0601@gmail.com"

WORKDIR /app

COPY target/reservation.jar /app/app.jar

EXPOSE 8083

CMD java -Dfile.encoding=utf-8 -XX:+HeapDumpOnOutOfMemoryError -jar /app/app.jar