# Docker Cron Job

In this dojo adventure we are going to create a docker container that is
capable of running cron jobs.

The container will use UTC as the configuration, which is the default.

To run:

    docker-compose up --build

The `docker-compose.yml` file has the necessary info to integrate this into
your existing `docker-compose` recipes.

In a future version it would be nice to pass environment variables into this
configuration to allow for passing secrets into a curl or wget request.
