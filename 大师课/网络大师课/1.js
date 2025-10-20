async function fetchPeom() {
  const resp = await fetch("https://uapis.cn/api/v1/saying"); //请求头获取到之后promise就结束了
  console.log(resp); //只能获取响应头,获取不到内容body

  // 获取内容
  //   const data = await resp.text();
  const data = await resp.json();
  console.log(data);
}

fetchPeom();
