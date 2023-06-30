'use strict';
{
//#region 基本ＵＩと音響

  const images=[
    "img/glayBack.png",
    "img/salaAnime.png",
    "img/salaCut.png",    
    "img/waku.png",
    "img/waku2.png",
    "img/tytle.png"
  ];

  const AM = document.getElementById("AM");
  const prairie4= document.getElementById("prairie4"); 
  const power = document.getElementById("power");
  const cursor= document.getElementById("cursor");
  const wah= document.getElementById("wah");
  const push51= document.getElementById("push51");
  const pyoro57= document.getElementById("pyoro57");
  const typeSE= document.getElementById("typeSE");
  const boom= document.getElementById("boom");
  const damage= document.getElementById("damage");
  const missSE= document.getElementById("missSE");
  const specialSE= document.getElementById("specialSE");
  const guardSE= document.getElementById("guardSE");
 

  
  let bgmVolume =0.05
  let seVolume =0.05

  let play_setWordSE = ()=>{
    cursor.volume = seVolume;
    cursor.currentTime = 0;
    cursor.play();
  }

  let play_typeSE = ()=>{
    typeSE.volume = seVolume;
    typeSE.currentTime = 0;
    typeSE.play();
  }

  let play_boom = ()=>{
    boom.volume = seVolume;
    boom.currentTime = 0;
    boom.play();
  }

  let play_damage = ()=>{
    damage.volume = seVolume;
    damage.currentTime = 0;
    damage.play();
  }

  let play_missSE = ()=>{
    missSE.volume = seVolume*5;
    missSE.currentTime = 0;
    missSE.play();
  }
  
  let play_specialSE = ()=>{
    specialSE.volume = seVolume*2;
    specialSE.currentTime = 0;
    setTimeout(()=>{specialSE.play();},100);
  }
  
  let play_guardSE = ()=>{
    guardSE.volume = seVolume*2;
    guardSE.currentTime = 0;
    guardSE.play();
  }

  const preImage =document.getElementById("preImage")
  const loading =document.getElementById("loading")
  const loadingText= document.getElementById("loadingText")
  let imageIndex = 0
//#endregion

//#region ロード画面

  const sala=document.getElementById("sala");
  setTimeout(() => {preImage.src="img/salaCut.png"
  },10);
  preImage.addEventListener("load",()=>{
    if(imageIndex<images.length-1){
      imageIndex++;
      preImage.src= images[imageIndex];
      loadingText.textContent=`画像を読み込み中(${imageIndex+1}/${images.length})`;
    }
    if(imageIndex===images.length-1){
      loadingText.textContent="click to start"
      loading.style.cursor="pointer"
      loading.addEventListener("click",()=>{
        loading.classList.add("active");
        loading.style.cursor="not-allowed";
        AM.loop =true;
        AM.volume =0.05;
        AM.play();
        sala.src="img/salaAnime.png";
        setTimeout(() => {loading.style.display="none"}, 1000)
       
      })
    }
  })
  //#endregion

// #region タイトル画面

    const bigContainer2 =document.getElementById("bigContainer2");
    const flash =document.getElementById("flash");
    const flashWhite =document.getElementById("flashWhite");
    const story =document.getElementById("story");
    const story2 =document.getElementById("story2");
    const option =document.getElementById("option");
    const credit=document.getElementById("credit");

    option.addEventListener("click",()=>{
      cursor.volume = seVolume;
      cursor.currentTime = 0;
      cursor.play();
      flash.style.display="block";
      flash.classList.add("active");
      setTimeout(()=>{bigContainer2.style.display="none"},500);
      setTimeout(()=>{flash.classList.remove("active")
      flash.style.display="none"
      },1000);
    })

  story.addEventListener("click",()=>{

    pyoro57.volume = seVolume;
    pyoro57.currentTime = 0;
    pyoro57.play();
    AM.pause();
   
    flashWhite.style.display="block";
    flashWhite.classList.add("active");
    setTimeout(()=>{
      bigContainer2.style.display="none"
      bigContainer.style.display="none"
      bigContainer4.style.display="flex"
    },500);
    setTimeout(()=>{
      flash.classList.remove("active")
      flash.style.display="none"
      prairie4.loop =true;
      prairie4.volume = bgmVolume;
      prairie4.play();
      fightStage1()
    },2000);

  })

  // #endregion
 
//#region メッセージ速度の調節とテキストの処理
  const speedNormal = document.getElementById("speedNormal");
  const speedFast = document.getElementById("speedFast");
  const speedFastest = document.getElementById("speedFastest");
  let messageSpeed = 50;

  speedNormal.classList.add("active");

  speedNormal.addEventListener("click",()=>{
    cursor.volume = seVolume;
    cursor.currentTime = 0;
    cursor.play();
    messageSpeed =50;
    speedNormal.classList.add("active");
    speedFast.classList.remove("active");
    speedFastest.classList.remove("active");
  })
  speedFast.addEventListener("click",()=>{
    cursor.volume = seVolume;
    cursor.currentTime = 0;
    cursor.play();
    messageSpeed =25;
    speedNormal.classList.remove("active");
    speedFast.classList.add("active");
    speedFastest.classList.remove("active");
  })
  speedFastest.addEventListener("click",()=>{
    cursor.volume = seVolume;
    cursor.currentTime = 0;
    cursor.play();
    messageSpeed =1;
    speedNormal.classList.remove("active");
    speedFast.classList.remove("active");
    speedFastest.classList.add("active");
  })

    //#region テキストの処理
    const messageBox = document.getElementById("messageBox");
    

    speedNormal.addEventListener("mouseover",()=>{
    const section = document.querySelector("section");
    messageBox.removeChild(section);
     textOrder("春はあけぼの　夏は夜b秋は夕暮れ　ケモショタはブリーフ",50)
    })
    speedFast.addEventListener("mouseover",()=>{
      const section = document.querySelector("section");
      messageBox.removeChild(section);
       textOrder("ドランゴンは断然、スリット派！bスリット最高！スリット最高！スリット最高！",25)
      })
    speedFastest.addEventListener("mouseover",()=>{
      const section = document.querySelector("section");
      messageBox.removeChild(section);
       textOrder("ドラゴンに乳首をつけるべきかbつけないべきか…それが問題だ…。",1)
      })
   
    function textOrder(rawText,orderMessageSpeed){
      let newElement = document.createElement("section");
      newElement.innerHTML="";
      messageBox.appendChild(newElement);
      let str =`${rawText}`;
      const arr =[...str];
      let i=0;
      let showText =()=>{   
        if(arr[i]!=="b"){newElement.innerHTML +=`${arr[i]}`};
        if(arr[i]==="b"){newElement.innerHTML+="<br>"}
        if(i>=arr.length-1){clearInterval(id)}
        i++;
      }
      let id =setInterval(showText,orderMessageSpeed);
    }

    
    //#endregion

    //#region 難易度の調整
    const difficultyEasy=document.getElementById("difficultyEasy");
    const difficultyNormal=document.getElementById("difficultyNormal");
    
    difficultyNormal.classList.add("active");

    let difficulty =1;
    difficultyEasy.addEventListener("click",()=>{
      cursor.volume = seVolume;
      cursor.currentTime = 0;
      cursor.play();
      difficulty =0;
      difficultyEasy.classList.add("active");
      difficultyNormal.classList.remove("active");
      console.log(difficulty)
    })
    difficultyNormal.addEventListener("click",()=>{
      cursor.volume = seVolume;
      cursor.currentTime = 0;
      cursor.play();
      difficulty =1;
      difficultyEasy.classList.remove("active");
      difficultyNormal.classList.add("active");
    })

    difficultyEasy.addEventListener("mouseover",()=>{
      const section = document.querySelector("section");
      messageBox.removeChild(section);
       textOrder("タイピングが苦手な人向けの難易度です。b制限時間２倍。bストーリーとイベント内容は難易度ノーマルとb変わりません。",messageSpeed)
      })
    difficultyNormal.addEventListener("mouseover",()=>{
      const section = document.querySelector("section");
      messageBox.removeChild(section);
       textOrder("通常の難易度です。",messageSpeed)
      })

  //#endregion


//#endregion 


// #region 戦闘画面
    const greyScreen= document.getElementById("greyScreen");
    const greyScreen2= document.getElementById("greyScreen2");
    const greyScreen3= document.getElementById("greyScreen3");
    const defeat= document.getElementById("defeat");
    const victory= document.getElementById("victory");
    const bigContainer4 =document.getElementById("bigContainer4");
    const zoomContainer =document.getElementById("zoomContainer");
    
    const kipStill=document.getElementById("kipStill");
    const wargStill=document.getElementById("wargStill");

    const ready=document.getElementById("ready");
    const go=document.getElementById("go");
    const goFlash=document.getElementById("goFlash");
    
    const kipFighting = document.getElementById("kipFighting");
    const kipAnime =[
      "img/kip_standing.png",
      "img/kip_ready.png",
      "img/kip_attack.png",
      "img/kip_special.png",
      "img/kip_3attack.png",
    ]
    const wargFighting = document.getElementById("wargFighting");
    const wargAnime=[
      "img/warg_standing.png",
      "img/warg_toboe.png"
    ]
    
    let fightStage1 =()=>{
      zoomContainer.classList.add("active");
      kipFighting.src =kipAnime[1];
      setTimeout(()=>{wargFighting.src=wargAnime[1]},1700);
      setTimeout(()=>{kipFighting.src=kipAnime[0]},2450);
      setTimeout(()=>{
        greyScreen.style.display="block";
        greyScreen.classList.add("active")},2700);
      setTimeout(()=>{wargFighting.src=wargAnime[0]},3700);
      setTimeout(()=>{kipStill.classList.add("active")},2800);
      setTimeout(()=>{wargStill.classList.add("active")},2800);
      setTimeout(()=>{ready.style.display="block"},2500);
      setTimeout(()=>{go.style.display="block"},5700);
      setTimeout(()=>{
        goFlash.style.display="block";
        goFlash.classList.add("active")},6000);
      setTimeout(()=>{ready.style.display="none"},7000);
      setTimeout(()=>{greyScreen.style.display="none"},8000);
      setTimeout(()=>{goFlash.style.display="none"},8000);
      setTimeout(()=>{
        greyScreen.classList.remove("active");
        goFlash.classList.remove("active")},8000);
      setTimeout(()=>{typingSystem()},6800);
    }
  
  // #endregion

//#region ワーグタイピング語録
    
  const wargWords=[
      "canine","ケイナイン：名）形）イヌ　イヌ科の…",
      "bite","バイト：動）名）かみつく　かむこと",
      "fang","ファング：名）牙",
      "warg","ワーグ：名）ワーグ　北欧神話に登場する魔狼",
      "fur","ファー：名）毛皮",
      "fluffy","フラッフィ：形）ふわふわした…　もふもふした…",
      "breeding","ブリーディング：名）繁殖　しつけ",
      "mating","メイティング：名）配偶　交尾　交配",
      "pack","パック：動）名）包む　荷物　（狼などの）群れ",
      "claw","クロー：名）動）かぎづめ　ひっかく",
      "paw","ポォァウ：名）（犬・猫などの）足　肉球",
      "tongue","タン：名）舌",
      "smell","スメル：動）名）においがする　嗅ぐ　におい",
      "lick","リック：動）名）なめる　なめること",
      "mounting","マウンティング：名）乗ること　（イヌの）マウンティング",
      "howl","ハウル：動）遠吠えする",
      "bark","バーク：動）吠える",
      "puppy","パピー：名）子犬ちゃん",
      "doggie","ドギー：名）ワンちゃん",
      "bowwow","バウワウ：名）ワンワン！　犬の吠え声",
      "prey","プレイ：動）名）食い物にする　獲物　えじき　餌になる動物",
      "victim","ヴィクティム：名）犠牲者　被害者",
      "feral","フェラル：形）野生の　凶暴な",
      "hound","ハウンド：名）猟犬",
      "hierarchy","ハイラーキィ：名）ヒエラルキー　階級制度",
      "hunting","ハンティング：名）狩り",
      "luscious","ラシャス：形）香りが良い　甘美な　性的に魅力的な",
      "instinct","インスティンクト：名）本能　直感",
      "grooming","グルーミング：名）毛づくろい",
      "marking","マーキング：名）印をつけること　（犬などの）マーキング",
      "muzzle","マズル：名）（動物の）鼻口部　銃口",
      "mouth","マウス：名）口",
      "tooth","トゥース：名）歯",
      "snout","スナウト：名）（動物の突き出た）鼻",
      "species","スピーシーズ：名）種族",
      "desire","ディザイア：動）名）強く望む　欲求",
      "cub","カブ：名）動物の赤ちゃん　ケモショタ・ケモロリ",
      "dominate","ドミネート：動）支配する",
      "bestiality","ベスティアリティ：名）獣姦",
      "power","パワー：名）力",
      "strength","ストレングス：名）強さ",
      "knot","ノット：名）結び（目）　船の速度の単位　亀頭球",
      "genitalia","ジェニタリア：名）性器　生殖器",
      "sheath","シース：名）（刃物の）鞘　（ケモチンを収納するための）鞘",
      "erection","イレクション：名）直立　起立　勃起",
      "cum","カム：動）名）イく　精液",
      "ejaculate","イジャキュレート：動）射出する　射精する",
      "tummy","タミー：名）（幼児語で）おなか　ぽんぽん",
      "belly","ベリー：名）おなか",
      "breath","ブレス：名）呼吸",    
    ];
    // 偶数番目を抽出 それらをwargTargetWord[0~49]とする。
    const even =(array)=>{
      const result =[];
      array.forEach((element,index) => {
        if(index % 2 ===0){
          result.push(element)
        }
      });
      return result
    }
    const wargTargetWords = even(wargWords);


    // 奇数番目を抽出 それらをwargTranslation[0~49]とする。
    const odd =(array)=>{
      const result =[];
      array.forEach((element,index) => {
        if(index % 2 ===1){
          result.push(element)
        }
      });
      return result
    }
    const wargTranslations = odd(wargWords);


    

  //#endregion 

//#region タイピングシステム
    const typeText=document.getElementById("typeText");
    const translation=document.getElementById("translation");
    const fireBox= document.getElementById("fireBox");
    const fireShoot = document.getElementById("fireShoot");
    const fireShoot2 = document.getElementById("fireShoot");
    const fireShoot3 = document.getElementById("fireShoot");
    const explosion = document.getElementById("explosion");
    const explosion2 = document.getElementById("explosion2");
    const explosion3 = document.getElementById("explosion3");
    const hitMark = document.getElementById("hitMark");
    const hitMark2 = document.getElementById("hitMark2");
    const hitMark3 = document.getElementById("hitMark3");
    const kipHP = document.getElementById("kipHP");
    const kipSP = document.getElementById("kipSP");
    const enemyHP = document.getElementById("enemyHP");
    const enemySP = document.getElementById("enemySP");
    const damageBox= document.getElementById("damageBox")
    const warg_dash1= document.getElementById("warg_dash1");
    const warg_dash2= document.getElementById("warg_dash2");
    const warg_dash3= document.getElementById("warg_dash3");
    const warg_dash4= document.getElementById("warg_dash4");
    const warg_dash6= document.getElementById("warg_dash6");
    const timeGauge= document.getElementById("timeGauge");
    
    let kipHP_num= 100
    let kipSP_num=0
    let enemyHP_num=100
    let enemySP_num=0
    let kipSpecial =0
    let wargSpecial =0;   
    let keyActive ="on"
     
    
    let kipHP_damaged =(damage)=>{
      kipHP_num -= damage;
      if(kipHP_num <=0){kipHP_num=0}
      kipHP.style.transform =`scale(${kipHP_num/100},1)`
    }
  
    let enemyHP_damaged =(damage)=>{
      enemyHP_num -= damage;
      if(enemyHP_num <=0){enemyHP_num=0}
      enemyHP.style.transform =`scale(${enemyHP_num/100},1)`
    }

    let shakeS =()=>{
      zoomContainer.style.left ="-10px"
      setTimeout(()=>{zoomContainer.style.left ="10px"},100);
      setTimeout(()=>{zoomContainer.style.left ="0px"},200);
    }

    

    let result =()=>{
      if(kipHP_num===0 || enemyHP_num===0){
        keyActive ="off";
        while(fireBox.firstChild){
          fireBox.removeChild(fireBox.firstChild)
        }
        while(damageBox.firstChild){
          damageBox.removeChild(damageBox.firstChild)
        }
        if(kipHP_num===0){
          countStop="stop"
          setTimeout(()=>{kipFighting.src="img/kip_down.png"},500);
          setTimeout(()=>{wargFighting.src="img/warg_toboe.png"},1500);
          setTimeout(()=>{greyScreen3.style.opacity="1"},2500);
          setTimeout(()=>{defeat.src="img/defeat.png"},3500);
          setTimeout(()=>{alert("Thank you for playing. To return to the title, press the reload button on your browser.")},5500);
          
        }
        if(enemyHP_num===0){
          countStop="stop"
          setTimeout(()=>{wargFighting.src="img/warg_down.png"},1150);
          setTimeout(()=>{kipFighting.src="img/kip_victory.png"},2150);
          setTimeout(()=>{greyScreen3.style.opacity="1"},3150);
          setTimeout(()=>{victory.src="img/victory.png"},4200);
          setTimeout(()=>{alert("Thank you for playing. To return to the title, press the reload button on your browser.")},6200);
        }
        console.log("result");
      }  
    
    }



    function kipDamgaeAnim(){
      let date = new Date();
      let timestamp = date.getTime();
     
      let newHit = document.createElement("img");
      newHit.style.position ="absolute";
      newHit.src="img/hitMark2.png?"+timestamp;
     
      setTimeout(()=>{damageBox.appendChild(newHit)},50)
      setTimeout(()=>{kipFighting.src="img/kip_damage.png"},50)
      setTimeout(()=>{kipFighting.src=kipAnime[0]},150)
     }

     function kipDamgaeAnim_long(){
       let date = new Date();
       let timestamp = date.getTime();
      
       let newHit = document.createElement("img");
       newHit.style.position ="absolute";
       newHit.src="img/hitMark2_long.png?"+timestamp;
      
       setTimeout(()=>{damageBox.appendChild(newHit)},50)
       setTimeout(()=>{kipFighting.src="img/kip_damage_long.png"},50)
       setTimeout(()=>{kipFighting.src=kipAnime[0]},550)
      }

     function kipGuardAnim(){
     let date = new Date();
     let timestamp = date.getTime();
     
     let newHit = document.createElement("img");
     newHit.style.position ="absolute";
     newHit.src="img/hitMark3.png?"+timestamp;
     
     setTimeout(()=>{damageBox.appendChild(newHit)},50)
     setTimeout(()=>{kipFighting.src="img/kip_guard.png"},50)
     setTimeout(()=>{kipFighting.src=kipAnime[0]},550)
     }



    let count 
    let countStop ="stop"


   

     
    
    let typingSystem = ()=>{

      let randomNum
      let targetWord
      let targetTranslation
      let loc

      function setWord(){
        if(kipHP_num === 0 || enemyHP_num === 0){return}
        play_setWordSE();
        randomNum = Math.floor(Math.random()*wargTargetWords.length)
        targetWord = wargTargetWords[randomNum];
        targetTranslation= wargTranslations[randomNum];
        typeText.textContent = `${targetWord}`
        translation.textContent=`${targetTranslation}`
        loc=0;
        countStop="go"
        active_timeGauge();
      }
      

      //  ここからタイムゲージの定義
      let active_timeGauge = ()=>{
        count = 100
        timeGauge.style.transform=`scale(${count},1)`
        const countUP=()=>{
          console.log(count);
          if(difficulty===0){
            count -=0.2
          }
          if(difficulty===1){
            count -=0.4
          }
          
          timeGauge.style.transform=`scale(${count},1)`
          
        }        
         const intervalID = setInterval(()=>{
          countUP();
          if(count <= 0){
            console.log("yeah");

            // ここから敵必殺技時のタイムアップ
            if(wargSpecial===1){
              clearInterval(intervalID)
              countStop="stop"
              while(fireBox.firstChild){
                fireBox.removeChild(fireBox.firstChild)
              }
              keyActive="off"
              
              enemySP_num=0
              enemySP.style.transform=`scale(${enemySP_num/100},1)`          
              setTimeout(()=>{wargFighting.src="img/warg_toboe.png"},110)
              setTimeout(()=>{greyScreen2.style.opacity="0"},500)
              setTimeout(()=>{wargFighting.style.zIndex="5"},500)
              setTimeout(()=>{warg_dash1.style.display="block";warg_dash1.classList.add("active")},500)
              setTimeout(()=>{warg_dash2.style.display="block";warg_dash2.classList.add("active")},1000)
              setTimeout(()=>{warg_dash3.style.display="block";warg_dash3.classList.add("active")},1500)
              setTimeout(()=>{warg_dash4.style.display="block";warg_dash4.classList.add("active")},2000)
              setTimeout(()=>{warg_dash6.style.display="block";warg_dash6.classList.add("active")},3000)
              setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},1400)
              setTimeout(()=>{play_damage()},1400)
              setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},2000)
              setTimeout(()=>{play_damage()},2000)
              setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},2800)
              setTimeout(()=>{play_damage()},2800)
              setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},3000)
              setTimeout(()=>{play_damage()},3000)
              setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},3580)
              setTimeout(()=>{play_damage()},3580)

              setTimeout(()=>{
                keyActive="on";
                loc=0;
                wargFighting.src=wargAnime[0];
                setWord();
                warg_dash1.classList.remove("active");
                warg_dash2.classList.remove("active");
                warg_dash3.classList.remove("active");
                warg_dash4.classList.remove("active");
                warg_dash6.classList.remove("active");
                wargSpecial=0
                result();
              },4000);
            }

            // ここからキップ必殺技時のタイムアップ
            if(kipSpecial===1){
              countStop="stop"
              play_missSE();
              while(fireBox.firstChild){
                fireBox.removeChild(fireBox.firstChild)
              }
              greyScreen2.style.opacity="0";
              kipFighting.style.zIndex="5";
              kipSP_num=0
              kipSP.style.transform=`scale(${kipSP_num/100},1)`
              keyActive ="off"
              kipFighting.src="img/kip_attack_miss.png";
              setTimeout(()=>{setWord()},1500)
              setTimeout(()=>{keyActive="on"},1500)
              setTimeout(()=>{kipFighting.src=kipAnime[0]},1200)
              setTimeout(()=>{kipSpecial=0},1200)
           }


            // ここから通常のタイムアップ

            if(wargSpecial === 0 && kipSpecial===0){
             wargFighting.src= "img/warg_attack.png"
            play_damage();
            kipHP_damaged(4)
            enemySP_num += 20
            if(enemySP_num > 100){enemySP_num=100}
            enemySP.style.transform=`scale(${enemySP_num/100},1)`  
            setTimeout(()=>{wargFighting.src=wargAnime[0]},100)        
            kipDamgaeAnim();
             
            result();
         
            if(enemySP_num === 100 && wargSpecial===0){
              countStop="stop";
              keyActive= "off"
              typeText.style.display="none"
                          
              while(fireBox.firstChild){
               fireBox.removeChild(fireBox.firstChild)
              }
              
              setTimeout(()=>{
              play_specialSE();
              wargFighting.style.zIndex="300"
              wargFighting.src= "img/warg_special.png"
              greyScreen2.style.opacity="1"},150);           
              wargSpecial = 1;
              setTimeout(()=>{
                keyActive="on";
                setWord();
                typeText.style.display="block"
              },1000)
            }
  
           clearInterval(intervalID)
           if(kipSpecial===0 && wargSpecial===0){
            active_timeGauge();
           }
          }           
          };
           
          if(countStop==="stop"){clearInterval(intervalID)};
         },10)
      }

        setWord();

      typeText.style.display="block";
      translation.style.display="block";
      

      

     
      document.addEventListener("keypress",e=>{
  
        if(keyActive==="off"){return}
        if(kipHP_num === 0 || enemyHP_num === 0){return}

        // ここからタイプミスの処理
        if(e.key !== targetWord[loc] && wargSpecial ===0 && kipSpecial===0){
          wargFighting.src= "img/warg_attack.png"
          play_damage();
          kipHP_damaged(4)
          enemySP_num += 20
          if(enemySP_num > 100){enemySP_num=100}
          enemySP.style.transform=`scale(${enemySP_num/100},1)`  
          setTimeout(()=>{wargFighting.src=wargAnime[0]},100)        
          kipDamgaeAnim();
           
          result();
       
          if(enemySP_num === 100){
            countStop="stop";
            keyActive= "off"
            typeText.style.display="none"
                        
            while(fireBox.firstChild){
             fireBox.removeChild(fireBox.firstChild)
            }
            
            setTimeout(()=>{
            play_specialSE();
            wargFighting.style.zIndex="300"
            wargFighting.src= "img/warg_special.png"
            greyScreen2.style.opacity="1"},150);           
            wargSpecial = 1;
            setTimeout(()=>{
              keyActive="on";
              setWord();
              typeText.style.display="block"
            },1000)
          }

          return;
        }
        // ここまで通常タイプミスの処理
        
        // 敵必殺技の処理
        if(e.key !== targetWord[loc] && wargSpecial ===1){
          countStop="stop"
          play_missSE();
          while(fireBox.firstChild){
            fireBox.removeChild(fireBox.firstChild)
          }
          keyActive="off"
          wargSpecial=0
          enemySP_num=0
          enemySP.style.transform=`scale(${enemySP_num/100},1)`          
          setTimeout(()=>{wargFighting.src="img/warg_toboe.png"},110)
          setTimeout(()=>{greyScreen2.style.opacity="0"},500)
          setTimeout(()=>{wargFighting.style.zIndex="5"},500)
          setTimeout(()=>{warg_dash1.style.display="block";warg_dash1.classList.add("active")},500)
          setTimeout(()=>{warg_dash2.style.display="block";warg_dash2.classList.add("active")},1000)
          setTimeout(()=>{warg_dash3.style.display="block";warg_dash3.classList.add("active")},1500)
          setTimeout(()=>{warg_dash4.style.display="block";warg_dash4.classList.add("active")},2000)
          setTimeout(()=>{warg_dash6.style.display="block";warg_dash6.classList.add("active")},3000)
          setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},1400)
          setTimeout(()=>{play_damage()},1400)
          setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},2000)
          setTimeout(()=>{play_damage()},2000)
          setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},2800)
          setTimeout(()=>{play_damage()},2800)
          setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},3000)
          setTimeout(()=>{play_damage()},3000)
          setTimeout(()=>{kipDamgaeAnim_long();shakeS();kipHP_damaged(5);},3580)
          setTimeout(()=>{play_damage()},3580)
  
          setTimeout(()=>{
            keyActive="on";
            loc=0;
            wargFighting.src=wargAnime[0];
            setWord();
            warg_dash1.classList.remove("active");
            warg_dash2.classList.remove("active");
            warg_dash3.classList.remove("active");
            warg_dash4.classList.remove("active");
            warg_dash6.classList.remove("active");
            result();
          },4000);
            
        }
      //ここからキップ必殺技失敗 
        if(e.key !== targetWord[loc] && kipSpecial ===1){
          countStop="stop"
          play_missSE();
          while(fireBox.firstChild){
            fireBox.removeChild(fireBox.firstChild)
          }
          greyScreen2.style.opacity="0";
          kipFighting.style.zIndex="5";
          kipSP_num=0
          kipSP.style.transform=`scale(${kipSP_num/100},1)`
          keyActive ="off"
          kipFighting.src="img/kip_attack_miss.png";
          setTimeout(()=>{setWord()},1500)
          setTimeout(()=>{keyActive="on"},1500)
          setTimeout(()=>{kipFighting.src=kipAnime[0]},1200)
          setTimeout(()=>{kipSpecial=0},1200)
        }
        // ここからタイプ成功の処理
        if(e.key === targetWord[loc]){
        loc++;
        play_typeSE()
          if(wargSpecial!==1){
            let newElement = document.createElement("img");
            newElement.src="img/fire_anim.png";
            newElement.style.height="50px"
            newElement.classList.add("fires")
            fireBox.appendChild(newElement);
          }
  
         typeText.textContent="_".repeat(loc)+ targetWord.substring(loc);
  
          // ここから最後の文字入力成功の処理
        if(loc=== targetWord.length){
          countStop="stop"
          keyActive="off";
          if(wargSpecial===1){
            keyActive="off"
            wargSpecial=0
            enemySP_num=0
            enemySP.style.transform=`scale(${enemySP_num/100},1)`          
            setTimeout(()=>{wargFighting.src="img/warg_toboe.png"},110)
            setTimeout(()=>{greyScreen2.style.opacity="0"},500)
            setTimeout(()=>{wargFighting.style.zIndex="5"},500)
            setTimeout(()=>{warg_dash1.style.display="block";warg_dash1.classList.add("active")},500)
            setTimeout(()=>{warg_dash2.style.display="block";warg_dash2.classList.add("active")},1000)
            setTimeout(()=>{warg_dash3.style.display="block";warg_dash3.classList.add("active")},1500)
            setTimeout(()=>{warg_dash4.style.display="block";warg_dash4.classList.add("active")},2000)
            setTimeout(()=>{warg_dash6.style.display="block";warg_dash6.classList.add("active")},3000)
            setTimeout(()=>{kipGuardAnim();shakeS();kipHP_damaged(1);play_guardSE();},1400)
            setTimeout(()=>{kipGuardAnim();shakeS();kipHP_damaged(1);play_guardSE();},2000)
            setTimeout(()=>{kipGuardAnim();shakeS();kipHP_damaged(1);play_guardSE();},2800)
            setTimeout(()=>{kipGuardAnim();shakeS();kipHP_damaged(1);play_guardSE();},3000)
            setTimeout(()=>{kipGuardAnim();shakeS();kipHP_damaged(1);play_guardSE();},3580)
            setTimeout(()=>{
              keyActive="on";
              wargFighting.src=wargAnime[0];
              setWord();
              warg_dash1.classList.remove("active");
              warg_dash2.classList.remove("active");
              warg_dash3.classList.remove("active");
              warg_dash4.classList.remove("active");
              warg_dash6.classList.remove("active");
              result();
            },4000);
           return;
          }
          
          // キップ通常攻撃の処理
          if(kipSP_num !== 100){
            keyActive="off"
            kipFighting.src =kipAnime[2];
            fireShoot.src =`img/fire${loc}.png`
            while(fireBox.firstChild){
                fireBox.removeChild(fireBox.firstChild)      
              }
            setTimeout(()=>{kipFighting.src=kipAnime[0]},650);
            setTimeout(()=>{fireShoot.src="img/blank.png"},500);
            setTimeout(()=>{explosion.src="img/explosion.png"},500);
            setTimeout(()=>{play_boom()},500);
            setTimeout(()=>{hitMark.src="img/hitMark.png"},500);
            setTimeout(()=>{shakeS()},550);
            setTimeout(()=>{wargFighting.src="img/warg_damage.png"},450);
            setTimeout(()=>{enemyHP_damaged(loc-1)},450); 
            setTimeout(()=>{wargFighting.src="img/warg_standing.png"},1100);
            setTimeout(()=>{explosion.src="img/blank.png"},1200);
            setTimeout(()=>{hitMark.src="img/blank.png"},1200);
           
            kipSP_num += (10+loc);
              if (kipSP_num >=100) {kipSP_num=100}
               kipSP.style.transform=`scale(${kipSP_num/100},1)`
              
            if(kipSP_num===100){
              setTimeout(()=>{
                keyActive="on"
                setWord();
              },1200);   
            }
            if(kipSP_num!==100){
              setTimeout(()=>{
                keyActive="on"
                setWord();
              },1000);    
            }
                  
          }

         
        
          

          
         
          // ここから必殺技
          if(kipSP_num===100 && kipSpecial===1){
            keyActive="off"
            kipSP_num=0
            kipSP.style.transform=`scale(${kipSP_num/100},1)`
            kipFighting.src =kipAnime[4];
            
            greyScreen2.style.opacity="0";
            kipFighting.style.zIndex="5";

            fireShoot.src=`img/fire${loc}.png`
            setTimeout(()=>{fireShoot.src="img/blank.png"},500);
            setTimeout(()=>{play_boom();},500);
            setTimeout(()=>{fireShoot2.src=`img/fire${loc}.png`},660);
            setTimeout(()=>{fireShoot2.src="img/blank.png"},1160);
            setTimeout(()=>{play_boom();},1100);
            setTimeout(()=>{fireShoot3.src=`img/fire${loc}.png`},1320);
            setTimeout(()=>{fireShoot3.src="img/blank.png"},1820);
            setTimeout(()=>{play_boom()},1700);
            setTimeout(()=>{explosion.src="img/explosion.png"},500);
            setTimeout(()=>{explosion.src="img/blank.png"},1200);
            setTimeout(()=>{explosion2.src="img/explosion.png"},1100);
            setTimeout(()=>{explosion2.src="img/blank.png"},1600);
            setTimeout(()=>{explosion3.src="img/explosion.png"},1700);
            setTimeout(()=>{explosion3.src="img/blank.png"},2200);
            setTimeout(()=>{hitMark.src="img/hitMark.png"},500);
            setTimeout(()=>{hitMark.src="img/blank.png"},1200);
            setTimeout(()=>{hitMark2.src="img/hitMark.png"},1100);
            setTimeout(()=>{hitMark2.src="img/blank.png"},1600);
            setTimeout(()=>{hitMark3.src="img/hitMark.png"},1700);
            setTimeout(()=>{hitMark3.src="img/blank.png"},2200);
            setTimeout(()=>{shakeS()},550);
            setTimeout(()=>{shakeS()},1050);
            setTimeout(()=>{shakeS()},1550);
            setTimeout(()=>{wargFighting.src="img/warg_damage.png"},450);
            setTimeout(()=>{wargFighting.src="img/warg_standing.png"},1100);
            setTimeout(()=>{wargFighting.src="img/warg_damage.png"},1150);
            setTimeout(()=>{wargFighting.src="img/warg_standing.png"},1700);
            setTimeout(()=>{wargFighting.src="img/warg_damage.png"},1750);
            setTimeout(()=>{wargFighting.src="img/warg_standing.png"},2400);
            
            setTimeout(()=>{
             while(fireBox.firstChild){
              fireBox.removeChild(fireBox.firstChild)}
            },1500)
            
            setTimeout(()=>{
              kipFighting.src= `${kipAnime[0]}`
              kipSpecial=0 
              loc = 0;
              keyActive="on";
              setWord();
            },2000)           
        
            
          }
            // ここまで必殺技


        
           
                    
        
        setTimeout(()=>{enemyHP.style.transform=`scale(${enemyHP_num/100},1)`;result();},450)
        if(kipSpecial===1){
          setTimeout(()=>{
            enemyHP_num -= (loc+2)
            enemyHP.style.transform=`scale(${enemyHP_num/100},1)`},900)
          setTimeout(()=>{
            enemyHP_num -= (loc+5)
            enemyHP.style.transform=`scale(${enemyHP_num/100},1)`;result();},1350)
        }
        

       
        if(kipSP_num === 100 && kipSpecial===0 && enemyHP_num!==0){
            
            setTimeout(()=>{
              play_specialSE();
              kipFighting.style.zIndex="300"
              kipFighting.src= `${kipAnime[3]}`
              greyScreen2.style.opacity="1"},650);           
            kipSpecial = 1;
          }
   
      }
        // ここまで最後の文字を入力成功時の処理

    }
      // ここまで正しい文字入力の処理 
     
     
    
    }
      // ここまでキー入力のイベント
      
      )
    }
    // ここまでタイピングシステム

    
  // #endregion

//#region BGMとSEの音量調節
  
  const bigContainer=document.getElementById("bigContainer");
  const bgmBar=document.getElementById("bgmBar");
  const bgmNum=document.getElementById("bgmNum");
  const seBar=document.getElementById("seBar");
  const seNum=document.getElementById("seNum");
  bgmBar.addEventListener("input",()=>{
    bgmVolume = bgmBar.value/1000;
    AM.volume = bgmVolume;
    bgmNum.textContent=bgmBar.value;
  })
  seBar.addEventListener("input",()=>{
    seVolume = seBar.value/1000;
    power.volume = seVolume;
    seNum.textContent=seBar.value;
    power.currentTime = 0;
    power.play();
  })


  //#endregion


//#region 戻るの処理
  const returnBtn = document.getElementById("return");
  returnBtn.addEventListener("mouseover",()=>{
   const section = document.querySelector("section");
   messageBox.removeChild(section);
   textOrder("設定を適用し、タイトル画面に戻ります。",messageSpeed)
  })
  returnBtn.addEventListener("click",()=>{
    push51.volume = seVolume;
    push51.currentTime = 0;
    push51.play();
    flash.style.display="block";
    flash.classList.add("active");
    setTimeout(()=>{bigContainer2.style.display="block"},500);
    setTimeout(()=>{flash.classList.remove("active");
    flash.style.display="none";
    },1000);
  })

  //#endregion

//#region キャラクタークリック
  sala.style.cursor="pointer"
  sala.addEventListener("click",()=>{
    wah.volume = seVolume;
    wah.currentTime = 1;
    wah.play();
  })
  //#endregion
}