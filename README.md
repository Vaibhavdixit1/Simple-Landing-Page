
# Supreme Group Frontend – Technical Task

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is a pixel-perfect, responsive, and accessible implementation of the Supreme Group website based on the provided Figma design.

---

## 🚀 Getting Started

### 1. Clone or Download the Project

You can either:

- **Download the ZIP file**, extract it, and open it in your code editor.

**OR**

- **Use Git (recommended):**

```bash
git clone <"https://github.com/Vaibhavdixit1/blacksof-frontend-assignment">
cd <project-folder>
```

### 2. Install Dependencies and Run the Development Server

Make sure you have Node.js installed. Then run:

```bash
# Install dependencies
npm install
# or
yarn
# or
pnpm install
# or
bun install

# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying:

```bash
src/app/page.js
```

The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a modern font family by Vercel.

---

## 📁 Component Architecture Overview

```
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── Header.js
│   ├── HeroSection.js
│   ├── MainSlider.js
│   ├── SliderComponent.js
│   ├── ContactSection.js
│   └── Footer.js
├── constants/
│   └── data.json
```

* Components are modular and reusable.
* Static data is managed via `data.json`.

---

## 📱 Responsive Design Strategy

* **Mobile-first approach** using Tailwind's responsive utility classes.
* Layouts adapt to screen sizes with Tailwind’s `sm`, `md`, `lg`, `xl`, and `2xl` breakpoints.
* Thoroughly tested on Chrome

---

## ⚡ Performance Optimization Techniques

* **Next.js Image Optimization** via `next/image`.
* **Code Splitting** through dynamic imports.
* **Webpack** optimizations through built-in Next.js features.

---

## ♿ Accessibility Considerations

* Semantic HTML (e.g., `header`, `section`, `footer`).
* Keyboard navigation supported.
* WCAG-compliant contrast and focus states.

---

## ✨ Third-party Libraries Used

| Library       | Use Case                      |
| ------------- | ----------------------------- |
| Tailwind CSS  | Rapid utility-first styling   |
| Framer Motion | Smooth animations             |
| Next.js       | Framework, routing, rendering |
| next/font     | Font optimization             |

---

## 🧠 Assumptions & Decisions

* JavaScript was used instead of TypeScript for simplicity and time-efficiency.
* No global state management needed for current project complexity.
* Framer Motion was chosen for lightweight and intuitive animations.

---

## 🧩 Challenges & Solutions

* **Pixel-perfect design**: Tailwind helped with exact spacing and typography.
* **Responsiveness**: Debugged layout issues across multiple screen sizes and browsers.
* **Animation integration**: Ensured animations are subtle, smooth, and non-blocking.

---

## 🌱  Suggested upcoming features 

* Interactive product demos
* Real-time order tracking
* Sustainability initiatives update
* AI-powered customer support

---

---

## 🌱 Suggested Improvements 

* Migrate to TypeScript for better maintainability.
* Add tests (unit + integration) with Jest and React Testing Library.
* Integrate a CMS (e.g., Sanity) for dynamic content.
* Add backend or third-party email service for contact form.
* Lighthouse-based performance and accessibility tuning.

---

## 📝 Additional Remarks

- This project was developed with a focus on maintainability and scalability, ensuring ease of future enhancements.
- While adhering to pixel-perfect design, some minor deviations were made to improve accessibility and responsiveness across devices.
- The use of Tailwind CSS helped accelerate styling while maintaining consistency.
- Performance optimizations such as code splitting have been applied to enhance user experience.
- Accessibility has been carefully considered, including keyboard navigation .
- Animations were implemented using Framer Motion to provide smooth and performant UI transitions.
- Testing coverage can be extended in future iterations as the project scope evolves.
- Looking forward to feedback and suggestions to further improve this project.


---

## 🔗 Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Learn Next.js](https://nextjs.org/learn)
* [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

## 🚀 Deploy on Vercel

This project is deployed on [Vercel](https://vercel.com/).

🔗 **Live URL**: [https://blacksof-frontend-assignment.vercel.app/](https://blacksof-frontend-assignment.vercel.app/)  
📂 **Repository**: [https://github.com/Vaibhavdixit1/blacksof-frontend-assignment](https://github.com/Vaibhavdixit1/blacksof-frontend-assignment)