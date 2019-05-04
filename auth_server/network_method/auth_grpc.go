package network_method

import (
	"auth_server/authpb"
	"auth_server/config"
	"auth_server/service"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/reflection"
	"io/ioutil"
	"log"
	"net"
	"os"
)

var serverLog grpclog.LoggerV2

func init() {
	serverLog = grpclog.NewLoggerV2(os.Stdout, ioutil.Discard, ioutil.Discard)
	grpclog.SetLoggerV2(serverLog)
}

func StartGRPCServer(grpcNetwork config.ServerNodes, tls config.TLSNodes)  error{

	// create a listener on TCP port
	lis, err := net.Listen("tcp", grpcNetwork.Host+":"+grpcNetwork.Port)
	if err != nil {
		log.Fatalf("could not list on %v: %v", grpcNetwork.Port, err)
	}

	// Create an empty array of gRPC options
	var options []grpc.ServerOption

	if tls.Active{
		cred, err := credentials.NewServerTLSFromFile(tls.Certificate,tls.KeyFile)
		if err != nil {
			log.Fatalf("Error : %v", err)
		}
		options = append(options, grpc.Creds(cred))
	}

	// create a gRPC server object
	gRPC:= grpc.NewServer(
		options...
	)

	authpb.RegisterAuthServiceServer(gRPC,&service.AuthServer{})
	log.Printf("Starting HTTP/2 gRPC Authentication Server on %s : %s", grpcNetwork.Host, grpcNetwork.Port)

	reflection.Register(gRPC)

	// start the server
	serverLog.Fatal(gRPC.Serve(lis))

	return nil
}
