/*
* @Author: 木木
* @Date:   2017-09-18 16:31:18
* @Last Modified by:   木木
* @Last Modified time: 2017-09-25 13:58:18
*/
window.onload=function(){
// 侧导航	

function $(select,range){
    var range = range || document
    var first = select.charAt(0);
    if (first=='.') {
      return document.getElementsByClassName(select.substring(1),range);
    }else if (first=='#') {
      return document.getElementById(select.substring(1));
    }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
      return document.getElementsByTagName(select);
      } 
    }

function getClass(classname,range){
      var range=range||document;
      if(document.getElementsByClassName){
        return range.getElementsByClassName(classname);
      }
      else{
      var newarr=[];
      var all=range.getElementsByTagName('*');
      for (var i=0;i<all.length;i++){
        if(check(all[i].className,classname)){
          newarr.push(all[i]);
        }
      }
      return newarr;
      }
    }
    function check(className,classname){
  var arr = className.split(' ');
  for(var j=0;j<arr.length;j++){
    if (arr[j]==classname) {
      return true;
    }
  }
  return false;
}




function float(obj,speed){
   this.name=obj;
   this.speed = speed;
   this.speed1 = speed;

   this.maxX=window.innerWidth-this.name.offsetWidth;
   this.maxY=window.innerHeight-this.name.offsetHeight;

}
 float.prototype.move=function(){
  let that = this;
  let t = setInterval(function(){
      let lefts = that.name.offsetLeft+that.speed;
      if (lefts<=0) {
        lefts=0;
        that.speed*=-1
      }
      if (lefts>=that.maxX) {
        lefts=that.maxX;
        that.speed*=-1
      }
      that.name.style.left =lefts+'px';

  },60)
    let t1 = setInterval(function(){
      let tops = that.name.offsetTop+that.speed1;
      if (tops<=0) {
        tops=0;
        that.speed1*=-1
      }
      if (tops>=that.maxY) {
        tops=that.maxY;
        that.speed1*=-1
      }
      that.name.style.top =tops+'px';

  },60)
 }
 // 获取之后
// let obj = new float (box,100)
//  obj.move();



//  function animate(obj,attrobj,callback){
//   let t = setInterval(function(){
//       for(let i in attrobj){
//         let w =parseInt(window.getComputedStyle(obj,null)[i])
//         if (w>=attrobj[i]) {
//               w=attrobj[i];
//           clearInterval(t);
//           if(callback){
//             callback();
//           }
//        }
//        obj.style[i] = w+10+'px';  
//   }
//  },60)
// }



 // function animate(obj,attr,end){
 //    let t = setInterval(function(){
 //        let w =parseInt(window.getComputedStyle(obj,null)[attr])
 //        if (w>=end) {
 //          w=end;
 //          clearInterval(t);
 //        }
 //         obj.style[attr] = w+10+'px';
 //    },60)
 // }
 // animate(box,'width',500)

let aside =$('.banner-left')[0];
let lis = aside.getElementsByTagName('li');
let item = document.getElementsByClassName('item');
for (let i=0;i<lis.length;i++){
   lis[i].onmouseover=function(){
   	item[i].style.display = 'block';
   }
    lis[i].onmouseout=function(){
    item[i].style.display = 'none';
   }
}
// 圆
let yuan = document.getElementsByClassName('yuan')[0];
let yuan1 = yuan.getElementsByClassName('yuan1');
let banner =document.getElementsByClassName('banner')[0];
let bannerimg = banner.getElementsByClassName('bannerimg')[0];
let bannertu= bannerimg.getElementsByTagName('img');
let lis2= $('.bannerli')[0];
console.log(bannertu)

for(let i=0;i<yuan1.length;i++){
	yuan1[i].onclick=function(){
    for(let j=0;j<bannertu.length;j++){
    // bannertu[j].style.display='none'
    animate(bannertu[j],{opacity:0});
    yuan1[j].style.background = '#A2A2A2';
  }
     yuan1[i].style.background='#fff';
     // bannertu[i].style.display='block';
     animate(bannertu[i],{opacity:1});
     num=i;
	} 
}
// let now = 0;
// for(let i =0;i<yuan1.length;i++){
//   yuan1[i].onclick = function(){
//     bannertu[now].style.display='none';
//     bannertu[i].style.display='block';
//     yuan1[now].style.background = '#A2A2A2';
//     yuan1[i].style.background='#fff';
//     now=i;
//   }
// }


let t=setInterval(move,3000);
let num = 0;
function move(){
    num++;
  if (num==bannertu.length) {
    num=0;
  }
  for(let i=0;i<bannertu.length;i++){
    // bannertu[i].style.display='none';
    animate(bannertu[i],{opacity:0});
    yuan1[i].style.background = '#A2A2A2';

  }
    // bannertu[num].style.display='block';
   animate(bannertu[num],{opacity:1});
    yuan1[num].style.background = '#fff';
    // num=i;
}



banner.onmouseover=function(){
      clearInterval(t);
    }  
banner.onmouseout=function(){
      // num=i;
   t=setInterval(move,3000);

 } 



// let imgleft =$('.imgleft')[0];




let r1 = document.getElementsByClassName('r1')[0];
let r1item = document.getElementsByClassName('r1item')[0];
r1.onmouseover = function (){
  r1item.style.display='block';
}
r1.onmouseout = function (){
  r1item.style.display='none';
}
  
let r4 = document.getElementsByClassName('r4')[0];
let r4item = document.getElementsByClassName('r4item')[0];
r4.onmouseover = function (){
  r4item.style.display='block';
}
r4.onmouseout = function (){
  r4item.style.display='none';
}

let r51 = document.getElementsByClassName('r51')[0];
let r51item = document.getElementsByClassName('r51item')[0];
r51.onmouseover = function (){
  r51item.style.display='block';
}
r51.onmouseout = function (){
  r51item.style.display='none';
}


let r53 = document.getElementsByClassName('r53')[0];
let r53item = document.getElementsByClassName('r53item')[0];
r53.onmouseover = function (){
  r53item.style.display='block';
}
r53.onmouseout = function (){
  r53item.style.display='none';
}

let r54 = document.getElementsByClassName('r54')[0];
let r54item = document.getElementsByClassName('r54item')[0];
r54.onmouseover = function (){
  r54item.style.display='block';
}
r54.onmouseout = function (){
  r54item.style.display='none';
}


// 侧导航

let cedaohang=document.getElementsByClassName('cedaohang')[0];
let celi = cedaohang.getElementsByTagName('li');
let liulanqiheight = window.innerHeight;
let color = ['','skyblue','yellowgreen','pink','green','red','orange','blue'];
let newarr=[];
let floor = document.getElementsByClassName('meili-body');
   for(let i=0;i<floor.length;i++){
    newarr.push(floor[i].offsetTop);
   }

let flag = true;

for (let i=0;i<celi.length;i++){
  celi[i].onclick=function(){
   flag=false;
 for(let j =0;j<celi.length;j++){
  celi[j].style.background='none';
 }
   celi[0].style.background='red';
   celi[i].style.background=color[i];
   // document.documentElement.scrollTop=newarr[i-1];
   animate(document.documentElement,{scrollTop:newarr[i-1]},function(){
         flag=true;
   })
  }
}

  window.onscroll = function (){
    let scrolltop = document.documentElement.scrollTop;
    if (flag) {
    for (let i =0;i<celi.length;i++){
      if (liulanqiheight+scrolltop>=newarr[i]) {
        for(let j=0;j<celi.length;j++){
        celi[j].style.background='none';
        }
        celi[0].style.background='red';
       celi[i].style.background=color[i];
      }
  }
    }



    let flag1=true;
    let sousuo=document.querySelector('.sousuobig');
    if (scrolltop > 100) {
        if (flag1) {
            flag1 = !flag1;
            animate(sousuo, {top: 0});
        }
    }
      if(scrolltop <= 100){
            if(!flag1){
                flag1=!flag1;
                animate(sousuo,{top:-100});
            }

        }
}

































}



