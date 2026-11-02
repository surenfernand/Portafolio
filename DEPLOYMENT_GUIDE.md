# Web Loom Zone: deploy to Docker Hub and Coolify

This project is a Next.js site. The image builds that app, serves it on port 80, and publishes to Docker Hub. Coolify pulls the image. No database or environment variables are required.

## 1. Files

- Dockerfile
- .dockerignore
- .github/workflows/docker-publish.yml
- deploy/nginx.conf
- deploy/start.sh
- deploy/check_site.py

Nginx listens on port 80 and forwards traffic to the Next.js server inside the container. `/healthz` returns `ok`.

## 2. Docker Hub

Create a repository named `web-loom-zone`. Create a personal access token with permission to read and write that repository. Do not put the token in the project or in chat.

A public repository lets the server pull the image without extra login. A private repository needs Docker Hub pull authentication configured in Coolify.

## 3. GitHub secrets

In the GitHub repository: Settings > Secrets and variables > Actions > Repository secrets.

- `DOCKERHUB_USERNAME`: lowercase Docker Hub username, not an email address
- `DOCKERHUB_TOKEN`: the Docker Hub access token

The workflow runs on pushes to `main` and from Actions > Build and publish Web Loom Zone > Run workflow. It checks the project files, builds a linux/amd64 image, smoke-tests the five pages, then pushes `latest` and the full commit SHA. A failed check stops publication.

## 4. Coolify

Add a Docker Image resource on the server.

- Name: web-loom-zone
- Docker Image: YOUR_DOCKERHUB_USERNAME/web-loom-zone
- Tag: latest, or the full commit SHA for a fixed release
- Ports Exposes: 80
- Ports Mappings: leave empty
- Environment variables: none
- Persistent storage: none

Deploy and open the application URL. Check Home, What we do, Our work, Pricing, and About us.

The health check path is `/healthz` on port 80. Do not publish this app directly on the host's port 80. Coolify's proxy forwards public ports 80 and 443 to container port 80.

Pushing the image does not redeploy Coolify by itself. After a successful GitHub run, choose Redeploy in Coolify. To roll back, set the tag to an older commit SHA and deploy again.
