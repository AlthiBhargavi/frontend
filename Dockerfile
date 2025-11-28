# 1️⃣ Build Stage
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build  # output -> /app/dist

# 2️⃣ Serve using Nginx
FROM nginx:alpine

# Clear default nginx html folder (optional, but safe)
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
