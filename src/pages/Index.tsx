import { useState } from "react";
import Icon from "@/components/ui/icon";

const SERVICES = [
  {
    icon: "Clock",
    title: "Ситуационная няня",
    desc: "Помощь на несколько часов, вечер, сутки или выходные — когда нужна поддержка здесь и сейчас.",
  },
  {
    icon: "CalendarDays",
    title: "Няня на постоянной основе",
    desc: "Подбор специалиста в семью по удобному графику для регулярной и стабильной помощи.",
  },
  {
    icon: "Baby",
    title: "Няня для младенца",
    desc: "Бережный уход, прогулки и игры для малышей — с вниманием к режиму и особенностям ребёнка.",
  },
  {
    icon: "GraduationCap",
    title: "Няня для старших детей",
    desc: "Сопровождение на занятия, помощь с домашними заданиями и развивающие активности.",
  },
];

const WHY = [
  {
    icon: "Shuffle",
    title: "Гибкие форматы",
    desc: "Ситуационная помощь на несколько часов, вечер, сутки, выходные или длительное сопровождение в семье.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Подбор под задачу",
    desc: "Учитываем возраст ребёнка, ваши пожелания и объём обязанностей, чтобы найти подходящего специалиста.",
  },
  {
    icon: "HeartHandshake",
    title: "Спокойствие родителей",
    desc: "Вы описываете запрос, а мы помогаем найти человека, которому можно доверить заботу о ребёнке.",
  },
];

const STEPS = [
  { title: "Оставьте заявку", desc: "Напишите, какая помощь нужна, на какой срок и в каком формате вы ищете няню." },
  { title: "Опишите задачи", desc: "Укажите возраст ребёнка, пожелания к кандидату, график и важные особенности." },
  { title: "Получите подбор", desc: "Мы подберём подходящего специалиста и свяжемся с вами для согласования деталей." },
];

const FAQS = [
  { q: "В каких городах вы работаете?", a: "Мы работаем во Владивостоке и Артёме. Свяжитесь с нами по телефону — мы подберём няню в вашем районе." },
  { q: "Как быстро можно найти няню?", a: "Для ситуационной помощи мы стараемся подобрать специалиста в течение 1–2 дней. Оставьте заявку и мы сразу начнём поиск." },
  { q: "Что нужно для постоянного подбора?", a: "Расскажите нам о ребёнке, графике и пожеланиях — мы предложим подходящих кандидатов и организуем знакомство." },
  { q: "Какие обязанности может взять на себя няня?", a: "Уход за ребёнком, прогулки, игры, занятия, сопровождение на мероприятия, помощь с домашними заданиями и лёгкие домашние дела." },
];

function FaqItem({ item }: { item: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-foreground pr-4 text-base">{item.q}</span>
        <span className={`transition-transform duration-300 flex-shrink-0 text-primary ${open ? "rotate-45" : ""}`}>
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
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-[66px]">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/c6f6b751-1f3d-4383-80eb-da4678fa6496/bucket/1ce2fb31-2f37-4768-be3b-378ec3f2fd3d.png"
              alt="МАМАЛАБ"
              className="w-10 h-10 object-contain"
            />
            <div>
              <div className="font-black text-lg leading-none text-foreground tracking-wide">МАМАЛАБ</div>
              <div className="text-xs text-muted-foreground leading-none mt-0.5">Ваш помощник в заботе о детях</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground font-semibold">
            {[["#about", "О сервисе"], ["#services", "Услуги"], ["#how", "Как работает"], ["#contacts", "Контакты"]].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-foreground transition-colors">{label}</a>
            ))}
          </div>
          <a
            href="#contacts"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-2xl text-sm font-bold hover:opacity-90 transition-opacity shadow-sm"
          >
            Оставить заявку
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="container pt-16 pb-10 grid md:grid-cols-[1.15fr_.85fr] gap-8 items-center">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light text-teal-deep text-sm font-bold mb-5">
            <Icon name="MapPin" size={14} />
            Владивосток и Артём
          </span>
          <h1 className="text-[clamp(34px,5vw,56px)] leading-[1.05] font-black text-foreground mb-4">
            Забота о ребёнке,<br />
            когда маме нужна<br />
            <span className="text-teal-dark">поддержка</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-7 max-w-lg">
            МАМАЛАБ подбирает нянь для младенцев и старших детей: на несколько часов, вечер, сутки, выходные или на постоянной основе по графику.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#contacts"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-2xl font-bold hover:opacity-90 transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              Подобрать няню
            </a>
            <a
              href="#services"
              className="bg-white border border-border text-foreground px-7 py-3.5 rounded-2xl font-bold hover:bg-secondary transition-colors"
            >
              Посмотреть услуги
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ["Ситуационная", "Няня на часы, вечер, сутки и выходные"],
              ["Постоянная", "Подбор няни в семью по удобному графику"],
              ["Удобно", "Оставляете заявку — мы подбираем специалиста"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white border border-border rounded-2xl p-4 shadow-sm">
                <div className="font-bold text-teal-deep mb-1 text-sm">{title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup card */}
        <div className="hidden md:block animate-fade-in">
          <div className="bg-white border border-border rounded-3xl p-6 shadow-[0_10px_40px_rgba(31,41,55,0.08)]">
            <div className="flex items-center justify-between mb-5">
              <span className="px-4 py-1.5 rounded-full bg-teal-light text-teal-deep text-sm font-bold">МАМАЛАБ</span>
              <span className="px-4 py-1.5 rounded-full bg-teal-light text-teal-deep text-sm font-bold">Забота рядом</span>
            </div>
            <div className="bg-secondary/60 rounded-2xl p-5 mb-3">
              <h3 className="font-bold text-foreground mb-2">Что умеет няня</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Уход за младенцами, прогулки, игры, занятия, сопровождение на мероприятия, помощь с домашними заданиями.</p>
            </div>
            <div className="bg-secondary/60 rounded-2xl p-5 mb-5">
              <h3 className="font-bold text-foreground mb-2">Когда нужна помощь</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Если у вас загруженный день, важная встреча, адаптация ребёнка или нужна регулярная помощь по графику.</p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-teal-light rounded-2xl">
              <img
                src="https://cdn.poehali.dev/projects/c6f6b751-1f3d-4383-80eb-da4678fa6496/bucket/1ce2fb31-2f37-4768-be3b-378ec3f2fd3d.png"
                alt="logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-bold text-teal-deep text-sm">МАМАЛАБ</div>
                <div className="text-xs text-teal-deep/70">Владивосток · Артём</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[clamp(26px,3vw,38px)] font-black text-foreground mb-3">Почему выбирают МАМАЛАБ</h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы помогаем семьям быстро найти подходящую няню под возраст ребёнка, режим семьи и формат помощи.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {WHY.map((item, i) => (
              <div
                key={item.title}
                className="bg-background border border-border rounded-3xl p-6 hover:shadow-md transition-all animate-slide-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="w-12 h-12 bg-teal-light rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} fallback="Star" size={22} className="text-teal-deep" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 container">
        <div className="max-w-2xl mb-12">
          <h2 className="text-[clamp(26px,3vw,38px)] font-black text-foreground mb-3">Какие услуги доступны</h2>
          <p className="text-muted-foreground leading-relaxed">
            Вы можете выбрать разовую помощь или регулярный формат работы — в зависимости от вашей семьи и расписания.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="bg-white border border-border rounded-3xl p-6 hover:border-primary hover:shadow-md transition-all group animate-slide-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="w-12 h-12 bg-teal-light rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Icon name={s.icon} fallback="Star" size={22} className="text-teal-deep group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white py-20">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[clamp(26px,3vw,38px)] font-black text-foreground mb-3">Как это работает</h2>
            <p className="text-muted-foreground leading-relaxed">Простой путь до подходящей няни — без лишних действий и долгого поиска.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="bg-background border border-border rounded-3xl p-6 relative animate-slide-up"
                style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
              >
                <div className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-black text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container max-w-3xl">
        <div className="mb-12">
          <h2 className="text-[clamp(26px,3vw,38px)] font-black text-foreground mb-3">Частые вопросы</h2>
          <p className="text-muted-foreground leading-relaxed">Ответы на самые частые вопросы родителей</p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((item, idx) => (
            <FaqItem key={idx} item={item} />
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-white py-20">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[clamp(26px,3vw,38px)] font-black text-foreground mb-3">Контакты</h2>
            <p className="text-muted-foreground leading-relaxed">Свяжитесь с нами удобным способом — мы подскажем формат помощи и начнём подбор.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { city: "Владивосток", phone: "+7 994 107-75-37", tel: "tel:+79941077537" },
              { city: "Артём", phone: "+7 924 520-75-37", tel: "tel:+79245207537" },
            ].map((c) => (
              <div key={c.city} className="bg-background border border-border rounded-3xl p-7 shadow-sm">
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-semibold mb-3">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  {c.city}
                </div>
                <div className="text-2xl font-black text-teal-deep mb-5">{c.phone}</div>
                <a
                  href={c.tel}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold hover:opacity-90 transition-all hover:shadow-md hover:scale-[1.02]"
                >
                  <Icon name="Phone" size={16} />
                  Позвонить
                </a>
              </div>
            ))}
          </div>

          {/* CTA Form */}
          <div className="bg-background border border-border rounded-3xl p-8 max-w-xl">
            <h3 className="font-black text-xl text-foreground mb-1">Оставить заявку</h3>
            <p className="text-sm text-muted-foreground mb-6">Мы свяжемся с вами в ближайшее время</p>
            {sent ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-teal-dark" />
                </div>
                <div className="font-black text-xl text-foreground mb-2">Заявка отправлена!</div>
                <p className="text-sm text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full px-5 py-3.5 bg-white border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-5 py-3.5 bg-white border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                />
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Возраст ребёнка, пожелания, удобное время..."
                  rows={3}
                  className="w-full px-5 py-3.5 bg-white border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none text-sm"
                />
                <button
                  onClick={() => { if (form.name && form.phone) setSent(true); }}
                  className="w-full py-3.5 bg-primary text-primary-foreground rounded-2xl font-bold hover:opacity-90 transition-all hover:shadow-md hover:scale-[1.01] active:scale-100"
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container py-10">
        <div className="bg-white border border-border rounded-3xl text-center p-10 shadow-sm" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0fbf9 100%)" }}>
          <h2 className="text-[clamp(22px,3vw,34px)] font-black text-foreground mb-3">МАМАЛАБ — когда забота рядом</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Няня на часы, ситуационная помощь и постоянный подбор в семью во Владивостоке и Артёме.
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all hover:shadow-lg hover:scale-[1.02]"
          >
            <Icon name="Heart" size={18} />
            Оставить заявку
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.poehali.dev/projects/c6f6b751-1f3d-4383-80eb-da4678fa6496/bucket/1ce2fb31-2f37-4768-be3b-378ec3f2fd3d.png"
              alt="МАМАЛАБ"
              className="w-7 h-7 object-contain"
            />
            <span className="font-bold text-foreground">МАМАЛАБ</span>
          </div>
          <span>© 2026 МАМАЛАБ. Все права защищены.</span>
          <div className="flex gap-5">
            <a href="tel:+79941077537" className="hover:text-foreground transition-colors">Владивосток: +7 994 107-75-37</a>
            <a href="tel:+79245207537" className="hover:text-foreground transition-colors">Артём: +7 924 520-75-37</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
