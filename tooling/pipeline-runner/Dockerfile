# Use the official Debian slim image
FROM debian:stable-slim

# Create an ansible user
RUN useradd -m -d /home/runner runner

ENV NODE_VERSION=16.13.0
# Update and install necessary packages
RUN apt-get update && \
    apt-get install -y curl git openssh-client apt-transport-https ca-certificates gnupg curl sudo && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

#install gcloud
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg  add - && apt-get update -y && apt-get install google-cloud-cli google-cloud-sdk-gke-gcloud-auth-plugin -y

# install kubectl
RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# install helm
RUN curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# install node
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# install semantic release
RUN npm install -g \
    semantic-release@v17.0.4 \
    @semantic-release/gitlab-config@v8.0.0 \
    @semantic-release/gitlab@v6.0.3 \
    @semantic-release/github@v7.0.5 \
    @semantic-release/exec@v5.0.0 \
    semantic-release-docker@v2.2.0

# Set up SSH for the runner user
RUN mkdir /home/runner/.ssh && \
    chmod 700 /home/runner/.ssh && \
    chown runner:runner /home/runner/.ssh

# Switch to the ansible user
USER runner

# Start as ansible user
CMD ["/bin/bash"]
