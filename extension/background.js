let count = 0

const questions = [
  {
    'title': 'MATLAB to\'plami nima ?',
    'answer': 'yuqori darajadagi dasturlash tili texnik hisoblash uchun .'
  },
  {
    'title': 'MATLAB seansini saqlash uchun qanday kengaytma ishlatiladi ?',
    'answer': 'kengaytmali faylda saqlanishi mumkin . mat'
  },
  {
    'title': 'Qaysi buyruq ekranni tozalaydi va kursorni bo\'sh ekranning yuqori chap burchagiga qo\'yadi ?',
    'answer': 'clc bilan'
  },
  {
    'title': 'Qaysi buyruq kursorni oynaning yuqori chap burchagiga qaytaradi ?',
    'answer': 'home'
  },
  {
    'title': 'Qaysi buyruq peyjing rejimini yoqadi ?',
    'answer': 'mоrе on'
  },
  {
    'title': 'Qaysi buyruq ekranda barcha m-fayllar matnini ko\'rsatish rejimini yoqadi ?',
    'answer': 'echo on all'
  },
  {
    'title': 'MATLAB da vektor nima ?',
    'answer': 'Vektor - bu bo\'shliqlar bilan ajratilgan va kvadrat qavs ichiga olingan raqamlar .'
  },
  {
    'title': 'MATLABda matritsa nima ?',
    'answer': 'Matritsa nuqta-vergul bilan ajratilgan va kvadrat qavs ichiga olingan raqamlar qatoridir.'
  },
  {
    'title': 'MATLAB paketida elementlar bo\'yicha operatsiyalarni bajarishda matritsalarning o\'lchamlari qanday bo\'lishi kerak ?',
    'answer': 'Matritsalar bir xil o\'lchamga ega bo\'lishi kerak.'
  },
  {
    'title': 'Belgi matritsa qatorlarini chegaralash uchun ishlatiladi',
    'answer': '; (nuqtali vergul)'
  },
  {
    'title': 'Vektor va matritsalardagi eng oddiy arifmetik operatorlar belgilardir',
    'answer': '+, -, *, /, ^'
  },
  {
    'title': 'Qaysi operator o\'ngdan chapga bo\'linishni anglatadi',
    'answer': '\\'
  },
  {
    'title': 'Qaysi operator massivlarni elementlar bo‘yicha ko‘paytirishni bildiradi',
    'answer': '.*'
  },
  {
    'title': 'Qaysi operator massivlarni elementlarga bo‘linishini bildiradi',
    'answer': './'
  },
  {
    'title': 'da qo‘llaniladigan asosiy tizim o‘zgaruvchilardan qaysi biri xayoliy birlik hisoblanadi?',
    'answer': 'i (j)'
  },
  {
    'title': 'da qo\'llaniladigan asosiy tizim o\'zgaruvchilardan qaysi biri suzuvchi nuqta xatosi hisoblanadi?',
    'answer': 'eps'
  },
  {
    'title': 'MATLABda ishlatiladigan asosiy tizim o\'zgaruvchilardan qaysi biri mashina cheksizligi qiymati hisoblanadi?',
    'answer': 'inf'
  },
  {
    'title': 'asosiy tizim o‘zgaruvchilardan qaysi biri oxirgi operatsiya natijasini saqlaydigan o‘zgaruvchi hisoblanadi?',
    'answer': 'ans'
  },
  {
    'title': 'MATLAB da qo’llaniladigan asosiy tizim o’zgaruvchilardan qaysi biri ma’lumotlarning raqamli bo’lmagan xususiyatini ko’rsatadi?',
    'answer': 'NaN'
  },
  {
    'title': 'Operatorlarning to\'liq ro\'yxatini buyruq yordamida olish mumkinmi?',
    'answer': 'help ops'
  },
  {
    'title': 'Barcha o\'zgaruvchilarning ta\'riflarini yo\'q qilish uchun funktsiyadan foydalaning',
    'answer': 'clear'
  },
  {
    'title': 'X o\'zgaruvchisining ta\'rifini yo\'q qilish uchun funktsiyadan foydalaning',
    'answer': 'clear'
  },
  {
    'title': 'Belgilangan o\'zgaruvchilarning ta\'riflarini yo\'q qilish uchun funktsiyadan foydalaning',
    'answer': 'clear a,b,c'
  },
  {
    'title': 'Elementar funksiyalar ro\'yxati buyruq orqali chaqiriladi',
    'answer': 'help elfun'
  },
  {
    'title': 'Buyruq orqali chaqiriladigan maxsus funktsiyalar ro\'yxati',
    'answer': 'help specfun'
  },
  {
    'title': 'MATLAB paketidagi mantiqiy o\'zgaruvchilar bo\'yicha qanday funktsiyalar sinfi bajariladi ?',
    'answer': 'Mantiqiy funktsiyalar.'
  },
  {
    'title': 'O\'rnatilgan funktsiya argumentlari MATLABda qanday yoziladi ?',
    'answer': 'O\'rnatilgan funktsiyalarga argumentlar qavslar ichiga olingan.'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funktsiyalari arifmetik sinfga tegishli ?',
    'answer': 'plyus (M, M), mvaqt (M, M), rdivide (M, M).'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funksiyalari raqamli ma\'lumotlarni yaxlitlash funktsiyalari sinfiga kiradi ?',
    'answer': 'fix(A), floor(A), ceil (A), sign(X).'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funksiyalari sana va vaqt bilan ishlash funksiyalari sinfiga kiradi ?',
    'answer': 'calendar(d), clock, datestr(D, k), tic.'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funktsiyalari to\'plamni qayta ishlash funktsiyalari sinfiga kiradi ?',
    'answer': 'intersect(a,b), setdiff(a,b), union(a ,b).'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funksiyalari satrlardagi funksiyalar sinfiga kiradi ?',
    'answer': 'findstr(sl,s), lower(s), upper( s), strrep(sl,s,s), strncmp(S,T,n).'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funksiyalari relyatsion funktsiyalar sinfiga kiradi ?',
    'answer': 'eq (M, M), ne (M, M), lt (M, M), gt (M, M), le (M, M), ge (M, M).'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funktsiyalari algebraik va arifmetik funktsiyalar sinfiga kiradi ?',
    'answer': 'abs(X), factor(n), log (X), mod(X, Y), ехр(Х), lcm(A,B), pow(Y), sqrt(A).'
  },
  {
    'title': 'MATLAB paketining qaysi o\'rnatilgan funksiyalari mantiqiy funktsiyalar sinfiga kiradi ?',
    'answer': 'and (M, M), or (M, M), not (M), xor (M, M), any (M), all (M).'
  },
  {
    'title': 'MATLAB funktsiyalari trigonometrik va teskari funktsiyalar sinfiga kiradi ?',
    'answer': 'cos(X), sin (X), ), tan(X), asin(X), acos(X), atan(X), acot (X, acsc(X), asec(X).'
  },
  {
    'title': 'MATLAB paket funksiyasi matritsani ko\'paytirish amalini bajaradi ?',
    'answer': 'mtimes (M, M).'
  },
  {
    'title': 'Qaysi MATLAB paketi funksiyasi matritsa qo\'shish amalini bajaradi ?',
    'answer': 'plus (M, M)'
  },
  {
    'title': 'MATLAB paketining qaysi funksiyasi massivlarni chapdan o\'ngga elementlar bo\'yicha bo\'lish amalini bajaradi ?',
    'answer': 'rdivide (M, M)'
  },
  {
    'title': 'MATLAB paketining qaysi funksiyasi massivlarni elementlar bo‘yicha ko‘paytirishni amalga oshiradi ?',
    'answer': 'times (M, M)'
  },
  {
    'title': 'Matritsani chapdan o\'ngga bo\'lish amalini MATLAB paketining qaysi funksiyasi bajaradi ?',
    'answer': 'mrdivide(M,M)'
  },
  {
    'title': 'Qaysi MATLAB funktsiyasi matritsani quvvatga ko\'tarish operatsiyasini bajaradi ?',
    'answer': 'mpower(M,x)'
  },
  {
    'title': 'MATLAB paketining qaysi funksiyasi massivni element-element darajaga ko‘tarish amalini bajaradi ?',
    'answer': 'power(A,x)'
  },
  {
    'title': 'MATLAB paket funksiyasi matritsani teskari (o\'ngdan chapga) bo\'lish amalini bajaradi ?',
    'answer': 'mldivide(M,M)'
  },
  {
    'title': 'MATLAB paketining qaysi funksiyasi massivlarni o\'ngdan chapga elementlar bo\'yicha bo\'lish amalini bajaradi ?',
    'answer': 'ldivide(A,A)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima n sonining tub omillarini o\'z ichiga olgan qator vektorini qaytaradi (funktsiya massivlar uchun qo\'llanilmaydi) ?',
    'answer': 'factor(n)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima butun A va B massivlarining mos elementlarining eng katta umumiy boʻluvchilarini oʻz ichiga olgan massivni qaytaradi ?',
    'answer': 'gcd(A, В)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima musbat butun sonlarni o\'z ichiga olishi va bir xil o\'lchamga ega bo\'lishi kerak bo\'lgan A va B massivlarining mos juftlangan elementlari uchun eng kichik umumiy ko\'paytmalarni qaytaradi ?',
    'answer': 'lcm(A,B)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima har bir element Y bo\'lgan X massivni qaytaradi ?',
    'answer': 'pow(Y)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima n dan kichik yoki teng tub sonlar qator vektorini qaytaradi ?',
    'answer': 'primes(n)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun yoy kosinusini qaytaradi ?',
    'answer': 'acos(X)'
  },
  {
    'title': 'Qaysi MATLAB funktsiyasi X ning har bir elementi uchun yoy tangensini qaytaradi ?',
    'answer': 'acot(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun yoy kosekantini qaytaradi ?',
    'answer': 'acsc(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun arcsekantni qaytaradi ?',
    'answer': 'asek(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun arksinusni qaytaradi ?',
    'answer': 'asin(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun yoy tangensini qaytaradi ?',
    'answer': 'atan(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun kosinusni qaytaradi ?',
    'answer': 'cos(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun kotangentni qaytaradi ?',
    'answer': 'cot(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X elementlarning sekantini qaytaradi ?',
    'answer': 'sec(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun sinusni qaytaradi ?',
    'answer': 'sin(X)'
  },
  {
    'title': 'MATLAB paketi funksiyasi nima X ning har bir elementi uchun tangensni qaytaradi ?',
    'answer': 'tan(X)'
  },
  {
    'title': 'MATLAB da qaysi buyruq satr segmentlarini chizadi ?',
    'answer': 'plot'
  },
  {
    'title': 'MATLAB da shtrixli diagramma tuzish buyrug\'i nima ?',
    'answer': 'bar'
  },
  {
    'title': 'MATLABda gistogramma tuzish buyrug\'i qanday ?',
    'answer': 'hist'
  },
  {
    'title': 'MATLABda narvon grafigini qurish buyrug\'i qanday ?',
    'answer': 'stairs'
  },
  {
    'title': 'Qaysi buyruq logarifmik masshtabda grafik chizadi ?',
    'answer': 'loglogx'
  },
  {
    'title': 'Yarim logarifmik masshtabda grafik chizilgan qaysi buyruq ?',
    'answer': 'semilogx'
  },
  {
    'title': 'Qaysi buyruqlar funksiyaning diskret namunalarini chizadi ?',
    'answer': 'stem'
  },
  {
    'title': 'qutbli koordinatalarda grafik chizadi ?',
    'answer': 'polar'
  },
  {
    'title': 'Qaysi buyruq burchakli histogrammalarni tuzadi ?',
    'answer': 'rose'
  },
  {
    'title': 'Qaysi buyruq vektorlarni chizadi ?',
    'answer': 'compass'
  },
  {
    'title': 'Vektorlarning tekislikka proyeksiyalari grafigini qaysi buyruq tuzadi ?',
    'answer': 'pat'
  },
  {
    'title': 'chizmalarini yaratish uchun qanday buyruq ishlatiladi ?',
    'answer': 'kontur'
  },
  {
    'title': 'Qaysi buyruq uch o\'lchovli grafiklar uchun ma\'lumotlar massivlarini yaratadi ?',
    'answer': 'meshgrid'
  },
  {
    'title': 'Qaysi komanda Gradient maydon grafiklarini quradi ?',
    'answer': 'quiver'
  },
  {
    'title': 'Qaysi komanda sirt grafikasini quradi ?',
    'answer': 'plot'
  },
  {
    'title': 'Qaysi funksiya buyrug`i bo\'yash bilan to\'rli D-uchastkalarini hosil qiladi ?',
    'answer': 'mesh'
  },
  {
    'title': 'Qaysi funksiya buyrug`i proyeksiyalar bilan to\'rlangan D- uchastkalarini hosil qiladi ?',
    'answer': 'meshс'
  },
  {
    'title': 'Qaysi komanda sirt ustunlarini hosil qiladi ?',
    'answer': 'meshz'
  },
  {
    'title': 'Qaysi komanda bo\'yalgan yuzalarni hosil qiladi ?',
    'answer': 'surf'
  },
  {
    'title': 'Qaysi komanda yuzalar va uning proyeksiyalarini  hosil qiladi ? ?',
    'answer': 'surfc'
  },
  {
    'title': 'Qaysi komanda  yoritilgan yuzalarni hosil qiladi?',
    'answer': 'surfl'
  },
  {
    'title': 'Qaysi komanda uchta o\'zgaruvchili funksiyalar bo\'limlari grafiklarini hosil qiladi ?',
    'answer': 'surfl'
  },
  {
    'title': 'Qaysi komanda uch o\'lchamli qatlamli sirtlarning grafikasini hosil qiladi ?',
    'answer': 'sharshara'
  },
  {
    'title': 'Qaysi jamoa quradi 3D kontur chizmalari ?',
    'answer': 'contour'
  },
  {
    'title': 'Qaysi buyruq to\'ldirilgan tekis ko\'pburchak chizadi ?',
    'answer': 'fill'
  },
  {
    'title': 'Qaysi buyruq elektron rang shkalasini chop etadi ?',
    'answer': 'colorbar'
  },
  {
    'title': 'Qaysi buyruq doiraviy diagramma chizadi ?',
    'answer': 'pie'
  },
  {
    'title': 'Qaysi buyruq bo\'shliqqa to\'ldirilgan ko\'pburchak chizadi ?',
    'answer': 'fill'
  },
  {
    'title': 'Qaysi jamoa 3 o`lchamli doiraviy diagrammalarni tuzadi ?',
    'answer': 'pie'
  },
  {
    'title': 'Qaysi buyruq silindrni uch o\'lchamli figura shaklida chizadi ?',
    'answer': 'cyinder'
  },
  {
    'title': 'Sferani qaysi buyruq qurmoqda ?',
    'answer': 'sphere'
  },
  {
    'title': 'Qaysi buyruq uchburchaklar bilan uch o\'lchamli sim ramka shakllarini yaratadi ?',
    'answer': 'trimesh'
  },
  {
    'title': 'MATLAB da qanday sonlar sinflari ishlatiladi ?',
    'answer': 'Butun, kasr, qo\'zg\'almas va suzuvchi nuqta, kompleks sonlar ishlatiladi.'
  },
  {
    'title': 'Hisoblash natijasini saqlash uchun MATLAB da qanday tizim o\'zgaruvchisi qo\'llaniladi ?',
    'answer': 'Ans deb nomlangan o\'zgaruvchi'
  },
  {
    'title': 'MATLAB paketida tizim konstantasini qanday o\'rnatish mumkin eng kichik raqam **(- ) ?',
    'answer': 'realmin _'
  },
  {
    'title': 'MATLAB paketida tizim konstantasini qanday o\'rnatish mumkin eng katta raqam bormi **( ) ?',
    'answer': 'realmax _'
  },
  {
    'title': 'MATLAB to\'plamida o\'zgaruvchilarni qanday yozish kerak raqamli massivni bildiring ?',
    'answer': 'realmax'
  },
  {
    'title': 'MATLAB to\'plamida o\'zgaruvchilarni qanday yozish kerak ikki tomonlama aniqlikdagi raqamli massivni bildiring ?',
    'answer': 'single'
  },
  {
    'title': 'MATLAB to\'plamida o\'zgaruvchilarni string massivlari uchun qanday yozish kerak ?',
    'answer': 'char'
  },
  {
    'title': 'MATLAB to\'plamida o\'zgaruvchilarni belgili massivlari uchun qanday yozish kerak ?',
    'answer': 'cell'
  },
  {
    'title': 'MATLAB to\'plamida o\'zgaruvchilarni qanday yozish kerak tuzilmalar massivini bildiring ?',
    'answer': 'struct'
  },
  {
    'title': 'MATLAB paketidagi ifoda nimani o\'z ichiga olishi mumkin ?',
    'answer': 'Ifodada konstantalar, oʻzgaruvchilar, funksiyalar, vektorlar, matritsalar va arifmetik operatorlar boʻlishi mumkin .'
  },
  {
    'title': 'MATLAB paketidagi hisob-kitoblar natijasining chiqishini bloklash uchun qaysi belgi ishlatiladi ?',
    'answer': 'Nuqtali vergul'
  },
  {
    'title': 'MATLAB da kiritishni belgilash uchun qaysi belfi ishlatiladi ?',
    'answer': '>>'
  },
  {
    'title': 'MATLABda ta`minlash operatori uchun  belgi qanday ishlatiladi ?',
    'answer': 'Tenglik bilan'
  },
  {
    'title': 'MATLAB paketida ^ belgisi nimani anglatadi ?',
    'answer': 'Darajaga ko`tarish'
  },
  {
    'title': 'MATLAB da n : k : m ko\'rinishidagi  operatori qanday yoziladi ?',
    'answer': 'Ikki nuqta operatori.'
  },
  {
    'title': 'MATLAB paketida ta`minlash operatori  belgisi qanday ishlatiladi ?',
    'answer': '"=" belgisi.'
  },
  {
    'title': 'MATLABda izohni bildirish uchun qanday  belgi ishlatiladi ?',
    'answer': '"%" belgisi.'
  },
  {
    'title': 'MATLAB paketida elementli operatsiya nima ?',
    'answer': 'Bir xil indeksli vektor yoki matritsa elementlari ustida bajariladigan amal.'
  },
  {
    'title': 'MATLABda  Qanday operator {if – end }shaklida  yoziladi? _',
    'answer': 'Shartli operator'
  },
  {
    'title': 'MATLABda  Qanday operator {for var  end } shaklida  yoziladi? _',
    'answer': 'Sikl operatori'
  },
  {
    'title': '{while    end } Operatori nimani bajaradi ?',
    'answer': 'sikl bayonoti'
  },
  {
    'title': 'Qaysi funksiya identifikatsiya matritsasini yaratadi?',
    'answer': 'еуе'
  },
  {
    'title': 'Qaysi funksiya identifikatsiya elementlari bilan matritsa yaratadi?',
    'answer': 'ones'
  },
  {
    'title': 'Qaysi funksiya nol elementli matritsa hosil qiladi?',
    'answer': 'zeros'
  },
  {
    'title': 'Qaysi funksiya tasodifiy elementlardan iborat matritsa hosil qiladi?',
    'answer': 'rand'
  },
  {
    'title': 'Massivlarni qaysi funksiya birlashtiradi?',
    'answer': 'cat'
  },
  {
    'title': 'Qaysi funksiya berilgan diagonalli matritsa hosil qiladi?',
    'answer': 'diag'
  },
  {
    'title': 'Massiv elementlarini ko‘paytirish uchun qaysi funksiyadan foydalaniladi?',
    'answer': 'prod'
  },
  {
    'title': 'Massivlar elementlarini jamlash uchun qanday funksiyadan foydalaniladi?',
    'answer': 'sum'
  },
  {
    'title': 'Matritsalarning uchburchak qismlarini tanlash uchun qaysi funksiyadan foydalaniladi?',
    'answer': 'tril'
  },
  {
    'title': 'Matritsalar normasini qaysi funksiya hisoblaydi?',
    'answer': 'norm'
  },
  {
    'title': 'Matritsaning determinantini (determinantini) topish uchun qanday funksiyadan foydalaniladi ?',
    'answer': 'det'
  },
  {
    'title': 'Matritsaning darajasini hisoblash uchun qanday funktsiyadan foydalaniladi ?',
    'answer': 'rank'
  },
  {
    'title': 'Qaysi funksiya matritsaning izini qaytaradi?',
    'answer': 'trace'
  },
  {
    'title': '“ones” funksiyasi nima uchun kerak?',
    'answer': 'elementlari birdan iborat massivlar yaratish'
  },
  {
    'title': '“zeros” funksiyasining maqsadi nima?',
    'answer': 'nol elementli massivlarni yaratish'
  },
  {
    'title': '“Rand” va “randn” funksiyalari nima uchun ishlatiladi?',
    'answer': '- mos ravishda bir xil va normal taqsimlangan tasodifiy sonlar massivini yaratadi'
  },
  {
    'title': 'Qaysi funksiya massivning o‘lchamini qaytaradi (agar u katta yoki teng bo‘lsa)?',
    'answer': 'ndims'
  },
  {
    'title': 'Qatorlarni ustunlar bilan  teskarisiga  almashtirish ___ deyiladi.',
    'answer': 'transponerlash'
  },
  {
    'title': 'Barcha birlik oʻlchamlari olib tashlangan massivni qaytaruvchi funksiya.',
    'answer': 'squeeze'
  },
  {
    'title': 'Strukturani yaratish funktsiyasi',
    'answer': 'struct'
  },
  {
    'title': 'Tuzilma maydonlarining nomlarini qaytaruvchi funksiya',
    'answer': 'fieldnames'
  },
  {
    'title': 'Tuzilish maydonini belgilash funktsiyasi',
    'answer': 'setfield'
  },
  {
    'title': 'Tuzilish maydonlarini olib tashlash funktsiyasi',
    'answer': 'rmfield'
  },
  {
    'title': 'O\'chirilishi kerak bo\'lgan FIELDS maydonlari ro\'yxati quyidagicha ko\'rsatilgan:',
    'answer': 'maydonlar massivi'
  },
  {
    'title': 'Qaysi tasvir formati uchta rangdagi intensivlik massivlaridan iborat - qizil, yashil va ko\'k:',
    'answer': 'JPG'
  },
  {
    'title': 'Qaysi funksiya hujayra massivini yaratadi?',
    'answer': 'cell'
  },
  {
    'title': 'Qaysi funksiya massivi yacheykasini aks ettiradi?',
    'answer': 'celldisp'
  },
  {
    'title': 'Qaysi funksiya belgilar massividan katakchalar qatorini yaratadi?',
    'answer': 'cellstr'
  },
  {
    'title': 'Qaysi funktsiya kirish ma\'lumotlarini chiqish ma\'lumotlariga bir necha marta belgilashni ta\'minlaydi?',
    'answer': 'deal'
  },
  {
    'title': 'Hujayra massivlarini tekshirish uchun qanday funksiyadan foydalaniladi?',
    'answer': 'iscell'
  },
  {
    'title': 'Qaysi funksiya raqamlar massivini hujayralar massiviga aylantiradi?',
    'answer': 'numcell'
  },
  {
    'title': 'Qaysi funksiya hujayralar massivini strukturalar massiviga aylantiradi?',
    'answer': 'cellstruct'
  },
  {
    'title': 'Matematik model nima ?',
    'answer': 'O\'rganilayotgan ob\'ektning modeli bo\'lgan chiziqli yoki chiziqli bo\'lmagan tenglamalar va tengsizliklar tizimi.'
  },
  {
    'title': 'Hisoblash tajribasi nima  ?',
    'answer': 'Matematik model va raqamli usul yordamida o\'rganilayotgan ob\'ekt, jarayon yoki hodisani o\'rganish usuli bilan .'
  },
  {
    'title': 'Raqamli usul nima ?',
    'answer': 'Bu kompyuterda amalga oshirish uchun mavjud bo\'lgan matematik modelning talqini.'
  },
  {
    'title': 'Muammoni hal qilishning qaysi bosqichida yechimning yakuniy maqsadlari aniqlanadi va -jismoniy ¬jarayonning asosiy qonunlarini to\'g\'ri (adekvat) tavsiflashi kerak bo\'lgan matematik model quriladi ?',
    'answer': 'Muammo bayoni'
  },
  {
    'title': 'Muammoni hal qilishning qaysi bosqichida muammoni qandaydir hisoblash ¬algoritmiga qisqartiradigan raqamli usulni topish kerak ?',
    'answer': 'Raqamli usulni ishlab chiqish'
  },
  {
    'title': 'Yakuniy natijaga olib keladigan elementar arifmetik va mantiqiy amallar ketma-ketligi sifatida yozilgan masalani yechish jarayoni qaysi bosqich hisoblanadi ?',
    'answer': 'Algoritm ishlab chiqish va blok-sxema qurish'
  },
  {
    'title': 'Muammoni hal qilish algoritmi qaysi bosqichda aniq belgilangan amallar ketma-ketligi ko\'rinishida yoziladi va dastur nazorat qilinadi ¬, xatolar diagnostika qilinadi va ular tuzatiladi?',
    'answer': 'Dasturni dasturlash va disk raskadrovka'
  },
  {
    'title': 'Qaysi bosqichda hisob-kitoblar uchun dastlabki ma\'lumotlar tayyorlanadi va hisob yaxshi ishlaydigan dastur bo\'yicha amalga oshiriladi?',
    'answer': 'Hisob-kitoblarni amalga oshirish'
  },
  {
    'title': 'Matematik modelga qo\'yiladigan asosiy talab nima ?',
    'answer': 'Bu uning etarliligi ko\'rib chiqilayotgan ob\'ekt.'
  },
  {
    'title': 'Vazifa barqarorligi nima ?',
    'answer': 'muammoning manba ma\'lumotlaridagi noaniqliklarga sezgirligi.'
  },
  {
    'title': 'Muammoni hal qilish algoritmi nima ?',
    'answer': 'Bu yakuniy natijaga olib keladigan elementar arifmetik va mantiqiy operatsiyalar ketma-ketligi.'
  },
  {
    'title': 'SLE A*X=B ni manfiy bo\'lmagan cheklovlar bilan eng kichik kvadratlar usuli bilan yechish :',
    'answer': 'х =isqnonneg(A,B)'
  },
  {
    'title': 'Kvadrat konjugat gradient usuli MATLAB tizimida quyidagilar yordamida amalga oshiriladi:',
    'answer': 'cgs funksiyalari'
  },
  {
    'title': 'Umumlashtirilgan qoldiqni minimallashtirishning iterativ usuli MATLAB tizimida amalga oshiriladi:',
    'answer': 'funktsiya gmres :'
  },
  {
    'title': 'Gradientlarining iterativ usuli amalga oshiriladi:',
    'answer': 'qoziq funktsiyasi'
  },
  {
    'title': 'Fzero funksiyasining maqsadi nima MATLAB paketida ?',
    'answer': 'Berilgan funksiyaning ildizlarini hisoblash uchun.'
  },
  {
    'title': 'Fminbnd funksiyasining maqsadi nima MATLAB paketida ?',
    'answer': 'Berilgan funksiyaning minimalini hisoblash uchun.'
  },
  {
    'title': 'MATLAB paketidagi funktsiya oldida minus belgisi bo\'lgan fminbnd funksiyasining maqsadi nima ?',
    'answer': 'Berilgan funksiyaning maksimalini hisoblash uchun.'
  },
  {
    'title': 'MATLAB paketidagi funktsiya oldida minus belgisi bo\'lgan fminsearch funksiyasining maqsadi nima ?',
    'answer': 'Bir qator oʻzgaruvchilar funksiyasining local minimumini hisoblash uchun.'
  },
  {
    'title': 'MATLAB da trapz funksiyasining maqsadi nima ?',
    'answer': 'Raqamli integratsiya uchun.'
  },
  {
    'title': 'Qaysi funksiya namunalar orasidagi birlik pog\'onali trapesiya integratsiyasi yordamida aniq integralni qaytaradi ?',
    'answer': 'trapz(Y)'
  },
  {
    'title': 'Qaysi hal qiluvchi ko\'p bosqichli Adams-Bashworth-Multon o\'zgaruvchan tartib usulini qo\'llaydi ?',
    'answer': 'ode'
  },
  {
    'title': 'Qaysi hal qiluvchi - va - tartibli bir bosqichli aniq Runge-Kutta usullarini amalga oshiradi ?',
    'answer': 'ode'
  },
  {
    'title': 'Polinomni qayta ishlash funktsiyasi sifatida n x n o\'lchamli A kvadrat matritsasi uchun n+ o\'lchamdagi qator vektorini qaytaradi ?',
    'answer': 'poli(A)'
  },
  {
    'title': 'Musbat butun sonlardan iborat X massivni (dan dan gacha raqamli kodlar) MATLAB belgilar massiviga aylantirish uchun quyidagidan foydalaning.',
    'answer': 'char (X)'
  },
  {
    'title': 'S satrining belgilarini raqamli kodlarga aylantirish va ushbu raqamli kodlar bilan vektorni qaytarish uchun funktsiya',
    'answer': 'double(S)'
  },
  {
    'title': 'Agar S ramziy o\'zgaruvchi bo\'lsa, mantiqiyni, aks holda mantiqiy nolni qaytarish uchun funktsiyadan foydalaning.',
    'answer': 'ishora(S)'
  },
  {
    'title': 'Argumentdan olingan satrni qaytarish uchun - oxiridan bo\'sh joylar olib tashlangan str qatori; vazifasini bajaradi',
    'answer': 'deblank(str)'
  },
  {
    'title': 'Qaysi funksiya ASCII belgilarda ifodalangan s sonli qatorni ikkilamchi aniqlikdagi songa aylantiradi?',
    'answer': 'strdouble (\'str\')'
  },
  {
    'title': 'Qaysi funktsiya ASCII belgilarda ifodalangan sonli belgilar massivini - matritsa yoki s qatorini matritsaga (o\'lchov massivi) aylantiradi?',
    'answer': 'strnum(lar)'
  },
  {
    'title': 'ikkilik belgilar qatoriga ekvivalent o‘nlik sonni qaytaradi ?',
    'answer': 'bindec(\'binarystr\')'
  },
  {
    'title': 'Qaysi funksiya d kasr sonini n asosdagi son sifatida ifodalovchi belgilar qatorini qaytaradi?',
    'answer': 'decbase(dn)'
  },
  {
    'title': 'Qaysi buyruq ekranni tozalaydi va kursorni bo\'sh ekranning yuqori chap burchagiga qo\'yadi ?',
    'answer': 'clc bilan'
  },
  {
    'title': 'Qaysi buyruq kursorni oynaning yuqori chap burchagiga qaytaradi ?',
    'answer': 'home'
  },
  {
    'title': 'Qaysi buyruq peyjing rejimini yoqadi ?',
    'answer': 'mоrе on'
  },
  {
    'title': 'Qaysi buyruq ekranda barcha m-fayllar matnini ko\'rsatish rejimini yoqadi ?',
    'answer': 'echo on all'
  },
  {
    'title': 'Vektor va matritsalardagi eng oddiy arifmetik operatorlar belgilardir',
    'answer': '+, -, *, /, ^'
  },
  {
    'title': 'Vektor va matritsalardagi qaysi operatorlar + belgilarini bajaradi , -, *, /, ^',
    'answer': 'arifmetikaga'
  },
  {
    'title': 'Vektorlar va matritsalardagi arifmetik operatorlar belgini o\'z ichiga oladi',
    'answer': '-'
  },
  {
    'title': 'Vektorlar va matritsalardagi arifmetik operatorlar belgini o\'z ichiga oladi',
    'answer': '*'
  },
  {
    'title': 'Vektorlar va matritsalardagi arifmetik operatorlar belgini o\'z ichiga oladi',
    'answer': '/'
  },
  {
    'title': 'Vektorlar va matritsalardagi arifmetik operatorlar belgini o\'z ichiga oladi',
    'answer': '^'
  },
  {
    'title': 'Qaysi operator o\'ngdan chapga bo\'linishni anglatadi',
    'answer': '\\'
  },
  {
    'title': 'Quyidagi operatorlardan qaysi biri o\'ngdan chapga bo\'linishni anglatadi',
    'answer': '\\'
  },
  {
    'title': '\\ operator anglatadi',
    'answer': 'o\'ngdan chapga bo\'linish'
  },
  {
    'title': 'Quyidagi operatorlardan qaysi biri ko‘paytirishni bildiradi',
    'answer': '*'
  },
  {
    'title': 'Quyidagi operatorlardan qaysi biri darajani bildiradi',
    'answer': '^'
  },
  {
    'title': 'Quyidagi operatorlardan qaysi biri bo‘linishni anglatadi',
    'answer': '/'
  },
  {
    'title': '.* operatori nimani anglatadi?',
    'answer': 'massivlarni elementlar bo\'yicha ko\'paytirish'
  },
  {
    'title': 'Massivni elementlar bo‘yicha ko‘paytirish va massivni ko‘paytirish operatorlari o‘rtasidagi farq nima?',
    'answer': 'ko\'paytirish belgisidan oldin nuqta qo\'ying'
  },
  {
    'title': 'Qaysi operator massivlarni elementlarga bo‘linishini bildiradi',
    'answer': './'
  },
  {
    'title': 'Qaysi operator massivlarni elementga ajratadi ?',
    'answer': './'
  }
]


async function search(info, tab) {
  var searchstring = info.selectionText
  const question =
      questions.find(
          (item) =>
              item.title === searchstring.trim() ||
              item.title.includes(searchstring.trim())
      ) || ''

  if (question) {
    count++
    chrome.tabs.sendMessage(tab.id, {type: 'showToast', text: question?.answer})
    // chrome.notifications.create(`test-${count}`, {
    //   type: 'basic',
    //   iconUrl: './images/icon16.png',
    //   title: 'Answer',
    //   message: question.answer,
    //   priority: 2
    // })
    //
    // setTimeout(() => {
    //   chrome.notifications.clear(`test-${count}`)
    // }, 2500)
  }
}

chrome.contextMenus.create({
  title: 'Qidirish',
  contexts: ['selection'],
  onclick: search
})

