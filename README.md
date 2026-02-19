# Threat Investigation Console 🛡️

A high-end, next-generation security operations center (SOC) dashboard designed for modern threat hunters and analysts. Built with React, TypeScript, and a custom glassmorphism design system.


## 🚀 Features

-   **High-End UI/UX**: Custom glassmorphism design with ambient gradient backgrounds, blur effects, and smooth animations.
-   **Theme Support**: Fully functional Light and Dark modes with instant switching.
-   **Dashboard Overview**: Real-time visualization of active threats, critical alerts, and recent activity.
-   **Investigation Timeline**: Detailed chronological view of security events for in-depth analysis.
-   **Threat Intelligence**: Dedicated view for tracking global campaigns and threat actors.
-   **Interactive Visualizations**: Dynamic charts and metric cards with premium hover effects.
-   **Advanced Data Grid**: High-performance grid with virtualization, filtering, and custom renderers (AG Grid).
-   **Internationalization (i18n)**: Full localization support with English and Spanish (ready).
-   **Reliability**: Global Error Boundary to catch and handle runtime crashes gracefully.

## 🛠️ Tech Stack

-   **Framework**: React 19 + Vite
-   **Language**: TypeScript
-   **Styling**: Vanilla CSS (Variables + Flexbox/Grid)
-   **Icons**: Lucide React
-   **Routing**: React Router DOM (v7)
-   **Date Handling**: date-fns

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/threat-investigation.git
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Run Unit Tests** (Vitest)
    ```bash
    npm test run
    ```

5.  **Run End-to-End Tests** (Playwright)
    ```bash
    npx playwright install
    npx playwright test
    ```

6.  **Lint Code**
    ```bash
    npm run lint
    ```

7.  **Build for production**
    ```bash
    npm run build
    ```

## 🎨 Design System

The application uses a semantic CSS variable system for easy theming and maintenance.

-   **Colors**: Semantic roles (bg-primary, text-secondary, status-critical) rather than hardcoded hex values.
-   **Spacing**: 4px grid system.
-   **Typography**: 'Inter' for UI, 'JetBrains Mono' for code/data.

---

> Built with ❤️ for the security community.
