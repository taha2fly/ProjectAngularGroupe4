# template-angular
Dockerized Angular app (v11)

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
docker-compose exec ng /bin/sh
```

## Create a component
```
docker-compose exec ng ng generate component myComponent
```

## Create a service
```
docker-compose exec ng ng generate service myService
```
