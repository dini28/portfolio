# 🎨 Personal Portfolio Website

A modern, responsive, and aesthetically pleasing personal portfolio website designed to showcase projects, skills, and professional experience. Built with the latest web technologies for optimal performance and user experience.

![Portfolio Preview](public/preview.png)

## ✨ Features

- **🚀 High Performance**: Powered by [Vite](https://vitejs.dev/) and [React](https://react.dev/) for blazing fast load times.
- **📱 Fully Responsive**: A mobile-first design that looks stunning on all devices, from phones to desktops.
- **🎨 Modern Design System**: Utilizes [Tailwind CSS v4](https://tailwindcss.com/) for a sleek, consistent, and maintainable styling architecture.
- **🛠 Skills & Expertise**: A dedicated section to visualize technical skills and proficiency.
- **📂 Project Showcase**: elegantly display your work with project cards, descriptions, and links.
- **💬 Seamless Communication**: Integrated contact form and a floating **WhatsApp** button for instant connectivity.
- **🧩 Type Safety**: Built with [TypeScript](https://www.typescriptlang.org/) for robust and error-free code.

## 🛠 Tech Stack & Dependencies

This project is built using the following core technologies and libraries:

### Core Framework & Build Tool
- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming language that builds on JavaScript.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.

### Styling & UI Components
- **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.
- **[Lucide React](https://lucide.dev/guide/packages/lucide-react)**: Beautiful & consistent icon toolkit.
- **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible components for building high-quality design systems.
- **[Class Variance Authority (CVA)](https://cva.style/)**: CSS-in-JS library for creating type-safe UI component variants.
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)**: Utility to efficiently merge Tailwind CSS classes without style conflicts.

### Development & Linting
- **ESLint**: Pluggable JavaScript linter.
- **Prettier**: Opinionated code formatter (if applicable).
- **TypeScript ESLint**: Tooling which enables ESLint to support TypeScript.

### Full Dependency List

#### Production Dependencies
| Package | Version | Description |
| :--- | :--- | :--- |
| `react` | ^19.2.0 | Core React library |
| `react-dom` | ^19.2.0 | React DOM rendering |
| `tailwindcss` | ^4.1.18 | Utility-first CSS framework |
| `@tailwindcss/vite` | ^4.1.18 | Tailwind CSS Vite plugin |
| `lucide-react` | ^0.562.0 | Icon set |
| `radix-ui` | ^1.4.3 | UI Primitives |
| `class-variance-authority` | ^0.7.1 | UI variant management |
| `tailwind-merge` | ^3.4.0 | Tailwind class merging utility |

#### Dev Dependencies
| Package | Version | Description |
| :--- | :--- | :--- |
| `vite` | ^7.2.4 | Frontend build tool |
| `typescript` | ~5.9.3 | TypeScript language support |
| `@vitejs/plugin-react` | ^5.1.1 | React plugin for Vite |
| `eslint` | ^9.39.1 | Linter |
| `globals` | ^16.5.0 | Global identifiers for linting |
| `@types/node` | ^24.10.1 | Type definitions for Node.js |
| `@types/react` | ^19.2.5 | Type definitions for React |
| `@types/react-dom` | ^19.2.3 | Type definitions for React DOM |

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
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

    Open http://localhost:5173 to view it in the browser.

### Building for Production

To build the project for production usage:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📂 Project Structure

```bash
src/
├── components/
│   ├── common/        # Reusable UI components (Buttons, etc.)
│   ├── layout/        # Layout components (Header, Footer)
│   └── sections/      # Page sections (Hero, Skills, Projects, Contact)
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── App.tsx            # Main application component
└── main.tsx           # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
