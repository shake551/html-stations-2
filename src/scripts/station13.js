function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const is_checked = document.getElementById("check").checked

  console.log(is_checked)

  if (is_checked) {
    document.getElementById('text').style.backgroundColor = 'red'
  } else {
    document.getElementById('text').style.backgroundColor = 'white'
  }

}
