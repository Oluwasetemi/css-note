---
transition: slide-left
layout: center
---

# CSS Frameworks
<div />

<v-clicks>

Finding easier way to write css could range from using the famous bootstrap or bulma or relying on css preprocessors like sass or less or stylus or system like bem() or utility first css system like windicss or tailwindcss or unocss.

The overall advantage is that it helps you write less css and focus more on the design and layout of your website. It gives consistency and you build faster. LESS, SASS, and Stylus are CSS preprocessors that add features like variables, nesting, and mixins to CSS. BEM is a naming convention that helps you create reusable and maintainable CSS. Tailwind CSS is a utility-first CSS framework that provides a set of utility classes to style your website.

In this class, we will be focusing on using a set of utility css framework - TailwindCSS which is currently on v3 and it's v4 release is on the way. Classes are used to style elements directly in the HTML, making it easy to create complex layouts and designs. Tailwind CSS is highly customizable and can be configured to match your design system.

How is compares with the traditional approach of writing css? Tailwind CSS is a utility-first CSS framework that provides a set of utility classes to style your website. Instead of writing custom CSS, you can use classes like text-center, bg-blue-500, or p-4 to style elements directly in your HTML. This approach can be more efficient and faster than writing custom CSS, especially for prototyping and building small projects.

</v-clicks>

---
hideInToc: true
---

# Example of BEM(Block Element Modifier) naming convention

````md magic-move
```html
<div class="menu">
  <div class="menu__item menu__item--active">Home</div>
  <div class="menu__item">About</div>
  <div class="menu__item">Contact</div>
</div>
```

```html
<!-- menu is the Block. -->
<!-- menu__item is an Element. -->
<!-- menu__item--active is a Modifier. -->
```

```css
.menu { display: flex; justify-content: space-between; }

.menu__item { padding: 10px; }

.menu__item--active { background-color: blue; color: white; }
```
````

BEM stands for Block, Element, Modifier. It is a methodology for writing CSS that helps developers create reusable components and code sharing in front-end development.

- Block: The outermost parent element that represents a distinct entity on the page (e.g., header, container, menu).

- Element: A part of the block that performs a certain function (e.g., menu__item, header__logo).

- Modifier: A flag on a block or element that changes its appearance or behavior (e.g., menu__item--active, header--large).

---
hideInToc: true
---

# Tailwind CSS
<div />
Tailwind CSS is a utility-first CSS framework that provides a set of utility classes to style your website. Instead of writing custom CSS, you can use classes like text-center, `bg-blue-500`, or `p-4` to style elements directly in your HTML. This approach can be more efficient and faster than writing custom CSS, especially for prototyping and building small projects.

```html
<div class="flex justify-content">
  <div class="bg-blue-500 text-white dark:text-white-100">Home</div>
  <div class="p-[10px]">About</div>
  <div class="p-[10px]">Contact</div>
</div>
```

<div class="flex justify-item">
  <div class="p-[10px] hover:bg-blue-500 dark:text-white-100 hover:underline">Home</div>
  <div class="p-[10px] hover:bg-blue-500 hover:underline">About</div>
  <div class="p-[10px] hover:bg-blue-500 hover:underline">Contact</div>
</div>

[Tailwind CSS](https://tailwindcss.com/) is highly customizable and can be configured to match your design system. It also provides responsive classes to create layouts that adapt to different screen sizes. With `hover: hover:bg-blue-600` and `focus: focus:outline-none` classes, you can add interactive styles to your website.

[UnoCSS](https://unocss.dev/) is a utility-first atomic CSS framework with customizable variant group, shortcuts, attributify mode, and more. It is designed to be a drop-in replacement for Tailwind CSS with a smaller bundle size and faster runtime performance.

---
hideInToc: true
transition: slide-up
---

# Setting Tailwind CSS in your project

1. [CDN Link: You can include the Tailwind CSS CDN link in your HTML file to start using it right away](https://tailwindcss.com/docs/installation/play-cdn).

* `<script src="https://cdn.tailwindcss.com"></script>`
* customize the tailwind config object

```js
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { clifford: '#da373d', }
        }
      }
    }
  </script>
```

* add custom css using `type="text/tailwindcss"` attribute

* you can try a first party plugin `<script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>`

2. [NPM Installation: You can install Tailwind CSS using npm or yarn and configure it in your project](https://tailwindcss.com/docs/installation).

---
hideInToc: true
transition: fade-in
---

# Tailwind CSS Example

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="size-12" src="carbon:chat-bot" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

<div class="p-6 mt-6 max-w-sm mx-auto bg-white light:bg-black  rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="size-16 rounded-xl shadow-lg ring" src="https://avatars.githubusercontent.com/u/10030028?v=4" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black light:text-white">ChitChat</div>
    <p class="text-slate-500 light:text-slate-100">You have a new message!</p>
  </div>
</div>

---
hideInToc: true
transition: slide-up
---

# Explanation 
<div />

<v-clicks>

Tailwind’s flexbox and padding utilities (`flex`, `shrink-0`, and `p-6`) to control the overall card layout

The max-width and margin utilities (`max-w-sm` and `mx-auto`) to constrain the card width and center it horizontally

The background color, border radius, and box-shadow utilities (`bg-white`, `rounded-xl`, and `shadow-lg`) to style the card’s appearance

The size utilities (`size-12`) to set the width and height of the logo image

The space-between utilities (`space-x-4`) to handle the spacing between the logo and the text

The font size, text color, and font-weight utilities (`text-xl`, `text-black`, `font-medium`, etc.) to style the card text


</v-clicks>

---
hideInToc: true
transition: slide-right
---

# Tailwind Advantages
<div />

<v-clicks depth="2">

* **You aren’t wasting energy inventing class names**. No more adding silly class names like sidebar-inner-wrapper just to be able to style something, and no more agonizing over the perfect abstract name for something that’s really just a flex container.

* **Your CSS stops growing.** Using a traditional approach, your CSS files get bigger every time you add a new feature. With utilities, everything is reusable so you rarely need to write new CSS.

* **Making changes feels safer.** CSS is global and you never know what you’re breaking when you make a change. Classes in your HTML are local, so you can change them without worrying about something else breaking.

</v-clicks>

<v-click after="4" >
When you realize how productive you can be working exclusively in HTML with predefined utility classes, working any other way will feel like torture.

</v-click>
