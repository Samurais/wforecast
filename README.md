[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/42217321-3d5e44f6-7ef7-11e8-94e7-1574bfa1dbb8.png
[co-url]: https://www.chatopera.com


# Weather Forcase API
Get data from http://www.heweather.com
Free Quota 4,000 Requests Per Day.

Support China Cities but also main cities world wide.
Docs https://www.heweather.com/documents/api/v5/weather

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

> first, get API_KEY from http://www.heweather.com/my/service


```
    var wf = require('wforecast')(API_KEY);
    wf.getWeatherByCity('beijing')
        .then(function(res) {
            console.log(JSON.stringify(res));

```

返回

```
{
  "air": {
    "brf": "很差",
    "txt": "气象条件不利于空气污染物稀释、扩散和清除，请尽量避免在室外长时间活动。"
  },
  "comf": {
    "brf": "较不舒适",
    "txt": "白天天气晴好，明媚的阳光在给您带来好心情的同时，也会使您感到有些热，不很舒适。"
  },
  "cw": {
    "brf": "较适宜",
    "txt": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"
  },
  "drsg": {
    "brf": "炎热",
    "txt": "天气炎热，建议着短衫、短裙、短裤、薄型T恤衫等清凉夏季服装。"
  },
  "flu": {
    "brf": "少发",
    "txt": "各项气象条件适宜，发生感冒机率较低。但请避免长期处于空调房间中，以防感冒。"
  },
  "sport": {
    "brf": "较不宜",
    "txt": "天气较好，无雨水困扰，但考虑气温很高，请注意适当减少运动时间并降低运动强度，运动后及时补充水分。"
  },
  "trav": {
    "brf": "较适宜",
    "txt": "天气较好，感觉有点热，不过有微风伴您一路同行，还是较适宜旅游的，外出请注意防晒哦！"
  },
  "uv": {
    "brf": "很强",
    "txt": "紫外线辐射极强，建议涂擦SPF20以上、PA++的防晒护肤品，尽量避免暴露于日光下。"
  }
}
```


