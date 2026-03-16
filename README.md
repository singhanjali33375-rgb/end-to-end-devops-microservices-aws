# end-to-end-devops-microservices-aws
End-to-End DevOps Microservices Project deployed on AWS using Docker, Kubernetes (Amazon EKS), and RDS. The application is containerized, orchestrated with Kubernetes, and exposed to the internet using AWS LoadBalancer.
End-to-End DevOps Microservices Project on AWS

Project Overview

This project demonstrates an End-to-End DevOps workflow where a microservices-based application is containerized using Docker and deployed on AWS using Kubernetes (Amazon EKS). The application uses AWS RDS for database management and is exposed to the internet using a LoadBalancer service.

Technologies Used

- AWS (EKS, EC2, RDS)
- Docker
- Kubernetes
- Node.js
- GitHub
- kubectl
- eksctl

Project Architecture

User → Internet → AWS Load Balancer → Kubernetes (EKS) → Docker Containers → AWS RDS Database

Features

- Containerized application using Docker
- Kubernetes Deployment with multiple replicas
- Scalable infrastructure using AWS EKS
- Managed database using AWS RDS
- Public access using Kubernetes LoadBalancer

Project Setup

Step 1: Clone Repository

git clone https://github.com/your-username/end-to-end-devops-microservices-aws.git

Step 2: Build Docker Image

docker build -t devops-app .

Step 3: Run Container Locally

docker run -p 3000:3000 devops-app

Step 4: Push Image to DockerHub

docker tag devops-app username/devops-app
docker push username/devops-app

Step 5: Deploy to Kubernetes

kubectl apply -f deployment.yaml

Step 6: Expose Application

kubectl apply -f service.yaml

Step 7: Get External IP

kubectl get svc

Result

The application is successfully deployed on AWS EKS and accessible through a public LoadBalancer URL.

Author

Anjali Singh
