# pull latest julia image
FROM --platform=linux/amd64 julia:latest

# Installs Git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# create dedicated user
RUN useradd --create-home --shell /bin/bash genie

# set up the app
RUN mkdir /home/genie/app
COPY . /home/genie/app
WORKDIR /home/genie/app

# configure permissions
RUN chown -R genie:genie /home/

RUN chmod +x bin/repl
RUN chmod +x bin/server
RUN chmod +x bin/runtask

# switch user
USER genie

# instantiate Julia packages
RUN git clone https://github.com/JuliaRegistries/General.git ~/.julia/registries/General
# RUN julia -e "using Pkg; Pkg.Registry.add(RegistrySpec(url = \"https://github.com/JuliaRegistries/General.git\"));"
RUN julia -e "using Pkg; Pkg.Registry.add(RegistrySpec(url = \"https://github.com/mimiframework/MimiRegistry.git\"));"
RUN julia -e "using Pkg; Pkg.activate(\".\"); Pkg.instantiate(); Pkg.precompile(); "

# ports
EXPOSE 6541
EXPOSE 80

# set up app environment
ENV JULIA_DEPOT_PATH "/home/genie/.julia"
ENV GENIE_ENV "dev"
ENV GENIE_HOST "0.0.0.0"
ENV PORT "6541"
ENV WSPORT "6541"
ENV EARLYBIND "true"

# run app
CMD ["bin/server"]

# or maybe include a Julia file
# CMD julia -e 'using Pkg; Pkg.activate("."); include("IrisClustering.jl"); '
