package service

import (
	"auth_server/authpb"
	"golang.org/x/net/context"
	"log"
	"time"
)

type AuthServer struct {
}

func (*AuthServer) CheckServerStatus(ctx context.Context, req *authpb.CheckServerStatusRequest) (*authpb.CheckServerStatusResponse, error){
	log.Println("CheckServerStatus RPC Initiated..!!")
	return &authpb.CheckServerStatusResponse{
		ServerName: "Authentication Server",
		Host:"Localhost",
		Port:"50051",
		Time:time.Now().Format(time.Stamp),
		Status:"Good :)",
	}, nil
}

func (*AuthServer) RegisterAccount(ctx context.Context, req *authpb.RegisterAccountRequest) (*authpb.RegisterAccountResponse, error) {
	log.Println("RegisterAccount invoked with : ", req)
	return &authpb.RegisterAccountResponse{Result:"Account created successfully..!!", Status:"pending"}, nil
}

