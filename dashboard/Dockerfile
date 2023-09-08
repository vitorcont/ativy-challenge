FROM nginx:latest
WORKDIR /usr/share/nginx/html

COPY ./dist/ /usr/share/nginx/html/
COPY ./dist/ /usr/share/nginx/html/apps/ativy-todo

ENTRYPOINT ["nginx", "-g", "daemon off;"]