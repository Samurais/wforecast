# Weather Forcase API
Get data from http://www.heweather.com
Free Quota 3,000 Requests Per Day.

Support China Cities but also main cities world wide.
Docs http://www.heweather.com/documents/api

## Install
```
npm install wforecast
```

## Test 
```
cd wforecast
npm install
ava
``` 

## License
MIT.

## Usage
Check out the testcases.

e.g.

```
    wf.getWeatherByCity('beijing')
        .then(function(res) {
            console.log(JSON.stringify(res));

{
  "HeWeather data service 3.0": [
    {
      "aqi": {
        "city": {
          "aqi": "?",
          "co": "2",
          "no2": "53",
          "o3": "2",
          "pm10": "115",
          "pm25": "88",
          "qlty": "轻度污染",
          "so2": "5"
        }
      },
      "basic": {
        "city": "北京",
        "cnty": "中国",
        "id": "CN101010100",
        "lat": "39.904000",
        "lon": "116.391000",
        "update": {
          "loc": "2016-10-06 09:49",
          "utc": "2016-10-06 01:49"
        }
      },
      "daily_forecast": [
        {
          "astro": {
            "sr": "06:15",
            "ss": "17:49"
          },
          "cond": {
            "code_d": "305",
            "code_n": "306",
            "txt_d": "小雨",
            "txt_n": "中雨"
          },
          "date": "2016-10-06",
          "hum": "72",
          "pcpn": "18.7",
          "pop": "100",
          "pres": "1025",
          "tmp": {
            "max": "18",
            "min": "14"
          },
          "vis": "10",
          "wind": {
            "deg": "55",
            "dir": "无持续风向",
            "sc": "微风",
            "spd": "7"
          }
        },
        {
          "astro": {
            "sr": "06:16",
            "ss": "17:47"
          },
          "cond": {
            "code_d": "305",
            "code_n": "100",
            "txt_d": "小雨",
            "txt_n": "晴"
          },
          "date": "2016-10-07",
          "hum": "89",
          "pcpn": "14.6",
          "pop": "100",
          "pres": "1021",
          "tmp": {
            "max": "18",
            "min": "12"
          },
          "vis": "10",
          "wind": {
            "deg": "195",
            "dir": "无持续风向",
            "sc": "微风",
            "spd": "1"
          }
        },
        {
          "astro": {
            "sr": "06:17",
            "ss": "17:45"
          },
          "cond": {
            "code_d": "100",
            "code_n": "100",
            "txt_d": "晴",
            "txt_n": "晴"
          },
          "date": "2016-10-08",
          "hum": "41",
          "pcpn": "0.0",
          "pop": "3",
          "pres": "1022",
          "tmp": {
            "max": "19",
            "min": "7"
          },
          "vis": "10",
          "wind": {
            "deg": "318",
            "dir": "北风",
            "sc": "3-4",
            "spd": "10"
          }
        },
        {
          "astro": {
            "sr": "06:18",
            "ss": "17:44"
          },
          "cond": {
            "code_d": "100",
            "code_n": "100",
            "txt_d": "晴",
            "txt_n": "晴"
          },
          "date": "2016-10-09",
          "hum": "41",
          "pcpn": "0.0",
          "pop": "0",
          "pres": "1024",
          "tmp": {
            "max": "19",
            "min": "8"
          },
          "vis": "10",
          "wind": {
            "deg": "198",
            "dir": "无持续风向",
            "sc": "微风",
            "spd": "9"
          }
        },
        {
          "astro": {
            "sr": "06:19",
            "ss": "17:42"
          },
          "cond": {
            "code_d": "100",
            "code_n": "101",
            "txt_d": "晴",
            "txt_n": "多云"
          },
          "date": "2016-10-10",
          "hum": "64",
          "pcpn": "0.0",
          "pop": "0",
          "pres": "1019",
          "tmp": {
            "max": "21",
            "min": "11"
          },
          "vis": "10",
          "wind": {
            "deg": "199",
            "dir": "无持续风向",
            "sc": "微风",
            "spd": "10"
          }
        },
        {
          "astro": {
            "sr": "06:20",
            "ss": "17:41"
          },
          "cond": {
            "code_d": "101",
            "code_n": "100",
            "txt_d": "多云",
            "txt_n": "晴"
          },
          "date": "2016-10-11",
          "hum": "47",
          "pcpn": "0.0",
          "pop": "7",
          "pres": "1021",
          "tmp": {
            "max": "20",
            "min": "11"
          },
          "vis": "10",
          "wind": {
            "deg": "112",
            "dir": "无持续风向",
            "sc": "微风",
            "spd": "5"
          }
        },
        {
          "astro": {
            "sr": "06:22",
            "ss": "17:39"
          },
          "cond": {
            "code_d": "100",
            "code_n": "100",
            "txt_d": "晴",
            "txt_n": "晴"
          },
          "date": "2016-10-12",
          "hum": "31",
          "pcpn": "0.0",
          "pop": "0",
          "pres": "1028",
          "tmp": {
            "max": "21",
            "min": "12"
          },
          "vis": "10",
          "wind": {
            "deg": "330",
            "dir": "无持续风向",
            "sc": "微风",
            "spd": "3"
          }
        }
      ],
      "hourly_forecast": [
        {
          "date": "2016-10-06 10:00",
          "hum": "67",
          "pop": "0",
          "pres": "1026",
          "tmp": "17",
          "wind": {
            "deg": "88",
            "dir": "东风",
            "sc": "微风",
            "spd": "10"
          }
        },
        {
          "date": "2016-10-06 13:00",
          "hum": "65",
          "pop": "65",
          "pres": "1025",
          "tmp": "18",
          "wind": {
            "deg": "69",
            "dir": "东北风",
            "sc": "微风",
            "spd": "12"
          }
        },
        {
          "date": "2016-10-06 16:00",
          "hum": "73",
          "pop": "93",
          "pres": "1024",
          "tmp": "16",
          "wind": {
            "deg": "24",
            "dir": "东北风",
            "sc": "微风",
            "spd": "12"
          }
        },
        {
          "date": "2016-10-06 19:00",
          "hum": "84",
          "pop": "97",
          "pres": "1025",
          "tmp": "14",
          "wind": {
            "deg": "21",
            "dir": "东北风",
            "sc": "微风",
            "spd": "6"
          }
        },
        {
          "date": "2016-10-06 22:00",
          "hum": "92",
          "pop": "92",
          "pres": "1025",
          "tmp": "14",
          "wind": {
            "deg": "89",
            "dir": "东风",
            "sc": "微风",
            "spd": "6"
          }
        }
      ],
      "now": {
        "cond": {
          "code": "101",
          "txt": "多云"
        },
        "fl": "7",
        "hum": "85",
        "pcpn": "0",
        "tmp": "15",
        "wind": {
          "dir": "东南风",
          "sc": "4-5",
          "spd": "24"
        }
      },
      "status": "ok",
      "suggestion": {
        "comf": {
          "brf": "舒适",
          "txt": "白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。"
        },
        "cw": {
          "brf": "不宜",
          "txt": "不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。"
        },
        "drsg": {
          "brf": "较舒适",
          "txt": "建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。"
        },
        "flu": {
          "brf": "易发",
          "txt": "相对于今天将会出现大幅度降温，空气湿度较大，易发生感冒，请注意适当增加衣服。"
        },
        "sport": {
          "brf": "较不宜",
          "txt": "有降水，推荐您在室内进行健身休闲运动；若坚持户外运动，须注意保暖并携带雨具。"
        },
        "trav": {
          "brf": "适宜",
          "txt": "温度适宜，又有较弱降水和微风作伴，会给您的旅行带来意想不到的景象，适宜旅游，可不要错过机会呦！"
        },
        "uv": {
          "brf": "最弱",
          "txt": "属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"
        }
      }
    }
  ]
}
```


