import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: 'Необходимо согласие',
        description: 'Пожалуйста, согласитесь с обработкой персональных данных',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Заявка отправлена!',
      description: 'Спасибо за обращение. Мы свяжемся с вами в ближайшее время.'
    });
    setFormData({ name: '', phone: '', comment: '' });
    setAgreed(false);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Выстраиваю предсказуемый отдел продаж под ключ за 6–8 недель
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Прекращаю хаос в продажах, освобождаю владельца от операционки и создаю системный отдел с прозрачными метриками и стабильной прибылью
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            onClick={scrollToForm}
          >
            Получить разбор отдела продаж
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Для кого этот сервис</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Users', title: 'Нет отдела продаж', desc: 'Собственник продаёт сам или с 1–2 помощниками без системы' },
              { icon: 'CircleAlert', title: 'Хаос в продажах', desc: 'Отдел есть, но нет регламентов, скриптов и понятных метрик' },
              { icon: 'TrendingDown', title: 'Падает выручка', desc: 'Продажи нестабильны, высокая текучка менеджеров' },
              { icon: 'Target', title: 'Нужна системность', desc: 'Выручка 10–100 млн₽ в год, пора строить управляемый отдел' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Проблемы, с которыми приходят</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Владелец тонет в операционке — сам продаёт, контролирует, закрывает сделки',
              'Нет воронки продаж и понятных KPI — не понимаете, где теряете клиентов',
              'Отсутствуют регламенты и скрипты — каждый продаёт как умеет',
              'Высокая текучка менеджеров — найм и адаптация занимают месяцы',
              'Нестабильная выручка — одни месяцы в плюс, другие в минус',
              'Срывы планов и низкая конверсия — непонятно, как исправить ситуацию',
              'Нет системы мотивации — менеджеры работают спустя рукава'
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-4 animate-slide-in-right" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="X" className="text-destructive" size={16} />
                </div>
                <p className="text-lg text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Что вы получите</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'BarChart3', title: 'Прозрачная воронка продаж', desc: 'Видите каждый этап, конверсию и где теряете клиентов' },
              { icon: 'Target', title: 'Понятные KPI и метрики', desc: 'Прогнозируете выручку, контролируете эффективность' },
              { icon: 'FileText', title: 'Регламенты и скрипты', desc: 'Описанные процессы: звонки, встречи, работа с возражениями' },
              { icon: 'UserPlus', title: 'Система найма менеджеров', desc: 'Понятные критерии отбора, тесты, быстрая адаптация' },
              { icon: 'TrendingUp', title: 'Рост выручки на 30–50%', desc: 'За счёт системности, прозрачности и мотивации команды' },
              { icon: 'Zap', title: 'Снижение нагрузки на владельца', desc: 'Отдел работает без вашего постоянного участия' }
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Формат работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Аудит текущих продаж', desc: 'Анализирую процессы, воронку, метрики и команду' },
              { num: '02', title: 'Дизайн системы', desc: 'Проектирую воронку, KPI, регламенты под ваш бизнес' },
              { num: '03', title: 'Внедрение процессов', desc: 'Создаю скрипты, систему мотивации, обучаю команду' },
              { num: '04', title: 'Сопровождение 1–3 месяца', desc: 'Корректирую процессы, анализирую метрики, помогаю расти' }
            ].map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="text-7xl font-bold text-primary/10 mb-4">{step.num}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Кейсы и результаты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                niche: 'B2B услуги (консалтинг)',
                problem: 'Собственник продавал сам, 2 менеджера без системы',
                result: '+45% к выручке за 3 месяца, создана воронка и система KPI'
              },
              {
                niche: 'Производство (промышленное)',
                problem: 'Отдел из 5 человек работал хаотично, срывались планы',
                result: 'Конверсия выросла с 8% до 15%, текучка снизилась в 2 раза'
              },
              {
                niche: 'Онлайн-образование',
                problem: 'Высокая текучка менеджеров, нет регламентов',
                result: 'Выстроена система найма и адаптации, выручка +60% за квартал'
              }
            ].map((caseItem, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Briefcase" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{caseItem.niche}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Проблема:</p>
                    <p className="text-foreground">{caseItem.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Результат:</p>
                    <p className="text-foreground font-medium">{caseItem.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Получите разбор вашего отдела продаж</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Оставьте заявку, и я проведу экспресс-аудит вашей текущей ситуации с предложением решений
          </p>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input
                  required
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input
                  required
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Комментарий</label>
                <Textarea
                  placeholder="Опишите вашу текущую ситуацию с отделом продаж..."
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agree"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer">
                  Согласен с обработкой персональных данных и политикой конфиденциальности
                </label>
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">© 2025 Системный отдел продаж. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
