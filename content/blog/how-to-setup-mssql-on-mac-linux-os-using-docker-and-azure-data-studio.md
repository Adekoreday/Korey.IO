---
path: ./content
date: 2020-04-15T10:53:56.469Z
title: HOW TO SETUP MSSQL ON MAC/LINUX OS USING DOCKER AND AZURE DATA STUDIO
description: A article describing how to setup MSSQL on your mac/linux machine using docker
tags:
  - Database
---
Ensure you have docker setup on your machine. Follow this link to setup docker on your machine [docs](https://docs.docker.com/docker-for-mac/install/).

Pull the mssql ubuntu image from the docker hub.

`sudo docker pull mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04`

After that then enter the following command

`sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<YourStrong@Passw0rd>" \
   -p 1433:1433 --name sql223 \
   -d mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04
`

Ensure you replace `<YourStrong@Passw0rd>` with your password

-p indicates your port
--name specifies the name of your container

Run the command below to view all containers currently running on your machine.

`sudo docker ps -a`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/4racpb360iz9p3zvf8ue.png)

The rest of the article can be found on my dev.to page

[Dev.to](https://dev.to/adeyemiadekore2/how-to-setup-mssql-on-mac-linux-os-using-docker-and-azure-data-studio-2p6m)
