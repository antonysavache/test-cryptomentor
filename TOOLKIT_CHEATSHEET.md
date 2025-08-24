# SCSS Toolkit - Шпаргалка

## 🏗️ Базовая структура
```html
<div class="section bg-light">
  <div class="container">
    <h1 class="h1 text-center mb-lg">Заголовок</h1>
    <!-- контент -->
  </div>
</div>
```

## 📋 Самые нужные классы

### Layout
- `.container` - контейнер 1200px
- `.section` - секция с padding 64px
- `.grid grid-3` - сетка 3 колонки
- `.flex flex-between` - flexbox с space-between

### Компоненты  
- `.card` - карточка
- `.btn btn-primary` - синяя кнопка
- `.badge badge-success` - зеленый бейдж
- `.table` - таблица

### Текст
- `.h1, .h2, .h3` - заголовки
- `.text-center` - по центру
- `.text-primary` - синий текст
- `.text-light` - серый текст

### Отступы
- `.mb-md` - margin-bottom 24px
- `.mb-lg` - margin-bottom 32px
- `.p-md` - padding 24px

### Фоны
- `.bg-light` - светло-серый
- `.bg-white` - белый
- `.bg-dark` - темный

### Утилиты
- `.w-full` - width 100%
- `.rounded` - border-radius
- `.shadow` - тень

## 🎨 Готовые паттерны

### Карточки в сетке:
```html
<div class="grid grid-3">
  <div class="card">
    <h3 class="h3 mb-md">Заголовок</h3>
    <p class="text-light">Текст</p>
  </div>
</div>
```

### Инфографика:
```html
<div class="infographic">
  <h2 class="h2 text-center">Заголовок</h2>
  <div class="info-grid">
    <div>
      <div style="font-size: 32px; font-weight: bold;">100+</div>
      <div>Описание</div>
    </div>
  </div>
</div>
```

### Таблица:
```html
<table class="table">
  <thead>
    <tr><th>Колонка</th></tr>
  </thead>
  <tbody>
    <tr><td>Данные</td></tr>
  </tbody>
</table>
```

Всего ~25 основных классов вместо 100+ 👍
