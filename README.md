# CO2 Pricing

This repository contains components used to offer an open source CO2 pricing tool. The tool is based on the work of the [Climate Framework for Uncertainty, Negotiation and Distribution (FUND)](https://github.com/fund-model/MimiFUND.jl). It provides a simple way to estimate the impact of CO2 pricing on the economy and the environment. It also includes 2 other solutions in it:

- A [API Wrapper](/tree/main/julia) around the [Mimifund] service, providing its features in a simple way
- A [Web Application](/tree/main/app)
- A set of [Data Pipelines](/tree/main/pipelines)

![Image](./.images/co2-pricing-screenshot-1.png "CO2 Pricing Web App Preview")

## Built With

- Web App ([TypeScript](https://www.typescriptlang.org))
  - [Next.js](https://nextjs.org)
  - [pnpm](https://pnpm.io/)
- (Deployment)
  - [Kubernetes (k8s)](https://kubernetes.io/)

## Getting Started

This repository is a monorepo, so you can run it in different ways,

## Developing with `docker-compose` (Recommended)

The easiest way is to use the docker-compose file provided in the root of the repository. It will build the web application and the API Wrapper, and run them in a docker container.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [Docker](https://docker.com)
- docker-compose (should be installed with Docker)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/Open-Earth-Foundation/co2-pricing.git
   ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/Open-Earth-Foundation/co2-pricing/issues) for a full list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the Apache 2.0 License. See `LICENSE` for more information.
