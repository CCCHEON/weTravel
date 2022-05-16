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

//查询用户名是否存在 //接口测试通过
router.get("/select",(req,res)=>{
	const uname=req.query.uname
	const n="select uid from w_user where uname=?"
	pool.query(n,uname,(err,result)=>{
		if(err){
			throw err
			return
		}
	result.length>0 ? res.send({code:200,msg:"用户名已经存在"}) : res.send({code:201,msg:"用户名不存在"})		
	})
})

//用户登录 查询数据  //接口测试不
router.post("/log",(req,res)=>{
	const uname=req.body.uname
	const upwd=req.body.upwd
	//const upwd=req.body.upwd
	//console.log(upwd)
	const n=`select upwd from w_user where uname=?` 
	pool.query(n,uname,(err,result)=>{
		if(err){
			throw err
			return
		}	

		result==upwd ? res.send({code:200,msg:`登录成功!欢迎${uname}`}) : res.send({code:201,msg:"登录失败!"})
	})
})