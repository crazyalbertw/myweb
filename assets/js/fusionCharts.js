/**
 * Created by crazyalbert on 3/22/16.
 */
FusionCharts.ready(function(){
    var revenueChart = new FusionCharts({
        type: "column2d",
        renderAt: "chart-containerBar",
        width: "500",
        height: "300",
        dataFormat: "json",
        dataSource: {
            "chart": {
                "caption": "Monthly Revenue for 2015",
                "subCaption": "AlSpace Market",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "theme": "zune"
            },
            "data": [
                {
                    "label": "Jan",
                    "value": "420000"
                },
                {
                    "label": "Feb",
                    "value": "810000"
                },
                {
                    "label": "Mar",
                    "value": "720000"
                },
                {
                    "label": "Apr",
                    "value": "550000"
                },
                {
                    "label": "May",
                    "value": "910000"
                },
                {
                    "label": "Jun",
                    "value": "510000"
                },
                {
                    "label": "Jul",
                    "value": "680000"
                },
                {
                    "label": "Aug",
                    "value": "620000"
                },
                {
                    "label": "Sep",
                    "value": "610000"
                },
                {
                    "label": "Oct",
                    "value": "490000"
                },
                {
                    "label": "Nov",
                    "value": "900000"
                },
                {
                    "label": "Dec",
                    "value": "730000"
                }
            ]
        }

    });
    revenueChart.render("chart-containerBar");
});

FusionCharts.ready(function () {
    var analysisChart = new FusionCharts({
        type: 'stackedColumn3DLine',
        renderAt: 'chart-containerStackedColumnLine',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "showvalues": "0",
                "caption": "AlSpace Cost Analysis",
                "numberprefix": "$",
                "xaxisname": "Quarters",
                "yaxisname": "Cost",
                "showBorder": "0",
                "paletteColors": "#0075c2,#1aaf5d,#f2c500",
                "bgColor": "#ffffff",
                "canvasBgColor": "#ffffff",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "divlineColor": "#999999",
                "divLineIsDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5",
                "legendBgColor": "#ffffff",
                "legendBorderAlpha": '0',
                "legendShadow": '0',
                "legendItemFontSize": '10',
                "legendItemFontColor": '#666666'
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Quarter 1"
                        },
                        {
                            "label": "Quarter 2"
                        },
                        {
                            "label": "Quarter 3"
                        },
                        {
                            "label": "Quarter 4"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Fixed Cost",
                    "data": [
                        {
                            "value": "235000"
                        },
                        {
                            "value": "225100"
                        },
                        {
                            "value": "222000"
                        },
                        {
                            "value": "230500"
                        }
                    ]
                },
                {
                    "seriesname": "Variable Cost",
                    "data": [
                        {
                            "value": "230000"
                        },
                        {
                            "value": "143000"
                        },
                        {
                            "value": "198000"
                        },
                        {
                            "value": "327600"
                        }
                    ]
                },
                {
                    "seriesname": "Budgeted cost",
                    "renderas": "Line",
                    "data": [
                        {
                            "value": "455000"
                        },
                        {
                            "value": "334000"
                        },
                        {
                            "value": "426000"
                        },
                        {
                            "value": "403000"
                        }
                    ]
                }
            ]
        }
    }).render();
});

FusionCharts.ready(function () {
    var salesMap = new FusionCharts({
        type: 'world',
        renderAt: 'chart-containerMapofWorld',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Global Sales Tracker",
                "theme": "fint",
                "formatNumberScale":"0",
                "numberSuffix":"M",
                "showLabels": "1",
                "nullEntityColor": "#C2C2D6",
                "nullEntityAlpha":"50",
                "hoverOnNull": "0",
                "useSNameInLabels" : "0"
            },
            "colorrange": {
                "color": [
                    {
                        "minvalue": "0",
                        "maxvalue": "100",
                        "code": "#D0DFA3",
                        "displayValue" : "Below 100M"
                    },
                    {
                        "minvalue": "100",
                        "maxvalue": "500",
                        "code": "#B0BF92",
                        "displayValue" : "100-500M"
                    },
                    {
                        "minvalue": "500",
                        "maxvalue": "1000",
                        "code": "#91AF64",
                        "displayValue" : "500-1000M"
                    }
                ]
            },
            "data": [
                {
                    "id": "NA",
                    "value": "515"
                },
                {
                    "id": "SA",
                    "value": "373"
                },

                {
                    "id": "EU",
                    "value": "727"
                },
                {
                    "id": "AU",
                    "value": "37"
                }

            ]
        }
    }).render();
});


FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'chart-containerThermometer',
        id: 'temp-monitor',
        width: '120',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Central Cold Storage",
                "subcaption": "Bakersfield Central",
                "subcaptionFontBold": "0",
                "lowerLimit": "-20",
                "upperLimit": "20",
                "numberSuffix": "°C",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "thmFillColor": "#008ee4"
            },
            "value": "-10"
        },
        "events": {
            "rendered" : function (evtObj, argObj){
                var intervalVar = setInterval(function () {
                    var temp = -10 + parseInt( Math.floor(Math.random() * 6), 10);
                    FusionCharts.items["temp-monitor"].feedData("value="+temp);
                }, 3000);
            }
        }
    })
        .render();
});