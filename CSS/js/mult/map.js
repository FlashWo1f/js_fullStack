const googleMap = {
    show:function(){
        console.log('开始渲染googol地图')
    }
}
const gaodeMap = {
    show:function(){
        console.log('开始渲染gaode地图')
    }
}
const baiduMap = {
    // 为互换做准备  接口
    show(){
        console.log('开始渲染baidu地图')
    }
    
}
const sosoMap ={}
/**
 * 
 * @param {object} map 
 */
const renderMap = (map) => {
    // map  检测
    if(map.show && map.show instanceof Function){

        map.show()
    }
    // 分支太多
    // if(type === 'google')
    //     googleMap.show();
    // else if(type === 'baidu')
    //     baiduMap.show()
    //     else if(type === 'gaode')
    //         gaodeMap.show()
    
}

renderMap(baiduMap);
renderMap(googleMap)
renderMap(sosoMap)
