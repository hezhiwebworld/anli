﻿window.onload = function(ev){
				//动态设置单页宽高
				var oPage_1 = document.getElementById("page_1");
				var oPage_2 = document.getElementById("page_2");
				var dx = document.documentElement.clientWidth;
				var dy = document.documentElement.clientHeight;
					
				oPage_1.style.width = dx + 'px';
				oPage_1.style.height = dy + 'px';
				
				oPage_2.style.width = dx + 'px';
				oPage_2.style.height = dy + 'px';
				
				
				//登陆框的渐变buffermove
				var ousername = document.getElementById("username");
				var opassword = document.getElementById("password");
				var ouser = document.getElementById("user");
				var opass = document.getElementById("pass");
				ousername.onfocus = function(){
					ousername.value = "";
					buffermove(ousername,{"opacity":100});
					ouser.style.visibility ="hidden";
					ousername.onblur = function(){
						if(ousername.value.length==0){
							ousername.value = "邮箱或手机号";
							buffermove(ousername,{"opacity":30});
							
						}
						
					}
				}
				opassword.onfocus = function(){
					opassword.value = "";
					buffermove(opassword,{"opacity":100});
					opass.style.visibility ="hidden";
					opassword.onblur = function(){
						if(opassword.value.length==0){
							opassword.value = "密码";
							buffermove(opassword,{"opacity":30});
							
						}
						
					}
				}
				//注册登陆切换
				var oSign = document.getElementById("sign");
				var oLoginZhuce = document.getElementById("login_zhuce");
				var oLogin = document.getElementById("login")
				oSign.onclick = function(){
					if(oLogin.offsetHeight!=0){
						buffermove(oLoginZhuce,{"height":194})
						buffermove(oLogin,{"height":0})
					}else{
						buffermove(oLoginZhuce,{"height":0})
						buffermove(oLogin,{"height":232})
					}
				}
				
				//事件轴左右切换
				var otimeLeft = document.getElementById("time_left");
				var otimeRight=document.getElementById("time_right");
				var iNow = 0;
				var arr =[] 
				var otime_list = document.getElementById("time_list");
				var ali = otime_list.children;
				 
				 
				otimeLeft.onclick = function(){
					//移动ul
					iNow++;
					if(iNow>=ali.length){
						iNow = ali.length-1
					}
					setTimeout(function(){
						move(otime_list,-ali[0].offsetWidth*iNow)
					},500)
					
				}
				otimeRight.onclick = function(){
					//移动ul
					
					if(iNow<=0){
						iNow = 1;	
					}
					iNow--;
					
					setTimeout(function(){
						move(otime_list,-ali[0].offsetWidth*iNow)
					},300)
					
				}
				//移动框架
				function move(obj,target){
					clearInterval(obj.timer);
					
					obj.timer = setInterval(function(){
						var speed = (target-obj.offsetLeft)/2
						var icur = obj.offsetLeft+speed;
						if(icur==target){
							clearInterval(obj.timer);
						}else{
							obj.style.left = icur + 'px';
						}
					},30)
				}
				//小图的无缝滚动
				var small_list = document.getElementById("small_list");
				var time_small_img = document.getElementById("time_small_img");
				
				// 将ul复制一份
				small_list.innerHTML = small_list.innerHTML + small_list.innerHTML;
				//动态设置ul的宽
				var sali = small_list.getElementsByTagName('li');
				
				small_list.style.width = 3120 + 'px';
				var timer = null
				function domove(obj){
					timer = setInterval(function(){
						if(obj.offsetLeft<=-1560){
							obj.style.left = 0+ 'px';
						}else{
							obj.style.left = obj.offsetLeft-1+ 'px';
						}
						
					},1)
				};
				domove(small_list);
				//鼠标移入，清除定时器
				for (var i=0;i<sali.length;i++) {
					sali[i].onmouseover = function(){
					clearInterval(timer)
					}
					sali[i].onmouseout = function(){
						domove(small_list);
					}
				}
				
				
			}






