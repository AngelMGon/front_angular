export KUBECONFIG=./kubeconfig
kubectl config view
kubectl get nodes -o wide
kubectl delete deployment front-angular --ignore-not-found=true
kubectl apply -f front-angular.yaml
kubectl get services front-angular-lb
kubectl get pods