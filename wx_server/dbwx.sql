SET NAMES UTF8;
#drop database if exists weixin;
create database weixin CHARSET=UTF8;
use weixin;

CREATE TABLE `lunbolist` (
  lid int(11) PRIMARY KEY AUTO_INCREMENT,
  img_url varchar(255),
  title varchar(50)
);

insert into lunbolist values(NULL,"http://127.0.0.1:3100/img/swiper/1.jpg","图片1");
insert into lunbolist values(NULL,"http://127.0.0.1:3100/img/swiper/2.jpg","图片2");
insert into lunbolist values(NULL,"http://127.0.0.1:3100/img/swiper/3.jpg","图片3");
insert into lunbolist values(NULL,"http://127.0.0.1:3100/img/swiper/4.jpg","图片4");

CREATE TABLE `navlist` (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  img_url varchar(255),
  title varchar(50)
);

insert into navlist values(NULL,"http://127.0.0.1:3100/img/nav/phone.png","图片1");
insert into navlist values(NULL,"http://127.0.0.1:3100/img/nav/tv.png","图片2");
insert into navlist values(NULL,"http://127.0.0.1:3100/img/nav/computer.png","图片3");
insert into navlist values(NULL,"http://127.0.0.1:3100/img/nav/router.png","图片4");
insert into navlist values(NULL,"http://127.0.0.1:3100/img/nav/news.png","图片5");

CREATE TABLE `activitylist` (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  img_url varchar(255),
  title varchar(50)
);

insert into activitylist values(NULL,"http://127.0.0.1:3100/img/index/1.jpg","图片1");
insert into activitylist values(NULL,"http://127.0.0.1:3100/img/index/2.jpg","图片2");
insert into activitylist values(NULL,"http://127.0.0.1:3100/img/index/3.jpg","图片3");

CREATE TABLE `blocklist` (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  img_url varchar(255)
);

insert into blocklist values(NULL,"http://127.0.0.1:3100/img/index/4.jpg");
insert into blocklist values(NULL,"http://127.0.0.1:3100/img/index/9.jpg");
insert into blocklist values(NULL,"http://127.0.0.1:3100/img/index/14.jpg");
insert into blocklist values(NULL,"http://127.0.0.1:3100/img/index/19.jpg");
insert into blocklist values(NULL,"http://127.0.0.1:3100/img/index/24.jpg");

CREATE TABLE `goodslist` (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  img_url varchar(255),
  title varchar(50),
  desp varchar(32),
  meta int,
  discount int
);

insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/5.jpg","红米5A,轻巧长续航","高通骁龙处理器",569,599);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/6.webp","红米5,4GB+32GB","千元全面屏",999,1099);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/7.jpg","红米Note5,4GB+64GB","1.4um大像素AI双摄",1399,1399);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/8.jpg","红米自拍手机S2","1600万像素自拍手机",999,999);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/10.jpg","小米5X变焦双摄","5.5英寸大屏轻薄全金属",1299,1499);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/11.webp","小米MIX2 全陶瓷 黑色","Unibody 全陶瓷",3699,4699);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/12.jpg","红米Note5,6GB+64GB","1.4μm大像素AI双摄",1699,1699);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/13.webp","小米Max2 大屏大电量","6.44''大屏,5300mAh大电量",1299,1399);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/15.webp","TS防蓝光护目镜","35%蓝光阻隔率,超轻材质",99,99);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/16.webp","米家声波电动牙刷","高效能磁悬浮声波马达",199,199);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/17.webp","小米智能摄像1S","1080高清画质,安全看家",99,99);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/18.jpg","尼龙偏光太阳镜","尼龙偏光镜片",199,199);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/20.jpg","小米小爱音箱mini","能听会说的人工智能音箱",169,169);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/21.jpg","小米蓝牙项圈耳机","项圈式设计/轻量化亲肤材质",299,299);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/22.jpg","米家LED吸顶灯","用光线,还原理想生活",399,399);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/23.jpg","小米路由器4","双频双核 更快更稳定",199,199);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/25.webp","小米AI音箱","能播音乐、讲故事、查路况、设闹钟、还能控制智能设备",299,299);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/26.webp","小米运动蓝牙耳机mini","迷你机身，小如蚕豆",169,169);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/27.webp","小米路由器3A","一台路由器满足全家上网需求",139,139);
insert into goodslist values(NULL,"http://127.0.0.1:3100/img/index/28.webp","小米空气净化器2S","经典再升级,好空气看得见",899,899);

CREATE TABLE `videolist` (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  video_url varchar(255),
  img_url varchar(32),
  header varchar(32),
  desp varchar(32)
);

insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/1.mp4","http://127.0.0.1:3100/img/faxian/2.jpg","小米8，一部与众不同的手机","透明探索版，将科技与美学完美结合");
insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/3.mp4","http://127.0.0.1:3100/img/faxian/4.jpg","小米MIX 2S，一面科技 一面艺术","艺术品般陶瓷机身，惊艳、璀璨");
insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/5.mp4","http://127.0.0.1:3100/img/faxian/6.jpg","天生丽质的小米6X","让你一见倾心");
insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/7.mp4","http://127.0.0.1:3100/img/faxian/8.jpg","生活中无所不在的小爱同学","一句话搞定手机复杂操作");
insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/9.mp4","http://127.0.0.1:3100/img/faxian/10.jpg","小米7年工艺探索之路","听雷总讲述小米7年工艺探索之路");
insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/11.mp4","http://127.0.0.1:3100/img/faxian/12.jpg","小米接连斩获国际顶尖设计大奖","小米接连斩获国际顶尖设计大奖");
insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/13.mp4","http://127.0.0.1:3100/img/faxian/14.jpg","米兔故事机，能讲故事还能微信互动","漂亮的米兔故事机，能讲故事还能微信互动");
insert into videolist values(NULL,"http://127.0.0.1:3100/img/faxian/15.mp4","http://127.0.0.1:3100/img/faxian/16.jpg","菲利普·斯塔克的设计哲学","菲利普·斯塔克的设计哲学");