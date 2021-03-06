# KafkaProducerStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker Commands
docker image build -t kafka-producer-starter .
### Environment specific deployments
docker image build -f Dockerfile.staging -t senkaushik1984/kafka-producer-starter .

## Docker run locally
docker run --detach --publish 82:80 kafka-producer-starter

## Docker tag
docker tag kafka-producer-starter kaushiksen1984/kafka-producer-starter

## Push to docker hub
docker push kaushiksen1984/kafka-producer-starter

## Consumed port list
netsh interface ipv4 show excludedportrange protocol=tcp
