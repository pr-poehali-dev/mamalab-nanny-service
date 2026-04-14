import { useState } from "react";
import Icon from "@/components/ui/icon";

const NANNIES = [
  {
    name: "Анна Петрова",
    age: 34,
    exp: "8 лет",
    rating: 4.9,
    reviews: 47,
    tags: ["Грудной уход", "Монтессори", "Первая помощь"],
    avatar: "АП",
    color: "bg-peach-light",
    review: "Анна — настоящий профессионал. Наш малыш каждый раз встречает её с восторгом!",
    reviewer: "Мария К.",
  },
  {
    name: "Светлана Орлова",
    age: 29,
    exp: "5 лет",
    rating: 4.8,
    reviews: 31,
    tags: ["Творчество", "Английский", "Прогулки"],
    avatar: "СО",
    color: "bg-blush",
    review: "Светлана очень внимательная и добрая. Дети обожают её занятия!",
    reviewer: "Дарья М.",
  },
  {
    name: "Елена Смирнова",
    age: 42,
    exp: "15 лет",
    rating: 5.0,
    reviews: 89,
    tags: ["Новорождённые", "Ночной уход", "Педиатрия"],
    avatar: "ЕС",
    color: "bg-sage/30",
    review: "Елена — находка для нашей семьи. Спокойная, надёжная, всегда рядом.",
    reviewer: "Ольга Н.",
  },
];

const SERVICES = [
  { icon: "Baby", title: "Уход за малышами", desc: "Профессиональный уход за детьми от 0 до 3 лет", price: "от 350 ₽/час" },
  { icon: "Sun", title: "Дневная няня", desc: "Развитие, прогулки, творчество и обучение", price: "от 280 ₽/час" },
  { icon: "Moon", title: "Ночная няня", desc: "Помощь с кормлением и сном для новорождённых", price: "от 400 ₽/час" },
  { icon: "Briefcase", title: "Помощь по дому", desc: "Лёгкие домашние дела вместе с уходом за детьми", price: "от 320 ₽/час" },
];

const STEPS = [
  { num: "01", title: "Оставьте заявку", desc: "Расскажите нам о вашем ребёнке и пожеланиях к няне" },
  { num: "02", title: "Подбор кандидатов", desc: "Мы предложим 2–3 подходящие кандидатуры с анкетами" },
  { num: "03", title: "Знакомство", desc: "Встреча с няней у вас дома, задайте все вопросы" },
  { num: "04", title: "Начало работы", desc: "Выбранная няня приступает, вы всегда на связи с нами" },
];

const ARTICLES = [
  { tag: "Развитие", title: "Как выбрать няню для малыша до года", time: "5 мин" },
  { tag: "Здоровье", title: "Первая помощь: что должна знать каждая няня", time: "7 мин" },
  { tag: "Советы", title: "Как познакомить ребёнка с новой няней без стресса", time: "4 мин" },
];

const FAQS = [
  { q: "Как проверяются няни перед трудоустройством?", a: "Все няни проходят многоэтапный отбор: проверку документов, справки об отсутствии судимостей, личное собеседование и тестирование педагогических навыков." },
  { q: "Можно ли найти няню срочно?", a: "Да, мы предлагаем услугу «Срочный подбор» — кандидат будет готов в течение 24 часов." },
  { q: "Как работает система рейтингов?", a: "После каждой смены родители могут оставить оценку и отзыв. Рейтинг формируется автоматически на основе всех оценок." },
  { q: "Что делать, если няня не подошла?", a: "Мы гарантируем замену в течение 3 рабочих дней без дополнительной оплаты за подбор." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-4 h-4 ${star <= Math.round(rating) ? "text-peach fill-current" : "text-border fill-current"}`} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function NannyCard({ nanny, delay }: { nanny: typeof NANNIES[0]; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="bg-card rounded-4xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-slide-up flex flex-col gap-4"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-16 h-16 rounded-3xl ${nanny.color} flex items-center justify-center font-display text-xl font-semibold text-warm-brown flex-shrink-0`}>
          {nanny.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-xl font-semibold text-foreground">{nanny.name}</div>
          <div className="text-sm text-muted-foreground">{nanny.age} лет · опыт {nanny.exp}</div>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={nanny.rating} />
            <span className="text-sm font-medium text-foreground">{nanny.rating}</span>
            <span className="text-sm text-muted-foreground">({nanny.reviews} отзывов)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {nanny.tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 bg-peach-light text-warm-brown rounded-full font-body">
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-cream rounded-3xl p-4">
        <p className="text-sm text-foreground italic font-display">«{nanny.review}»</p>
        <p className="text-xs text-muted-foreground mt-1">— {nanny.reviewer}</p>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full py-3 rounded-3xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-peach hover:text-primary-foreground transition-colors duration-200"
      >
        {expanded ? "Скрыть профиль" : "Посмотреть профиль"}
      </button>

      {expanded && (
        <div className="text-sm text-muted-foreground text-center animate-fade-in">
          Полные анкеты доступны после регистрации — это бесплатно!
        </div>
      )}
    </div>
  );
}

function FaqItem({ item, idx }: { item: typeof FAQS[0]; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-3xl overflow-hidden bg-card">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <span className="font-body font-medium text-foreground pr-4">{item.q}</span>
        <span className={`transition-transform duration-300 flex-shrink-0 text-peach ${open ? "rotate-45" : ""}`}>
          <Icon name="Plus" size={20} />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground text-sm animate-fade-in leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [contactForm, setContactForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-display text-2xl font-semibold text-foreground tracking-wide">
            МАМА<span className="text-peach">ЛАБ</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
            {["#about", "#services", "#how", "#nannies", "#articles", "#faq", "#contact"].map((href, i) => {
              const labels = ["О сервисе", "Услуги", "Как работает", "Няни", "Статьи", "FAQ", "Контакты"];
              return <a key={href} href={href} className="hover:text-foreground transition-colors">{labels[i]}</a>;
            })}
          </div>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Подобрать няню
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="container pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-peach-light rounded-full text-sm text-warm-brown mb-6 font-body">
            <Icon name="ShieldCheck" size={16} />
            Все няни прошли проверку
          </div>
          <h1 className="font-display text-6xl md:text-7xl leading-tight text-foreground mb-6">
            Забота<br />
            <span className="text-peach italic">с первого</span><br />
            дня
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
            МАМАЛАБ — сервис подбора проверенных нянь с рейтингами и отзывами от тысяч семей. Найдите того, кому доверите самое дорогое.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-base hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:scale-105">
              Найти няню
            </a>
            <a href="#nannies" className="border border-border text-foreground px-8 py-4 rounded-full font-medium text-base hover:bg-secondary transition-colors">
              Смотреть анкеты
            </a>
          </div>
          <div className="flex gap-8 mt-12">
            {[["500+", "Проверенных нянь"], ["4.9", "Средний рейтинг"], ["3000+", "Счастливых семей"]].map(([n, l]) => (
              <div key={n}>
                <div className="font-display text-3xl font-semibold text-foreground">{n}</div>
                <div className="text-xs text-muted-foreground font-body">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in hidden md:block">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-peach-light blob animate-float opacity-60" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blush blob-2 animate-float opacity-50" style={{ animationDelay: "3s" }} />
          <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl aspect-[3/4]">
            <img
              src="https://cdn.poehali.dev/projects/c6f6b751-1f3d-4383-80eb-da4678fa6496/files/4d5617cd-452e-492f-bbc4-a360e8f882cc.jpg"
              alt="Заботливая няня с ребёнком"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur rounded-2xl px-5 py-4 shadow-lg z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sage/30 rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={18} className="text-peach" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Последний отзыв</div>
                <div className="text-sm font-medium text-foreground">«Анна — лучшая!»</div>
                <StarRating rating={5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-secondary py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-5xl text-foreground mb-4">О сервисе</h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              МАМАЛАБ — это команда профессионалов, которые верят: каждый ребёнок заслуживает лучшего ухода, а каждая семья — душевного спокойствия.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "ShieldCheck", color: "bg-peach-light", title: "Безопасность", desc: "Проверка документов, справок и рекомендаций каждой няни до регистрации на платформе" },
              { icon: "Star", color: "bg-blush", title: "Честные рейтинги", desc: "Реальные отзывы от родителей после каждой смены — никаких накруток" },
              { icon: "HeartHandshake", color: "bg-sage/30", title: "Забота о семье", desc: "Менеджер всегда на связи, поможет с заменой и ответит на любые вопросы" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-4xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 ${item.color} rounded-3xl flex items-center justify-center mb-5`}>
                  <Icon name={item.icon} fallback="Star" size={24} className="text-warm-brown" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 container">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-foreground mb-4">Услуги</h2>
          <p className="font-body text-muted-foreground text-lg">Найдём специалиста под любую потребность вашей семьи</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-4xl p-6 hover:border-peach hover:shadow-lg transition-all duration-300 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="w-12 h-12 bg-peach-light rounded-2xl flex items-center justify-center mb-5 group-hover:bg-peach transition-colors">
                <Icon name={s.icon} fallback="Star" size={22} className="text-warm-brown group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <div className="text-peach font-medium text-sm font-body">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-cream py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-foreground mb-4">Как работает</h2>
            <p className="font-body text-muted-foreground text-lg">Четыре простых шага до любимой няни</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative animate-slide-up" style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}>
                <div className="bg-card rounded-4xl p-7 shadow-sm h-full">
                  <div className="font-display text-5xl text-peach/30 font-bold mb-4">{step.num}</div>
                  <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 text-border">
                    <Icon name="ChevronRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NANNIES */}
      <section id="nannies" className="py-24 container">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-foreground mb-4">Наши няни</h2>
          <p className="font-body text-muted-foreground text-lg">Рейтинги и отзывы — только от настоящих родителей</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {NANNIES.map((nanny, i) => (
            <NannyCard key={nanny.name} nanny={nanny} delay={i * 150} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105">
            <Icon name="Search" size={18} />
            Найти свою няню
          </a>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="bg-secondary py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-foreground mb-4">Статьи и советы</h2>
            <p className="font-body text-muted-foreground text-lg">Полезные материалы для внимательных родителей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((art, i) => (
              <div key={art.title} className="bg-card rounded-4xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer animate-slide-up" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>
                <div className="bg-peach-light h-44 flex items-center justify-center">
                  <Icon name="BookOpen" size={40} className="text-peach/50" />
                </div>
                <div className="p-6">
                  <span className="text-xs px-3 py-1 bg-blush text-warm-brown rounded-full font-body">{art.tag}</span>
                  <h3 className="font-display text-xl text-foreground mt-3 mb-3 group-hover:text-peach transition-colors leading-snug">{art.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <Icon name="Clock" size={12} />
                    {art.time} чтения
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-foreground mb-4">Вопросы и ответы</h2>
          <p className="font-body text-muted-foreground text-lg">Ответы на самые частые вопросы</p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((item, idx) => (
            <FaqItem key={idx} item={item} idx={idx} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-peach-light py-24">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl text-foreground mb-4">Найти няню</h2>
            <p className="font-body text-muted-foreground text-lg">Оставьте заявку — мы свяжемся в течение часа</p>
          </div>
          {sent ? (
            <div className="bg-card rounded-4xl p-12 text-center shadow-sm animate-fade-in">
              <div className="w-20 h-20 bg-peach-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={36} className="text-peach" />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-3">Заявка принята!</h3>
              <p className="font-body text-muted-foreground">Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
          ) : (
            <div className="bg-card rounded-4xl p-8 shadow-sm">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Ваше имя</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Как вас зовут?"
                    className="w-full px-5 py-4 bg-background border border-border rounded-3xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-peach/40 focus:border-peach transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Номер телефона</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-5 py-4 bg-background border border-border rounded-3xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-peach/40 focus:border-peach transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Пожелания (необязательно)</label>
                  <textarea
                    value={contactForm.comment}
                    onChange={(e) => setContactForm({ ...contactForm, comment: e.target.value })}
                    placeholder="Возраст ребёнка, особые потребности, удобное время..."
                    rows={4}
                    className="w-full px-5 py-4 bg-background border border-border rounded-3xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-peach/40 focus:border-peach transition-all resize-none"
                  />
                </div>
                <button
                  onClick={() => { if (contactForm.name && contactForm.phone) setSent(true); }}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-full font-medium text-base hover:opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-100"
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground text-center font-body">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="font-display text-2xl font-semibold mb-3">
                МАМА<span className="text-peach">ЛАБ</span>
              </div>
              <p className="font-body text-sm text-background/60 leading-relaxed">Сервис подбора проверенных нянь с рейтингами от реальных родителей</p>
            </div>
            <div>
              <div className="font-body font-medium mb-3 text-background/80 text-sm uppercase tracking-wider">Сервис</div>
              <div className="flex flex-col gap-2">
                {["О сервисе", "Услуги", "Как работает", "Наши няни"].map((l) => (
                  <a key={l} href="#" className="font-body text-sm text-background/60 hover:text-background transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-body font-medium mb-3 text-background/80 text-sm uppercase tracking-wider">Контакты</div>
              <div className="flex flex-col gap-2 text-sm text-background/60 font-body">
                <span>+7 (800) 000-00-00</span>
                <span>hello@mamalab.ru</span>
                <span>Москва</span>
              </div>
            </div>
            <div>
              <div className="font-body font-medium mb-3 text-background/80 text-sm uppercase tracking-wider">Соцсети</div>
              <div className="flex gap-3">
                {["Instagram", "MessageCircle", "Send"].map((ic) => (
                  <div key={ic} className="w-9 h-9 bg-background/10 rounded-xl flex items-center justify-center hover:bg-peach/30 transition-colors cursor-pointer">
                    <Icon name={ic} fallback="Link" size={16} className="text-background/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-background/40">© 2024 МАМАЛАБ. Все права защищены.</p>
            <div className="flex gap-6">
              {["Политика конфиденциальности", "Условия использования"].map((l) => (
                <a key={l} href="#" className="font-body text-xs text-background/40 hover:text-background/70 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}