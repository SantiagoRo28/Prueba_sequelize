var monsgoose = require("mongoose");
var Schema = monsgoose.Schema;
monsgoose.connect("");

var user_schema = new Schema({
    name: String,
    username: {type: String, required:true, maxlength:[50, "Username too long"]},
    age: {type: Number, min:[5,"La edad no puede ser menor que 5"], max:[100,"La edad no puede ser mayor que 100"]},
    email:{type:String, require:"El correo es obligatorio", match: email_match},
});