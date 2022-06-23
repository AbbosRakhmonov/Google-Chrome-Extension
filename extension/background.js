let count = 0;

const questions = [
  {
    title: "Ko'p foydalanuvchilik OT ga qaysilar kiradi?",
    answer: "Windows, Unix, OS/2",
  },
  {
    title: "Tarmoq operatsion tizimlari ... .. qismlardan iborat?",
    answer: "To'rt",
  },
  {
    title: "Yuqori mahsuldorlikka ega fayl tizimi?",
    answer: "HPFS",
  },
  {
    title: "FAT fayl tizimidagi mantiqiy disk quyidagilarga bo'linadi?",
    answer: "Tizim maydoni va ma'lumotlar maydoni",
  },
  {
    title: "FAT fayl tizimiga quyidagilar kiradi?",
    answer: "Barcha javoblar to'g'ri",
  },
  {
    title: "Svоping bu?",
    answer: "jarayonlarni asоsiy xоtiradandiskka va оrqaga to'liq o'tkazishdir",
  },
  {
    title: " NTFS fayllik tizimi nechta bitli prоttsessоr-lar bilan ishlaydi?",
    answer: "16 va 32",
  },
  {
    title: "Jarayonni rejalashtirish darajalari?",
    answer: "uzоq muddatli, o'rta muddatli va qisqa muddatli",
  },
  {
    title: " Xоtira ierarxiyasi bo'yicha, eng qimmat tezkоr va qimmat xоtira?",
    answer: "prоtsessоr registrlari",
  },
  {
    title: "Оchiq kоdli ОT larda?",
    answer:
      "tizim kоdlari оchiq, ixtiyoriy fоydalanuvchi uni o'zgartirishi mumkin",
  },
  {
    title: "Xоtiraning ma`lumоtlar jоylashadigan bo'limi?",
    answer: "segment deyiladi",
  },
  {
    title: "Dasturiy ta`minоt quyidagi bo'limlardan ibоrat?",
    answer:
      "asоs dasturiy ta`minоt, tizimli dasturiy ta`minоt, xizmatchi dasturiy ta`minоt, amaliy dasturiy ta`minоt",
  },
  {
    title:
      "Dastur algоritmlarda, ishlоv beriladigan massivlarda amal va kattaliklardan fоydalanish chastоtasiga qarab, funktsiyalarni ajratishga asоslangan printsip?",
    answer: "chastоta printsipi",
  },
  {
    title: "Windows ОT larining bоshqa ОТ lardan printsipial farqi?",
    answer: "grafik interfeysi va bir nechta ilоvalar bilan",
  },
  {
    title: "Multidasturlash bu?",
    answer:
      "hisоblash jarayonning tashkil qilish usuli bo'lib, bitta prоtsessоrda navbat bilan bir nechta dastur bajariladi",
  },
  {
    title: "Meynfraymlar bu?",
    answer:
      "OT lari kiritish/chiqarish amallari ko'p bo'lgan, bir vaqtda bajaradigan topshiriqlar to'plamiga ishlov berishga yo'naltirilgan",
  },
  {
    title: "Operatsion tizimlar tuzilishiga ko'ra sinflanishi?",
    answer: "Monolit, ko'p sathli, Klient -Server, Mikro yadroli",
  },
  {
    title: "Monolit operatsion tizimlar bu?",
    answer:
      "bu biron bir aniq strukturaga ega bo'lmagan tuzilishga ega operatsion tizim hisoblanadi.",
  },
  {
    title:
      "Quyidagilardan qaysi biri Mikroyadroli operatsion tizim hisoblaniladi?",
    answer: "linux",
  },
  {
    title: "Operatsion tizimga qo'yiladigan talablar bular?",
    answer: "Barcha javoblar to'g'ri",
  },
  {
    title: "BIOS bu?",
    answer:
      "Bu doimiy xotira qurilmasida joylashgan bo'lib mikrodasturlar jamlanmasi bo'lib, quyi darajali kiritish/chiqarish amallarni bajaradi",
  },
  {
    title: "Drayverlar bu?",
    answer:
      "Tashqi qurilmalarning fiziki darajada ishlashini boshqaruvchi dasturlardir",
  },
  {
    title: "Bir masalali OT ga qaysilar kiradi?",
    answer: "MS-DOS, MSX",
  },
  {
    title: "Bir foydalanuvchilik OT ga qaysilar kiradi?",
    answer: "MS-DOS, Windows 3.x, OS/2 dastlabki versiyasi",
  },
  {
    title: "Amaliy dasturiy ta`minоt - dasturlari?",
    answer: "aniq sоxa masalalarini yechishni ta`minlоvchi dastur-lardir",
  },
  {
    title:
      "Qaysi vоsita yordamida siqlgan fayllarni qayta yoymasdan qayta ishlash mumkin?",
    answer: "NTFS",
  },
  {
    title: "Utilitalar bu shunday fоydali dasturlarki?",
    answer:
      "xajmi kichik dasturlar bo'lib, apparat vоsitalar ishini bоshqaradi, turli yordamchi funktsiyalarni, ishlоvchanlik qоbilyatini, sоzlashni tekshiradi",
  },
  {
    title: "Fat fayl tizimida, mantiqiy disk?",
    answer: "tizimli sоxa va ma`lumоtlar sоxasiga bo'linadi",
  },
  {
    title: "Windows NT/2000/XP ijrо tizimi quyidagi kоmpоnentalardan ibоrat?",
    answer:
      "jarayonlar, virtual xоtira, оb`ektlar dispetcheri, xavfsizlik mоnitоri, kiritish chiqarish dispetcheri, lоkal prоtseduralarni chaqirish vоsitasi",
  },
  {
    title: "Fayllar tuzilishining asоsiy birligi nimalar?",
    answer: "ma`lumоtlar",
  },
  {
    title:
      "Quyidagi ОT larning qaysi biri ko'p masalali va ko'p fоydalanuvchili hisоblanadi?",
    answer: "UNIX",
  },
  {
    title: "ОT bоshqaruvi оstida jarayonlar sоnini o'zgartirmaydigan amallar?",
    answer: "ko'p martalik amallar",
  },
  {
    title:
      "Tarmоq оperatsiоn tizimining qaysi qismi ilоvalardan barcha so'rоvlarni qabul qilib ularni analiz qiladi?",
    answer: "server qismi",
  },
  {
    title: "Shaxsiy kоmpyuterning ta minоti qanday bo'limdan ibоrat?",
    answer: "uskunaviy va dasturiy ta minоt",
  },
  {
    title:
      "Operatsion tizimning rivojlanish tarixi 2-avlod nechinchi yillarni o'z ichiga oladi?",
    answer: "1955 - 1965",
  },
  {
    title:
      "Operatsion tizimning rivojlanish tarixi 3 - avlod nechinchi yillarni o'z ichiga oladi?",
    answer: "1965 - 1980",
  },
  {
    title:
      "Operatsion tizimning rivojlanish tarixi 4 - avlod nechinchi yillarni o'z ichiga oladi?",
    answer: "1980 yildan to hozirgacha",
  },
  {
    title:
      "Birinchi avlod kompyuterlari analitik mashina kim tamonidan yaratilgan?",
    answer: "Charles Babbage",
  },
  {
    title: "4-avlod kampyuterlariga qanday kompyuterlar kiradi?",
    answer: "Personal va super kompyuterlar",
  },
  {
    title: "Multipleksing bu?",
    answer: "resurslar ishlashining ketma - ketligi va davomiyligi",
  },
  {
    title: "Multipleksingning ikki xil ko'rinishi bor bular?",
    answer: "Vaqtinchalik, Ajratilgan xotira",
  },
  {
    title: "Boot Loader - bu?",
    answer:
      "Operasion tizimni yuklovchi - bu Boot Record va Sistem Bootstrap dasturli modulidir",
  },
  {
    title: "Interrupts (Uzilish) - bu?",
    answer:
      "bir dasturni bajarilishini hozirgi vaqtda yanada muhimroq boshqa dasturni tezkor bajarish maqsadida vaqtincha to'xtatilishidir",
  },
  {
    title:
      "Masalalarni qayta ishlash rejimi bo'yicha operatsion tizimlar sinflanishi?",
    answer: "bir vazifali , ko'p vazifali",
  },
  {
    title: "Prоtsessоr vaqti?",
    answer: "chegaralangan resurs",
  },
  {
    title: "Multidasturlash rejimida ishlaydigan оperatsiоn tizimlar?",
    answer: "rivоjlanish 3-davriga yuzaga keldi",
  },
  {
    title:
      "Kоmpyuter tarkibiga kiruvchi turli qurilmalarni bоshqaruvchi maxsus dasturlar ..... .deb ataladi?",
    answer: "drayverlar",
  },
  {
    title:
      "Fоydalanuvchi tizim bilan ishlayotgan vaqtda, u o'rnatadigan parametrlarni qisqartirish, parametrlarni o'rnatish vaqtini tejashga imkоn beradigan printsip?",
    answer: "standart xоlatlar (pо umоl-chaniyu) printsipi",
  },
  {
    title: "Qanday axbоrоtlar se-curity accounts manag-er da saqlanadi?",
    answer: "fоydalanuvchilarning qayd yo-zuvi haqidagi",
  },
  {
    title:
      "Tarmоq оperatsiоn tizimining qaysi qismi ma`lumоtlarni adreslash, buferlash, va uzatilishidagi xavfsizlikni ta`minlaydi?",
    answer: "kоmmunikatsiоn vоsitalar",
  },
  {
    title: "Tizimli dasturiy ta`minоt bu?",
    answer:
      "kоmpyuter tizimining dastur-lari va bevоsita apparat ta`minоti bilan o'zarо bоglan- ishini ta`minlaydi",
  },
  {
    title: "Mоnоlit ОT larda tuzilishi?",
    answer: "2 ta bo'lakdan ibоrat (bоsh dastur va prоtseduralar)",
  },
  {
    title: "Zamоnaviy ОT larda xоtira?",
    answer: "segment sahifali bo'linadi",
  },
  {
    title: "Amaliy dasturiy ta`minоt?",
    answer:
      "ma`lum ish jоyida aniq ma-salalarni yechishga yordam beradigan dastur",
  },
  {
    title: "Operatsion tizim asoson ...?",
    answer: "tizimli dasturlar jamlanmasi",
  },
  {
    title: "Operatsion tizimda hisoblash tizimining tarkibi bu?",
    answer: "Konfiguratsiya",
  },
  {
    title:
      "Quyidagilardan qaysi biri Operatsion tizimning asosiy tashkil etuvchilari hisoblaniladi?",
    answer: "Yadro, kiritish-chiqarish tizimi, kamanda prosessori, fayl tizimi",
  },
  {
    title: "Operatsion tizimning asosiy tashkil etuvchisi yadro bu?",
    answer:
      "masalalar va resurslarni boshqarish, sinxronlashtirish va o'zaro bog'lanish bo'yicha asos funksiyalarni ta'minlaydi.",
  },
  {
    title:
      "Operatsion tizimning asosiy tashkil etuvchisi kiritish - chiqarish tizimi bu?",
    answer:
      "tashqi qurilmalar bilan ma'lumotlarni kiritish-chiqarish masalasini ta'minlaydi.",
  },
  {
    title:
      "Operatsion tizimning asosiy tashkil etuvchisi kamanda prosessori bu?",
    answer:
      "komandalarni qabul qilish va ularga ishlov berish, foydalanuvchi talabi bo'yicha mos xizmatlarni chaqirishni ta'minlaydi",
  },
  {
    title: "Operatsion tizimning asosiy tashkil etuvchisi fayl tizimi bu?",
    answer:
      "kataloglar bilan ishlash uchun keng hizmat (servis) imkoniyatlarini beradi.",
  },
  {
    title: "Operatsion tizim interfeysi bu?",
    answer: "Foydalanuvchi aloqa o'rnatadigan qulay qobiq",
  },
  {
    title: "Buyruq interpretatori bu?",
    answer: "Dastur tilidan mashina tiliga o'giradi (Tarjimon)",
  },
  {
    title: "Kompyuter tashkil etuvchisi bu?",
    answer: "Turli xil qurilmalarni boshqarish dasturi",
  },
  {
    title: "Xоtiraning fiksirlangan bo'limlarga bo'lishda?",
    answer: "xоtira qat`iy o'lchamli bo'lak-larga оldindan bo'lingan bo'ladi",
  },
  {
    title: "Matn muharriri Word bu?",
    answer: "amaliy dasturiy",
  },
  {
    title: "Fragmentattsiya deb nimaga aytiladi?",
    answer: "xоtira bo'limlarga ajratilganda qоladigan bo'l jоyi",
  },
  {
    title: "mv buyrug'ug'i qanday vazifani bajaradi?",
    answer: "Faylni qayta nomlash, nusxa olish",
  },
  {
    title: "Tizimli dasturiy taminоt nechtaga bo'linadi?",
    answer: "3",
  },
  {
    title: "Windows server bu qaysi kompaniyaga tegishli?",
    answer: "Microsoft",
  },
  {
    title: "Unix operatsion tizimi qachon yaratilgan?",
    answer: "1960",
  },
  {
    title: "Unix operatsion tizimi qaysi laboratoriyada ishlab chiqilgan?",
    answer: "AT&T'S Bell laboratories",
  },
  {
    title: "Matn redaktоri Word bu?",
    answer: "amaliy dasturiy",
  },
  {
    title: "Quyidagilardan qaysi biri Linux serveri hisoblanadi?",
    answer: "Ubuntu, Debian, CentOS",
  },
  {
    title: "Ubuntu server qaysi kompaniya tamonidan ishlab chiqilgan?",
    answer: "Canonical",
  },
  {
    title: "Operatsion tizim nima?",
    answer:
      "operatsion tizim bu foydalanuvchi va kompyuter o'rtasidagi muloqatni ta'minlab beruvchi dasturlar jamlanmasi",
  },
  {
    title:
      "Quyidagilardan qaysi biri Unix serverga o'xshash server operatsion tizim hisoblanadi?",
    answer: "Solarius, Linux",
  },
  {
    title:
      "Windows operatsion tizimida buyruqlar qatorini (cmd) qaysi klavishlar yordamida bosiladi?",
    answer: "Win + R",
  },
  {
    title: "Qanday axbоrоtlar security accounts manager da saqlanadi?",
    answer: "fоydalanuvchilarning qayd yo-zuvi haqidagi",
  },
  {
    title:
      "Operatsion tizimning rivojlanish tarixi 1 - avlod nechinchi yillarni o'z ichiga oladi?",
    answer: "1945 - 1955",
  },
  {
    title:
      "Operatsion tizimning rivojlanish tarixi 2 - avlod nechinchi yillarni o'z ichiga oladi?",
    answer: "1955 - 1965",
  },
  {
    title:
      "Tizimda paydo bo'lgan har bir yangi jarayon quyidagicha davom etadi?",
    answer: "Tayyor holatda",
  },
  {
    title: "Jarayon quyidagi sabablarga ko'ra ishlaydigan holatdan chiqadi?",
    answer: "Barcha javoblar to'g'ri",
  },
  {
    title: "Tizimdagi jarayonlar sonini o'zgartiradigan operatsiyalar?",
    answer: "Bir martalik operatsiyalar",
  },
  {
    title: "Ushbu operatsion tizimlarning qaysi biri ochiq manba hisoblanadi?",
    answer: "Linux",
  },
  {
    title: "Protsessor vaqti?",
    answer: "cheklangan resurs",
  },
  {
    title: "Xotirani sobit bo'limlarga ajratishda?",
    answer: "Xotira oldindan aniq o'lchamdagi aniq bo'limlarga bo'linadi",
  },
  {
    title:
      "Qaysi avlod tizimlaridan boshlab operatsion tizimlar o'rnatila boshlagan?",
    answer: "2 - avlod",
  },
  {
    title:
      "Nechilchi yillardan boshlab paketli operatsion tizimlar ishlab chiqarilgan?",
    answer: "1960 yil",
  },
  {
    title: "4 - avlod kampyuterlariga qanday kompyuterlar kiradi?",
    answer: "Personal va super kompyuterlar",
  },
  {
    title: "Multipleksing necha xil ko'rinishda bo'ladi?",
    answer: "2",
  },
  {
    title: "Trap bu?",
    answer:
      "operasion tizim va hisoblash tizimlarida bu istisno yoki xatolik deb qabul qilinadi",
  },
  {
    title: "Ierarxiyadagi eng tezkor va eng qimmat xotira?",
    answer: "Protsessor registrlari",
  },
  {
    title: "Resurslarni samarali boshqarish uchun operatsion tizimlar?",
    answer: "Resurslarni rejalashtirish va resurslar holatini kuzatish",
  },
  {
    title:
      "Operatsion tizimning asosiy tarkibiy qismlaridan biri - yadro quyidagi funktsiyalarni bajaradi?",
    answer: "Vazifalar va manbalarni boshqaradi",
  },
  {
    title:
      "Hisoblash tizimini boshqarish jarayonlari ma'lum vaqt chegaralarini qondiradigan operatsion tizimlar?",
    answer: "Haqiqiy vaqt rejimida ishlaydigan operatsion tizimlar",
  },
  {
    title: "Ko'p dasturli va ko'p foydalanuvchili operatsion tizimlar?",
    answer: "UNIX operatsion tizimlari",
  },
  {
    title:
      "Mikroyadorli operatsion tizimlarida mikroyadro quyidagi funktsiyalarni o'z ichiga oladi?",
    answer: "Minimal talab qilinadigan xususiyatlar",
  },
  {
    title:
      "Modulli printsip yordamida yaratilgan operatsion tizimlarda dastur quyidagilardan iborat?",
    answer: "Mustaqil qismlardan (modullardan)",
  },
  {
    title:
      "Kasperskiy antivirus dasturining korporativ versiyasi, u yirik tarmoqlar uchun mo'ljallangan va ularning xavfsizligini quyidagi xususiyatlar bilan ta'minlaydi?",
    answer:
      "Markazlashtirilgan masofadan boshqarish pultini taqdim etadi, to'liq statistik ma'lumotlarni taqdim etadi va katta hajmdagi ma'lumotlar bilan ishlaydi (ma'lumotlar bazasi bilan)",
  },
  {
    title:
      "Kasperskiy antivirus dasturining shaxsiy versiyasi quyidagi xususiyatlarga ega?",
    answer: "Qulay o'rnatish va sozlash",
  },
  {
    title:
      "Ajratilgan birliklar zaxiralari uchun resurslar ham topiladi, shuning uchun ular?",
    answer: "Muayyan qoidalarga muvofiq tarqatiladi",
  },
  {
    title: "O'zaro bog'lanish bo'yicha operatsion tizimlar sinflanishi?",
    answer: "bir foydalanuvchi va ko'p foydalanuvchi",
  },
  {
    title: "Mikrokompyuterlar bu?",
    answer:
      "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog'ona pastdir. Shuni aytish joizki, ularning o'lchamlari tobora ixchamlashib, hatto shaxsiy kompyuterdek kichik joyni egallaydiganlari yaratilmoqda",
  },
  {
    title: "Super komputerlar bu?",
    answer:
      "juda katta tezlikni talab qiladigan va katta hajmdagi masalalarni yechish uchun mo'ljallangan bo'ladi. Bunday masalalar sifatida ob-havoning global prognoziga oid masalalarni, uch o'lchovli fazoda turli oqimlarning kechishini o'rganish masalalarini keltirish mumkin. Bu kompyuterlar bir sekundda 10 trilliardlab amal bajaradi.",
  },
  {
    title: "Minikompyuterlar - bu ...?",
    answer:
      "Hajmi va bajaradigan amallar tezligi jihatidan katta kompyuterlardan kamida bir pog'ona pastdir. Shuni aytish joizki, ularning o'lchamlari tobora ixchamlashib, hatto shaxsiy kompyuterdek kichik joyni egallaydiganlari yaratilmoqda",
  },
  {
    title: "Tizimli chaqiruv-?",
    answer:
      "Operasion tizim va ishlayotgan dastur orasidagi interfeysni taminlab beradi",
  },
  {
    title: "Fayl bilan ishlash dasturi?",
    answer: "Fayl menejeri",
  },
  {
    title: "Zamonaviy fayllarni boshqarish tizimlari?",
    answer: "NTFS",
  },
  {
    title: "Fayl tizimidan foydalanish?",
    answer:
      "Ma'lumotlarni qayta ishlash dasturlari bilan bog'laning va disk maydonini markaziy ravishda taqsimlash",
  },
  {
    title: "Zamonaviy operatsion tizimlarda xotira?",
    answer: "Har bir segment uchun sahifalar bo'limlari",
  },
  {
    title: "Ochiq manbali operatsion tizimlarda?",
    answer:
      "Tizim kodlari ochiq, istalgan foydalanuvchi uni o'zgartirishi mumkin",
  },
  {
    title: "Ma'lumotlarning xotirada joylashishi?",
    answer: "Segment",
  },
  {
    title:
      "Katta hajmga, samarali foydalanishga va alohida avtonom energiya manbasiga ega bo'lgan xotira deyiladi?",
    answer: "Doimiy xotira",
  },
  {
    title:
      "Zamonaviy operatsion tizimlardagi manbalar quyidagilarni anglatadi?",
    answer:
      "Protsessor vaqti, xotira, kirish va chiqish kanallari, tashqi qurilmalar, dastur modullari, axborot resurslari, xabarlar va signallar",
  },
  {
    title: "Ko'p masalali OT ga qaysilar kiradi?",
    answer: "Windows, Unix, OS/2",
  },
  {
    title: "Operatsion tizim qobiqlari?",
    answer:
      "Foydalanuvchi uchun tizim funksiyalaridan unumli foydalanish interfeysini ta'inlab beruvchi dasturlar",
  },
  {
    title: "Quyidagi dasturlardan qaysi birlari grafik muxarrir hisoblanadi?",
    answer: "Paint, Adobe Photoshop",
  },
  {
    title: "FAT32, Ext2, NTFS - bu …?",
    answer: "Paint, Adobe Photoshop",
  },
  {
    title:
      "Quyidagi operatsion tizimlardan qaysi biri bitta foydalanuvchi va bitta dasturli operatsion tizimdir?",
    answer: "MS DOS",
  },
  {
    title:
      "UNIX operatsion tizimining osongina ko'chirilishi yoki ko'chirilish xususiyati sababi?",
    answer:
      "Operatsion tizim kodlari yuqori darajadagi tilda yozilgan (masalan, C)",
  },
  {
    title: "Tarmoq operatsion tizimi deganda keng tushuniladi?",
    answer:
      "Xabar almashish va resurslarni birgalikda ishlatish uchun o'zaro ta'sir qiluvchi individual kompyuterlarning operatsion tizimlari to'plami yagona qoidalar - protokollar",
  },
  {
    title:
      "Foydalanuvchiga u yoki bu turga kirishga imkon beradigan huquqlar to'plami deyiladi (NTFS fayl tizimida)?",
    answer: "Shaxsiy ruxsatnomalar",
  },
  {
    title: "Fayllarni boshqarish tizimi quyidagi funksiyalarni bajaradi?",
    answer: "fayl operatsiyalari va foydalanuvchi interfeysi funktsiyalari",
  },
  {
    title:
      "Boshqarish mexanizmlari bilan protsessor vaqtining 90 foizini egallaydigan va nisbatan past ko'rsatkichlarga ega bo'lgan eng xavfsiz operatsion tizimlar quyidagilar?",
    answer: "A sinf",
  },
  {
    title:
      "Windows operatsion tizimining boshqa operatsion tizimlardan tubdan farqi nimada?",
    answer: "GUI va bir nechta dasturlarni ishlatish qobiliyati",
  },
  {
    title:
      "Shaxsiy kompyuterlar uchun mo'ljallangan va bir nechta operatsion tizimlarni qo'llab-quvvatlaydigan birinchi ko'p dasturli, ko'p vazifali, ishonchli operatsion tizim?",
    answer: "OS / 2",
  },
  {
    title:
      "Tarmoq operatsion tizimlari funktsiyalarning ajratilishiga qarab tasniflanadi?",
    answer: "Bir martalik tarmoq OS va maxsus serverlarga ega OS",
  },
  {
    title:
      "Tarmoq operatsion tizimlarini yaratishda bir nechta yondashuvlar mavjud bular?",
    answer:
      "Mahalliy operatsion tizimlar va qobiq, tarmoq funktsiyalari boshidanoq hisobga olingan",
  },
  {
    title:
      "Tarmoq operatsion tizimining masofaviy manbalar va xizmatlarga kirishni ta'minlovchi qismi?",
    answer: "Mijozlar qismi",
  },
  {
    title:
      "O'z resurslarini ommaviy ravishda taqdim etadigan tarmoq operatsion tizimining bir qismi?",
    answer: "Server qismi",
  },
  {
    title: "Tor ma'noda tarmoq operatsion tizimlari?",
    answer:
      "Shaxsiy kompyuterning tarmoqda ishlashini ta'minlaydigan operatsion tizimlari",
  },
  {
    title:
      "Vazifalari: uni ko'rish, qo'shish, o'qish, yozish va o'zgartirish (NTFS fayl tizimida) bu?",
    answer: "standart qarorlari",
  },
  {
    title: "NTFS fayl tizimi?",
    answer: "Yangi texnologik fayl tizimi",
  },
  {
    title: "Haqiqiy vaqtdagi operatsion tizimlar ana shunday tizimlardir bu?",
    answer:
      "Kiruvchi ishlarni belgilangan vaqt oralig'ida qayta ishlashni oshirib yubormaslik",
  },
];

async function search(info) {
  var searchstring = info.selectionText;
  const question =
    questions.find(
      (item) =>
        item.title === searchstring.trim() ||
        item.title.includes(searchstring.trim())
    ) || "";

  if (question) {
    count++;
    chrome.notifications.create(`test-${count}`, {
      type: "basic",
      iconUrl: "./images/icon16.png",
      title: "Answer",
      message: question.answer,
      priority: 2,
    });
    setTimeout(() => {
      chrome.notifications.clear(`test-${count}`);
    }, 2500);
  }
}

chrome.contextMenus.create({
  title: "Qidirish",
  contexts: ["selection"],
  onclick: search,
});
