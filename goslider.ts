//
// 初期設定
//
let autoLoadFlg: boolean = false;
const mySlider = document.querySelectorAll<HTMLLIElement>(".goslider li");
if (mySlider.length === 0) {
  console.log("GoSliderは要素を検知できませんでした");
} else {
  mySlider.forEach((li, index: number) => {
    if (index === 0) {
      //一番最初の要素にcurrentを付与
      li.classList.add("goslider_current");
    }
    li.classList.add("goSliderAddNumber_" + (index + 1));
  });
}
//
// 実行関数
//
const leftGo = () => {
  autoLoadFlg = true;
  currentLeftMove();
};
const rightGo = () => {
  autoLoadFlg = true;
  currentRightMove();
};
const autoGo = () => {
  if (autoLoadFlg === false) {
    currentRightMove();
  }
};
//右移動
const currentRightMove = () => {
  for (let i: number = 0; i < mySlider.length; i++) {
    if (mySlider[i].classList.contains("goslider_current")) {
      mySlider[i].classList.remove("goslider_current");
      //現在のcurrent要素が最後の要素かどうかを検証
      if (i === mySlider.length - 1) {
        //最後の要素なので最初の要素をcurrent要素にしてループ終了
        mySlider[0].classList.add("goslider_current");
        return;
      } else {
        //最後の要素では無いので1足してループ終了
        mySlider[i + 1].classList.add("goslider_current");
        return;
      }
    }
  }
};
//左移動
const currentLeftMove = () => {
  for (let i: number = 0; i < mySlider.length; i++) {
    if (mySlider[i].classList.contains("goslider_current")) {
      mySlider[i].classList.remove("goslider_current");
      //現在のcurrent要素が最初の要素かどうかを検証
      if (i === 0) {
        //最後の要素なので最初の要素をcurrent要素にしてループ終了
        mySlider[mySlider.length - 1].classList.add("goslider_current");
        return;
      } else {
        //最初の要素では無いので1足してループ終了
        mySlider[i - 1].classList.add("goslider_current");
        return;
      }
    }
  }
};
//オートロード(矢印クリックで停止)
setInterval(autoGo, 5000);
