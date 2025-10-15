// console.log(lrc);

/**
 * 解析歌词成对象数组[{},{},{}]
 * 对象格式:{time:"00:00.00",text:"歌词"}
 */
function parseLrc(lrc) {
  const result = [];
  // 1.将歌词进行拆分数组,返回的是数组!
  var lines = lrc.split("\n");
  //循环
  for (let i = 0; i < lines.length; i++) {
    var line = lines[i];
    const parts = line.split("]");
    const timeStr = parts[0].substring(1);
    // console.log(parts);
    var obj = {
      time: parseTime(timeStr),
      text: parts[1],
    };
    // console.log(obj);
    result.push(obj);
  }
  //   console.log(result);
  return result;
}

function parseTime(timeStr) {
  var parts = timeStr.split(":");
  var minutes = +parts[0];
  var seconds = +parts[1]; // 这里会自动处理小数部分
  //   console.log(minutes * 60 + seconds);
  return minutes * 60 + seconds;
}

const lrcData = parseLrc(lrc);

//dom元素
const doms = {
  audio: document.querySelector("audio"),
  ul: document.querySelector(".lrc-list"),
  container: document.querySelector(".container"),
  img: document.querySelector(".left img"),
};

/**
 *
 * @returns 当前播放的歌词索引
 */
function findIndex() {
  var currentTime = doms.audio.currentTime;
  for (let i = 0; i < lrcData.length; i++) {
    //从0开始,保证找到第一个大于currentTime的索引
    if (lrcData[i].time >= currentTime) {
      return i - 1;
    }
  }
  //   找到最后也没找到的索引(歌词结束,停在最后一句歌词)
  return lrcData.length - 1;
}

/**
 * 创建歌词元素
 */
function createLrcElements() {
  var frag = document.createDocumentFragment();
  for (let i = 0; i < lrcData.length; i++) {
    var li = document.createElement("li");
    li.textContent = lrcData[i].text;
    frag.appendChild(li);
  }
  doms.ul.appendChild(frag);
}

createLrcElements();

/**
 * 移动歌词,计算偏移量
 */
// 容器高度
const containerHeight = doms.container.clientHeight;
// 单个歌词高度
const liHeight = doms.ul.children[0].clientHeight;
//结尾歌词最大偏移量
const maxOffset = doms.ul.clientHeight - containerHeight;
function setOffset() {
  var index = findIndex();
  //   console.log(index);
  //   console.log("看我执行了吗");
  var offset = (index + 0.5) * liHeight - containerHeight / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxOffset) {
    offset = maxOffset;
  }
  doms.ul.style.transform = `translateY(-${offset}px)`;
  //先去除激活样式
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  var li = doms.ul.children[index];
  if (li) {
    li.classList.add("active");
  }

  //   return offset;
  //   console.log(offset);
}

//音频播放进度条变化,掉头setOffset函数
doms.audio.ontimeupdate = function () {
  setOffset();
};

/**
 * 音乐播放时,旋转图片
 */
let rotateInterval = null;
let currentDegree = 0; // 保存当前旋转角度

function rotate() {
  doms.img.style.transition = "none";
  // 清除之前的定时器
  if (rotateInterval) {
    clearInterval(rotateInterval);
  }
  // 保存定时器引用
  rotateInterval = setInterval(function () {
    currentDegree += 1;
    doms.img.style.transform = `rotate(${currentDegree}deg)`;
  }, 1000 / 30);
}

doms.audio.onplay = function () {
  console.log(doms.img);
  rotate();
};

doms.audio.onpause = function () {
  if (rotateInterval) {
    clearInterval(rotateInterval);
    rotateInterval = null;
  }
};
