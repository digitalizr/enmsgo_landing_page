# How to Install Packages
npm install --legacy-peer-deps
npm install -f

# How to Build



# How to Initiate the Docker Build Co mand

docker build -t YOUR_DOCKERHUB_NAME/enmsgo_landing_page:VERSION .

Example:
docker build -t mohanpannir08/enmsgo_landing_page:1.2 .


After a successfull build you can initiate a the container by this command:
docker run -d -p YOUR DESIRED PORT:80 YOUR_DOCKERHUB_NAME/enmsgo_landing_page:VERSION

Example:
docker run -d -p 8080:80 mohanpannir08/enmsgo_landing_page:1.2