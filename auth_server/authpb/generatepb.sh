#!/usr/bin/env bash

## Authentication backend service proto file generate shell script  (go-lang)
protoc authpb/authpb.proto --go_out=plugins=grpc:.

## Authentication frontend service proto file generate shell script  (javascript)
protoc authpb/authpb.proto --js_out=import_style=commonjs:.
protoc authpb/authpb.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

