FROM golang:1.8

WORKDIR /go/src/auth_server
COPY . .

#RUN apk add --no--cache bash git openssh
RUN go get -d -v ./...
#RUN go install -v ./...

CMD ["auth_server"]