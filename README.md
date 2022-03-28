# NestJS starter repository

## Description

Repository with:

- [Nest](https://github.com/nestjs/nest)
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration)
- [@nestjs/terminus](https://docs.nestjs.com/recipes/terminus)
- TypeScript stacktraces
- Docker image

## Installation

```sh
yarn
```

## Running the app

```sh
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```sh
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e
```

## Configuration

Application configs are stored in [src/config](./src/config/) directory.

### Env vars

| Var name | Description | Default value |
|---|---|---|
| `PORT` | Port used by application HTTP server | 3000 |
