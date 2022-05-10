const express=require("express")
const router=express.Router()
const pool=require("../pool.js")
module.exports=router

//帖子录入/分享 插入数据 渲染到个人主页 //参数是文本
router.post("/publish",(req,res)=>{
	const m=req.body
	const n="insert into w_spot set ?"
	pool.query(n,[m],(err,result)=>{
		if(err){
			throw err
			res.send({code:201,msg:"帖子添加失败"})
			return
		}else{
			res.send({code:200,msg:"帖子添加成功"})
		}	
	})
})

//景点论坛搜索 查询数据 params传参
router.get("/browse/:keyword",(req,res)=>{
	const m=req.query
	const n="select spot,brief_intro,location from w_spot where spot=? || location=?"
	pool.query(n,[m.spot,m.location],(err,result)=>{
		if(err){
			thow err
			return
		}
		if(result.length>0){
			res.send({code:200,msg:"查询成功"})
		}else{
			res.send({code:201,msg:"查询失败"})
		}
	})
})