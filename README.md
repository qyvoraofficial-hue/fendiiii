# Fendi Café Sialkot — Official Bespoke Web Platform

An Awwwards-level, mobile-first, high-performance web experience created for **Fendi Café**, located on Circular Road, Sialkot, Pakistan. Built using Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and Zustand with LocalStorage cart persistence.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18.x or later installed
- npm 9.x or later

### Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### Running Locally (Development Server)
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 📁 Key File Structure & Locations

| Component / Function | File Path |
| :--- | :--- |
| **Menu Dataset & Cafe Info** | `src/data/menu.ts` |
| **Exploded Burger Hero** | `src/components/hero/ExplodedBurgerHero.tsx` |
| **Cart & Checkout Store** | `src/store/useCartStore.ts` |
| **WhatsApp URL Builder** | `src/utils/whatsapp.ts` |
| **Menu Section & Search** | `src/components/menu/MenuSection.tsx` |
| **Checkout Modal** | `src/components/cart/CheckoutModal.tsx` |
| **Uploaded Menu Photographs** | `public/images/fendi-menu-page1.jpg` & `fendi-menu-page2.jpg` |

---

## 🍔 How to Maintain & Update Content

### 1. Updating Menu Items, Categories & Prices
All menu items, categories, descriptions, prices, and cafe information are central to `src/data/menu.ts`.
- To change a price, locate the item ID in `MENU_ITEMS` and update the `price` field.
- To mark an item as popular or sold out, set `isPopular: true` or `isSoldOut: true`.

### 2. Updating WhatsApp Phone Number
The WhatsApp phone number is configured in `CAFE_INFO` inside `src/data/menu.ts`:
```ts
export const CAFE_INFO = {
  phone: "+92 334 6599111",
  whatsappNumber: "923346599111",
  whatsappUrl: "https://wa.me/923346599111",
  // ...
};
```
Updating this number automatically updates all checkout redirects, footer links, header buttons, and mobile sticky bars across the website.

### 3. Replacing Food Images & Photographs
Place high-resolution WebP/JPG food images in the `public/images/` folder. Update the image paths in `src/data/menu.ts` under the respective item's `image` property or in `src/components/home/FoodGallery.tsx`.

### 4. Configuring Delivery Charges & Areas
As stated in the user interface, delivery availability and charges are confirmed directly over WhatsApp upon checkout. If fixed delivery fees or area boundaries are introduced in the future, modify `src/utils/whatsapp.ts` and `src/components/cart/CheckoutModal.tsx`.

---

## 🌐 Deployment Instructions

This Next.js App Router application can be deployed instantly to **Vercel**, **Netlify**, or any Node.js server environment:

### Deploying to Vercel (Recommended)
1. Push the code repository to GitHub, GitLab, or Bitbucket.
2. Import the project into Vercel.
3. Vercel automatically detects Next.js build settings (`npm run build`).
4. Click **Deploy**.

---

*Designed and engineered with precision by Qyvora Studio.*
