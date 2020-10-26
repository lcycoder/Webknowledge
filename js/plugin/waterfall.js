if(!window.myPlugin){
    window.myplugin = {};
}
window.myPlugin.createWaterFall = function(option){
    var defaulOption = {   // 默认
        minGap:10,   //最小间隙
        imgSrcs:[],  // 图片路径的数组
        imgWidth:220, //单张图片宽度
        container:document.body //容器
    };
    var option = Object.assign({},defaulOption,option); //对象混合
    var imgs = [];  
    handleParent();//处理父元素
    createImgs();//创建图片元素  
    
    var debounce = myPlugin.debounce(setImgPosition, 300)
    window.onresize = debounce;
    
    function setImgPosition(){
        var info = getHorizontalInfo();
        var arr = new Array(info.number); // 存放 每一列下一张图片的TOP值
        arr.fill(0); 
        imgs.forEach(function(img){
            //
            var minTop = Math.min.apply(null,arr);
            img.style.top = minTop+'px'; // 纵坐标
            var index = arr.indexOf(minTop);
            arr[index] += img.clientHeight + info.gap;
            img.style.left = index * (option.imgWidth+info.gap)+'px';
            
        });
        //设置容器的高度
         var maxTop = Math.max.apply(null,arr);
         option.container.style.height = maxTop -info.gap +'px';
    }

    function getHorizontalInfo(){
        var obj = {};
        obj.containerWidth = option.container.clientWidth;
        obj.number = (obj.containerWidth+option.minGap)/(option.imgWidth + option.minGap);
        obj.number = Math.floor(obj.number);//向下取整
        obj.gap = (obj.containerWidth - obj.number * option.imgWidth) / (obj.number - 1);
        return obj;
    }
    function createImgs(){
        var debounce = myPlugin.debounce(setImgPosition, 30);
        for( var i =1;i<option.imgSrcs.length;i++){
            var img = document.createElement('img');
            img.src = option.imgSrcs[i];
            img.style.width = option.imgWidth +'px';
            img.style.position='absolute';
            img.style.transition = '.5';
            imgs.push(img);
            img.onload = debounce; //函数节流
            option.container.appendChild(img);
        }
        
    }
    function handleParent(){
        var style = getComputedStyle(option.container);
        if(style.position === 'static'){
            option.container.style.position = 'relative';
        }

    }
}