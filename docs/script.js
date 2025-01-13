// script.js

// تحديث بيانات الاستشعار (محاكاة البيانات)
function updateSensorData() {
  const soilMoisture = Math.floor(Math.random() * 100); // رطوبة التربة
  const temperature = Math.floor(Math.random() * 35) + 15; // درجة الحرارة
  const weather = ["مشمس", "ممطر", "غائم"][Math.floor(Math.random() * 3)]; // حالة الطقس

  document.getElementById("soil-moisture").textContent = soilMoisture;
  document.getElementById("temperature").textContent = temperature;
  document.getElementById("weather").textContent = weather;
}

// التحكم في الري
document.getElementById("start-irrigation").addEventListener("click", () => {
  alert("تم تشغيل نظام الري.");
});

document.getElementById("stop-irrigation").addEventListener("click", () => {
  alert("تم إيقاف نظام الري.");
});

// ضبط جدول الري
document.getElementById("set-schedule").addEventListener("click", () => {
  const time = document.getElementById("schedule-time").value;
  if (time) {
    alert(`تم ضبط وقت الري على الساعة ${time}.`);
  } else {
    alert("يرجى تحديد وقت للري.");
  }
});

// تحديث بيانات الاستشعار كل 5 ثوانٍ
setInterval(updateSensorData, 5000);
// script.js

// تحديث بيانات الاستشعار بشكل عشوائي (محاكاة)
function updateSensorData() {
  const soilMoisture = Math.floor(Math.random() * 101); // 0-100%
  const temperature = Math.floor(Math.random() * 36) + 10; // 10-45°C
  const weatherOptions = ["مشمس", "ممطر", "غائم"];
  const weather =
    weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

  document.getElementById("soil-moisture").textContent = soilMoisture;
  document.getElementById("temperature").textContent = temperature;
  document.getElementById("weather").textContent = weather;
}

// تشغيل وإيقاف الري
document.getElementById("start-irrigation").addEventListener("click", () => {
  alert("تم تشغيل نظام الري بنجاح.");
});

document.getElementById("stop-irrigation").addEventListener("click", () => {
  alert("تم إيقاف نظام الري.");
});

// ضبط الجدولة
document.getElementById("set-schedule").addEventListener("click", (e) => {
  e.preventDefault();
  const scheduleTime = document.getElementById("schedule-time").value;
  if (scheduleTime) {
    alert(`تم جدولة الري عند الساعة ${scheduleTime}.`);
  } else {
    alert("يرجى إدخال وقت الجدولة.");
  }
});

// تحديث بيانات الاستشعار كل 5 ثوانٍ
setInterval(updateSensorData, 5000);

// تحميل البيانات الأولية
updateSensorData();
// script.js

// تحديث بيانات الاستشعار بشكل عشوائي (محاكاة)
function updateSensorData() {
  const soilMoisture = Math.floor(Math.random() * 101); // 0-100%
  const temperature = Math.floor(Math.random() * 36) + 10; // 10-45°C
  const weatherOptions = ["مشمس", "ممطر", "غائم"];
  const weather =
    weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

  // عرض البيانات على الصفحة
  document.getElementById("soil-moisture").textContent = soilMoisture;
  document.getElementById("temperature").textContent = temperature;
  document.getElementById("weather").textContent = weather;

  // اتخاذ قرار بشأن الري
  const irrigationDecision = decideIrrigation(
    soilMoisture,
    temperature,
    weather
  );
  displayIrrigationDecision(irrigationDecision);
}

// اتخاذ قرار بشأن الري
function decideIrrigation(soilMoisture, temperature, weather) {
  let waterAmount = 0; // كمية المياه باللتر
  let irrigationDuration = 0; // مدة الري بالدقائق

  if (soilMoisture < 30) {
    // إذا كانت رطوبة التربة منخفضة
    if (temperature > 30) {
      waterAmount = 10; // زيادة كمية المياه في الطقس الحار
      irrigationDuration = 15; // زيادة مدة الري
    } else {
      waterAmount = 7; // كمية مياه متوسطة
      irrigationDuration = 10; // مدة ري متوسطة
    }
  } else if (soilMoisture < 50) {
    // إذا كانت رطوبة التربة معتدلة
    if (weather === "مشمس") {
      waterAmount = 5;
      irrigationDuration = 8;
    } else {
      waterAmount = 3;
      irrigationDuration = 5;
    }
  } else {
    // إذا كانت رطوبة التربة عالية
    waterAmount = 0; // لا حاجة للري
    irrigationDuration = 0;
  }

  return { waterAmount, irrigationDuration };
}

// عرض قرار الري
function displayIrrigationDecision({ waterAmount, irrigationDuration }) {
  const irrigationMessage = document.getElementById("irrigation-decision");
  if (waterAmount > 0 && irrigationDuration > 0) {
    irrigationMessage.textContent = `يجب ري التربة بـ ${waterAmount} لتر لمدة ${irrigationDuration} دقيقة.`;
    irrigationMessage.style.color = "#4caf50"; // لون النص أخضر
  } else {
    irrigationMessage.textContent = "لا حاجة للري حالياً.";
    irrigationMessage.style.color = "#f44336"; // لون النص أحمر
  }
}

// تشغيل وإيقاف الري
document.getElementById("start-irrigation").addEventListener("click", () => {
  alert("تم تشغيل نظام الري بنجاح.");
});

document.getElementById("stop-irrigation").addEventListener("click", () => {
  alert("تم إيقاف نظام الري.");
});

// ضبط الجدولة
document.getElementById("set-schedule").addEventListener("click", (e) => {
  e.preventDefault();
  const scheduleTime = document.getElementById("schedule-time").value;
  if (scheduleTime) {
    alert(`تم جدولة الري عند الساعة ${scheduleTime}.`);
  } else {
    alert("يرجى إدخال وقت الجدولة.");
  }
});

// تحديث بيانات الاستشعار كل 5 ثوانٍ
setInterval(updateSensorData, 5000);

// تحميل البيانات الأولية
updateSensorData();
// جمع البيانات لتوليد التقرير
function generateReport() {
  const soilMoisture = document.getElementById("soil-moisture").textContent;
  const temperature = document.getElementById("temperature").textContent;
  const weather = document.getElementById("weather").textContent;
  const irrigationDecision = document.getElementById("irrigation-decision")
    .textContent;

  // نص التقرير
  const report = `
        <h3>تقرير حالة الري:</h3>
        <ul>
            <li><strong>رطوبة التربة الحالية:</strong> ${soilMoisture}%</li>
            <li><strong>درجة الحرارة الحالية:</strong> ${temperature}°C</li>
            <li><strong>حالة الطقس:</strong> ${weather}</li>
            <li><strong>قرار الري:</strong> ${irrigationDecision}</li>
        </ul>
        <h3>التوصيات:</h3>
        <p>
            بناءً على البيانات الحالية، يُنصح باتباع قرار الري المذكور أعلاه. 
            يُفضل أيضًا مراقبة البيانات خلال الساعات القادمة إذا استمرت التغيرات المناخية.
        </p>
    `;

  // عرض التقرير
  const reportOutput = document.getElementById("report-output");
  reportOutput.innerHTML = report;
}

// ربط الزر بوظيفة توليد التقرير
document
  .getElementById("generate-report")
  .addEventListener("click", generateReport);
// رسم بياني لتحليل البيانات
function renderChart() {
  const ctx = document.getElementById("data-chart").getContext("2d");

  const chart = new Chart(ctx, {
    type: "line", // نوع الرسم البياني: خطي
    data: {
      labels: [
        "الأحد",
        "الإثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      datasets: [
        {
          label: "رطوبة التربة (%)",
          data: [40, 50, 35, 60, 45, 70, 55], // بيانات وهمية
          borderColor: "rgba(76, 175, 80, 0.8)",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          fill: true
        },
        {
          label: "درجة الحرارة (°C)",
          data: [30, 28, 32, 31, 29, 33, 34], // بيانات وهمية
          borderColor: "rgba(244, 67, 54, 0.8)",
          backgroundColor: "rgba(244, 67, 54, 0.2)",
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "أيام الأسبوع"
          }
        },
        y: {
          title: {
            display: true,
            text: "القيمة"
          }
        }
      }
    }
  });
}

// إعداد الخريطة
const map = L.map("map").setView([24.7136, 46.6753], 6); // إحداثيات الرياض

// إضافة الطبقة الأساسية
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// التأكد من تحديث الخريطة عند تغيير حجم الشاشة
window.addEventListener("resize", () => {
  map.invalidateSize(); // تحديث حجم الخريطة لتتناسب مع الشاشة
});

// ممكن يحذف من هنا
// بيانات وهمية للإحصائيات
const cityStatistics = [
  {
    city: "جدة",
    farmType: "زراعات مكشوفة",
    area: 50,
    waterUsed: 1200,
    waterSaved: 300
  },
  {
    city: "جيزان",
    farmType: "بيوت بلاستيكية",
    area: 30,
    waterUsed: 800,
    waterSaved: 200
  },
  {
    city: "الجوف",
    farmType: "زراعات مكشوفة",
    area: 70,
    waterUsed: 1500,
    waterSaved: 400
  },
  {
    city: "الرياض",
    farmType: "زراعة الأشجار",
    area: 100,
    waterUsed: 2000,
    waterSaved: 500
  },
  {
    city: "المدينة المنورة",
    farmType: "زراعة محمية",
    area: 20,
    waterUsed: 600,
    waterSaved: 150
  }
];

// عرض الإحصائيات في الجدول
function displayStatistics() {
  const tableBody = document.querySelector("#stats-table tbody");
  tableBody.innerHTML = ""; // مسح البيانات السابقة

  cityStatistics.forEach((stat) => {
    const row = `
            <tr>
                <td>${stat.city}</td>
                <td>${stat.farmType}</td>
                <td>${stat.area}</td>
                <td>${stat.waterUsed}</td>
                <td>${stat.waterSaved}</td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

// استدعاء الدالة لعرض البيانات
displayStatistics();

// إنشاء رسم بياني لتحليل كمية المياه المستخدمة حسب المدينة
function renderWaterUsageChart() {
  const ctx = document.getElementById("water-usage-chart").getContext("2d");
  const cityNames = cityStatistics.map((stat) => stat.city); // أسماء المدن
  const waterUsed = cityStatistics.map((stat) => stat.waterUsed); // كمية المياه المستخدمة

  new Chart(ctx, {
    type: "bar", // نوع الرسم البياني: أعمدة
    data: {
      labels: cityNames,
      datasets: [
        {
          label: "كمية المياه المستخدمة (م³)",
          data: waterUsed,
          backgroundColor: "rgba(76, 175, 80, 0.7)",
          borderColor: "rgba(76, 175, 80, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "المدينة"
          }
        },
        y: {
          title: {
            display: true,
            text: "كمية المياه (م³)"
          }
        }
      }
    }
  });
}

// إنشاء رسم بياني لتحليل كمية المياه الموفّرة حسب المدينة
function renderWaterSavingsChart() {
  const ctx = document.getElementById("water-savings-chart").getContext("2d");
  const cityNames = cityStatistics.map((stat) => stat.city); // أسماء المدن
  const waterSaved = cityStatistics.map((stat) => stat.waterSaved); // كمية المياه الموفّرة

  new Chart(ctx, {
    type: "pie", // نوع الرسم البياني: دائري
    data: {
      labels: cityNames,
      datasets: [
        {
          label: "كمية المياه الموفّرة (م³)",
          data: waterSaved,
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        }
      }
    }
  });
}

// استدعاء دوال الرسوم البيانية
renderWaterUsageChart();
renderWaterSavingsChart();

// بيانات جديدة للإحصائيات
const waterCosts = [
  { city: "جدة", cost: 1000 }, // تكلفة المياه بالريال
  { city: "الجوف", cost: 800 },
  { city: "الرياض", cost: 1200 },
  { city: "المدينة المنورة", cost: 1500 },
  { city: "جيزان", cost: 600 }
];

const farmPerformance = [
  { city: "جدة", yield: 90 }, // إنتاجية المزرعة كنسبة مئوية
  { city: "الجوف", yield: 85 },
  { city: "الرياض", yield: 80 },
  { city: "المدينة المنورة", yield: 95 },
  { city: "جيزان", yield: 75 }
];

// رسم بياني لتكلفة المياه حسب المدينة
function renderWaterCostChart() {
  const ctx = document.getElementById("water-cost-chart").getContext("2d");
  const cityNames = waterCosts.map((data) => data.city); // أسماء المدن
  const costs = waterCosts.map((data) => data.cost); // تكلفة المياه

  new Chart(ctx, {
    type: "bar", // نوع الرسم البياني: أعمدة
    data: {
      labels: cityNames,
      datasets: [
        {
          label: "تكلفة المياه (ريال)",
          data: costs,
          backgroundColor: "rgba(54, 162, 235, 0.7)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "المدينة"
          }
        },
        y: {
          title: {
            display: true,
            text: "التكلفة (دينار)"
          }
        }
      }
    }
  });
}

// رسم بياني لأداء المزارع حسب المدينة
function renderFarmPerformanceChart() {
  const ctx = document
    .getElementById("farm-performance-chart")
    .getContext("2d");
  const cityNames = farmPerformance.map((data) => data.city); // أسماء المدن
  const yields = farmPerformance.map((data) => data.yield); // أداء المزارع

  new Chart(ctx, {
    type: "radar", // نوع الرسم البياني: رادار
    data: {
      labels: cityNames,
      datasets: [
        {
          label: "أداء المزارع (%)",
          data: yields,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 50,
          suggestedMax: 100,
          title: {
            display: true,
            text: "أداء المزارع"
          }
        }
      }
    }
  });
}

// استدعاء الرسوم البيانية الجديدة
renderWaterCostChart();
renderFarmPerformanceChart();

// تغيير اللغة بناءً على الاختيار
document.getElementById("arabic-btn").addEventListener("click", () => {
  document.body.setAttribute("lang", "ar");
  document.getElementById("main-title").innerHTML =
    '<span class="icon">💧</span>نظام الري الذكي';
  document.getElementById("sub-title").textContent =
    "فكرة وتنفيذ: المستشار لؤي شيرة";
  document.getElementById("love-message").innerHTML =
    'أنا أحب منال <span class="heart">❤️</span>';
  document.getElementById("sensor-data-title").innerHTML =
    '<span class="icon">📊</span>بيانات الاستشعار';
  document.getElementById("sensor-data-header").textContent = "البيان";
  document.getElementById("sensor-value-header").textContent = "القيمة";
  document.getElementById("soil-moisture-label").textContent = "رطوبة التربة";
  document.getElementById("temperature-label").textContent = "درجة الحرارة";
  document.getElementById("weather-label").textContent = "حالة الطقس";
});

document.getElementById("english-btn").addEventListener("click", () => {
  document.body.setAttribute("lang", "en");
  document.getElementById("main-title").innerHTML =
    '<span class="icon">💧</span>Smart Irrigation System';
  document.getElementById("sub-title").textContent =
    "Concept and Implementation: Consultant Louay Sheerah";
  document.getElementById("love-message").innerHTML =
    'I love Manal <span class="heart">❤️</span>';
  document.getElementById("sensor-data-title").innerHTML =
    '<span class="icon">📊</span>Sensor Data';
  document.getElementById("sensor-data-header").textContent = "Data";
  document.getElementById("sensor-value-header").textContent = "Value";
  document.getElementById("soil-moisture-label").textContent = "Soil Moisture";
  document.getElementById("temperature-label").textContent = "Temperature";
  document.getElementById("weather-label").textContent = "Weather";
});

function toggleFaq(element) {
  const answer = element.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// تغيير اللغة
function setLanguage(lang) {
  if (lang === "ar") {
    document.body.dir = "rtl";
    alert("تم تغيير اللغة إلى العربية.");
  } else {
    document.body.dir = "ltr";
    alert("Language changed to English.");
  }
}

// الوضع الليلي
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// تغيير ألوان الأيقونات
function changeIconColor(color) {
  document.querySelectorAll("i").forEach((icon) => {
    icon.style.color = color;
  });
}

// آلة حاسبة
function calculate(event) {
  event.preventDefault();
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  document.getElementById("calc-result").textContent = `النتيجة: ${result}`;
}

// الأسئلة الشائعة
function toggleFaq(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
