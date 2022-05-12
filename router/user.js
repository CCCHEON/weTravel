const express=require("express")
const router=express.Router()
const pool=require("../pool.js")
module.exports=router

//用户注册 插入数据  //接口测试通过
router.post("/reg",(req,res)=>{
	const m=req.body
	const n="insert into w_user set ?"
	pool.query(n,[m],(err,result)=>{
		if(err){
			throw err
			return
		}
		result.affectedRows>0 ? res.send({code:200,msg:"注册成功"}) : res.send({code:201,msg:"注册失败"})
	})
})

//用户登录 查询数据  //接口测试通过
router.get("/log",(req,res)=>{
	const uname=req.body.uname
	const upwd=req.body.uname
	//const upwd=req.body.upwd
	//console.log(uname)
	const n=`select upwd from w_user where uname=?` 
	pool.query(n,uname,(err,result)=>{
		if(err){
			throw err
			return
		}			
		//console.log(result.upwd)
		result.upwd==upwd ? res.send({code:200,msg:`登录成功!欢迎${uname}`}) : res.send({code:201,msg:"登录失败!"})
	})
})