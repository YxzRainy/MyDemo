


// 进出口总额
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(""));
    // 2.指定配置

    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 名胜古迹
(function () {

    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".FiveChart"));
    // 2.指定配置
    //跳转代码
    myChart.on('click', function (params) {
        console.log(params.name);
        window.open(params.data.url);
        // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
    });

    var colorList = [[
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
        '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
        '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
        '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
        '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];

    option = {
        // 图表标题
        title: {
            show: false,//显示策略，默认值true,可选为：true（显示） | false（隐藏）

        },
        backgroundColor: 'transparent',
        tooltip: {},
        animationDurationUpdate: function (idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 100,
                edgeLength: 10
            },
            roam: true,
            label: {
                normal: {
                    show: true,
                    fontSize: 11,

                }
            },
            data: [{
                "name": "万峰林",
                "value": 2373,
                "symbolSize": 48,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[0],
                        "color": colorList[0]
                    }
                }
            }, {
                "name": "贞丰双乳峰",
                "value": 5449,
                "symbolSize": 43,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[1],
                        "color": colorList[1]
                    }
                }
            }, {
                "name": "龙宫",
                "value": 2289,
                "symbolSize": 57,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[2],
                        "color": colorList[2]
                    }
                }
            }, {
                "name": "金海雪山",
                "value": 2518,
                "symbolSize": 63,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[3],
                        "color": colorList[3]
                    }
                }
            }, {
                "name": "梵净山",
                "value": 4730,
                "symbolSize": 88,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[4],
                        "color": colorList[4]
                    }
                }
            }, {
                "name": "青岩古镇",
                "value": 20000,
                "symbolSize": 70,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[19],
                        "color": colorList[19]
                    }
                },
                "url": "https://gallery.echartsjs.com/preview.html?c=xPLngHx_Z&v=1"
            }]
        }]
    }
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });


})();