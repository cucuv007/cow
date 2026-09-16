(() => {
  'use strict';

  const evidenceReports = {
    'GA-0921': {
      title: 'GA-0921 · Galaktik DNA Analizi',
      body: [
        '2021 yılı üçüncü çeyreğinde gerçekleştirilen çapraz dizilim taramalarında, üç farklı kıtadan toplanan süt örneklerinde standart sığır genomundan sapma gösteren düşük frekanslı diziler tespit edilmiştir. Bulgular, özellikle gece saatlerinde toplanan örneklerde belirginleşmiş ve örnekler arası varyansın alışılmadık derecede düşük olduğu görülmüştür.',
        'Enstitü Genom Bölümü, bu dizileri derin uzay radyasyon veritabanındaki sinyal örüntüleriyle karşılaştırmış, yapısal tekrar motiflerinde %87,4 oranında benzerlik not etmiştir. Bulgular kesin bir biyolojik transferi kanıtlamamakla birlikte, bilinçli bir dış etkilenme ihtimalini güçlendirmektedir.',
        'Rapor, ileri doğrulama için aynı sürüde uzunlamasına takip önerir. Ön değerlendirme puanı: yüksek öncelik.'
      ]
    },
    'GA-0774': {
      title: 'GA-0774 · Konya Tarla Deseni',
      body: [
        'Konya Ovası kuzey parselinde 2019 Haziran ayında tespit edilen geometrik desen, 42 metre çapında eşmerkezli halkalar ve merkezde boynuz benzeri iki çıkıntı içermektedir. Yerel hava koşulları ve insan erişim izleri incelenmiş; gece boyunca tarla giriş-çıkış kaydı bulunmamıştır.',
        'Saha fotoğrafları, bitki gövdelerinin kırılmadan eğildiğini göstermiştir. Bu özellik, klasik mekanik müdahalelerden farklı bir enerji dağılımına işaret etmektedir. Desen merkezinde ölçülen düşük düzeyli manyetik sapma, 48 saat boyunca korunmuştur.',
        'Bulgular, tarla desenlerinin rastlantısal bir estetik üretimden öte, sistematik bir iletişim denemesi olabileceğini düşündürmektedir.'
      ]
    },
    'GA-0412': {
      title: 'GA-0412 · Gece Kaçırılma Kaydı',
      body: [
        '2016 tarihli görsel kayıtta, üç dakikalık süre boyunca ahır üzerindeki ışık yoğunluğu ani biçimde artmakta; sürünün geri kalanı sabit kalırken tek bir hayvanın izden çıktığı görülmektedir. Olaydan sonra hayvan 19 saat boyunca bulunamamış, sonraki gün aynı koordinatta geri dönmüştür.',
        'Veteriner kontrollerinde ciddi travma izine rastlanmamış, ancak davranış paterninde belirgin değişiklik kaydedilmiştir: gece gökyüzüne sabit bakış, düzenli olmayan otlama ritmi ve metal yüzeylere artan ilgi.',
        'Kayıt kalitesi düşük olsa da olayın zaman damgası, tanık ifadeleri ve radar logları arasında tutarlılık bulunmaktadır.'
      ]
    },
    'GA-1147': {
      title: 'GA-1147 · Radar Sinyali (Eskişehir)',
      body: [
        '2024 yılı başında Eskişehir hava sahasında yürütülen rutin taramada, standart uçuş profillerine uymayan bir sinyal kümesi tespit edilmiştir. Hedef, kısa süreli hız değişimleri göstermiş ve uçuş yönünü 90 derecelik kırılmalarla güncellemiştir.',
        'Sinyalin yankı kesiti, klasik metal gövdelerden farklı olarak organik kütleye yakın dağınık bir profil sunmuştur. Aynı saat aralığında bölgede bulunan iki çiftlikte hayvan hareketlerinin olağan dışı biçimde senkronize olduğu raporlanmıştır.',
        'Ön analiz, radar olayının sahadaki biyolojik davranışlarla korelasyon taşıdığını göstermektedir. Takip sınıfı: kritik.'
      ]
    },
    'GA-0066': {
      title: 'GA-0066 · Arşiv Fotoğrafı 1978',
      body: [
        '1978 tarihli analog arşiv fotoğrafı, İzmir çevresinde gece çekilmiş bir tarlayı göstermektedir. Negatif tarama işlemi sonrası üst bölgede dairesel ışık yansıması ve yerde gölgeli bir sığır silueti tespit edilmiştir.',
        'Fotoğrafın manipülasyon riski, dönemin ekipman sınırları nedeniyle düşük kabul edilmiştir. Kimyasal yaşlandırma testi, baskının dönemiyle uyumlu olduğunu doğrulamıştır.',
        'Belge, enstitü tarihçesinde erken dönem gözlem kayıtları arasında temel referanslardan biri olarak değerlendirilmektedir.'
      ]
    },
    'GA-1102': {
      title: 'GA-1102 · Süt Bileşiminde Anomali Raporu',
      body: [
        '2023 laboratuvar serisinde, üç farklı çiftlikten gelen örneklerde laktoz-protein oranında gece saatlerine özgü dalgalanmalar saptanmıştır. Değerler, mevsimsel değişimle açıklanamayacak düzeydedir.',
        'Spektrometrik izlerde, dünya kaynaklı örneklerde nadir görülen düşük yoğunluklu bir çizgi bulunmuştur. Çizgi, ölçüm hatası olasılığı dışlanarak iki farklı cihazda doğrulanmıştır.',
        'Rapor, biyolojik sinyal aktarımı ihtimalini zayıf-orta düzeyde desteklemektedir.'
      ]
    },
    'GA-0530': {
      title: 'GA-0530 · Manyetik Alan Ölçümü',
      body: [
        '2018 saha ölçümlerinde Konya Ovası boyunca yer seviyesinde mikrotesla dalgalanmaları kaydedilmiştir. Dalgalanma tepe noktaları, sürülerin toplu yön değiştirdiği zamanlarla örtüşmektedir.',
        'Ölçüm ekipleri, bölgede bilinen enerji hattı veya jeolojik anomali bulunmadığını raporlamıştır. Bu durum, dış kaynaklı manyetik etkilenme ihtimalini güçlendirmektedir.',
        'İleri çalışma önerisi: aynı alanın ay fazlarına göre yeniden örneklenmesi.'
      ]
    },
    'GA-0889': {
      title: 'GA-0889 · Tanık İfadesi: Gece Nöbeti',
      body: [
        '2020 yılı kış aylarında gece nöbeti tutan çiftlik görevlisi, saat 02:14 civarında ahır üstünde dairesel ışık ve düşük frekanslı uğultu duyduğunu belirtmiştir.',
        'İfade sırasında tanığın anlatımı zaman damgası kayıtlarıyla uyumludur. Olay gecesi elektrik hattında kısa süreli gerilim düşümü belgelenmiştir.',
        'Tanıklık tek başına kanıt oluşturmasa da eşlik eden çevresel verilerle birlikte anlamlı bir dosya bütünlüğü sunmaktadır.'
      ]
    },
    'GA-1201': {
      title: 'GA-1201 · Uydu Görüntüsünde Işık Kümesi',
      body: [
        '2025 tarihli düşük yörünge uydu görüntüsünde, kırsal bir bölgede kısa aralıklarla yanıp sönen üçlü ışık kümeleri tespit edilmiştir. Işıkların dizilimi klasik tarım ekipmanı refleksleriyle örtüşmemektedir.',
        'Aynı zaman aralığında bölgedeki meteorolojik veriler açık gökyüzü göstermektedir; bulut yansıması veya yıldırım kaynaklı bir açıklama bulunmamıştır.',
        'Kayıt, kesin sonuç vermemekle birlikte olayın düzenli aralıklarla tekrarlandığını göstermesi açısından önemlidir.'
      ]
    },
    'GA-0301': {
      title: 'GA-0301 · Sığır Otlatma Davranışı Korelasyonu',
      body: [
        '2015 gözlem raporunda, belirli gecelerde sürülerin aynı anda kuzeybatı yönüne dizildiği ve yaklaşık 11 dakika boyunca hareketsiz kaldığı raporlanmıştır.',
        'Davranış modeli, ses uyarıları veya çoban yönlendirmesi olmadan gerçekleşmiştir. Benzer paternler iki ayrı ilde aynı hafta içerisinde kaydedilmiştir.',
        'Rapor, davranışsal korelasyonun tesadüf sınırlarını zorladığını belirtmekte ve olayın çoklu lokasyonda incelenmesini önermektedir.'
      ]
    }
  };

  const transcripts = {
    huseyin: {
      title: 'Röportaj Transkripti · Hüseyin K. (62)',
      lines: [
        ['Röportajcı', 'O geceyi tek cümleyle nasıl anlatırsınız?'],
        ['Hüseyin K.', 'Sanki ahırın üstüne sessiz bir gündüz indi, ama saat gece yarısını geçmişti.'],
        ['Röportajcı', 'Hayvanların ilk tepkisi ne oldu?'],
        ['Hüseyin K.', 'Hepsi birden sustu, sonra en yaşlı inek gözünü gökten ayırmadı.'],
        ['Röportajcı', 'Işık ne kadar sürdü?'],
        ['Hüseyin K.', 'Yaklaşık dört dakika; saatime iki kez bakmıştım.'],
        ['Röportajcı', 'Herhangi bir ses duydunuz mu?'],
        ['Hüseyin K.', 'Rüzgâr yoktu ama ince bir vızıltı vardı, traktör değil, başka bir şeydi.'],
        ['Röportajcı', 'Sabah fark ettiğiniz değişim neydi?'],
        ['Hüseyin K.', 'Kayıp yoktu ama bir tanesi bana eskisinden daha hesaplı bakıyordu.'],
        ['Röportajcı', 'O günden sonra olay tekrarlandı mı?'],
        ['Hüseyin K.', 'Aynı parlaklıkta değil ama iki kez daha sessizlik penceresi yaşadık.']
      ]
    },
    elif: {
      title: 'Röportaj Transkripti · Dr. Elif Yılmaz (28)',
      lines: [
        ['Röportajcı', 'Numunede sizi şaşırtan bulgu neydi?'],
        ['Dr. Elif Yılmaz', 'İzotop dağılımı biyolojik olarak tutarlıydı ama kökeni, bildiğimiz kaynaklarla uyuşmuyordu.'],
        ['Röportajcı', 'Ölçüm hatası ihtimalini elediniz mi?'],
        ['Dr. Elif Yılmaz', 'Aynı testi iki cihazla tekrarladık; sonuçlar milimetrik sapmayla aynı kaldı.'],
        ['Röportajcı', 'Bu bulgu hangi örneklerde çıktı?'],
        ['Dr. Elif Yılmaz', 'Sadece gece sağımı yapılan örneklerde belirginleşti.'],
        ['Röportajcı', 'Veriyi dış laboratuvara gönderdiniz mi?'],
        ['Dr. Elif Yılmaz', 'Evet, kör test olarak gönderdik ve benzer bir profil geri geldi.'],
        ['Röportajcı', 'Bu durum neyi düşündürdü?'],
        ['Dr. Elif Yılmaz', 'Veri, dış etkilenme ihtimalini laboratuvar gündemine soktu.'],
        ['Röportajcı', 'Bilim dünyası nasıl tepki verdi?'],
        ['Dr. Elif Yılmaz', 'Önce sessizlik oldu, sonra herkes aynı soruyu sordu: Bu kadar düzenli sapma tesadüf mü?']
      ]
    },
    mehmet: {
      title: 'Röportaj Transkripti · Mehmet A. (45)',
      lines: [
        ['Röportajcı', 'Kaybolan inek ne zaman geri döndü?'],
        ['Mehmet A.', 'Üçüncü gün şafakta, tam kaybolduğu yere yakın bir noktada duruyordu.'],
        ['Röportajcı', 'Arama sürecini nasıl yürüttünüz?'],
        ['Mehmet A.', 'Çevre köylerle haberleştik, dronla taradık ama iz bulamadık.'],
        ['Röportajcı', 'Sağlık durumunda sorun var mıydı?'],
        ['Mehmet A.', 'Veteriner ciddi bir sorun bulmadı ama davranışı belirgin biçimde değişmişti.'],
        ['Röportajcı', 'Nasıl bir değişim?'],
        ['Mehmet A.', 'Sürüden biraz ayrı yürüyordu, özellikle gece göğe uzun süre bakıyordu.'],
        ['Röportajcı', 'Beslenme düzeni etkilendi mi?'],
        ['Mehmet A.', 'Evet, yem saatinde acele etmiyor; önce etrafı dinler gibi bekliyordu.'],
        ['Röportajcı', 'Bunu neye bağlıyorsunuz?'],
        ['Mehmet A.', 'Açıklaması kolay değil ama döndüğünde aynı hayvan değildi.']
      ]
    },
    cemal: {
      title: 'Röportaj Transkripti · Cemal T. (67)',
      lines: [
        ['Röportajcı', 'Radar kayıtlarında ne gördünüz?'],
        ['Cemal T.', 'Standart uçuş profiline uymayan, ani yön değiştiren hedefler.'],
        ['Röportajcı', 'Bu sinyalleri nasıl yorumladınız?'],
        ['Cemal T.', 'Metal bir araçtan çok organik yankı veren bir yapı gibiydi.'],
        ['Röportajcı', 'İrtifa davranışı nasıldı?'],
        ['Cemal T.', 'Bir anda yükselip sabitleniyor, sonra sessizce kayboluyordu.'],
        ['Röportajcı', 'Sahadaki gözlemlerle bağlantı kurdunuz mu?'],
        ['Cemal T.', 'Aynı saatlerde yakın çiftliklerden olağandışı hayvan hareketi raporları geliyordu.'],
        ['Röportajcı', 'Kayıtlar arşivde duruyor mu?'],
        ['Cemal T.', 'Evet, üç dosya hâlâ teknik inceleme bölümünde.'],
        ['Röportajcı', 'Kariyerinizde benzer bir örnek var mıydı?'],
        ['Cemal T.', 'Çok sinyal gördüm, ama bu kadar inek benzeri profil ilk kez gördüm.']
      ]
    },
    ayse: {
      title: 'Röportaj Transkripti · Ayşe Y. (34)',
      lines: [
        ['Röportajcı', 'Muayene sırasında dikkat çeken bulgu neydi?'],
        ['Ayşe Y.', 'Fizyolojik değerler normaldi ama hayvanların tepki eşiği alışılmadık derecede düşüktü.'],
        ['Röportajcı', 'Davranış örüntüsü nasıldı?'],
        ['Ayşe Y.', 'Işık yoğunluğu artınca toplu halde tek yöne dönüp sessizleşiyorlardı.'],
        ['Röportajcı', 'Bu davranış ne kadar sürüyordu?'],
        ['Ayşe Y.', 'Ortalama sekiz ila on iki dakika arası.'],
        ['Röportajcı', 'Klasik stres göstergeleri var mıydı?'],
        ['Ayşe Y.', 'Nabız artışı sınırlıydı; panik yerine odaklanma vardı.'],
        ['Röportajcı', 'Bu tablo neyi düşündürüyor?'],
        ['Ayşe Y.', 'Klasik stres yanıtı değil; daha çok bir çağrıya cevap veriyor gibiydiler.'],
        ['Röportajcı', 'Takip öneriniz?'],
        ['Ayşe Y.', 'Gece davranışlarının biyometrik sensörlerle uzun süreli izlenmesi gerekir.']
      ]
    },
    burak: {
      title: 'Röportaj Transkripti · Burak D. (29)',
      lines: [
        ['Röportajcı', 'Drone kaydında ne yakaladınız?'],
        ['Burak D.', 'Tarlanın üstünde üçlü ışık düzeni vardı, rüzgârla hareket etmiyordu.'],
        ['Röportajcı', 'Kayıt mesafesi neydi?'],
        ['Burak D.', 'Yaklaşık 140 metre yükseklikten, sabit açıda çekim aldım.'],
        ['Röportajcı', 'Görüntüyü nasıl doğruladınız?'],
        ['Burak D.', 'Ham kayıtları zaman damgasıyla sakladım, piksel analizi yaptık.'],
        ['Röportajcı', 'Bir sahtecilik ihtimali?'],
        ['Burak D.', 'Montaj izi yok; ışık yoğunluğu zemindeki gölgelerle tutarlıydı.'],
        ['Röportajcı', 'Sahada başka tanık var mıydı?'],
        ['Burak D.', 'İki saha çalışanı aynı anda olayı çıplak gözle gördü.'],
        ['Röportajcı', 'Sizi en çok şaşırtan detay?'],
        ['Burak D.', 'Işıklar sönünce sürü aynı anda kuzeye döndü, bunu komutla yaptırmak imkânsız.']
      ]
    }
  };

  const qs = (s, p = document) => p.querySelector(s);
  const qsa = (s, p = document) => [...p.querySelectorAll(s)];

  function initThemeToggle() {
    const body = document.body;
    const toggle = qs('[data-theme-toggle]');
    if (!body || !toggle) return;

    const saved = localStorage.getItem('uiai-theme');
    if (saved === 'light') body.classList.add('theme-light');

    const setIcon = () => {
      const isLight = body.classList.contains('theme-light');
      toggle.textContent = isLight ? '☀️' : '🌙';
      toggle.setAttribute('aria-label', isLight ? 'Koyu temaya geç' : 'Açık temaya geç');
    };

    setIcon();

    toggle.addEventListener('click', () => {
      body.classList.toggle('theme-light');
      localStorage.setItem('uiai-theme', body.classList.contains('theme-light') ? 'light' : 'dark');
      setIcon();
    });
  }

  function initMobileMenu() {
    const btn = qs('[data-menu-toggle]');
    const nav = qs('[data-main-nav]');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', String(expanded));
    });

    qsa('.nav-link', nav).forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  function initActiveNav() {
    const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    qsa('.nav-link').forEach((link) => {
      const href = (link.getAttribute('href') || '').toLowerCase();
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initStars() {
    const canvas = qs('#star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars = [];
    const fit = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars = Array.from({ length: Math.max(70, Math.floor(canvas.width / 14)) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.4,
        a: Math.random(),
        s: Math.random() * 0.013 + 0.004
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((st) => {
        st.a += st.s;
        if (st.a > 1 || st.a < 0.08) st.s *= -1;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${st.a})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    fit();
    draw();
    window.addEventListener('resize', fit);
  }

  function initCounters() {
    const counters = qsa('[data-counter]');
    if (!counters.length) return;

    const animate = (el) => {
      const target = Number(el.dataset.target || 0);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();

      const step = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(target * eased);
        el.textContent = `${prefix}${val.toLocaleString('tr-TR')}${suffix}`;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach((c) => io.observe(c));
  }

  function initModalSystem() {
    const modal = qs('#globalModal');
    if (!modal) return;
    const titleEl = qs('[data-modal-title]', modal);
    const bodyEl = qs('[data-modal-body]', modal);
    const closeBtn = qs('[data-modal-close]', modal);
    let lastFocus = null;

    const close = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (lastFocus) lastFocus.focus();
    };

    const open = (title, html, className = '') => {
      if (!titleEl || !bodyEl) return;
      lastFocus = document.activeElement;
      titleEl.textContent = title;
      bodyEl.className = className;
      bodyEl.innerHTML = html;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      closeBtn?.focus();
    };

    qsa('[data-open-modal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.modalType;
        const key = btn.dataset.modalKey;

        if (type === 'evidence' && key && evidenceReports[key]) {
          const item = evidenceReports[key];
          const html = item.body.map((p) => `<p>${p}</p>`).join('');
          open(item.title, html, 'evidence-modal');
        }

        if (type === 'transcript' && key && transcripts[key]) {
          const item = transcripts[key];
          const lines = item.lines.map(([who, text]) => `<div class="transcript-line"><strong>${who}:</strong> ${text}</div>`).join('');
          const html = `<div class="transcript-modal"><div class="player-strip" aria-hidden="true"></div><div class="transcript-lines">${lines}</div></div>`;
          open(item.title, html, 'transcript-modal');
        }
      });
    });

    closeBtn?.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
  }

  function initFilters() {
    qsa('[data-filter-group]').forEach((group) => {
      const chips = qsa('.filter-chip', group);
      const target = group.dataset.filterTarget;
      if (!target) return;
      const items = qsa(`[data-filter-item="${target}"]`);
      if (!chips.length || !items.length) return;

      chips.forEach((chip) => {
        chip.addEventListener('click', () => {
          const value = chip.dataset.filter || 'all';
          chips.forEach((c) => c.classList.remove('active'));
          chip.classList.add('active');

          items.forEach((item) => {
            const tags = item.dataset.tags || '';
            const ok = value === 'all' || tags.includes(value);
            item.classList.toggle('hide', !ok);
          });
        });
      });
    });
  }

  function initLightbox() {
    const box = qs('#lightbox');
    if (!box) return;

    const img = qs('.lightbox-img', box);
    const caption = qs('[data-lightbox-caption]', box);
    const closeBtn = qs('[data-lightbox-close]', box);
    const prevBtn = qs('[data-lightbox-prev]', box);
    const nextBtn = qs('[data-lightbox-next]', box);
    const items = qsa('.gallery-item[data-gallery]');
    if (!img || !caption || !items.length) return;

    let index = 0;

    const show = (i) => {
      if (!items.length) return;
      index = (i + items.length) % items.length;
      const item = items[index];
      const full = item.dataset.full || '';
      const cap = item.dataset.caption || '';
      img.src = full;
      caption.textContent = cap;
    };

    const open = (i) => {
      show(i);
      box.classList.add('open');
      box.setAttribute('aria-hidden', 'false');
      closeBtn?.focus();
    };

    const close = () => {
      box.classList.remove('open');
      box.setAttribute('aria-hidden', 'true');
    };

    items.forEach((item, i) => {
      item.addEventListener('click', () => open(i));
    });

    prevBtn?.addEventListener('click', () => show(index - 1));
    nextBtn?.addEventListener('click', () => show(index + 1));
    closeBtn?.addEventListener('click', close);
    box.addEventListener('click', (e) => {
      if (e.target === box) close();
    });

    document.addEventListener('keydown', (e) => {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  function initWitnessCalculator() {
    const form = qs('#witnessCalcForm');
    if (!form) return;
    const scoreEl = qs('#calcScore');
    const bar = qs('#calcBar');
    const textEl = qs('#calcText');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      let score = 38;
      score += Number(data.get('time') || 0);
      score += Number(data.get('animal') || 0);
      score += Number(data.get('device') || 0);
      score += Number(data.get('witness') || 0);
      score += Number(data.get('trace') || 0);
      score = Math.max(8, Math.min(99, score));

      if (scoreEl) scoreEl.textContent = `%${score}`;
      if (bar) bar.style.width = `${score}%`;

      let msg = 'Tanıklığınız ön inceleme için kayda alındı.';
      if (score >= 80) msg = 'Tanıklığınız Enstitü standartlarına yüksek düzeyde yakın. Saha ekibimiz sizinle iletişime geçebilir.';
      else if (score >= 60) msg = 'Tanıklığınız anlamlı bulundu. Destekleyici belge eklerseniz dosya önceliği artacaktır.';
      else if (score >= 45) msg = 'Tanıklığınız geçerli; ek radar, fotoğraf veya tanık beyanı önerilir.';
      else msg = 'Tanıklığınız arşivde saklandı. Olay tekrar ederse saat ve yön bilgisini not almanızı öneririz.';
      if (textEl) textEl.textContent = msg;
    });
  }

  function initCowTranslator() {
    const form = qs('#cowTranslatorForm');
    if (!form) return;
    const out = qs('#cowOutput');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = (qs('#cowInput')?.value || '').trim();
      if (!out) return;
      if (!input) {
        out.textContent = 'Lütfen çevrilecek bir cümle giriniz.';
        return;
      }

      const words = input.toLowerCase().split(/\s+/).filter(Boolean);
      const converted = words
        .map((w, i) => {
          const len = w.replace(/[^a-zçğıöşü]/gi, '').length;
          const base = len % 3 === 0 ? 'MÖÖ' : len % 2 === 0 ? 'möö' : 'Möö';
          return i % 4 === 0 ? `${base}-möö` : base;
        })
        .join(' ');
      const confidence = 10 + ((input.length + words.length * 7) % 21);
      out.innerHTML = `<strong>${converted}…</strong><br><small>Çeviri güvenilirliği: %${confidence} (Deneysel Bovin Dil Modeli v0.9)</small>`;
    });
  }

  function initFaqAccordion() {
    const buttons = qsa('.accordion-btn');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        if (!(content instanceof HTMLElement)) return;
        const open = btn.getAttribute('aria-expanded') === 'true';

        buttons.forEach((other) => {
          const c = other.nextElementSibling;
          if (c instanceof HTMLElement) c.style.maxHeight = '0px';
          other.setAttribute('aria-expanded', 'false');
        });

        if (!open) {
          btn.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = `${content.scrollHeight + 12}px`;
        }
      });
    });
  }

  function initContactForm() {
    const form = qs('#contactForm');
    if (!form) return;
    const notice = qs('#contactNotice');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      if (notice) {
        notice.textContent = 'İhbarınız kayda alındı. Saha ekibimiz 3–5 iş günü içinde değerlendirecektir.';
        notice.classList.remove('hide');
      }
    });
  }

  function initReveal() {
    const items = qsa('.reveal');
    if (!items.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.16 });
    items.forEach((item) => obs.observe(item));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initActiveNav();
    initStars();
    initCounters();
    initModalSystem();
    initFilters();
    initLightbox();
    initWitnessCalculator();
    initCowTranslator();
    initFaqAccordion();
    initContactForm();
    initReveal();
  });
})();
