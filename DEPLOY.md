# 🚀 Деплой сайта-меню

## ⚠️ ВАЖНО: Исправлена проблема с зависимостями!

Добавлены файлы для корректного деплоя:
- `vercel.json` - конфигурация для Vercel
- `.npmrc` - настройки npm для legacy peer deps
- Обновлен `package.json`

## Вариант 1: Vercel (Рекомендуется)

### Через веб-интерфейс:
1. Зайдите на [vercel.com](https://vercel.com)
2. Зарегистрируйтесь через GitHub
3. Нажмите "New Project" → "Upload"
4. Загрузите архив `menu-site-deploy-fixed.tar.gz`
5. Vercel автоматически определит Next.js и настроит деплой
6. Сайт будет доступен по адресу типа `your-project.vercel.app`

**Теперь деплой пройдет без ошибок зависимостей!**

### Через Git:
1. Создайте репозиторий на GitHub
2. Загрузите туда код проекта
3. На Vercel подключите GitHub репозиторий
4. Автоматический деплой при каждом push

---

## Вариант 2: Netlify

1. Зайдите на [netlify.com](https://netlify.com)
2. Зарегистрируйтесь
3. Перетащите папку проекта в область "Deploy"
4. Или подключите GitHub репозиторий

**Настройки для Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`

---

## Вариант 3: GitHub Pages (статический экспорт)

Добавьте в `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

Затем:
1. `npm run build`
2. Загрузите содержимое папки `out` на GitHub Pages

---

## Вариант 4: Обычный хостинг (статический)

1. Обновите `next.config.js` (как выше)
2. Выполните команды:
   ```bash
   npm run build
   ```
3. Загрузите содержимое папки `out` на ваш хостинг

---

## Подготовка к деплою

### 1. Создайте файл `.gitignore` (уже есть)
### 2. Проверьте package.json (готов)
### 3. Убедитесь что проект собирается:
```bash
npm run build
```

---

## Рекомендация

**Vercel** - лучший выбор для Next.js:
- ✅ Бесплатный план
- ✅ Автоматический деплой
- ✅ CDN по всему миру
- ✅ HTTPS из коробки
- ✅ Оптимизация для Next.js

Ваш сайт будет доступен по красивому URL типа:
`menu-site-nastia.vercel.app`
