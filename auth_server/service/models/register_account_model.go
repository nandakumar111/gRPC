package models

type AccountModel struct {
	Id string `json:"id" bson:"_id,omitempty"`
	Email string `json:"email" valid:"required~EmailID is required,email~Valid Email ID required"`
	Username string `json:"username" valid:"length(4|15)~Username should contain at least 4 characters and maximum of 15,alphanum~Username should contain only Alphabets and Numbers,required~Username is required"`
	Password string `json:"password" valid:"length(6|15)~Password should contain at least 6 characters and maximum of 15,required~Password is required,matches(^.*[a-z].*$)~Password should contain One Lowercase,matches(^.*[A-Z].*$)~Password should contain One Uppercase,matches(^.*[0-9].*$)~Password should contain One Number,matches(^.*[!@#$^&*_+=\\-<>?.].*$)~Password should contain One Symbol. Allowed special characters are ! @ # $ ^ & * _ - + = < > ? ."`
	FirstName string `json:"first_name" valid:"alpha~First name should contain only Alphabets,required~First name is required"`
	LastName string `json:"last_name" valid:"alpha~Last name should contain only Alphabets,required~Last name is required"`
	Status string `json:"status"`
	CreatedTime int64 `json:"created_time"`
	UpdatedTime int64 `json:"updated_time"`
}

