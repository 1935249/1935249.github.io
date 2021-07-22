function acchimuitehoi(myFinger) {

    // プレイヤーの指を格納する配列を用意する
    var fingerArray = ['↑', '→', '↓', '←'];

    // プレイヤーの指は myFinger に入っている
    console.log('あなたの指は' + fingerArray[myFinger]);


    // コンピュータの顔をランダムに決める
    // Math.random は、0以上1未満の疑似乱数を生成する
    var random = Math.random() * 100;
    console.log(random);



    // Math.floor は、与えられた因数以下の最大の整数を返す
    var randomInt = Math.floor(random)
    console.log(randomInt);

    // 生成したランダムな値を4で割った余りをコンピュータの手とする
    var computerFace = randomInt % 4;
    console.log('僕の顔は' + fingerArray[computerFace]);


    // 勝敗結果を保持する変数（0：勝ち 1：負け）
    var victory = 0;

    // victory = (myHand - computerHand + 3) % 3;

    // プレイヤーとコンピュータの勝ち負けを判定する
    // プレイヤーが↑の時
    if(myFinger == 0) {
        if(computerFace == 0) {
            victory = 0;
         } else {
             victory = 1;
         }
        
    // プレイヤーが→の時
    } else if (myFinger == 1) {
        if(computerFace == 1) {
            victory = 0;
        } else {
            victory = 1
        }
     // プレイヤーが↓の時
    } else if (myFinger == 2) {
        if(computerFace == 2) {
            victory = 0;
        } else {
            victory = 1;
        }
     // プレイヤーが←の時
    } else if (myFinger == 3) {
        if(computerFace == 3) {
            victory = 0;
        } else {
            victory = 1
        }
    } 

    // 結果を表示する
    var messageArray = ['あなたの勝ちです', '僕の勝ちです'];
    // alert('ほいっ！！！！あなたの指は' + fingerArray[myFinger] + ', 僕の顔は' + fingerArray[computerFace] + ', なので' + messageArray[victory]);

    document.getElementById("result1").textContent = ('あなたの指は' + fingerArray[myFinger] + ', 僕の顔は' + fingerArray[computerFace] + ', なので');
    document.getElementById("result2").textContent = (messageArray[victory]);

    // $('#acchimuitehoi-result-p').text('あなたの指は' + fingerArray[myFinger] + ', コンピュータの顔は' + fingerArray[computerFace] + ', なので' + messageArray[victory]);
}