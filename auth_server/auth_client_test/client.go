package auth_client_test

import (
	"context"
	"google.golang.org/grpc"
	"log"
	"auth_server/authpb"
)

func main()  {
	option := grpc.WithInsecure()

	// Set up a connection to the gRPC server.
	conn, err := grpc.Dial("localhost:50051", option)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	client := authpb.NewAuthServiceClient(conn)

	res, err := client.RegisterAccount(context.Background(), &authpb.RegisterAccountRequest{
		Username:"nanda",
		Email:"nandakumar111@outlook.com",
		Password:"nanda",
		ConfirmPassword:"nanda",
		FirstName:"Nandakumar",
		LastName:"R",
		CompanyTerms:true,
		GovtTerms:true,
	})

	if err != nil{
		log.Fatalf("Error while calling RegisterAccount RPC..!!")
	}

	log.Println("Response from RegisterAccount RPC : ", res)
}
