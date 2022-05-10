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
			res.send({code:201,msg:"注册失败"})
			return
		}else{
			res.send({code:200,msg:"注册成功"})
		}	
	})
})

//用户登录 查询数据  //参数接收有问题,接口测试通过
router.post("/log",(req,res)=>{
	const m=req.body
	//console.log(m)

	const n=`select uid from w_user where ? and upwd=?` 
	console.log(n)
	pool.query(n,[m.uname,m.upwd],(err,result)=>{
		if(err){
			throw err
			return
		}			
		console.log(result)
		if(result.length>0){
			res.send({code:200,msg:`登录成功!欢迎${m.uname}`})
		}else{
			res.send({code:201,msg:"登录失败!"})
		}
	})
})