docker-build:
	docker build -t podpolye_api .

docker-stop:
	docker container stop podpolye_api_container && docker container rm podpolye_api_container

docker-clean:
	docker image rm podpolye_api --force

docker-run:
	docker run -p 3005:3005 -d --name podpolye_api_container podpolye_api

yarn-build:
	yarn build

rebuild: docker-stop docker-clean yarn-build docker-build docker-run