FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY dist/sg-ng-router-learning/browser /usr/share/nginx/html

#   commands
#   ng b
#   docker image build --tag ng-app .
#   docker container run --detach --name ng-container --publish 8080:80 ng-app

#   Open localhost:8080 in the browser