'use client'

import { useState, useEffect } from 'react'
import { MatchaIcon, CoffeeIcon, TeaIcon, HotIcon, ColdIcon, LeafIcon, SparkleIcon, HeartIcon } from './components/Icons'

interface MenuItem {
  name: string
  volume: string
  price: number
  description: string
  badges?: Array<{ text: string; color: string }>
  icon?: React.ReactNode
  featured?: boolean
}

interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
  icon: React.ReactNode
  color: string
}

const menuData: MenuCategory[] = [
  {
    id: 'matcha',
    name: 'Матча',
    icon: <MatchaIcon className="w-6 h-6" />,
    color: 'matcha',
    items: [
      {
        name: 'Матча-латте классический',
        volume: '250 мл',
        price: 300,
        description: 'Матча премиум-помола, молоко на выбор (коровье/овсяное/кокосовое), естественная сладость без сиропов.',
        icon: <HotIcon className="w-5 h-5" />,
        featured: true
      },
      {
        name: 'Матча-латте на кокосовом молоке',
        volume: '250 мл',
        price: 340,
        description: 'Нежная кремовость кокоса подчёркивает травянистые ноты матчи.',
        icon: <HeartIcon className="w-5 h-5" />
      },
      {
        name: 'Айс-матча',
        volume: '350 мл',
        price: 320,
        description: 'Освежающая холодная матча на молоке, лёд.',
        badges: [{ text: 'холодный', color: 'blue' }],
        icon: <ColdIcon className="w-5 h-5" />
      },
      {
        name: 'Матча-тоник',
        volume: '350 мл',
        price: 340,
        description: 'Матча + тоник, цитрусовые нотки и лёгкая горчинка.',
        badges: [{ text: 'холодный', color: 'blue' }],
        icon: <SparkleIcon className="w-5 h-5" />
      },
      {
        name: 'Дёрти-матча',
        volume: '300 мл',
        price: 360,
        description: 'Сочетание матчи и шота эспрессо — бодро и ярко.',
        icon: <HotIcon className="w-5 h-5" />,
        featured: true
      },
      {
        name: 'Фирменная «Матча Кокосовое Облако»',
        volume: '300 мл',
        price: 360,
        description: 'Матча, кокосовое молоко, немного сливок, лёд; сверху — кокосовая стружка.',
        badges: [{ text: 'холодный', color: 'blue' }],
        icon: <ColdIcon className="w-5 h-5" />,
        featured: true
      }
    ]
  },
  {
    id: 'coffee',
    name: 'Кофе',
    icon: <CoffeeIcon className="w-6 h-6" />,
    color: 'coffee',
    items: [
      {
        name: 'Эспрессо',
        volume: '40 мл',
        price: 160,
        description: 'Насыщенный шот арабики, шоколадно-ореховый профиль.',
        icon: <HotIcon className="w-5 h-5" />,
        featured: true
      },
      {
        name: 'Американо',
        volume: '300 мл',
        price: 180,
        description: 'Мягкий чёрный кофе для длительного глотка.'
      },
      {
        name: 'Капучино',
        volume: '300 мл',
        price: 240,
        description: 'Эспрессо и бархатная молочная пена, сбалансированная сладость.',
        icon: <HeartIcon className="w-5 h-5" />
      },
      {
        name: 'Латте',
        volume: '350 мл',
        price: 260,
        description: 'Нежный молочно-кофейный баланс с лёгкой карамельной нотой.'
      },
      {
        name: 'Флэт уайт',
        volume: '250 мл',
        price: 280,
        description: 'Более выраженный кофейный вкус и шелковистая текстура.'
      },
      {
        name: 'Кокосовый латте',
        volume: '350 мл',
        price: 300,
        description: 'Латте на кокосовом молоке — тропическая мягкость.'
      },
      {
        name: 'Раф ванильный',
        volume: '300 мл',
        price: 320,
        description: 'Сливочный десертный напиток с натуральной ванилью.'
      },
      {
        name: 'Эспрессо-тоник',
        volume: '350 мл',
        price: 300,
        description: 'Игривый цитрусовый драйв и искристая свежесть.',
        badges: [{ text: 'холодный', color: 'blue' }],
        icon: <ColdIcon className="w-5 h-5" />,
        featured: true
      }
    ]
  },
  {
    id: 'tea',
    name: 'Чай',
    icon: <TeaIcon className="w-6 h-6" />,
    color: 'tea',
    items: [
      {
        name: 'Чёрный цейлон',
        volume: '400 мл',
        price: 180,
        description: 'Классический крепкий вкус с мягкой терпкостью.',
        icon: <HotIcon className="w-5 h-5" />
      },
      {
        name: 'Эрл Грей',
        volume: '400 мл',
        price: 190,
        description: 'Чёрный чай с бергамотом, свежий цитрусовый акцент.'
      },
      {
        name: 'Сенча зелёный',
        volume: '400 мл',
        price: 190,
        description: 'Травянистые ноты и чистое послевкусие.'
      },
      {
        name: 'Жасминовый зелёный',
        volume: '400 мл',
        price: 200,
        description: 'Цветочный аромат и деликатная сладость.',
        icon: <SparkleIcon className="w-5 h-5" />,
        featured: true
      },
      {
        name: 'Травяной мятный',
        volume: '400 мл, без кофеина',
        price: 200,
        description: 'Мята и лёгкая свежесть — расслабляет и тонизирует.',
        badges: [{ text: 'без кофеина', color: 'green' }],
        icon: <LeafIcon className="w-5 h-5" />
      }
    ]
  }
]

const modifiers = [
  { name: 'Доп. шот эспрессо', price: 60 },
  { name: 'Сироп (ваниль/карамель/орех)', price: 40 },
  { name: 'Молоко (овсяное/кокосовое/безлактозное)', price: 50 },
  { name: 'Безкофеиновый кофе', price: 40 },
  { name: 'Температура: горячий / холодный', price: 0 },
  { name: 'Сладость: без сахара / умеренно / сладко', price: 0 }
]

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<string>('matcha')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ['matcha', 'coffee', 'tea'].includes(hash)) {
      setActiveTab(hash)
    }
  }, [])

  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey)
    window.history.replaceState(null, '', `#${tabKey}`)
  }

  const getCategoryGradient = (categoryId: string) => {
    switch (categoryId) {
      case 'matcha': return 'gradient-card-matcha'
      case 'coffee': return 'gradient-card-coffee'
      case 'tea': return 'gradient-card-tea'
      default: return ''
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary to-accent/20">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-effect">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-dark via-coffee to-primary floating-animation">
            ✨ Меню ✨
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Tabs Navigation */}
        <div className="sticky top-[88px] z-40 bg-secondary/90 backdrop-blur-sm py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-text/[0.08]">
          <div className="flex space-x-8 overflow-x-auto">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-text hover:bg-primary/10'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {menuData.map((category) => (
            activeTab === category.id && (
              <div key={category.id} className="tab-content space-y-4">
                {category.items.map((item, index) => (
                  <div key={index} className={`menu-card ${getCategoryGradient(category.id)} ${item.featured ? 'ring-2 ring-primary/20' : ''} relative`}>
                    {item.featured && (
                      <div className="absolute top-2 right-2">
                        <SparkleIcon className="w-5 h-5 text-primary animate-pulse" />
                      </div>
                    )}
                    <div className="p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {item.icon}
                            <h3 className="text-lg sm:text-xl font-display font-medium text-text">
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-sm text-text/60 font-medium">({item.volume})</p>
                        </div>
                        <div className="sm:ml-4 sm:text-right">
                          <span className="price-text text-xl sm:text-2xl">
                            {item.price} ₽
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-text/80 text-sm sm:text-base mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {item.badges && item.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                badge.color === 'blue' 
                                  ? 'border-info/30 bg-info/10 text-info' 
                                  : 'border-success/30 bg-success/10 text-success'
                              }`}
                            >
                              {badge.text}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>

        {/* Modifiers Section */}
        <div id="modifiers" className="mt-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8"></div>
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-coffee to-tea text-center floating-animation">
              🎨 Модификаторы 🎨
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modifiers.map((modifier, index) => (
                <div key={index} className="menu-card bg-gradient-to-r from-white/80 to-accent/10 hover:from-white/90 hover:to-accent/20 transition-all duration-300">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <SparkleIcon className="w-4 h-4 text-primary/70" />
                        <span className="text-text font-medium text-sm sm:text-base">
                          {modifier.name}
                        </span>
                      </div>
                      <span className={`text-lg sm:text-xl ml-3 font-semibold ${modifier.price === 0 ? 'text-success' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange to-warm'}`}>
                        {modifier.price === 0 ? '0 ₽' : `+${modifier.price} ₽`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}