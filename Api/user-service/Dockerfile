FROM node:14.19.0 

WORKDIR /app

COPY . .

CMD ["npm","run","dev"]




# FROM node:14.19.0 AS builder 

# WORKDIR /app

# COPY . .

# RUN npm run build



# FROM nginx:alpine

# WORKDIR /usr/share/nginx/html

# COPY --from=builder /app/build .

# CMD ["nginx", "-g", "daemon off;"]