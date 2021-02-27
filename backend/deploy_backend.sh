echo "Deploying Backend..."
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 000212943930.dkr.ecr.us-east-1.amazonaws.com
docker build -t logicshare-backend-ja .
docker tag logicshare-backend-ja:latest 000212943930.dkr.ecr.us-east-1.amazonaws.com/logicshare-backend-ja:latest
docker push 000212943930.dkr.ecr.us-east-1.amazonaws.com/logicshare-backend-ja:latest
cd aws_deploy
eb deploy