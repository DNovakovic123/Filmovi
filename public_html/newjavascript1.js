url = "logovanje.xml";
function xmlLoad() {
  xmlT = new XMLHttpRequest();
  xmlT.onreadystatechange = function () {
    if (xmlT.status == 200 && xmlT.readyState == 4) {
      xmlDoc = xmlT.responseXML;
      Logovanje(xmlDoc);
    }
  }
  xmlT.open("GET", url, true);
  xmlT.send();
}
function Logovanje(xmlDoc) {
  prvo = document.getElementById("container1");
  drugo = document.getElementById("container2");
  trece = document.getElementById("container3");
  cetvrto = document.getElementById("container4");
  peto = document.getElementById("container5");
  c1 = document.getElementById("i1").value;
  c2 = document.getElementById("i2").value;
  komentar = document.getElementById("dobro");
  sve = xmlDoc.getElementsByTagName("pokupi");
  ind = false;
  for (i = 0; i < sve.length; i++) {
    c3 = sve[i].getElementsByTagName("user")[0].childNodes[0].nodeValue;
    c4 = sve[i].getElementsByTagName("password")[0].childNodes[0].nodeValue;
    if (c1 == c3 && c2 == c4) {
      ind = true;
      komentar.innerHTML = " Dobrodosli " + c3;
      komentar.style.fontSize = 24 + "px";
      komentar.style.color = "orange";
    }
  }
  if (ind == true) {
    prvo.style.display = "none";
    drugo.style.display = "block";
    trece.style.display = "none";
    cetvrto.style.display = "none";
    peto.style.display = "none";
  } else {
    prvo.style.display = "block";
    drugo.style.display = "none";
    trece.style.display = "none";
    cetvrto.style.display = "none";
    peto.style.display = "none";
  }
}

function Izlog(that) {
  c1 = document.getElementById("i1");
  c2 = document.getElementById("i2");
  p1 = document.getElementById("container1");
  p2 = document.getElementById("container2");
  p3 = document.getElementById("container3");
  p4 = document.getElementById("container4");
  p5 = document.getElementById("container5");
  ind = false;
  if (that.onclick) {
    ind = true;
  }
  if (ind == true) {
    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    c1.value = "";
    c2.value = "";
  } else {
    p1.style.display = "none";
    p2.style.display = "block";
    p3.style.display = "block";
    p4.style.display = "block";
    p5.style.display = "block";
  }
}
function P1(that) {
  p1 = document.getElementById("container1");
  p2 = document.getElementById("container2");
  p3 = document.getElementById("container3");
  p4 = document.getElementById("container4");
  p5 = document.getElementById("container5");
  ind = false;
  if (that.onclick) {
    ind = true;
  }
  if (ind == true) {
    p1.style.display = "none";
    p2.style.display = "block";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
  } else {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
  }
}
function P2(that) {
  p1 = document.getElementById("container1");
  p2 = document.getElementById("container2");
  p3 = document.getElementById("container3");
  p4 = document.getElementById("container4");
  p5 = document.getElementById("container5");
  ind = false;
  if (that.onclick) {
    ind = true;
  }
  if (ind == true) {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "block";
    p4.style.display = "none";
    p5.style.display = "none";
  } else {
    p2.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
  }
}

function P3(that) {
  p1 = document.getElementById("container1");
  p2 = document.getElementById("container2");
  p3 = document.getElementById("container3");
  p4 = document.getElementById("container4");
  p5 = document.getElementById("container5");
  ind = false;
  if (that.onclick) {
    ind = true;
  }
  if (ind == true) {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "block";
    p5.style.display = "none";
    c1.value = "";
    c2.value = "";
  } else {
    p2.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
  }
}

function P4(that) {
  p1 = document.getElementById("container1");
  p2 = document.getElementById("container2");
  p3 = document.getElementById("container3");
  p4 = document.getElementById("container4");
  p5 = document.getElementById("container5");
  ind = false;
  if (that.onclick) {
    ind = true;
  }
  if (ind == true) {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "block";
  } else {
    p2.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
  }
}
url1 = "filmovi.xml";
function xmlLoad1() {
  xmlD = new XMLHttpRequest();
  xmlD.onreadystatechange = function () {
    if (xmlD.status == 200 && xmlD.readyState == 4) {
      xmlDc = xmlD.responseXML;
      filter(xmlDc);
      filterSel();
    }
  };
  xmlD.open("GET", url1, true);
  xmlD.send();
}
function filter(xmlDc) {
  filterContent = document.getElementById("filter").value.trim();
  regex = new RegExp(filterContent, "ig");
  sve1 = xmlDc.getElementsByTagName("pok");
  tabela = "<table>";
  for (i = 0; i < sve1.length; i++) {
    tabela += "<tr>";
    tag1 = sve1[i].getElementsByTagName("reditelj")[0].childNodes[0].nodeValue;
    tag2 = sve1[i].getElementsByTagName("film")[0].childNodes[0].nodeValue;
    tag3 = sve1[i].getElementsByTagName("ocena")[0].childNodes[0].nodeValue;
    if (regex.test(tag2) || filterContent == "") {
      tabela += "<td >" + tag1 + "</td>";
      tabela += "<td id='fil" + i + "'>" + tag2 + "</td>";
      tabela += "<td>" + tag3 + "</td>";
      if (korpa.includes(tag2)) {
        tabela +=
          "<td><input id='chec' checked value='" +
          i +
          "' type='checkbox' onchange='Display(this)' ></td>";
      } else {
     
        tabela +=
          "<td><input id='chec'  type='checkbox' value='" +
          i +
          "' onchange='Display(this)' ></td>";
      }
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  document.getElementById("tabela").innerHTML = tabela;
}
korpa = [];

function Display(that) {
  id = that.value;
  naziv = document.getElementById("fil" + id).innerHTML;

  if (that.checked) {
    vrednost = document.getElementById("korpa").innerHTML;

    vrednost += "<li>" + naziv + "</li>";
    korpa.push(naziv);
  } else {
    document.getElementById("korpa").innerHTML = "";

    vrednost = "";

    index = korpa.indexOf(naziv);
    korpa.splice(index, 1);
    for (i = 0; i < korpa.length; i++) {
      vrednost += "<li>" + korpa[i] + "</li>";
    }
  }
  document.getElementById("korpa").innerHTML = vrednost;
}

function popuniTabelu() {
  sve1 = xmlDc.getElementsByTagName("pok");
  tabela = "<table>";
  for (i = 0; i < sve1.length; i++) {
    tabela += "<tr>";
    tag1 = sve1[i].getElementsByTagName("reditelj")[0].childNodes[0].nodeValue;
    tag2 = sve1[i].getElementsByTagName("film")[0].childNodes[0].nodeValue;
    tag3 = sve1[i].getElementsByTagName("ocena")[0].childNodes[0].nodeValue;
    if (regex.test(tag2) || filterContent == "") {
      tabela += "<td >" + tag1 + "</td>";
      tabela += "<td id='fil" + i + "'>" + tag2 + "</td>";
      tabela += "<td>" + tag3 + "</td>";
      if (korpa.includes(tag2)) {
        tabela +=
          "<td><input id='chec' checked value='" +
          i +
          "' type='checkbox' onchange='Display(this)' ></td>";
      } else {
        
        tabela +=
          "<td><input id='chec'  type='checkbox' value='" +
          i +
          "' onchange='Display(this)' ></td>";
      }
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  document.getElementById("tabela").innerHTML = tabela;
}

function filterSel() {
  slekovano = [];
  prob = "<option>" + "Sve" + "</option>";

  sve1 = xmlDc.getElementsByTagName("pok");
  for (i = 0; i < sve1.length; i++) {
    tag1 = sve1[i].getElementsByTagName("reditelj")[0].childNodes[0].nodeValue;
    if (!slekovano.includes(tag1)) {
      slekovano.push(tag1);
      prob += "<option>" + tag1 + "</option>";
    }
  }
  document.getElementById("sel").innerHTML = prob;
}
function Selektovano(that) {
  ind = that.value;
  if (ind == "Sve") {
    popuniTabelu();
  } else {
    sve1 = xmlDc.getElementsByTagName("pok");
    tabela = "<table>";
    for (i = 0; i < sve1.length; i++) {
      tabela += "<tr>";
      tag1 =
        sve1[i].getElementsByTagName("reditelj")[0].childNodes[0].nodeValue;
      tag2 = sve1[i].getElementsByTagName("film")[0].childNodes[0].nodeValue;
      tag3 = sve1[i].getElementsByTagName("ocena")[0].childNodes[0].nodeValue;
      if (ind == tag1) {
        tabela += "<td>" + tag1 + "</td>";
        tabela += "<td id='fil" + i + "'>" + tag2 + "</td>";
        tabela += "<td>" + tag3 + "</td>";
        if (korpa.includes(tag2)) {
          tabela +=
            "<td><input id='chec' checked value='" +
            i +
            "' type='checkbox' onchange='Display(this)' ></td>";
        } else {

          tabela +=
            "<td><input id='chec'  type='checkbox' value='" +
            i +
            "' onchange='Display(this)' ></td>";
        }

        tabela += "</tr>";
      }
    }
    tabela += "</table>";
    document.getElementById("tabela").innerHTML = tabela;
  }
}
function Vise(that) {
  selected = document.getElementById("sel").value;
  if (that.checked) {
    sve1 = xmlDc.getElementsByTagName("pok");
    tabela = "<table>";
    for (i = 0; i < sve1.length; i++) {
      tabela += "<tr>";
      tag1 =
        sve1[i].getElementsByTagName("reditelj")[0].childNodes[0].nodeValue;
      tag2 = sve1[i].getElementsByTagName("film")[0].childNodes[0].nodeValue;
      tag3 = sve1[i].getElementsByTagName("ocena")[0].childNodes[0].nodeValue;
      if (selected === "Sve") {
        if (tag3 > 7.5) {
          tabela += "<td >" + tag1 + "</td>";
          tabela += "<td id='fil" + i + "'>" + tag2 + "</td>";
          tabela += "<td>" + tag3 + "</td>";
          if (korpa.includes(tag2)) {
            tabela +=
              "<td><input id='chec' checked value='" +
              i +
              "' type='checkbox' onchange='Display(this)' ></td>";
          } else {
            tabela +=
              "<td><input id='chec'  type='checkbox' value='" +
              i +
              "' onchange='Display(this)' ></td>";
          }
        }
        tabela += "</tr>";
      } else {
        if (tag3 > 7.5 && tag1 === selected) {
          tabela += "<td >" + tag1 + "</td>";
          tabela += "<td id='fil" + i + "'>" + tag2 + "</td>";
          tabela += "<td>" + tag3 + "</td>";
          if (korpa.includes(tag2)) {
            tabela +=
              "<td><input id='chec' checked value='" +
              i +
              "' type='checkbox' onchange='Display(this)' ></td>";
          } else {
            tabela +=
              "<td><input id='chec'  type='checkbox' value='" +
              i +
              "' onchange='Display(this)' ></td>";
          }
        }
        tabela += "</tr>";
      }
    }
    tabela += "</table>";
    document.getElementById("tabela").innerHTML = tabela;
  } else {
    if (selected === "Sve") {
      popuniTabelu();
    } else {
      Selektovano(document.getElementById("sel"));
    }
  }
}

function P5(that) {
  ind = false;
  o = document.getElementById("o_reditelju1");
  text = document.getElementById("tekst1");

  if (that.onclick) {
    ind = true;
  }
  if (ind) {
    o.style.display = "none";
    text.style.display = "block";
  } else {
    o.style.display = "block";
    text.style.display = "none";
  }
}

function P6(that) {
  ind = false;
  o = document.getElementById("o_reditelju1");
  text = document.getElementById("tekst1");

  if (that.onclick) {
    ind = true;
  }
  if (ind) {
    o.style.display = "block";
    text.style.display = "none";
  } else {
    o.style.display = "none";
    text.style.display = "block";
  }
}

function P7(that) {
  ind = false;
  o = document.getElementById("o_reditelju2");
  text = document.getElementById("tekst2");

  if (that.onclick) {
    ind = true;
  }
  if (ind) {
    o.style.display = "none";
    text.style.display = "block";
  } else {
    o.style.display = "block";
    text.style.display = "none";
  }
}

function P8(that) {
  ind = false;
  o = document.getElementById("o_reditelju2");
  text = document.getElementById("tekst2");

  if (that.onclick) {
    ind = true;
  }
  if (ind) {
    o.style.display = "block";
    text.style.display = "none";
  } else {
    o.style.display = "none";
    text.style.display = "block";
  }
}

function P9(that) {
  ind = false;
  o = document.getElementById("o_reditelju3");
  text = document.getElementById("tekst3");

  if (that.onclick) {
    ind = true;
  }
  if (ind) {
    o.style.display = "none";
    text.style.display = "block";
  } else {
    o.style.display = "block";
    text.style.display = "none";
  }
}

function P10(that) {
  ind = false;
  o = document.getElementById("o_reditelju3");
  text = document.getElementById("tekst3");

  if (that.onclick) {
    ind = true;
  }
  if (ind) {
    o.style.display = "block";
    text.style.display = "none";
  } else {
    o.style.display = "none";
    text.style.display = "block";
  }
}
