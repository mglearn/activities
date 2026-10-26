/* Digital Math Tools — shared catalog.
   ---------------------------------------------------------------------------
   One data source for the whole library, consumed by both the top-level hub
   (index.html, BASE = "") and each collection page (e.g. pkk/index.html,
   BASE = "../"). Tool/collection `href` values are RELATIVE TO THIS FILE'S
   FOLDER (the digitalmathtools root); each page prepends its own BASE.

   To add a grade band later (K–2, 3–5, 6–8, 9–12):
     1. Give the band's collection a folder + its own index.html.
     2. Add a `collections[]` entry (set bandId) and its `tools[]`.
     3. Nothing else — the hub and search pick it up automatically.

   English is the source language; the other six widen access.               */
window.MATHTOOLS = (function () {
  "use strict";

  // ---- Grade bands (drives the hub's "Browse by grade band" section) -------
  var bands = [
    { id: "prek-k", order: 1, label: { en: "PreK–K", es: "PreK–Kínder", vi: "Mầm non–Mẫu giáo", ar: "ما قبل الروضة–الروضة", hi: "प्री-के–किंडर", ur: "پری کے–کنڈر", zh: "学前–幼儿园" } },
    { id: "k-2",   order: 2, label: { en: "K–2", es: "K–2", vi: "K–2", ar: "K–2", hi: "K–2", ur: "K–2", zh: "K–2" } },
    { id: "3-5",   order: 3, label: { en: "3–5", es: "3–5", vi: "3–5", ar: "3–5", hi: "3–5", ur: "3–5", zh: "3–5" } },
    { id: "6-8",   order: 4, label: { en: "6–8", es: "6–8", vi: "6–8", ar: "6–8", hi: "6–8", ur: "6–8", zh: "6–8" } },
    { id: "9-12",  order: 5, label: { en: "9–12", es: "9–12", vi: "9–12", ar: "9–12", hi: "9–12", ur: "9–12", zh: "9–12" } }
  ];

  // ---- Collections (a themed set of tools for a band) ----------------------
  var collections = [
    {
      id: "pkk", bandId: "prek-k", icon: "🧸", accent: "#5b3fa5", href: "pkk/index.html",
      name: { en: "PreKindergarten & Kindergarten", es: "Prekínder y Kínder", vi: "Mầm non & Mẫu giáo", ar: "ما قبل الروضة والروضة", hi: "प्री-किंडरगार्टन और किंडरगार्टन", ur: "پری کنڈرگارٹن اور کنڈرگارٹن", zh: "学前班与幼儿园" },
      desc: {
        en: "Five touch-friendly math tools for our youngest learners — counting, adding, shapes, measuring, and sorting.",
        es: "Cinco herramientas matemáticas táctiles para los más pequeños: contar, sumar, figuras, medir y clasificar.",
        vi: "Năm công cụ toán cảm ứng cho các bé nhỏ nhất — đếm, cộng, hình dạng, đo lường và phân loại.",
        ar: "خمس أدوات رياضيات تعمل باللمس لأصغر المتعلمين — العدّ والجمع والأشكال والقياس والفرز.",
        hi: "हमारे सबसे छोटे शिक्षार्थियों के लिए पाँच टच-अनुकूल गणित उपकरण — गिनना, जोड़ना, आकृतियाँ, मापना और छाँटना।",
        ur: "ہمارے سب سے چھوٹے سیکھنے والوں کے لیے پانچ ٹچ دوست ریاضی اوزار — گننا، جمع، اشکال، پیمائش اور چھانٹنا۔",
        zh: "为最年幼的学习者设计的五个触控友好的数学工具——数数、加法、图形、测量和分类。"
      }
    },
    {
      id: "k2", bandId: "k-2", icon: "🎒", accent: "#1f8a5b", href: "k2/index.html",
      name: { en: "Grades K–2", es: "Grados K–2", vi: "Lớp K–2", ar: "الصفوف K–2", hi: "कक्षा K–2", ur: "جماعت K–2", zh: "幼儿园至二年级" },
      desc: {
        en: "Five touch-friendly math tools for early grades — place value, addition and subtraction, shapes and fractions, time and money, measuring and graphing.",
        es: "Cinco herramientas matemáticas táctiles para los primeros grados: valor posicional, suma y resta, figuras y fracciones, tiempo y dinero, medición y gráficas.",
        vi: "Năm công cụ toán cảm ứng cho các lớp đầu cấp — giá trị theo vị trí, cộng và trừ, hình dạng và phân số, thời gian và tiền, đo lường và biểu đồ.",
        ar: "خمس أدوات رياضيات تعمل باللمس للصفوف الأولى — القيمة المكانية، والجمع والطرح، والأشكال والكسور، والوقت والنقود، والقياس والرسوم البيانية.",
        hi: "शुरुआती कक्षाओं के लिए पाँच टच-अनुकूल गणित उपकरण — स्थानीय मान, जोड़ और घटाव, आकृतियाँ और भिन्न, समय और पैसा, मापना और ग्राफ़।",
        ur: "ابتدائی جماعتوں کے لیے پانچ ٹچ دوست ریاضی اوزار — مقامی قدر، جمع اور تفریق، اشکال اور کسور، وقت اور پیسہ، پیمائش اور گراف۔",
        zh: "为低年级设计的五个触控友好的数学工具——位值、加减法、图形与分数、时间与钱币、测量与图表。"
      }
    }
,
    {
      id: "g35", bandId: "3-5", icon: "🧮", accent: "#2c6fbb", href: "g35/index.html",
      name: { en: "Grades 3–5", es: "Grados 3–5", vi: "Lớp 3–5", ar: "الصفوف 3–5", hi: "कक्षा 3–5", ur: "جماعت 3–5", zh: "三至五年级" },
      desc: {
        en: "Interactive math tools for upper elementary — fractions, multiplication and division, decimals and place value, area and volume, angles and the coordinate plane.",
        es: "Herramientas matemáticas interactivas para primaria alta: fracciones, multiplicación y división, decimales y valor posicional, área y volumen, ángulos y el plano de coordenadas.",
        vi: "Công cụ toán tương tác cho cuối tiểu học — phân số, nhân và chia, số thập phân và giá trị theo hàng, diện tích và thể tích, góc và mặt phẳng tọa độ.",
        ar: "أدوات رياضيات تفاعلية للمرحلة الابتدائية العليا — الكسور، والضرب والقسمة، والكسور العشرية والقيمة المكانية، والمساحة والحجم، والزوايا والمستوى الإحداثي.",
        hi: "उच्च प्राथमिक कक्षाओं के लिए इंटरैक्टिव गणित उपकरण — भिन्न, गुणा और भाग, दशमलव और स्थानीय मान, क्षेत्रफल और आयतन, कोण और निर्देशांक तल।",
        ur: "اعلیٰ پرائمری کے لیے انٹرایکٹو ریاضی اوزار — کسور، ضرب اور تقسیم، اعشاریہ اور مقامی قدر، رقبہ اور حجم، زاویے اور محددی سطح۔",
        zh: "为小学高年级设计的互动数学工具——分数、乘除法、小数与位值、面积与体积、角与坐标平面。"
      }
    }
  ];

  // ---- Shared tag vocabulary (English key -> per-language label) ------------
  var TAG = {
    "Counting":{en:"Counting",es:"Contar",vi:"Đếm",ar:"العدّ",hi:"गिनती",ur:"گنتی",zh:"数数"},
    "Cardinality":{en:"Cardinality",es:"Cardinalidad",vi:"Số lượng",ar:"العدد الكلي",hi:"संख्या-बोध",ur:"تعداد",zh:"基数"},
    "Subitizing":{en:"Subitizing",es:"Subitación",vi:"Nhận số nhanh",ar:"التعرف السريع",hi:"त्वरित गणना",ur:"فوری شناخت",zh:"快速识数"},
    "Compare":{en:"Compare",es:"Comparar",vi:"So sánh",ar:"المقارنة",hi:"तुलना",ur:"موازنہ",zh:"比较"},
    "Addition":{en:"Addition",es:"Suma",vi:"Phép cộng",ar:"الجمع",hi:"जोड़",ur:"جمع",zh:"加法"},
    "Subtraction":{en:"Subtraction",es:"Resta",vi:"Phép trừ",ar:"الطرح",hi:"घटाव",ur:"تفریق",zh:"减法"},
    "Story problems":{en:"Story problems",es:"Problemas narrados",vi:"Bài toán đố",ar:"مسائل قصصية",hi:"कहानी सवाल",ur:"کہانی کے سوال",zh:"情境题"},
    "Compose":{en:"Compose",es:"Componer",vi:"Ghép số",ar:"التركيب",hi:"रचना",ur:"ترکیب",zh:"组合"},
    "2-D shapes":{en:"2-D shapes",es:"Figuras 2-D",vi:"Hình 2-D",ar:"أشكال ثنائية",hi:"2-D आकृतियाँ",ur:"2-D اشکال",zh:"二维图形"},
    "3-D solids":{en:"3-D solids",es:"Cuerpos 3-D",vi:"Khối 3-D",ar:"مجسمات ثلاثية",hi:"3-D ठोस",ur:"3-D ٹھوس",zh:"三维立体"},
    "Attributes":{en:"Attributes",es:"Atributos",vi:"Thuộc tính",ar:"الخصائص",hi:"गुण",ur:"خصوصیات",zh:"属性"},
    "Length":{en:"Length",es:"Longitud",vi:"Chiều dài",ar:"الطول",hi:"लंबाई",ur:"لمبائی",zh:"长度"},
    "Height":{en:"Height",es:"Altura",vi:"Chiều cao",ar:"الارتفاع",hi:"ऊँचाई",ur:"اونچائی",zh:"高度"},
    "Weight":{en:"Weight",es:"Peso",vi:"Cân nặng",ar:"الوزن",hi:"वज़न",ur:"وزن",zh:"重量"},
    "Capacity":{en:"Capacity",es:"Capacidad",vi:"Dung tích",ar:"السعة",hi:"धारिता",ur:"گنجائش",zh:"容量"},
    "Sort":{en:"Sort",es:"Clasificar",vi:"Phân loại",ar:"الفرز",hi:"छाँटना",ur:"چھانٹنا",zh:"分类"},
    "Classify":{en:"Classify",es:"Categorizar",vi:"Xếp nhóm",ar:"التصنيف",hi:"वर्गीकरण",ur:"درجہ بندی",zh:"归类"},
    "Data":{en:"Data",es:"Datos",vi:"Dữ liệu",ar:"البيانات",hi:"आँकड़े",ur:"ڈیٹا",zh:"数据"},
    "Picture graph":{en:"Picture graph",es:"Pictograma",vi:"Biểu đồ tranh",ar:"رسم بالصور",hi:"चित्र ग्राफ़",ur:"تصویری گراف",zh:"图画图表"},
    "Time":{en:"Time",es:"La hora",vi:"Thời gian",ar:"الوقت",hi:"समय",ur:"وقت",zh:"时间"},
    "Money":{en:"Money",es:"Dinero",vi:"Tiền",ar:"النقود",hi:"पैसे",ur:"رقم",zh:"钱币"},
    "Bar graph":{en:"Bar graph",es:"Gráfica de barras",vi:"Biểu đồ cột",ar:"رسم بالأعمدة",hi:"बार ग्राफ़",ur:"بار گراف",zh:"条形统计图"},
    "Line plot":{en:"Line plot",es:"Diagrama de puntos",vi:"Biểu đồ chấm",ar:"تمثيل بالنقاط",hi:"लाइन प्लॉट",ur:"لائن پلاٹ",zh:"点图"},
    "Place value":{en:"Place value",es:"Valor posicional",vi:"Giá trị theo hàng",ar:"القيمة المكانية",hi:"स्थानीय मान",ur:"مقامی قدر",zh:"位值"},
    "Fractions":{en:"Fractions",es:"Fracciones",vi:"Phân số",ar:"الكسور",hi:"भिन्न",ur:"کسور",zh:"分数"},
    "Fact families":{en:"Fact families",es:"Familias de operaciones",vi:"Gia đình phép tính",ar:"عائلات الحقائق",hi:"तथ्य परिवार",ur:"حقائق کے خاندان",zh:"算式家族"},
    "Area":{en:"Area",es:"Área",vi:"Diện tích",ar:"المساحة",hi:"क्षेत्रफल",ur:"رقبہ",zh:"面积"},
    "Perimeter":{en:"Perimeter",es:"Perímetro",vi:"Chu vi",ar:"المحيط",hi:"परिमाप",ur:"احاطہ",zh:"周长"},
    "Volume":{en:"Volume",es:"Volumen",vi:"Thể tích",ar:"الحجم",hi:"आयतन",ur:"حجم",zh:"体积"},
    "Conversions":{en:"Conversions",es:"Conversiones",vi:"Đổi đơn vị",ar:"تحويل الوحدات",hi:"इकाई रूपांतरण",ur:"اکائیوں کی تبدیلی",zh:"单位换算"},
    "Multiplication":{en:"Multiplication",es:"Multiplicación",vi:"Phép nhân",ar:"الضرب",hi:"गुणा",ur:"ضرب",zh:"乘法"},
    "Division":{en:"Division",es:"División",vi:"Phép chia",ar:"القسمة",hi:"भाग",ur:"تقسیم",zh:"除法"}
  };

  // ---- Tools (href relative to the digitalmathtools root) ------------------
  var tools = [
    { id:"count-the-critters", collection:"pkk", bandId:"prek-k", icon:"🐾", accent:"#e8632c",
      title:"Count the Critters", href:"pkk/count-the-critters/index.html",
      tags:["Counting","Cardinality","Subitizing","Compare"],
      kw:"count counting one-to-one correspondence numeral subitize subitizing quantity more fewer same ten-frame animals critters compare how many contar figuras 数数",
      desc:{
        en:"Count animals, match numerals to quantities, subitize small sets, and compare two groups with more, fewer, and same.",
        es:"Cuenta animales, relaciona números con cantidades, reconoce grupos pequeños al instante y compara dos grupos con más, menos e igual.",
        vi:"Đếm con vật, ghép chữ số với số lượng, nhận nhanh nhóm nhỏ, và so sánh hai nhóm với nhiều hơn, ít hơn và bằng nhau.",
        ar:"عُدّ الحيوانات، وطابِق الأرقام مع الكميات، وتعرّف بسرعة على المجموعات الصغيرة، وقارن بين مجموعتين بأكثر وأقل وتساوٍ.",
        hi:"जानवर गिनें, अंकों को मात्रा से मिलाएँ, छोटे समूहों को झट से पहचानें, और दो समूहों की तुलना अधिक, कम और बराबर से करें।",
        ur:"جانور گنیں، اعداد کو مقدار سے ملائیں، چھوٹے گروہوں کو فوراً پہچانیں، اور دو گروہوں کا موازنہ زیادہ، کم اور برابر سے کریں۔",
        zh:"数动物、把数字和数量配对、快速识别小组数量，并用更多、更少和一样多来比较两组。"} },
    { id:"snack-shop-stories", collection:"pkk", bandId:"prek-k", icon:"🍎", accent:"#c0392b",
      title:"Snack Shop Stories", href:"pkk/snack-shop-stories/index.html",
      tags:["Addition","Subtraction","Story problems","Compose"],
      kw:"add addition join joining subtract subtraction separate take away compose decompose make ten story mat snack sum difference suma resta 加法 减法",
      desc:{
        en:"Model addition as joining groups and subtraction as separating groups with story mats, objects, and spoken math stories.",
        es:"Representa la suma como unir grupos y la resta como separar grupos con tapetes de cuentos, objetos e historias matemáticas habladas.",
        vi:"Mô hình phép cộng là gộp nhóm và phép trừ là tách nhóm bằng thảm truyện, đồ vật và câu chuyện toán được đọc lên.",
        ar:"مثّل الجمع كضمّ المجموعات والطرح كفصلها باستخدام حصائر القصص والأشياء وقصص رياضية منطوقة.",
        hi:"कहानी मैट, वस्तुओं और बोली गई गणित कहानियों से जोड़ को समूह मिलाना और घटाव को समूह अलग करना दिखाएँ।",
        ur:"کہانی میٹ، اشیاء اور بولی جانے والی ریاضی کہانیوں سے جمع کو گروہ ملانا اور تفریق کو گروہ الگ کرنا ظاہر کریں۔",
        zh:"用故事垫、实物和口述数学故事，把加法演示为把两组合起来、把减法演示为从一组中拿走。"} },
    { id:"shape-builder-town", collection:"pkk", bandId:"prek-k", icon:"🔷", accent:"#2980b9",
      title:"Shape Builder Town", href:"pkk/shape-builder-town/index.html",
      tags:["2-D shapes","3-D solids","Attributes","Compose"],
      kw:"shape shapes circle triangle square rectangle hexagon solid cube sphere cone cylinder attribute sides corners position above below beside build compose geometry figuras 图形",
      desc:{
        en:"Identify, describe, compare, move, and combine 2-D shapes, and recognize 3-D solids while building houses, robots, and more.",
        es:"Identifica, describe, compara, mueve y combina figuras 2-D, y reconoce cuerpos 3-D mientras construyes casas, robots y más.",
        vi:"Nhận biết, mô tả, so sánh, di chuyển và ghép các hình 2-D, và nhận ra các khối 3-D trong khi xây nhà, rô-bốt và hơn thế nữa.",
        ar:"تعرّف على الأشكال ثنائية الأبعاد وصِفها وقارنها وحرّكها وادمجها، وميّز المجسمات ثلاثية الأبعاد أثناء بناء المنازل والروبوتات والمزيد.",
        hi:"2-D आकृतियों को पहचानें, बताएँ, तुलना करें, हिलाएँ और जोड़ें, और घर, रोबोट आदि बनाते हुए 3-D ठोस पहचानें।",
        ur:"2-D اشکال کو پہچانیں، بیان کریں، موازنہ کریں، حرکت دیں اور ملائیں، اور گھر، روبوٹ وغیرہ بناتے ہوئے 3-D ٹھوس پہچانیں۔",
        zh:"识别、描述、比较、移动并组合二维图形，在搭建房子、机器人等的同时认识三维立体。"} },
    { id:"playground-measurement-quest", collection:"pkk", bandId:"prek-k", icon:"📏", accent:"#16a085",
      title:"Playground Measurement Quest", href:"pkk/playground-measurement-quest/index.html",
      tags:["Length","Height","Weight","Capacity"],
      kw:"measure measurement length longer shorter taller height weight heavier lighter capacity holds more less balance scale cubes nonstandard units compare medir 测量",
      desc:{
        en:"Compare length, height, weight, and capacity; predict, measure with nonstandard units, and try it with real classroom objects.",
        es:"Compara longitud, altura, peso y capacidad; predice, mide con unidades no convencionales y pruébalo con objetos reales del salón.",
        vi:"So sánh chiều dài, chiều cao, cân nặng và dung tích; dự đoán, đo bằng đơn vị không chuẩn, và thử với đồ vật thật trong lớp.",
        ar:"قارن الطول والارتفاع والوزن والسعة؛ توقّع وقِس بوحدات غير معيارية وجرّب ذلك بأشياء حقيقية في الصف.",
        hi:"लंबाई, ऊँचाई, वज़न और धारिता की तुलना करें; अनुमान लगाएँ, अमानक इकाइयों से मापें, और कक्षा की असली चीज़ों से आज़माएँ।",
        ur:"لمبائی، اونچائی، وزن اور گنجائش کا موازنہ کریں؛ اندازہ لگائیں، غیر معیاری اکائیوں سے ناپیں، اور کلاس کی حقیقی چیزوں سے آزمائیں۔",
        zh:"比较长度、高度、重量和容量；预测、用非标准单位测量，并用教室里真实的物品试一试。"} },
    { id:"pet-parade-sort-graph", collection:"pkk", bandId:"prek-k", icon:"📊", accent:"#8e44ad",
      title:"Pet Parade Sort and Graph", href:"pkk/pet-parade-sort-graph/index.html",
      tags:["Sort","Classify","Data","Picture graph"],
      kw:"sort sorting classify category attribute rule count graph picture graph data more fewer equal compare pet parade clasificar 分类 图表",
      desc:{
        en:"Sort objects by attribute, explain the rule, count categories, build a picture graph, and answer questions about the data.",
        es:"Clasifica objetos por atributo, explica la regla, cuenta categorías, crea un pictograma y responde preguntas sobre los datos.",
        vi:"Phân loại đồ vật theo thuộc tính, giải thích quy tắc, đếm các nhóm, lập biểu đồ tranh, và trả lời câu hỏi về dữ liệu.",
        ar:"افرز الأشياء حسب الخاصية، واشرح القاعدة، وعُدّ الفئات، وأنشئ رسمًا بالصور، وأجب عن أسئلة حول البيانات.",
        hi:"वस्तुओं को गुण के अनुसार छाँटें, नियम बताएँ, श्रेणियाँ गिनें, चित्र ग्राफ़ बनाएँ, और आँकड़ों पर सवालों के जवाब दें।",
        ur:"اشیاء کو خصوصیت کے مطابق چھانٹیں، اصول بتائیں، اقسام گنیں، تصویری گراف بنائیں، اور ڈیٹا کے بارے میں سوالوں کے جواب دیں۔",
        zh:"按属性给物品分类、说明规则、数各类别、制作图画图表，并回答关于数据的问题。"} },
    { id:"clock-and-coin-shop", collection:"k2", bandId:"k-2", icon:"🕒", accent:"#16a085",
      title:"Clock & Coin Shop", href:"k2/clock-and-coin-shop/index.html",
      tags:["Time","Money","Counting","Compare"],
      kw:"time clock analog digital hour half hour minutes a.m. p.m. tell time money coins penny nickel dime quarter cents cent symbol count coins skip count shop pay purse reloj hora monedas dinero 时钟 硬币",
      desc:{
        en:"Read and set analog clocks to the hour, half hour, and 5 minutes, tell a.m. from p.m., identify U.S. coins, count collections, and pay exact prices in a play shop.",
        es:"Lee y pon la hora en relojes de manecillas (en punto, y media y cada 5 minutos), distingue a. m. de p. m., identifica monedas de EE. UU., cuenta colecciones y paga precios exactos en una tienda.",
        vi:"Đọc và chỉnh đồng hồ kim theo giờ đúng, giờ rưỡi và mỗi 5 phút, phân biệt SA và CH, nhận biết tiền xu Mỹ, đếm nhóm đồng xu và trả đúng giá trong cửa hàng.",
        ar:"اقرأ الساعة واضبطها على الساعة الكاملة ونصف الساعة وكل 5 دقائق، وميّز صباحًا من مساءً، وتعرّف على القطع النقدية الأمريكية، وعُدّ مجموعات القطع، وادفع السعر بالضبط في متجر.",
        hi:"घड़ी को पूरे घंटे, साढ़े और हर 5 मिनट पर पढ़ें और मिलाएँ, पूर्वाह्न और अपराह्न पहचानें, अमेरिकी सिक्के पहचानें, सिक्कों को गिनें और दुकान में ठीक कीमत चुकाएँ।",
        ur:"گھڑی کو پورے گھنٹے، ساڑھے اور ہر 5 منٹ پر پڑھیں اور ملائیں، قبل دوپہر اور بعد دوپہر پہچانیں، امریکی سکے پہچانیں، سکوں کو گنیں اور دکان میں ٹھیک قیمت ادا کریں۔",
        zh:"读钟表并拨到整点、半点和每5分钟，分清上午和下午，认识美国硬币，数一组硬币，并在商店里正好付钱。"} },
    { id:"garden-measure-graph-lab", collection:"k2", bandId:"k-2", icon:"🌻", accent:"#8e44ad",
      title:"Garden Measure & Graph Lab", href:"k2/garden-measure-graph-lab/index.html",
      tags:["Length","Compare","Data","Picture graph","Bar graph","Line plot"],
      kw:"measure measurement length units ruler inch inches centimeter cm gaps overlaps unit size estimate longer shorter order data tally sort picture graph pictograph bar graph line plot how many more fewer total garden medir regla gráfica 测量 图表",
      desc:{
        en:"Measure garden objects with units and rulers, see why smaller units give bigger numbers, then sort data and build and read picture graphs, bar graphs, and line plots.",
        es:"Mide objetos del jardín con unidades y reglas, descubre por qué las unidades más pequeñas dan números más grandes, y luego clasifica datos y crea y lee pictogramas, gráficas de barras y diagramas de puntos.",
        vi:"Đo đồ vật trong vườn bằng đơn vị và thước, hiểu vì sao đơn vị nhỏ hơn cho số lớn hơn, rồi phân loại dữ liệu, lập và đọc biểu đồ tranh, biểu đồ cột và biểu đồ chấm.",
        ar:"قِس أشياء الحديقة بالوحدات والمساطر، واكتشف لماذا تعطي الوحدات الأصغر أعداداً أكبر، ثم صنّف البيانات وابنِ واقرأ الرسوم بالصور والأعمدة والتمثيل بالنقاط.",
        hi:"बगीचे की चीज़ों को इकाइयों और स्केल से मापें, समझें कि छोटी इकाई से बड़ी संख्या क्यों आती है, फिर आँकड़े छाँटें और चित्र ग्राफ़, बार ग्राफ़ और लाइन प्लॉट बनाएँ और पढ़ें।",
        ur:"باغ کی چیزوں کو اکائیوں اور پیمانے سے ناپیں، سمجھیں کہ چھوٹی اکائی سے بڑا عدد کیوں آتا ہے، پھر ڈیٹا چھانٹیں اور تصویری گراف، بار گراف اور لائن پلاٹ بنائیں اور پڑھیں۔",
        zh:"用单位和尺子测量花园里的物品，理解为什么单位越小数越大，再分类数据，制作并阅读象形统计图、条形统计图和点图。"} },
    { id:"base-ten-builders", collection:"k2", bandId:"k-2", icon:"🧱", accent:"#d35400",
      title:"Base-Ten Builders", href:"k2/base-ten-builders/index.html",
      tags:["Place value","Counting","Compare","Compose"],
      kw:"place value base ten blocks hundreds tens ones flat rod cube regroup trade expanded form compare greater less equal 10 more 10 less 100 more hundred chart skip count number line valor posicional decenas unidades 位值",
      desc:{
        en:"Build, read, and compare numbers to 1,000 with base-ten blocks, trade 10 ones for a ten, find 10 more and 10 less, and skip count on a number line.",
        es:"Construye, lee y compara números hasta 1,000 con bloques de base diez, cambia 10 unidades por una decena, encuentra 10 más y 10 menos, y cuenta salteado en la recta numérica.",
        vi:"Xây, đọc và so sánh các số đến 1.000 bằng khối hệ mười, đổi 10 đơn vị lấy 1 chục, tìm số thêm 10 và bớt 10, và đếm cách quãng trên tia số.",
        ar:"ابنِ الأعداد حتى 1000 واقرأها وقارن بينها بمكعبات النظام العشري، وبدّل 10 وحدات بعشرة، وجِد ما يزيد 10 وما يقل 10، وعُدّ بالقفز على خط الأعداد.",
        hi:"दस-आधार ब्लॉकों से 1,000 तक की संख्याएँ बनाएँ, पढ़ें और तुलना करें, 10 इकाइयों के बदले 1 दहाई लें, 10 ज़्यादा और 10 कम खोजें, और संख्या रेखा पर उछल गिनती करें।",
        ur:"دس کی بنیاد کے بلاکوں سے 1,000 تک کے عدد بنائیں، پڑھیں اور موازنہ کریں، 10 اکائیوں کے بدلے 1 دہائی لیں، 10 زیادہ اور 10 کم تلاش کریں، اور عددی لکیر پر چھلانگ گنتی کریں۔",
        zh:"用十进制积木搭出、读出并比较1000以内的数，用10个一换1个十，找出多10和少10的数，并在数轴上跳着数。"} },
    { id:"pizza-party-shapes", collection:"k2", bandId:"k-2", icon:"🍕", accent:"#2980b9",
      title:"Pizza Party Shapes", href:"k2/pizza-party-shapes/index.html",
      tags:["2-D shapes","3-D solids","Attributes","Sort","Compose","Fractions"],
      kw:"shape shapes geometry attribute sides vertices faces edges rhombus trapezoid pentagon hexagon octagon cube prism sphere cone cylinder pattern blocks compose fair shares equal parts half halves third thirds fourth fourths quarter eighth fraction pizza sandwich brownie figuras fracciones mitad 图形 分数",
      desc:{
        en:"Sort 2-D shapes by sides and vertices, investigate 3-D solids, fill puzzles with pattern blocks, and cut pizzas and sandwiches into fair shares.",
        es:"Clasifica figuras 2-D por lados y vértices, investiga cuerpos 3-D, completa rompecabezas con bloques y corta pizzas y sándwiches en partes iguales.",
        vi:"Phân loại hình 2-D theo cạnh và đỉnh, khám phá khối 3-D, ghép hình bằng các khối mẫu, và chia đều bánh pizza, bánh mì kẹp.",
        ar:"افرز الأشكال ثنائية الأبعاد حسب الأضلاع والرؤوس، واستكشف المجسمات، واملأ الألغاز بالقطع، وقسّم البيتزا والشطائر إلى حصص متساوية.",
        hi:"2-D आकृतियों को भुजाओं और शीर्षों से छाँटें, 3-D ठोस जाँचें, ब्लॉकों से पहेलियाँ भरें, और पिज़्ज़ा व सैंडविच को बराबर हिस्सों में काटें।",
        ur:"2-D اشکال کو اطراف اور راس کے لحاظ سے چھانٹیں، 3-D ٹھوس دریافت کریں، بلاکس سے پہیلیاں بھریں، اور پیزا و سینڈوچ کو برابر حصوں میں کاٹیں۔",
        zh:"按边和顶点给二维图形分类，探索立体图形，用图形积木拼图，并把披萨和三明治平均分。"} },
    { id:"fact-family-fair", collection:"k2", bandId:"k-2", icon:"🎡", accent:"#c0392b",
      title:"Fact Family Fair", href:"k2/fact-family-fair/index.html",
      tags:["Addition","Subtraction","Fact families","Story problems"],
      kw:"addition subtraction fact family fluency within 20 within 100 ten frame make ten doubles near doubles number line hops missing number unknown addend true false equal sign bar model word problems join separate compare part-part-whole suma resta familia de operaciones 加法 减法",
      desc:{
        en:"Build fluency within 20 and 100 with ten frames, number line hops, missing numbers, true/false equations, fact families, and story problems with bar models.",
        es:"Desarrolla fluidez hasta 20 y 100 con marcos de diez, saltos en la recta numérica, números que faltan, igualdades verdaderas o falsas, familias de operaciones y problemas con modelos de barras.",
        vi:"Luyện tính nhẩm trong phạm vi 20 và 100 với khung mười, nhảy trên tia số, số còn thiếu, đẳng thức đúng sai, gia đình phép tính và bài toán đố có sơ đồ đoạn thẳng.",
        ar:"نمِّ الطلاقة في الجمع والطرح ضمن 20 و100 بالإطارات العشرية والقفز على خط الأعداد والأعداد المفقودة والمعادلات الصحيحة والخاطئة وعائلات الحقائق والمسائل القصصية بنماذج الأشرطة.",
        hi:"दस-फ्रेम, संख्या रेखा पर छलांग, छूटी हुई संख्या, सही-गलत समीकरण, तथ्य परिवार और पट्टी मॉडल वाले कहानी सवालों से 20 और 100 तक जोड़-घटाव में प्रवाह बनाएँ।",
        ur:"دس خانوں کے فریم، عددی لکیر پر چھلانگوں، گمشدہ اعداد، درست اور غلط مساواتوں، حقائق کے خاندانوں اور پٹی ماڈل والے کہانی کے سوالوں سے 20 اور 100 تک جمع و تفریق میں روانی بڑھائیں۔",
        zh:"用十格框、数轴跳跃、找缺少的数、判断等式对错、算式家族和线段图故事题，练习20以内和100以内的加减法。"} },
    { id:"area-volume-builders", collection:"g35", bandId:"3-5", icon:"📐", accent:"#16a085",
      title:"Area & Volume Builders", href:"g35/area-volume-builders/index.html",
      tags:["Area","Perimeter","Volume","Conversions","Story problems","Time"],
      kw:"area perimeter volume unit square tiling rows columns multiply composite rectilinear decompose missing side same area different perimeter unit cube layers base rectangular prism V=lwh V=Bh convert conversion measurement feet inches yards pounds ounces meters centimeters kilograms grams liters milliliters elapsed time minutes área perímetro volumen 面积 周长 体积",
      desc:{
        en:"Tile rectangles to find area, walk the sides for perimeter, pack boxes with unit cubes for volume, convert units with tables, and solve measurement stories.",
        es:"Cubre rectángulos para hallar el área, recorre los lados para el perímetro, llena cajas con cubos para el volumen, convierte unidades con tablas y resuelve problemas de medición.",
        vi:"Lát ô vuông để tìm diện tích, đi quanh các cạnh để tìm chu vi, xếp khối lập phương vào hộp để tìm thể tích, đổi đơn vị bằng bảng và giải bài toán đo lường.",
        ar:"بلّط المستطيلات لإيجاد المساحة، وامشِ حول الأضلاع لإيجاد المحيط، واملأ الصناديق بمكعبات الوحدة لإيجاد الحجم، وحوّل الوحدات بالجداول، وحلّ مسائل القياس.",
        hi:"क्षेत्रफल के लिए आयतों पर टाइल लगाएँ, परिमाप के लिए भुजाओं पर चलें, आयतन के लिए डिब्बों में इकाई घन भरें, तालिकाओं से इकाइयाँ बदलें और माप की कहानियाँ हल करें।",
        ur:"رقبہ معلوم کرنے کے لیے مستطیلوں پر ٹائلیں لگائیں، احاطے کے لیے اضلاع پر چلیں، حجم کے لیے ڈبوں میں اکائی مکعب بھریں، جدولوں سے اکائیاں بدلیں اور پیمائش کے سوال حل کریں۔",
        zh:"铺方格求面积，沿边走一圈求周长，用单位小正方体装箱求体积，用表格换算单位，并解决测量问题。"} },
    { id:"fraction-forge", collection:"g35", bandId:"3-5", icon:"🧪", accent:"#8e44ad",
      title:"Fraction Forge", href:"g35/fraction-forge/index.html",
      tags:["Fractions","Compare","Addition","Subtraction","Story problems","Compose"],
      kw:"fractions fraction strips area model circle set unit fraction numerator denominator number line mixed numbers improper equivalent fractions compare benchmark half greater less equal add subtract like unlike common denominator decompose multiply fraction by whole number fraction of a set divide unit fraction word problems fracciones recta numérica fracciones equivalentes 分数",
      desc:{
        en:"Build and name fractions with strips, circles, and sets, place them on a number line, find equivalent fractions, compare, add and subtract, and solve fraction story problems.",
        es:"Forma y nombra fracciones con tiras, círculos y conjuntos, ubícalas en la recta numérica, encuentra fracciones equivalentes, compara, suma y resta, y resuelve problemas con fracciones.",
        vi:"Tạo và gọi tên phân số bằng thanh, hình tròn và nhóm đồ vật, đặt phân số trên tia số, tìm phân số bằng nhau, so sánh, cộng trừ và giải bài toán đố về phân số.",
        ar:"كوّن الكسور وسمِّها باستخدام الأشرطة والدوائر والمجموعات، وضعها على خط الأعداد، وجِد الكسور المتكافئة، وقارن، واجمع واطرح، وحُلّ مسائل قصصية عن الكسور.",
        hi:"पट्टियों, वृत्तों और समूहों से भिन्न बनाएँ और पहचानें, उन्हें संख्या रेखा पर रखें, तुल्य भिन्न खोजें, तुलना करें, जोड़ें-घटाएँ और भिन्न की कहानी वाले सवाल हल करें।",
        ur:"پٹیوں، دائروں اور گروپوں سے کسور بنائیں اور پہچانیں، انہیں عددی خط پر رکھیں، مساوی کسور تلاش کریں، موازنہ کریں، جمع اور تفریق کریں، اور کسور کے کہانی والے سوال حل کریں۔",
        zh:"用分数条、圆形和集合来拼出并认读分数，在数轴上标出分数，找等值分数，比较大小，做加减法，并解答分数应用题。"} },
    { id:"array-architect", collection:"g35", bandId:"3-5", icon:"🏗️", accent:"#c0392b",
      title:"Array Architect", href:"g35/array-architect/index.html",
      tags:["Multiplication","Division","Fact families","Story problems"],
      kw:"multiply multiplication divide division array arrays equal groups skip count commutative distributive property area model partial products partial quotients remainder interpret remainders fact family missing factor factors multiples prime composite two-step multi-step estimate reasonableness letter unknown multiplicación división arreglo 乘法 除法",
      desc:{
        en:"Build arrays and equal groups, split area models into partial products, divide with partial quotients and interpret remainders, practice fact families, factors and primes, and solve multi-step stories.",
        es:"Construye arreglos y grupos iguales, divide modelos de área en productos parciales, divide con cocientes parciales e interpreta residuos, practica familias de operaciones, factores y números primos, y resuelve problemas de varios pasos.",
        vi:"Xây mảng và nhóm bằng nhau, tách mô hình diện tích thành tích riêng, chia bằng thương riêng phần và hiểu số dư, luyện gia đình phép tính, ước và số nguyên tố, và giải bài toán nhiều bước.",
        ar:"ابنِ المصفوفات والمجموعات المتساوية، وقسّم نماذج المساحة إلى نواتج جزئية، واقسم بنواتج القسمة الجزئية وفسّر الباقي، وتدرّب على عائلات الحقائق والعوامل والأعداد الأولية، وحُلّ قصصًا متعددة الخطوات.",
        hi:"सरणियाँ और बराबर समूह बनाएँ, क्षेत्रफल मॉडल को आंशिक गुणनफलों में बाँटें, आंशिक भागफलों से भाग करें और शेषफल का अर्थ समझें, तथ्य परिवार, गुणनखंड और अभाज्य संख्याओं का अभ्यास करें, और बहु-चरण कहानियाँ हल करें।",
        ur:"صف بندیاں اور برابر گروہ بنائیں، رقبے کے ماڈل کو جزوی حاصلِ ضرب میں تقسیم کریں، جزوی حاصلِ قسمت سے تقسیم کریں اور باقی کو سمجھیں، حقائق کے خاندان، اجزائے ضربی اور مفرد اعداد کی مشق کریں، اور کئی مراحل والی کہانیاں حل کریں۔",
        zh:"搭建阵列和等分组，把面积模型拆成部分积，用部分商做除法并理解余数，练习算式家族、因数和质数，并解答多步应用题。"} }
  ];

  return { bands: bands, collections: collections, tools: tools, TAG: TAG };
})();
