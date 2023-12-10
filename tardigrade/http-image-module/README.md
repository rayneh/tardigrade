# http-image-module



## Important commands


```
helm dependency build charts/

helm upgrade --install http-server charts/ --create-namespace --namespace http-server ${HELM_CHART_VALUES}

kubectl create -n http-server secret docker-registry regcred --docker-server=registry.gitlab.com --docker-username=<user> --docker-password=<pasword>

# Rebuild your Docker image (replace with your actual image name and tag)
docker build -t registry.gitlab.com/constellation-hackathon-2023/backend/http-image-module:latest .

# Push the updated Docker image to your container registry
docker push registry.gitlab.com/constellation-hackathon-2023/backend/http-image-module:latest