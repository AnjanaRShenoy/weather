# Use the official Jenkins LTS image as the base
FROM jenkins/jenkins:lts

# Switch to root user to install packages
USER root

# Install Docker CLI and Docker Engine (Docker-in-Docker)
RUN apt-get update && \
    apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null && \
    apt-get update && \
    apt-get install -y docker-ce docker-ce-cli containerd.io && \
    usermod -aG docker jenkins && \
    apt-get clean

# Expose Docker daemon port (if needed externally)
EXPOSE 2375

# Set environment variable to allow Docker without TLS
ENV DOCKER_HOST=tcp://localhost:2375

# Switch back to the Jenkins user
USER jenkins
