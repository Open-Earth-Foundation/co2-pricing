# CO2 Pricing

This repository contains components used to offer an open source CO2 pricing tool. The tool is based on the work of the [Climate Framework for Uncertainty, Negotiation and Distribution (FUND)](<https://github.com/fund-model/MimiFUND.jl>). It provides a simple way to estimate the impact of CO2 pricing on the economy and the environment. It also includes 2 other solutions in it:

* A [API Wrapper](/tree/main/julia) around the [Mimifund] service, providing its features in a simple way
* A [Web Application](/tree/main/app)

![Image](./.images/co2-pricing-screenshot-1.png "CO2 Pricing Web App Preview")

## Built With

* [Next.js](https://nextjs.org)
* [Docker](https://docker.com)
* [docker-compose](https://docs.docker.com/compose)
* [Julia (Language)](https://julialang.org)

### Also used

* [Mimi (Integrated Assessment Modeling Framework)](https://github.com/mimiframework/Mimi.jl)
* [TypeScript](https://www.typescriptlang.org)

#### Stale dependencies (for now)

* [NextAuth.js](https://next-auth.js.org)
* [Prisma](https://www.prisma.io)

## Getting Started

This repository is a monorepo, so you can run it in different ways,

## Developing with `docker-compose` (Recommended)

The easiest way is to use the docker-compose file provided in the root of the repository. It will build the web application and the API Wrapper, and run them in a docker container.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* [Docker](https://docker.com)
* docker-compose (should be installed with Docker)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/Open-Earth-Foundation/co2-pricing.git
   ```

2. Copy the `app/.env.example` file to `app/.env` and fill the variables

   ```sh
   cp app/.env.example app/.env
   ```

3. Run the docker-compose file

   ```sh
    docker-compose up
    ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Open-Earth-Foundation/co2-pricing/issues) for a full list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
