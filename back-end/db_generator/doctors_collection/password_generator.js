function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        pwdVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        pwdVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return pwdVal;
}

db.doctors.find({}).forEach(function(doc){
    id = doc["_id"]
    password = generatePassword()
    db.doctors.update({"_id":id},{$set:{"password":password}})
});

//make the email lowercase
db.doctors.find({}).forEach(function(doc){
    id = doc["_id"]
    email = doc["email_address"]
    email_address= email.toLowerCase();
    db.doctors.update({"_id":id},{$set:{"email_address":email_address}})
});