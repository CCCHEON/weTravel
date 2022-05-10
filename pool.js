const mysql=require("mysql")
const pool=mysql.createPool({
	"user":"root",
	"database":"wetravel"
})
module.exports=pool