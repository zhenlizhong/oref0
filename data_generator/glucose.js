// [
//   {
//     "date": 1527924300000,
//     "dateString": "2018-06-02T00:25:00-0700",
//     "sgv": 101,
//     "device": "fakecgm",
//     "type": "sgv",
//     "glucose": 101
//   },
//   {
//     "date": 1527924000000,
//     "dateString": "2018-06-02T00:20:00-0700",
//     "sgv": 102,
//     "device": "fakecgm",
//     "type": "sgv",
//     "glucose": 102
//    }
// ]

// 60—100mg/dl

function generatorGlucose({len = 200, glucose = 140, createTime}) {
  let glucoseArray = []

  createTime = createTime || new Date()

  for (let i = 0; i < len; i++) {
    let data = {
      type: "sgv",
      device: "fakecgm"
    }
    let tempTime = new Date(createTime.getTime() - 5 * i * 60 * 1000);
    data["dateString"] = tempTime.toISOString();
    data["date"] = tempTime.getTime();

    // 血糖的浮动数值
    let fluctuate = Math.floor(Math.random() * 6);
    // 血糖走势 + or -
    let calSymbol = Math.floor(Math.random() * 10) > 5;
    let tempGlucose = calSymbol ? glucose + fluctuate : glucose - fluctuate

    data["sgv"] = tempGlucose;
    data["glucose"] = tempGlucose;

    glucose = tempGlucose;

    glucoseArray.push(data);
  }

  console.log(JSON.stringify(glucoseArray))
}
let temp = new Date();
generatorGlucose(temp)
