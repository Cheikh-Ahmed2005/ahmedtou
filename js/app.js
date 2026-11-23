/* ================================================
   Ahmedtou — Main Application Script
   Vanilla JS | No frameworks | ES6+
   ================================================ */

'use strict';

/* ── 1. TRANSLATIONS (i18n) ────────────────────────
   Add a new language by duplicating one object and
   translating its values. Keys must match data-i18n
   attributes in index.html.
────────────────────────────────────────────────── */
const TRANSLATIONS = {
  ar: {
    /* Navbar */
    nav_home:       'الرئيسية',
    nav_phones:     'الهواتف',
    nav_buy:        'شراء هاتف',
    nav_repair:     'الإصلاح',
    nav_contact:    'تواصل معنا',

    /* Hero */
    hero_badge:       '⭐ الأفضل في موريتانيا',
    hero_title:       'وجهتك الأولى للهواتف\nفي موريتانيا',
    hero_subtitle:    'نوفر أحدث الهواتف بأفضل الأسعار، ونشتري هاتفك المستعمل، ونُصلح أي عطل بكفاءة واحترافية عالية.',
    hero_btn_phones:  'اكتشف الهواتف',
    hero_btn_repair:  'اطلب إصلاح هاتفك',
    stat_phones:      'هاتف متاح',
    stat_clients:     'عميل راضٍ',
    stat_years:       'سنوات خبرة',
    badge_warranty:   'ضمان أصلي',
    badge_price:      'أسعار تنافسية',

    /* Phones */
    phones_tag:   'هواتفنا',
    phones_title: 'الهواتف المميزة',
    phones_desc:  'اختر من بين تشكيلة واسعة من أحدث الهواتف الذكية بأسعار منافسة',
    filter_all:   'الكل',
    filter_other: 'أخرى',
    phones_cta:   'تواصل للمزيد من الخيارات',
    phone_btn:    'استفسر الآن',

    /* Phone badges */
    badge_new:     'جديد',
    badge_hot:     'الأكثر مبيعًا',
    badge_promo:   'عرض خاص',
    badge_economy: 'اقتصادي',

    /* Buy section */
    buy_sell_title: 'اشترِ هاتفًا جديدًا',
    buy_sell_desc:  'نوفر لك أحدث الهواتف الذكية من جميع الماركات العالمية، جديدة ومضمونة بأسعار مناسبة للجيب الموريتاني.',
    buy_sell_f1:    'ضمان أصلي من الشركة',
    buy_sell_f2:    'فاتورة رسمية',
    buy_sell_f3:    'دفع بالتقسيط متاح',
    buy_sell_btn:   'تصفح الهواتف',
    buy_buy_title:  'بع هاتفك المستعمل',
    buy_buy_desc:   'هل لديك هاتف مستعمل وتريد بيعه؟ نشتري هاتفك بأفضل سعر في السوق مع تقييم فوري وصرف نقدي في نفس اليوم.',
    buy_buy_f1:     'تقييم فوري ومجاني',
    buy_buy_f2:     'دفع نقدي فوري',
    buy_buy_f3:     'نشتري جميع الماركات',
    buy_buy_btn:    'قيّم هاتفي الآن',

    /* Repair */
    repair_tag:          'الإصلاح',
    repair_title:        'إصلاح احترافي لهاتفك',
    repair_desc:         'فريقنا المتخصص يُصلح أعطال الهواتف بدقة عالية وسرعة في التسليم',
    repair_screen:       'تغيير الشاشة',
    repair_screen_desc:  'استبدال الشاشة المكسورة أو المعطوبة بشاشة أصلية عالية الجودة',
    repair_battery:      'تغيير البطارية',
    repair_battery_desc: 'استبدال البطاريات القديمة وضعيفة الشحن ببطاريات جديدة أصلية',
    repair_water:        'أضرار الماء',
    repair_water_desc:   'إصلاح متخصص للأضرار الناجمة عن الماء والرطوبة',
    repair_software:     'مشاكل البرامج',
    repair_software_desc:'إصلاح مشاكل النظام، إعادة الضبط، تحديث البرامج',
    repair_camera:       'إصلاح الكاميرا',
    repair_camera_desc:  'إصلاح أو استبدال الكاميرا الأمامية والخلفية',
    repair_charging:     'منفذ الشحن',
    repair_charging_desc:'إصلاح وتغيير منافذ الشحن المعطوبة أو التالفة',
    repair_cta_title:    'هل هاتفك يحتاج إصلاح؟',
    repair_cta_desc:     'تواصل معنا الآن واحصل على تقييم مجاني لعطل هاتفك',
    repair_cta_btn:      'احجز موعد إصلاح',

    /* Services */
    services_tag:    'خدماتنا',
    services_title:  'كل ما تحتاجه في مكان واحد',
    svc_sell_title:  'بيع الهواتف',
    svc_sell_desc:   'أحدث الهواتف الذكية من أكبر الماركات العالمية بأسعار تنافسية ومضمونة',
    svc_buy_title:   'شراء المستعمل',
    svc_buy_desc:    'نشتري هاتفك المستعمل بسعر عادل وفوري مهما كانت حالته أو ماركته',
    svc_repair_title:'إصلاح الهواتف',
    svc_repair_desc: 'تقنيون محترفون يُصلحون هاتفك بسرعة ودقة عالية مع ضمان على الإصلاح',
    svc_acc_title:   'الإكسسوارات',
    svc_acc_desc:    'شواحن، سماعات، جرابات، واقيات شاشة وكل ما يتعلق بالهواتف',

    /* Why */
    why_tag:        'لماذا نحن؟',
    why_title:      'لماذا تختار Ahmedtou؟',
    why_desc:       'نحن نفهم احتياجاتك وميزانيتك. لذلك نقدم لك الخيار الأفضل بالسعر المناسب مع ضمان الجودة والخدمة.',
    why_f1_title:   'ضمان أصلي معتمد',
    why_f1_desc:    'جميع هواتفنا مضمونة رسميًا مع فاتورة واضحة',
    why_f2_title:   'خدمة سريعة',
    why_f2_desc:    'تسليم فوري للهواتف وإصلاح في نفس اليوم',
    why_f3_title:   'أسعار تنافسية',
    why_f3_desc:    'أفضل الأسعار في السوق الموريتاني مضمونة',
    why_f4_title:   'دعم ما بعد البيع',
    why_f4_desc:    'نحن هنا لدعمك حتى بعد الشراء، دائمًا',
    wstat_phones:   'هاتف في المخزون',
    wstat_clients:  'عميل موثوق',
    wstat_rating:   'تقييم العملاء',
    wstat_repairs:  'إصلاح ناجح',

    /* Contact */
    contact_tag:       'تواصل معنا',
    contact_title:     'نحن هنا لمساعدتك',
    contact_desc:      'تواصل معنا عبر أي من الوسائل التالية وسنرد عليك في أقرب وقت',
    contact_loc_title: 'العنوان',
    contact_loc:       'كرو، موريتانيا',
    contact_phone_title:'رقم الهاتف',
    contact_hours_title:'ساعات العمل',
    contact_hours:     'السبت - الخميس: 8ص - 9م',
    form_name:         'الاسم الكامل',
    form_name_ph:      'أدخل اسمك الكامل',
    form_phone:        'رقم الهاتف',
    form_subject:      'الموضوع',
    form_opt_buy:      'شراء هاتف',
    form_opt_sell:     'بيع هاتف مستعمل',
    form_opt_repair:   'إصلاح هاتف',
    form_opt_other:    'استفسار آخر',
    form_msg:          'رسالتك',
    form_msg_ph:       'اكتب رسالتك هنا...',
    form_send:         'إرسال الرسالة',
    form_success:      'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.',

    /* Footer */
    footer_brand_desc:    'وجهتك الأولى لبيع وشراء وإصلاح الهواتف الذكية في موريتانيا. جودة موثوقة وأسعار عادلة.',
    footer_links_title:   'روابط سريعة',
    footer_services_title:'خدماتنا',
    footer_contact_title: 'معلومات التواصل',
    footer_rights:        'جميع الحقوق محفوظة.',
    footer_made:          'صُنع بـ',
    footer_in:            'في موريتانيا',
  },

  fr: {
    /* Navbar */
    nav_home:       'Accueil',
    nav_phones:     'Téléphones',
    nav_buy:        'Acheter',
    nav_repair:     'Réparation',
    nav_contact:    'Contact',

    /* Hero */
    hero_badge:       '⭐ N°1 en Mauritanie',
    hero_title:       'Votre destination\ntéléphones en Mauritanie',
    hero_subtitle:    'Nous proposons les derniers smartphones aux meilleurs prix, rachetons votre téléphone usagé et réparons toutes pannes avec expertise.',
    hero_btn_phones:  'Voir les téléphones',
    hero_btn_repair:  'Demander une réparation',
    stat_phones:      'téléphones dispos',
    stat_clients:     'clients satisfaits',
    stat_years:       'ans d\'expérience',
    badge_warranty:   'Garantie officielle',
    badge_price:      'Prix compétitifs',

    /* Phones */
    phones_tag:   'Nos téléphones',
    phones_title: 'Téléphones en vedette',
    phones_desc:  'Choisissez parmi une large gamme de smartphones au meilleur rapport qualité-prix',
    filter_all:   'Tous',
    filter_other: 'Autres',
    phones_cta:   'Contacter pour plus d\'options',
    phone_btn:    'Renseignez-vous',

    /* Phone badges */
    badge_new:     'Nouveau',
    badge_hot:     'Best-seller',
    badge_promo:   'Promo',
    badge_economy: 'Économique',

    /* Buy section */
    buy_sell_title: 'Achetez un téléphone neuf',
    buy_sell_desc:  'Nous proposons les derniers smartphones de toutes les grandes marques, neufs et garantis à des prix adaptés au budget mauritanien.',
    buy_sell_f1:    'Garantie officielle fabricant',
    buy_sell_f2:    'Facture officielle',
    buy_sell_f3:    'Paiement en plusieurs fois',
    buy_sell_btn:   'Voir les téléphones',
    buy_buy_title:  'Vendez votre téléphone',
    buy_buy_desc:   'Vous avez un téléphone usagé à vendre ? Nous l\'achetons au meilleur prix du marché, évaluation immédiate et paiement cash le jour même.',
    buy_buy_f1:     'Évaluation immédiate gratuite',
    buy_buy_f2:     'Paiement cash immédiat',
    buy_buy_f3:     'Toutes marques acceptées',
    buy_buy_btn:    'Évaluer mon téléphone',

    /* Repair */
    repair_tag:          'Réparation',
    repair_title:        'Réparation professionnelle',
    repair_desc:         'Notre équipe spécialisée répare toutes pannes avec précision et rapidité',
    repair_screen:       'Remplacement écran',
    repair_screen_desc:  'Remplacement d\'écrans cassés ou défectueux par des écrans originaux de haute qualité',
    repair_battery:      'Remplacement batterie',
    repair_battery_desc: 'Remplacement des batteries usées ou à faible autonomie par des batteries neuves d\'origine',
    repair_water:        'Dommages eau',
    repair_water_desc:   'Réparation spécialisée des dommages causés par l\'eau et l\'humidité',
    repair_software:     'Problèmes logiciel',
    repair_software_desc:'Réparation des problèmes système, réinitialisation, mises à jour',
    repair_camera:       'Réparation caméra',
    repair_camera_desc:  'Réparation ou remplacement des caméras avant et arrière',
    repair_charging:     'Port de charge',
    repair_charging_desc:'Réparation et remplacement des ports de charge défectueux',
    repair_cta_title:    'Votre téléphone a besoin d\'une réparation ?',
    repair_cta_desc:     'Contactez-nous maintenant pour un diagnostic gratuit',
    repair_cta_btn:      'Prendre rendez-vous',

    /* Services */
    services_tag:    'Nos services',
    services_title:  'Tout ce dont vous avez besoin',
    svc_sell_title:  'Vente téléphones',
    svc_sell_desc:   'Les derniers smartphones des plus grandes marques mondiales à des prix compétitifs et garantis',
    svc_buy_title:   'Rachat occasion',
    svc_buy_desc:    'Nous rachetons votre téléphone usagé à un prix juste et immédiat, quelle que soit sa marque ou son état',
    svc_repair_title:'Réparation',
    svc_repair_desc: 'Techniciens professionnels qui réparent votre téléphone rapidement avec garantie sur la réparation',
    svc_acc_title:   'Accessoires',
    svc_acc_desc:    'Chargeurs, écouteurs, coques, protecteurs d\'écran et tout ce qui concerne les téléphones',

    /* Why */
    why_tag:        'Pourquoi nous ?',
    why_title:      'Pourquoi choisir Ahmedtou ?',
    why_desc:       'Nous comprenons vos besoins et votre budget. Nous vous offrons le meilleur choix au bon prix avec la qualité garantie.',
    why_f1_title:   'Garantie officielle certifiée',
    why_f1_desc:    'Tous nos téléphones sont officiellement garantis avec facture détaillée',
    why_f2_title:   'Service rapide',
    why_f2_desc:    'Livraison immédiate et réparations réalisées le jour même',
    why_f3_title:   'Prix compétitifs',
    why_f3_desc:    'Les meilleurs prix du marché mauritanien, garantis',
    why_f4_title:   'Support après-vente',
    why_f4_desc:    'Nous sommes là pour vous accompagner même après votre achat',
    wstat_phones:   'téléphones en stock',
    wstat_clients:  'clients de confiance',
    wstat_rating:   'note clients',
    wstat_repairs:  'réparations réussies',

    /* Contact */
    contact_tag:       'Contactez-nous',
    contact_title:     'Nous sommes là pour vous',
    contact_desc:      'Contactez-nous via l\'un des moyens suivants et nous vous répondrons dans les plus brefs délais',
    contact_loc_title: 'Adresse',
    contact_loc:       'Keur, Mauritanie',
    contact_phone_title:'Téléphone',
    contact_hours_title:'Horaires d\'ouverture',
    contact_hours:     'Sam - Jeu : 8h - 21h',
    form_name:         'Nom complet',
    form_name_ph:      'Entrez votre nom complet',
    form_phone:        'Numéro de téléphone',
    form_subject:      'Sujet',
    form_opt_buy:      'Acheter un téléphone',
    form_opt_sell:     'Vendre un téléphone',
    form_opt_repair:   'Réparation téléphone',
    form_opt_other:    'Autre demande',
    form_msg:          'Votre message',
    form_msg_ph:       'Écrivez votre message ici...',
    form_send:         'Envoyer le message',
    form_success:      'Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.',

    /* Footer */
    footer_brand_desc:    'Votre destination pour acheter, vendre et réparer des smartphones en Mauritanie. Qualité fiable, prix justes.',
    footer_links_title:   'Liens rapides',
    footer_services_title:'Nos services',
    footer_contact_title: 'Informations de contact',
    footer_rights:        'Tous droits réservés.',
    footer_made:          'Fait avec',
    footer_in:            'en Mauritanie',
  }
};

/* ── 2. PHONE CATALOG DATA ──────────────────────────
   To add a phone: push a new object to this array.
   category: 'apple' | 'samsung' | 'xiaomi' | 'other'
   badge:    'new' | 'hot' | 'promo' | 'economy' | ''
   gradient: CSS gradient string for card header
────────────────────────────────────────────────── */
const PHONES = [

  /* ══════════════════════════════════
     APPLE iPHONE — série 15
  ══════════════════════════════════ */
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    specs_ar: '256 GB | تيتانيوم | 6.7" | A17 Pro',
    specs_fr: '256 Go | Titane | 6,7" | A17 Pro',
    price: 210000,
    category: 'apple',
    badge: 'new',
    img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
    bgColor: '#1c1c1e',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    specs_ar: '128 GB | تيتانيوم | 6.1" | A17 Pro',
    specs_fr: '128 Go | Titane | 6,1" | A17 Pro',
    price: 185000,
    category: 'apple',
    badge: 'new',
    img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg',
    bgColor: '#2c2820',
  },
  {
    id: 3,
    name: 'iPhone 15 Plus',
    specs_ar: '128 GB | أصفر | 6.7" | A16',
    specs_fr: '128 Go | Jaune | 6,7" | A16',
    price: 160000,
    category: 'apple',
    badge: '',
    img: 'https://www.pbtech.co.nz/imgprod/M/P/MPHAPP115124.jpg?h=2339256657',
    bgColor: '#1a1f10',
  },
  {
    id: 4,
    name: 'iPhone 15',
    specs_ar: '128 GB | أزرق | 6.1" | A16',
    specs_fr: '128 Go | Bleu | 6,1" | A16',
    price: 142000,
    category: 'apple',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg',
    bgColor: '#0d1a2a',
  },

  /* ══════════════════════════════════
     APPLE iPHONE — série 14
  ══════════════════════════════════ */
  {
    id: 5,
    name: 'iPhone 14 Pro Max',
    specs_ar: '256 GB | أسود | 6.7" | A16',
    specs_fr: '256 Go | Noir | 6,7" | A16',
    price: 172000,
    category: 'apple',
    badge: 'hot',
    img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
    bgColor: '#1a1a1a',
  },
  {
    id: 6,
    name: 'iPhone 14 Pro',
    specs_ar: '128 GB | بنفسجي | 6.1" | A16',
    specs_fr: '128 Go | Violet | 6,1" | A16',
    price: 155000,
    category: 'apple',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg',
    bgColor: '#1a1020',
  },
  {
    id: 7,
    name: 'iPhone 14 Plus',
    specs_ar: '128 GB | أحمر | 6.7" | A15',
    specs_fr: '128 Go | Rouge | 6,7" | A15',
    price: 132000,
    category: 'apple',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg',
    bgColor: '#2a0a0a',
  },
  {
    id: 8,
    name: 'iPhone 14',
    specs_ar: '128 GB | أزرق | 6.1" | A15',
    specs_fr: '128 Go | Bleu | 6,1" | A15',
    price: 120000,
    category: 'apple',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg',
    bgColor: '#142035',
  },

  /* ══════════════════════════════════
     APPLE iPHONE — série 13
  ══════════════════════════════════ */
  {
    id: 9,
    name: 'iPhone 13 Pro Max',
    specs_ar: '256 GB | أخضر | 6.7" | A15',
    specs_fr: '256 Go | Vert | 6,7" | A15',
    price: 145000,
    category: 'apple',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg',
    bgColor: '#0a1f10',
  },
  {
    id: 10,
    name: 'iPhone 13 Pro',
    specs_ar: '128 GB | فضي | 6.1" | A15',
    specs_fr: '128 Go | Argent | 6,1" | A15',
    price: 128000,
    category: 'apple',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg',
    bgColor: '#1e2428',
  },
  {
    id: 11,
    name: 'iPhone 13',
    specs_ar: '128 GB | وردي | 6.1" | A15',
    specs_fr: '128 Go | Rose | 6,1" | A15',
    price: 95000,
    category: 'apple',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg',
    bgColor: '#2a0f1e',
  },

  /* ══════════════════════════════════
     APPLE iPHONE — série 12
  ══════════════════════════════════ */
  {
    id: 12,
    name: 'iPhone 12 Pro Max',
    specs_ar: '256 GB | أزرق | 6.7" | A14',
    specs_fr: '256 Go | Bleu | 6,7" | A14',
    price: 112000,
    category: 'apple',
    badge: 'promo',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max.jpg',
    bgColor: '#102030',
  },
  {
    id: 13,
    name: 'iPhone 12',
    specs_ar: '64 GB | أحمر | 6.1" | A14',
    specs_fr: '64 Go | Rouge | 6,1" | A14',
    price: 72000,
    category: 'apple',
    badge: 'economy',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg',
    bgColor: '#2a0808',
  },

  /* ══════════════════════════════════
     SAMSUNG — Galaxy S24 Series
  ══════════════════════════════════ */
  {
    id: 14,
    name: 'Samsung Galaxy S24 Ultra',
    specs_ar: '256 GB | تيتانيوم أسود | 6.8" | S Pen',
    specs_fr: '256 Go | Titanium Black | 6,8" | S Pen',
    price: 185000,
    category: 'samsung',
    badge: 'hot',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg',
    bgColor: '#0a0a14',
  },
  {
    id: 15,
    name: 'Samsung Galaxy S24+',
    specs_ar: '256 GB | أونيكس أسود | 6.7"',
    specs_fr: '256 Go | Onyx Black | 6,7"',
    price: 155000,
    category: 'samsung',
    badge: 'new',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-plus-5g-sm-s926-1.jpg',
    bgColor: '#0d0d1a',
  },
  {
    id: 16,
    name: 'Samsung Galaxy S24',
    specs_ar: '128 GB | أونيكس أسود | 6.2"',
    specs_fr: '128 Go | Onyx Black | 6,2"',
    price: 130000,
    category: 'samsung',
    badge: 'new',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-1.jpg',
    bgColor: '#12121f',
  },

  /* ══════════════════════════════════
     SAMSUNG — Galaxy S23 Series
  ══════════════════════════════════ */
  {
    id: 17,
    name: 'Samsung Galaxy S23 Ultra',
    specs_ar: '256 GB | أسود فانتوم | 6.8" | S Pen',
    specs_fr: '256 Go | Phantom Black | 6,8" | S Pen',
    price: 158000,
    category: 'samsung',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg',
    bgColor: '#080810',
  },
  {
    id: 18,
    name: 'Samsung Galaxy S23+',
    specs_ar: '256 GB | ليفندر | 6.6"',
    specs_fr: '256 Go | Lavender | 6,6"',
    price: 128000,
    category: 'samsung',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-plus-5g.jpg',
    bgColor: '#18143a',
  },
  {
    id: 19,
    name: 'Samsung Galaxy S23',
    specs_ar: '128 GB | أخضر | 6.1"',
    specs_fr: '128 Go | Green | 6,1"',
    price: 105000,
    category: 'samsung',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-1.jpg',
    bgColor: '#0a1a10',
  },

  /* ══════════════════════════════════
     SAMSUNG — Galaxy S22 Series
  ══════════════════════════════════ */
  {
    id: 20,
    name: 'Samsung Galaxy S22 Ultra',
    specs_ar: '256 GB | أسود فانتوم | 6.8" | S Pen',
    specs_fr: '256 Go | Phantom Black | 6,8" | S Pen',
    price: 122000,
    category: 'samsung',
    badge: 'promo',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg',
    bgColor: '#0a0a0a',
  },

  /* ══════════════════════════════════
     SAMSUNG — Galaxy Z Fold / Flip
  ══════════════════════════════════ */
  {
    id: 21,
    name: 'Samsung Galaxy Z Fold6',
    specs_ar: '256 GB | أزرق | 7.6" | قابل للطي',
    specs_fr: '256 Go | Blue | 7,6" | Pliable',
    price: 285000,
    category: 'samsung',
    badge: 'new',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold6-1.jpg',
    bgColor: '#0a1428',
  },
  {
    id: 22,
    name: 'Samsung Galaxy Z Flip6',
    specs_ar: '256 GB | أصفر | 6.7" | قابل للطي',
    specs_fr: '256 Go | Jaune | 6,7" | Pliable',
    price: 170000,
    category: 'samsung',
    badge: 'new',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip6-1.jpg',
    bgColor: '#1a1a08',
  },
  {
    id: 23,
    name: 'Samsung Galaxy Z Fold5',
    specs_ar: '256 GB | كريمي | 7.6" | قابل للطي',
    specs_fr: '256 Go | Cream | 7,6" | Pliable',
    price: 240000,
    category: 'samsung',
    badge: '',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg',
    bgColor: '#20180a',
  },

  /* ══════════════════════════════════
     SAMSUNG — Galaxy A Series
  ══════════════════════════════════ */
  {
    id: 24,
    name: 'Samsung Galaxy A55 5G',
    specs_ar: '256 GB | أرجواني | 6.6"',
    specs_fr: '256 Go | Lilas | 6,6"',
    price: 65000,
    category: 'samsung',
    badge: 'promo',
    img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-1.jpg',
    bgColor: '#1e1640',
  },
  {
    id: 25,
    name: 'Samsung Galaxy A54',
    specs_ar: '256 GB | أبيض | 6.4"',
    specs_fr: '256 Go | Blanc | 6,4"',
    price: 55000,
    category: 'samsung',
    badge: 'economy',
    img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg',
    bgColor: '#1a1a1a',
  },

  /* ══════════════════════════════════
     XIAOMI
  ══════════════════════════════════ */
  {
    id: 26,
    name: 'Xiaomi 14 Pro',
    specs_ar: '256 GB | أبيض | 6.73"',
    specs_fr: '256 Go | Blanc | 6,73"',
    price: 98000,
    category: 'xiaomi',
    badge: 'new',
    img: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-pro-1.jpg',
    bgColor: '#0d1f2d',
  },
  {
    id: 27,
    name: 'Xiaomi Redmi Note 13 Pro',
    specs_ar: '256 GB | أزرق | 6.67"',
    specs_fr: '256 Go | Bleu | 6,67"',
    price: 42000,
    category: 'xiaomi',
    badge: 'promo',
    img: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-5g-1.jpg',
    bgColor: '#08122a',
  },

  /* ══════════════════════════════════
     أخرى / Autres
  ══════════════════════════════════ */
  {
    id: 28,
    name: 'Tecno Camon 30 Pro',
    specs_ar: '256 GB | ذهبي | 6.77"',
    specs_fr: '256 Go | Or | 6,77"',
    price: 38000,
    category: 'other',
    badge: 'economy',
    img: 'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-30-pro-1.jpg',
    bgColor: '#1a1200',
  },
];

/* ── 3. APP STATE ──────────────────────────────────── */
const state = {
  lang:           'ar',   // current language
  activeFilter:   'all',  // current phone filter
  countersAnimated: false // prevent re-triggering counters
};

/* ── 4. LANGUAGE SYSTEM ───────────────────────────── */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  /* Update all [data-i18n] text elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Update placeholder attributes */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Set document direction and language */
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  /* Update phone cards specs */
  renderPhoneCards();
}

function toggleLanguage() {
  state.lang = state.lang === 'ar' ? 'fr' : 'ar';
  document.getElementById('langLabel').textContent = state.lang === 'ar' ? 'FR' : 'AR';
  applyTranslations(state.lang);
}

/* ── 5. PHONE SVG GENERATOR ──────────────────────────
   Builds a realistic SVG front-view of a smartphone.
   Supports: dynamicIsland | notch | punchhole styles.
────────────────────────────────────────────────── */
function getPhoneSVG(phone) {
  const fc  = phone.frameColor  || '#1c1c1e';
  const sc0 = phone.screenGrad ? phone.screenGrad[0] : '#111';
  const sc1 = phone.screenGrad ? phone.screenGrad[1] : '#222';
  const uid = `ph${phone.id}`;

  /* ── Camera cutout based on model type ── */
  let cutout = '';
  if (phone.camera === 'dynamicIsland') {
    /* Pill-shaped Dynamic Island — iPhone 15+ */
    cutout = `<rect x="34" y="13" width="52" height="15" rx="7.5" fill="#000" opacity="0.96"/>
              <circle cx="78" cy="20.5" r="3.5" fill="#111"/>`;
  } else if (phone.camera === 'notch') {
    /* Wide notch — iPhone 12/13/14 */
    cutout = `<path d="M36 8 L84 8 L84 24 Q74 30 60 30 Q46 30 36 24 Z" fill="${fc}"/>
              <circle cx="66" cy="18" r="3.5" fill="#1a1a1a"/>
              <circle cx="57" cy="18" r="2.5" fill="#222" opacity="0.6"/>`;
  } else {
    /* Single punch-hole — Samsung / Xiaomi / others */
    cutout = `<circle cx="60" cy="21" r="5.5" fill="#000" opacity="0.92"/>
              <circle cx="60" cy="21" r="2.5" fill="#111"/>`;
  }

  /* ── Brand watermark on screen ── */
  let brand = '';
  if (phone.category === 'apple') {
    /* Apple logo approximated with a circle + leaf */
    brand = `<g transform="translate(60,105)" opacity="0.12" fill="white">
               <path d="M0-18 C8-18 14-10 14 0 C14 10 8 18 0 18 C-8 18 -14 10 -14 0 C-14-10 -8-18 0-18Z"/>
               <path d="M0-12 C5-12 9-6 9 0 C9 6 5 12 0 12 C-5 12 -9 6 -9 0 C-9-6 -5-12 0-12Z" fill="${sc0}"/>
             </g>`;
  } else if (phone.category === 'samsung') {
    brand = `<text x="60" y="115" text-anchor="middle" fill="white" opacity="0.1"
               font-size="9.5" font-family="Arial,sans-serif" font-weight="700" letter-spacing="3">SAMSUNG</text>`;
  } else if (phone.category === 'xiaomi') {
    brand = `<text x="60" y="113" text-anchor="middle" fill="white" opacity="0.12"
               font-size="11" font-family="Arial,sans-serif" font-weight="900">mi</text>`;
  } else {
    brand = `<text x="60" y="113" text-anchor="middle" fill="white" opacity="0.1"
               font-size="9" font-family="Arial,sans-serif" font-weight="700" letter-spacing="1">TECNO</text>`;
  }

  /* ── Camera module (back visible as side detail) ── */
  const homeBar = phone.camera !== 'notch'
    ? `<rect x="40" y="210" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.18)"/>`
    : `<rect x="50" y="212" width="20" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>`;

  return `<svg viewBox="0 0 120 232" xmlns="http://www.w3.org/2000/svg" class="phone-svg" aria-hidden="true">
    <defs>
      <linearGradient id="sg-${uid}" x1="0%" y1="0%" x2="60%" y2="100%">
        <stop offset="0%" stop-color="${sc0}"/>
        <stop offset="100%" stop-color="${sc1}"/>
      </linearGradient>
      <linearGradient id="fg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${fc}" stop-opacity="1"/>
        <stop offset="60%" stop-color="${fc}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="${fc}" stop-opacity="0.75"/>
      </linearGradient>
      <linearGradient id="shine-${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="white" stop-opacity="0.08"/>
        <stop offset="50%" stop-color="white" stop-opacity="0.02"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <filter id="drop-${uid}" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.45"/>
      </filter>
      <clipPath id="clip-${uid}">
        <rect x="10" y="5" width="100" height="222" rx="22"/>
      </clipPath>
    </defs>

    <!-- Outer shadow -->
    <rect x="10" y="5" width="100" height="222" rx="22"
          fill="${fc}" filter="url(#drop-${uid})"/>

    <!-- Frame body -->
    <rect x="10" y="5" width="100" height="222" rx="22"
          fill="url(#fg-${uid})"/>

    <!-- Frame gloss border -->
    <rect x="10" y="5" width="100" height="222" rx="22"
          fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>

    <!-- Screen glass -->
    <rect x="14" y="8" width="92" height="216" rx="19"
          fill="url(#sg-${uid})"/>

    <!-- Screen gloss (left half shine) -->
    <rect x="14" y="8" width="44" height="216" rx="19"
          fill="url(#shine-${uid})" clip-path="url(#clip-${uid})"/>

    <!-- Screen grid lines (subtle UI feel) -->
    <line x1="14" y1="80"  x2="106" y2="80"  stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    <line x1="14" y1="140" x2="106" y2="140" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    <line x1="14" y1="170" x2="106" y2="170" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

    <!-- Camera cutout -->
    ${cutout}

    <!-- Brand watermark -->
    ${brand}

    <!-- Home bar / button -->
    ${homeBar}

    <!-- Volume buttons (left side) -->
    <rect x="8" y="68"  width="3.5" height="20" rx="1.75" fill="${fc}" opacity="0.65"/>
    <rect x="8" y="94"  width="3.5" height="20" rx="1.75" fill="${fc}" opacity="0.65"/>

    <!-- Power button (right side) -->
    <rect x="108.5" y="78" width="3.5" height="30" rx="1.75" fill="${fc}" opacity="0.65"/>

    <!-- Screen edge reflection -->
    <rect x="14" y="8" width="92" height="216" rx="19"
          fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
  </svg>`;
}

/* ── 6. PHONE CARDS RENDERER ─────────────────────── */
function getBadgeClass(badge) {
  const map = { new: 'badge--new', hot: 'badge--hot', promo: 'badge--promo', economy: 'badge--economy' };
  return map[badge] || '';
}

function formatPrice(price) {
  return price.toLocaleString('ar-MR');
}

function renderPhoneCards() {
  const grid = document.getElementById('phonesGrid');
  if (!grid) return;

  const t = TRANSLATIONS[state.lang];
  const badgeLabels = {
    new:     t.badge_new,
    hot:     t.badge_hot,
    promo:   t.badge_promo,
    economy: t.badge_economy
  };

  grid.innerHTML = PHONES.map(phone => {
    const isHidden = !phoneMatchesFilter(phone, state.activeFilter);
    const specs    = state.lang === 'ar' ? phone.specs_ar : phone.specs_fr;
    const badgeLbl = phone.badge ? badgeLabels[phone.badge] : '';
    const badgeCls = phone.badge ? getBadgeClass(phone.badge) : '';

    return `
      <article class="phone-card ${isHidden ? 'hidden' : ''}" data-category="${phone.category}">
        <div class="phone-card__img" style="background:${phone.bgColor};">
          <img
            src="${phone.img}"
            alt="${phone.name}"
            class="phone-img"
            loading="lazy"
            onerror="this.classList.add('img-error')"
          />
          ${badgeLbl ? `<span class="phone-card__badge ${badgeCls}">${badgeLbl}</span>` : ''}
        </div>
        <div class="phone-card__body">
          <h3 class="phone-card__name">${phone.name}</h3>
          <p class="phone-card__specs">${specs}</p>
          <div class="phone-card__footer">
            <div class="phone-card__price">
              ${formatPrice(phone.price)} <small>MRU</small>
            </div>
            <a href="#contact" class="phone-card__btn">
              <i class="fa-solid fa-comment-dots"></i>
              ${t.phone_btn}
            </a>
          </div>
        </div>
      </article>`;
  }).join('');
}

/* ── 6. PHONE FILTER TABS ─────────────────────────── */

/* Map tab filter key → matching logic
   samsung-s / samsung-a / samsung-z are sub-categories */
function phoneMatchesFilter(phone, filter) {
  if (filter === 'all') return true;
  if (filter === 'samsung-s') return phone.category === 'samsung' && /S\d{2}/.test(phone.name);
  if (filter === 'samsung-z') return phone.category === 'samsung' && /Z (Fold|Flip)/.test(phone.name);
  if (filter === 'samsung-a') return phone.category === 'samsung' && /A\d{2}/.test(phone.name);
  return phone.category === filter;
}

function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.removeAttribute('aria-selected'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      state.activeFilter = tab.dataset.filter;
      renderPhoneCards();
    });
  });
}

/* ── 7. NAVBAR — Scroll effect & Active link ──────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  const onScroll = () => {
    /* Scrolled class for glass effect */
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    /* Back-to-top button */
    const btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);

    /* Highlight active nav link based on scroll position */
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ── 8. MOBILE MENU ───────────────────────────────── */
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggle = (open) => {
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger.addEventListener('click', () => {
    toggle(!hamburger.classList.contains('open'));
  });

  /* Close on link click */
  mobileLinks.forEach(link => link.addEventListener('click', () => toggle(false)));

  /* Close on outside click */
  document.addEventListener('click', e => {
    if (mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      toggle(false);
    }
  });
}

/* ── 9. SMOOTH SCROLL for anchor links ──────────────  */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── 10. COUNTER ANIMATION ────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1800; // ms
  const step     = target / (duration / 16);
  let   current  = 0;

  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString('ar-EG');
    if (current < target) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

/* ── 11. INTERSECTION OBSERVER ───────────────────── */
function initScrollAnimations() {
  /* Animate sections on scroll */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  /* Counters — trigger once when section is visible */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !state.countersAnimated) {
        state.countersAnimated = true;
        document.querySelectorAll('.counter').forEach(animateCounter);
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const whySection = document.getElementById('why');
  if (whySection) counterObserver.observe(whySection);
}

/* ── 12. CONTACT FORM ─────────────────────────────── */
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    /* Basic client-side validation */
    const name  = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const msg   = form.querySelector('#message').value.trim();

    if (!name || !phone || !msg) return;

    /* Build WhatsApp message */
    const subject = form.querySelector('#subject')?.value.trim() || '';
    const text = [
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      subject ? `الموضوع: ${subject}` : '',
      `الرسالة: ${msg}`
    ].filter(Boolean).join('\n');

    const waURL = `https://wa.me/22247777451?text=${encodeURIComponent(text)}`;

    /* Show spinner briefly, then open WhatsApp */
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${TRANSLATIONS[state.lang].form_send}`;
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 5000);
      window.open(waURL, '_blank');
    }, 800);
  });
}

/* ── 13. BACK TO TOP ──────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 14. FOOTER YEAR ──────────────────────────────── */
function setFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── 15. INIT ─────────────────────────────────────── */
function init() {
  /* Language toggle button */
  document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);

  /* Render phones and set up filter */
  renderPhoneCards();
  initFilterTabs();

  /* UI behaviors */
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initContactForm();
  initBackToTop();
  setFooterYear();

  /* Apply initial translations (Arabic by default) */
  applyTranslations(state.lang);
}

/* Run after DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}