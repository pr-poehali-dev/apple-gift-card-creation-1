import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Index() {
  const hero = useScrollAnimation(0.1);
  const templates = useScrollAnimation(0.1);
  const features = useScrollAnimation(0.1);
  const instructions = useScrollAnimation(0.1);
  const contacts = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Icon name="Gift" size={18} className="text-white" />
              </div>
              <span className="text-xl font-semibold">Apple Gift Cards</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">Главная</a>
              <a href="#templates" className="text-gray-600 hover:text-black transition-colors">Каталог</a>
              <a href="#instructions" className="text-gray-600 hover:text-black transition-colors">Инструкция</a>
              <a href="#contacts" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
            </div>
            <Button className="bg-apple-blue hover:bg-blue-600 text-white px-6 py-2 rounded-full">
              Создать карту
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={hero.elementRef} 
        id="home" 
        className={`pt-24 pb-20 px-6 transition-all duration-1000 ${
          hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 ${
              hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Создавайте<br />
              <span className="text-apple-blue">Apple Gift Cards</span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-500 ${
              hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Профессиональные подарочные карты Apple с персонализированным дизайном. 
              Быстро, удобно, красиво.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
              hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button size="lg" className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg">
                Начать создание
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-black hover:bg-gray-50 px-8 py-4 rounded-full text-lg">
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section 
        ref={templates.elementRef}
        id="templates" 
        className="py-20 px-6 bg-apple-gray"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            templates.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Каталог шаблонов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите готовый дизайн или создайте уникальный
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Template 1 */}
            <Card className={`bg-white border-none shadow-lg hover:shadow-xl transition-all duration-700 overflow-hidden ${
              templates.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`} style={{ transitionDelay: templates.isVisible ? '0.2s' : '0s' }}>
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-apple-blue to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/img/516847c9-deb4-46e4-a289-1e374f18478e.jpg" alt="Gift Card Template" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Классический дизайн</h3>
                  <p className="text-gray-600 mb-4">Элегантный минималистичный дизайн</p>
                  <Button className="w-full bg-apple-blue hover:bg-blue-600 text-white rounded-full">
                    Выбрать шаблон
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Template 2 */}
            <Card className={`bg-white border-none shadow-lg hover:shadow-xl transition-all duration-700 overflow-hidden ${
              templates.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`} style={{ transitionDelay: templates.isVisible ? '0.4s' : '0s' }}>
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-black to-gray-800 relative flex items-center justify-center">
                  <div className="text-white text-center">
                    <Icon name="Apple" size={48} className="mx-auto mb-4" />
                    <div className="text-lg font-semibold">Premium</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Премиум дизайн</h3>
                  <p className="text-gray-600 mb-4">Стильный черный дизайн</p>
                  <Button className="w-full bg-apple-blue hover:bg-blue-600 text-white rounded-full">
                    Выбрать шаблон
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Template 3 */}
            <Card className={`bg-white border-none shadow-lg hover:shadow-xl transition-all duration-700 overflow-hidden ${
              templates.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`} style={{ transitionDelay: templates.isVisible ? '0.6s' : '0s' }}>
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                  <div className="text-gray-800 text-center">
                    <Icon name="Sparkles" size={48} className="mx-auto mb-4" />
                    <div className="text-lg font-semibold">Персональный</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Персональный</h3>
                  <p className="text-gray-600 mb-4">Создайте уникальный дизайн</p>
                  <Button className="w-full bg-apple-blue hover:bg-blue-600 text-white rounded-full">
                    Создать свой
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={features.elementRef}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center transition-all duration-700 ${
              features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: features.isVisible ? '0.2s' : '0s' }}>
              <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Быстрое создание</h3>
              <p className="text-gray-600">Создавайте карты за несколько минут</p>
            </div>
            
            <div className={`text-center transition-all duration-700 ${
              features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: features.isVisible ? '0.4s' : '0s' }}>
              <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Безопасность</h3>
              <p className="text-gray-600">Официальная интеграция с Apple Store</p>
            </div>
            
            <div className={`text-center transition-all duration-700 ${
              features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: features.isVisible ? '0.6s' : '0s' }}>
              <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Palette" size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Персонализация</h3>
              <p className="text-gray-600">Множество шаблонов и настроек</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section 
        ref={instructions.elementRef}
        id="instructions" 
        className="py-20 px-6 bg-apple-gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            instructions.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Как это работает</h2>
          </div>
          
          <div className="space-y-8">
            <div className={`flex items-start space-x-6 transition-all duration-700 ${
              instructions.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ transitionDelay: instructions.isVisible ? '0.2s' : '0s' }}>
              <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Выберите шаблон</h3>
                <p className="text-gray-600">Просмотрите наш каталог готовых дизайнов или создайте собственный</p>
              </div>
            </div>
            
            <div className={`flex items-start space-x-6 transition-all duration-700 ${
              instructions.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ transitionDelay: instructions.isVisible ? '0.4s' : '0s' }}>
              <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Настройте детали</h3>
                <p className="text-gray-600">Добавьте персональное сообщение, выберите сумму и оформление</p>
              </div>
            </div>
            
            <div className={`flex items-start space-x-6 transition-all duration-700 ${
              instructions.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ transitionDelay: instructions.isVisible ? '0.6s' : '0s' }}>
              <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Получите карту</h3>
                <p className="text-gray-600">Мгновенно получите готовую к использованию подарочную карту</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section 
        ref={contacts.elementRef}
        id="contacts" 
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            contacts.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Свяжитесь с нами</h2>
          <p className={`text-xl text-gray-600 mb-10 transition-all duration-1000 delay-200 ${
            contacts.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Остались вопросы? Мы всегда готовы помочь
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className={`text-center transition-all duration-700 ${
              contacts.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: contacts.isVisible ? '0.4s' : '0s' }}>
              <Icon name="Mail" size={32} className="mx-auto mb-4 text-apple-blue" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@applegiftcards.ru</p>
            </div>
            
            <div className={`text-center transition-all duration-700 ${
              contacts.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: contacts.isVisible ? '0.6s' : '0s' }}>
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-apple-blue" />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (800) 123-45-67</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className={`bg-apple-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-700 ${
              contacts.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
            style={{ transitionDelay: contacts.isVisible ? '0.8s' : '0s' }}
          >
            Начать создание карты
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Icon name="Gift" size={18} className="text-black" />
            </div>
            <span className="text-xl font-semibold">Apple Gift Cards</span>
          </div>
          <p className="text-gray-400 mb-6">
            © 2024 Apple Gift Cards. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
}