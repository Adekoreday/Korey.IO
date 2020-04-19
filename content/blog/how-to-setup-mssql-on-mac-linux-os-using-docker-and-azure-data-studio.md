---
path: ./content
date: 2020-04-15T10:53:56.469Z
title: HOW TO SETUP MSSQL ON MAC/LINUX OS USING DOCKER AND AZURE DATA STUDIO
description: A article describing how to setup MSSQL on your mac/linux machine using docker
tags:
  - Database
---
Ensure you have docker setup on your machine. Follow this link to setup docker on your machine [docs](https://docs.docker.com/docker-for-mac/install/).

Pull the MSSQL ubuntu image from the docker hub.

```
sudo docker pull mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04
```

After that then enter the following command

```
sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<YourStrong@Passw0rd>" \
   -p 1433:1433 --name sql223 \
   -d mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04
```

Ensure you replace `<YourStrong@Passw0rd>` with your password

-p indicates your port
--name specifies the name of your container

Run the command below to view all containers currently running on your machine.

`sudo docker ps -a`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/4racpb360iz9p3zvf8ue.png)


The GUI tool we'll be using is [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15)

Follow the link and download the azure data studio.

currently, these are our details.
Password: This is what we declared in SA_PASSWORD as earlier.
Username: this value is `sa`
Server: localhost

Then fill out these details in Azure data studio.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/eqp9uq7v9juch2ctr53d.png)

Lastly, since we might want to create a new database in the azure data studio
Enter the following in the `new Query section` of the dashboard.

```
IF NOT EXISTS (
   SELECT name
   FROM sys.databases
   WHERE name = N'DemoDB'
)
CREATE DATABASE [DemoDB]
GO
```
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/rv66meq4mslnf5kf2a1w.png)

The above command creates a database called DemoDB. you can the connect to this database and run various actions like migrations or create tables manually.

