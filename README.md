# 🎨 Modern Developer Portfolio

A high-performance, aesthetically pleasing personal portfolio website showcasing projects, skills, and professional journey. Built with a focus on **User Experience (UX)**, **Animations**, and **Modern Design Principles**.

![Portfolio Preview](public/preview.png)

## ✨ Key Features

- **🔦 Interactive Spotlight Effect**: Mouse-tracking glow animations in the Hero section for an immersive feel.
- **📊 Deep Skills Analysis**: Interactive cards that reveal detailed proficiency breakdowns and real-world project usage.
- **📝 Case Study Modals**: In-depth project overviews (Problem, Solution, Impact) available without leaving the page.
- **💎 Glassmorphism Design**: extensive use of `backdrop-blur` and translucent layers for a premium, modern aesthetic.
- **📱 Fully Responsive**: A mobile-first approach ensuring a flawless experience on devices of all sizes.
- **🚀 High Performance**: Optimized metrics with lazy loading, code-splitting, and lightweight animations.
- **👁️ Scroll Spy Navigation**: Active section highlighting that guides the user through the journey.
- **📧 Smart Contact Form**: Includes "Copy Email" functionality and robust validation with instant feedback.

## 🛠 Tech Stack

### Core
- **[React 19](https://react.dev/)**: The foundation for building the component-based UI.
- **[TypeScript](https://www.typescriptlang.org/)**: Ensuring type safety and code reliability.
- **[Vite](https://vitejs.dev/)**: For lightning-fast development and optimized production builds.

### Styling & Animation
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first framework for rapid, custom design.
- **[Lucide React](https://lucide.dev/)**: Consistent, beautiful vector icons.
- **[Lenis](https://github.com/darkroomengineering/lenis)**: A robust smooth scrolling library for a premium feel.
- **Custom Hooks**: specialized hooks like `useScrollReveal` and `useStaggerReveal` for performant scroll-based animations.

## 📂 Project Structure

```bash
src/
├── assets/            # Static assets (images, icons)
├── components/
│   ├── common/        # Reusable primitives (Card, Button, SmoothScroll)
│   ├── layout/        # Global layout (Header, Footer)
│   └── sections/      # Page sections (Hero, About, Skills, Projects, Contact)
├── hooks/             # Animation & Utility hooks
└── App.tsx            # Main entry
```

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/dini28/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
