function byId(id){
  return typeof(id) === "string"?document.getElementById(id):id;
}
var banner = byId("banner");
  index = 0,
  timer = null,
  pics = byId("banner").getElementsByTagName("div"),
  dots = byId("dots").getElementsByTagName("span"),
  prev = byId("prev"),
  next = byId("next"),
  len = pics.length;

// console.log(banner);
// console.log(len);
function slideImg(){
  //滑过时清除定时器
  banner.onmouseover = function(){
    if(timer) clearInterval(timer);
  }
  banner.onmouseout = function(){
    timer = setInterval(function(){
      index++;
      if(index >= len){
        index = 0;
      }
      //切换图片
      changeImg();
    }, 3000);
  }
  banner.onmouseout();    //自动在main上触发鼠标离开事件


  //对dots取index
  for(var m = 0; m < len; m++){
    dots[m].id = m;
    dots[m].onclick = function(){
      index = this.id;
      changeImg();
    }
  }

  //下一张
  prev.onclick = function(){
    index++;
    if(index >= len) index = 0;
    changeImg();
  }

  //上一张
  next.onclick = function(){
    index--;
    if(index >= len) index = 0;
    changeImg();
  }


}


function changeImg(){
  for(var i = 0; i < len; i++){
    pics[i].style.display = "none";
    dots[i].className = "";
  }
  pics[index].style.display = "block";
  dots[index].className = "active";
}

slideImg();