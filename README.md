# ProjectAngularGroupe4
Dockerized Angular app (v11)

## How to launch the project
```
docker-compose up

open localhost:4200 on your favorite web browser (use chrome)

```
## How to stop the project
```
docker-compose down

```
## URL
```
localhost:4200
```

## Launch docker
```
docker-compose up --build
```

## Start docker
```
docker-compose start
```

## Remove container
```
docker-compose down
```

## Show container logs
```
docker-compose logs -f
```

## Access to docker
```
docker-compose exec template-ng2 /bin/sh
```

## Create a component
```
docker-compose exec template-ng2 ng generate component myComponent
```

## Create a service
```
docker-compose exec template-ng2 ng generate service myService
```