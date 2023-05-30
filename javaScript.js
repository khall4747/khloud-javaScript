const firstName = "Khloud";
const Midname = "mohammed";
const LastName = "Alabdullah";
document.write(
  "   " +
    typeof Midname +
    " " +
    typeof firstName +
    " " +
    typeof LastName +
    "<br>"
);
document.write(Arguments(firstName, Midname, LastName + "<br>"));
//جمع الاسم
function Arguments(f, M, L) {
  const c = f + M + L;
  return c;
}
let text;
//يطبع الارقام الزوجيه
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    text = i + "<br>";
    document.write(text);
  }
}
//يجمع رقمين ويشوف اذا اكبر من ١٠٠
document.write(add(50, 30));

function add(num1, num2) {
  const c = num1 + num2;
  if (c >= 100) {
    const result = "the value is more than 100: " + c;
    return result;
  } else {
    const result = "the value is less than 100: " + c;
    return result;
  }
}
///جميع الحسابات
function addnum(f, M) {
  const c = f + M;
  return c;
}
function Multnum(f, M) {
  const c = f * M;
  return c;
}
function Subnum(f, M) {
  const c = f - M;
  return c;
}
function Divnum(f, M) {
  const c = f / M;
  return c;
}
function mid(f, M) {
  const c = f + M / 2;
  return c;
}
/////////////////////////////////
///يحسب الضريبه المضافه
const c = added(50, 100);
document.write("<br> the adedd number  " + c);
function added(f) {
  const c = f * 0.015;
  return c;
}
///سوتش للصفر والفردي والزوجي
let key = 4;
switch (key) {
  case key:
    if (key % 2 == 0) {
      if (key == 0) {
        document.write("<br>" + key + "  zero");

        break;
      }
      document.write("<br>" + key + "   even");

      break;
    }

  case key:
    if (key % 2 != 0) {
      document.write("<br>" + key + "   odd");

      break;
    }
  default:
    document.write("<br>" + key);
    break;
}
///يحسب الاس للاعداد من ١ الى ١٠
for (let num = 1; num < 10; num++) {
  let c = num ** 2;
  document.write("<br>" + c + "<br>");
}

let year = 2004;
///leap year
if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
  document.write("<br> leap year <br>");
} else {
  document.write("<br>not leap year <br>");
}
/////////////////////////////
///يحسب جدول الدرجات
let grade = 90;
let mg;
if (grade >= 95 && grade <= 100) {
  mg = "A+";
  document.write(mg);
} else if (grade >= 90) {
  mg = "A";
  document.write(mg);
} else if (grade >= 85) {
  mg = "B+";
  document.write(mg);
} else if (grade >= 80) {
  mg = "B";
  document.write(mg);
} else if (grade >= 75) {
  mg = "C+";
  document.write(mg);
} else if (grade >= 60) {
  mg = "C";
  document.write(mg);
} else if (grade >= 55) {
  mg = "D+";
  document.write(mg);
} else if (grade >= 50) {
  mg = "D";
  document.write(mg);
} else if (grade >= 0 && grade <= 94) {
  mg = "F";
  document.write(mg);
}
////////////////
//الاس للارقام الزوجيه
for (let n = 1; n < 20; n++) {
  if (n % 2 !== 0) {
    let c = n ** 2;
    document.write("<br>" + c + "<br>");
  }
}
///يحول من سنه الى ايام
document.write(yearsToDays(5) + "<br>");

function yearsToDays(Age) {
  return Age * 365.25;
}
let rows = 8;
///يطبع الهرم
for (let i = 1; i <= rows; ++i) {
  for (let j = 1; j <= i; ++j) {
    document.write(j + "  ");
  }
  document.write("<br>");
}
//الاعداد الزوجيه
for (let i = 1; i <= 25; i++) {
  if (i % 2 == 0) {
    text = i + "<br>";
    document.write(text);
  }
}
