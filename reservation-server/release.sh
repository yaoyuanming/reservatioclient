#!/bin/bash

# cd到AwsomeChat目录
cd /root/beta/reservatioclient/reservation-server

# 更新代码
git fetch --all && git reset --hard origin/xym

# 清除 Maven 编译结果
sudo mvn clean

# 编译 Maven 项目
sudo mvn package -DskipTests

# 获取当前时间作为 Docker 镜像 tag
tag=$(date "+%Y%m%d%H%M")

# 构建 Docker 镜像
sudo docker build -t release-xym-server:$tag .

# 停止并删除名称为 awsomechat 的容器
#sudo docker ps -a | grep -q awsomechat && sudo docker stop release-ninefactor && sudo docker rm release-ninefactor
sudo docker stop release-xym-server && sudo docker rm release-xym-server

# 运行 Docker 容器
sudo docker run \
  -p 86:8080 \
  -v /root/key:/var/key \
  -v /root/sensitive:/var/sensitive \
  -e DB_HOST=release-mysql \
  -e DB_PORT=3306 \
  -e DB_USERNAME=root \
  -e DB_PASSWORD=pYWOx7pJIe^EmRSBa7 \
  -e DB_DATABASE=fast_reservation \
  -e REDIS_HOST=release-redis \
  -e MINIO_ENDPOINT=http://minio:9000 \
  --network=release-network \
  -d --name release-xym-server release-xym-server:$tag
