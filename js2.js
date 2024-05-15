function print_contact() {
  let sk = "skype: helper";
  let tg = "telegram: @helper";
  let tel = "tel: 8995345235";
  alert(sk + "\n" + tg + "\n" + tel);
}

yourCupons = [];
yourInfCupons = [];

function close_modal() {
  myModal.style.display = "none";
}

function show_modal() {
  myModal.style.display = "block";
}

function close_modal_present() {
  modal_present.style.display = "none";
}

function show_modal_present() {
  modal_present.style.display = "block";
  cupons = [
    "25₽,",
    "32₽,",
    "40₽,",
    "50₽,",
    "65₽,",
    "80₽,",
    "100₽,",
    "125₽,",
    "155₽,",
    "190₽,",
    "230₽,",
    "275₽,",
    "325₽,",
    "380₽,",
    "440₽,",
    "Бесплатная футболка.",
  ];
  cuponsText = "Выпадающие из подарка призы:" + "\n";
  cupons.forEach((element) => {
    cuponsText = cuponsText + " • " + element + "\n";
  });
  document.getElementById("spisok").innerHTML = cuponsText;
}

function close_modal_present_b() {
  modal_present_button.style.display = "none";
  podarok = 0;
}

podarok = 0;
prOverTime = 60;
function prTime() {
  prOverTime = prOverTime - 1;
  pOT = prOverTime;
  t_sec = pOT % 60;
  pOT = (pOT - t_sec) / 60;
  t_min = pOT % 60;
  pOT = (pOT - t_min) / 60;
  t_h = pOT;
  if (t_h < 10) {
    t_h = "0" + t_h;
  }
  if (t_min < 10) {
    t_min = "0" + t_min;
  }
  if (t_sec < 10) {
    t_sec = "0" + t_sec;
  }
  document.getElementById('timeP').innerHTML = "⏰" + t_h + ":" + t_min + ":" + t_sec + "⏰"
  if (prOverTime < 1) {
    document.getElementById('timeP').innerHTML = "⏰00:00:00⏰" 
    document.getElementById("priz").innerHTML = "Перезайдите, чтобы получить его.";
    document.getElementById("get").innerHTML = "Подарок будет доступен через 00 ч 00 мин 00 сек.";
  }
  if (prOverTime > 0 & podarok == 0) {
    document.getElementById("priz").innerHTML = "";
    document.getElementById("get").innerHTML = "Подарок будет доступен через " + t_h + " ч " + t_min + " мин " + t_sec + " сек.";
  }
}
window.setInterval("prTime()", 1000);

function show_modal_present_b() {
  modal_present_button.style.display = "block";
  prCupons = [
    "25₽",
    "32₽",
    "40₽",
    "50₽",
    "65₽",
    "80₽",
    "100₽",
    "125₽",
    "155₽",
    "190₽",
    "230₽",
    "275₽",
    "325₽",
    "380₽",
    "440₽",
    "Бесплатная футболка",
  ];
  if (prOverTime < 1) {
    cuponType = getRandomInt(100)
    var randomN = getRandomInt(prCupons.length);
    var random = prCupons[randomN];
    podarok = 1;
    if (cuponType >= 26 && randomN < 4) {
      var randomAdd = '⏳' + random;
      dr = "time";
    }
    else if (cuponType >= 21 && randomN < 7 && randomN > 3) {
      var randomAdd = '⏳' + random;
      dr = "time";
    }
    else if (cuponType >= 16 && randomN < 10 && randomN > 6) {
      var randomAdd = '⏳' + random;
      dr = "time";
    }
    else if (cuponType >= 13 && randomN < 13 && randomN > 9) {
      var randomAdd = '⏳' + random;
      dr = "time";
    }
    else if (cuponType >= 11 && randomN < 16 && randomN > 12) {
      var randomAdd = '⏳' + random;
      dr = "time";
    }
    else if (cuponType >= 9 && randomN == 16) {
      var randomAdd = '⏳' + random;
      dr = "time";
    }
    else {
      var randomAdd2 = '∞' + " " + random;
      dr = "infinity";
    }
    if (dr == "time") {
      yourCupons.push(randomAdd);
    }
    else {
      yourInfCupons.push(randomAdd2);
    }
    var priz1 = "• " + random + "!";
    document.getElementById("priz").innerHTML = priz1;
    document.getElementById("get").innerHTML = "Из подарка вам выпало:";
    prOverTime = 60;
  }
}

function animation() {
  present_button.style.className = 'animate__animated animate__rubberBand animate__repeat1';
}

tShirtsBasket = 0;
bTShirtsBasket = 0;
blkTShirtsBasket = 0;
wTShirtsBasket = 0;
costTShirtsBasket = 0;

function addTShirts(tShirtColor) {
  if (tShirtColor == "blue") {
    myColorName = "Синих";
  } else {
    if (tShirtColor == "white") {
      myColorName = "Белых";
    } else {
      if (tShirtColor == "black") {
        myColorName = "Чёрных";
      }
    }
  }
  if (confirm("Добавить в заказ?")) {
    let tShirtsAmount = prompt("Сколько футболок вам нужно?");
    tShirtsAmount == Number.isInteger(tShirtsAmount);
    if (tShirtsAmount != null) {
      if (tShirtsAmount == parseFloat(tShirtsAmount) && !tShirtsAmount == "" && tShirtsAmount > 0) {
        alert(
          "Товар(ы) успешно добавлен(ы) в заказ!" +
          "\n" +
          myColorName +
          " футболок добавлено: " +
          tShirtsAmount
        );
        if (tShirtColor == "blue") {
          bTShirtsBasket = Number(tShirtsAmount) + Number(bTShirtsBasket);
          tShirtsBasket = Number(tShirtsAmount) + Number(tShirtsBasket);
          costTShirtsBasket =
            Number(tShirtsAmount) * 499 + Number(costTShirtsBasket);
        } else {
          if (tShirtColor == "white") {
            wTShirtsBasket = Number(tShirtsAmount) + Number(wTShirtsBasket);
            tShirtsBasket = Number(tShirtsAmount) + Number(tShirtsBasket);
            costTShirtsBasket =
              Number(tShirtsAmount) * 499 + Number(costTShirtsBasket);
          } else {
            if (tShirtColor == "black") {
              blkTShirtsBasket =
                Number(tShirtsAmount) + Number(blkTShirtsBasket);
              tShirtsBasket = Number(tShirtsAmount) + Number(tShirtsBasket);
              costTShirtsBasket =
                Number(tShirtsAmount) * 499 + Number(costTShirtsBasket);
            }
          }
        }
      } else {
        alert(`Введите натуральное число!`);
      }
    } else {
      alert("Вы отменили добавление товара в заказ!");
    }
  } else {
    alert("Вы отменили добавление товара в заказ!");
  }
}

function show_korz_modal() {
  korzModal.style.display = "block";
  document.getElementById("bTS").innerHTML = bTShirtsBasket;
  document.getElementById("blkTS").innerHTML = blkTShirtsBasket;
  document.getElementById("wTS").innerHTML = wTShirtsBasket;
  document.getElementById("allTS").innerHTML = tShirtsBasket;
  document.getElementById("costAllTS").innerHTML = costTShirtsBasket;
  cuponsTxt = "Ваши времнные купоны:" + "&#8194";
  cuponsTekst = "Ваши бесконечные купоны:" + "&#8194";
  yourCupons.forEach((elem) => {
    cuponsTxt = cuponsTxt + " " + elem + " &#8194";
  });
  yourInfCupons.forEach((elem2) => {
    cuponsTekst = cuponsTekst + " " + elem2 + " &#8194";
  });
  document.getElementById("cupT").innerHTML = cuponsTxt;
  document.getElementById("cupInf").innerHTML = cuponsTekst;
}

function show_korz() {
  document.getElementById("korzBTS").innerHTML = 'Синих футболок: ' + bTShirtsBasket;
  document.getElementById("korzBlkTS").innerHTML = 'Чёрных футболок: ' + blkTShirtsBasket;
  document.getElementById("korzWTS").innerHTML = 'Белых футболок: ' + wTShirtsBasket;
  document.getElementById("korzATS").innerHTML = 'Всего футболок: ' + tShirtsBasket;
  document.getElementById("korzCTS").innerHTML = 'Общая стоимость футболок: ' + costTShirtsBasket + ' ₽';
  if (bTShirtsBasket >= 1 || blkTShirtsBasket >= 1 || wTShirtsBasket >= 1) {
    document.getElementById("krz").style.display = 'none';
  }
  document.getElementById("korzBTS").innerHTML = 'Синих футболок: ' + bTShirtsBasket;
}
window.setInterval("show_korz()", 10)

function close_korz_modal() {
  korzModal.style.display = "none";
}

function show_star(k) {
  k = k - 1;

  var ids = ["star_f_1", "star_f_2", "star_f_3", "star_f_4", "star_f_5"];

  b = ids[k];
  a = document.getElementById(b);

  if (a.src.indexOf("star_2.png") > -1) {
    for (let i = 0; i <= k; i++) {
      b = ids[i];
      a = document.getElementById(b);
      a.src = "img/Магазин футболок/star_1.png";
    }
  } else {
    for (let i = 0; i < ids.length; i++) {
      if (i > k) {
        b = ids[i];
        a = document.getElementById(b);
        a.src = "img/Магазин футболок/star_2.png";
      }
    }
  }
}

function star_2() {
  var ids = ["star_f_1", "star_f_2", "star_f_3", "star_f_4", "star_f_5"];

  for (let i = 0; i < ids.length; i++) {
    b = ids[i];
    a = document.getElementById(b);
    a.src = "img/Магазин футболок/star_2.png";
  }
}

function valid_form() {
  let name = document.getElementById("input_name").value;
  let fam = document.getElementById("input_fam").value;
  let mail = document.getElementById("input_mail").value;
  let phone = document.getElementById("input_phone").value;
  if (name == "" || name == " ") {
    document.getElementById("sp").innerHTML = "Введите имя";
  }
  if (fam == "" || fam == " ") {
    document.getElementById("sp").innerHTML = "Введите фамилию";
  }
  if (mail.indexOf("@") == -1) {
    document.getElementById("sp").innerHTML = "Вы не ввели почту";
  }
  if (phone != parseFloat(phone) || phone == "" || phone == " ") {
    document.getElementById("sp").innerHTML = "Введите номер телефона";
  }
}

function rand_tshirt() {
  var arr = [
    "img/Магазин футболок/1.jpg",
    "img/Магазин футболок/2.jpg",
    "img/Магазин футболок/3.jpg",
    "img/Магазин футболок/4.jpg",
    "img/Магазин футболок/Чёрная футболка.png",
    "img/Магазин футболок/Белая футболка.png",
  ];
  var id_img = ["ts_1", "ts_2"];

  for (i = 0; i < id_img.length; i++) {
    c = document.getElementById(id_img[i]);
    img = RandomElement(arr);
    c.src = img;
  }
}

function b_style(but) {
  but = but - 1;

  buttons = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"];

  a = buttons[but];
  b = document.getElementById(a);
  c = window.getComputedStyle(b).background;

  console.log(b);

  if (c == "#FF0000") {
    b.style.background =
      "radial-gradient(farthest-corner at 50% 50%, #ff4400, #ff2200)";
    b.style.color = "#ffeedd";
    b.style.boxShadow = "1px 1px 3px 1px #151515";
    b.style.borderRadius = "7px";
    b.style.cursor = "pointer";
    b.style.borderColor = "#abcde0";
  } else {
    b.style.background = "#FF0000";
    b.style.color = "FFFFFF";
    b.style.boxShadow = "";
    b.style.borderRadius = "5px";
    b.style.borderColor = "#7E7E7E";
    b.style.cursor = "";
  }
}

function txt(rate) {
  if (rate < 4) {
    let ideas = prompt('Как мы можем улучшить наш сайт? Поделитесь своими идеями:')
    if (ideas == '' || ideas == null) {
      alert('Мы постараемся улучшить наш сайт.')
    }
    else {
      alert('Мы рассмотрим ваши предложения и постараемся улучшить наш сайт.')
    }
  }
  else {
    alert('Спасибо за отзыв! Нам очень важно ваше мнение!')
  }
}

function hide() {
  document.getElementById("present_div").style.display = "block";
}

setTimeout(hide, 3000);

function RandomElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
