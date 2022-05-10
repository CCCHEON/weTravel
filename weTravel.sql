set names utf8;
drop database if EXISTS wetravel;
create database wetravel charset=utf8;
use wetravel;

#创建用户信息表
create table w_user(
	uid int primary key auto_increment,
	uname varchar(32) not null,
	upwd varchar(32) not null,
	phone bigint,
	email varchar(40)
);
insert into w_user values(1,"cheon","543218human",17344361203,"yongcheon543218@outlook.com");
insert into w_user values(2,"yongcheon","543218fff",17795439917,"yong543218@gmail.com");

#创建国家表
create table w_country(
	cid int primary key auto_increment,
	country varchar(32) not null
);
insert into w_country values(001,"中国");
insert into w_country values(002,"危地马拉");
insert into w_country values(003,"阿根廷");
insert into w_country values(004,"智利");

#创建景点咨询表
create table w_spot(
	sid int primary key auto_increment,
	spot varchar(60),
	brief_intro varchar(800),
	location int,
	foreign key(location) references w_country(cid)
);
insert into w_spot values(0001,"禾木草原","盆地周围山体宽厚，顶部呈浑圆状，河流多切割为峡谷，地形复杂，禾木河自东北向西南贯穿其间，将草原分割为两半，山地阳坡森林茂密，苍翠欲滴，马鹿、旱獭、雪鸡栖息其间；而阴坡绿草满坡，繁花似锦，芳香四溢，蜜蜂在采花酿蜜，牛羊满山遍野觅食撒欢，一派迷人的广袤草原景色。",001);
insert into w_spot values(0002,"巴勒莫公园","巴勒莫英国公园是一个占地63亩的城市公园，位于布宜诺斯艾利斯的巴勒莫地区解放者大道和菲罗格亚阿尔科塔大街中间，因其森林、小湖泊和玫瑰园而为人熟知。人们可以步行或骑自行车游览公园，还可以在三个人工湖上泛舟，当然周末人比较多。湖边还有诗人花园，里面有众多知名诗人的石雕和半身铜像，例如路易斯·博尔赫斯和威廉莎士比亚（William Shakespeare）。",003);

