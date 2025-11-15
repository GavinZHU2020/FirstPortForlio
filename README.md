# Digital Portfolio for CS5709 - Software Engineering Evolution (Phase 2)

This project is an advanced, dynamic, multi-page digital portfolio built for the CS5709 module at the University of Limerick. It showcases my skills, projects, and technical abilities.

This Phase 2 version has evolved significantly from the original, incorporating peer feedback to implement advanced features, a robust technology stack, and a fully responsive user experience.

**[➡️ View Live Demo Here](https://GavinZHU2020.github.io/FirstPortForlio/)** 
##  Key Features

* **Dynamic Content Management:**
    * **Blog:** Fetches posts from a live **Firebase Firestore** database.
    * **Projects & Skills:** Data is dynamically loaded from local JSON files, demonstrating separation of concerns.
* **Advanced Animation Stack:**
    * **Page Transitions:** Smooth, animated transitions between all routes using **Framer Motion**.
    * **Interactive UI:** Utilizes **GSAP** for the initial welcome splash screen and scroll-triggered animations on the About page.
* **Fully Responsive Design:**
    * Adapts seamlessly to all device sizes, from mobile to desktop.
    * Features a functional hamburger menu for intuitive mobile navigation.
* **Interactive Filtering & Search:**
    * The projects page includes a live search bar and category filters to sort projects dynamically.
* **Performance Optimized:**
    * Uses **React.lazy()** and **Suspense** for code-splitting, ensuring fast initial load times.
* **Dark / Light Mode:**
    * Includes a theme toggle button, with the user's preference saved in `localStorage` using React Context.
* **API Integration:**
    * The contact form is fully functional and integrates with **Formspree** for backend email handling.

##  Technology Stack

* **Core:** React.js, TypeScript, Vite
* **Styling:** CSS3 (with CSS Variables), Material-UI (MUI)
* **Animation:** Framer Motion, GSAP
* **Routing:** `react-router-dom`
* **Data & API:** Firebase (Firestore), Formspree
* **Tooling:** Git, GitHub, GitHub Actions (for CI/CD)

##  Getting Started

To run this project locally, follow these steps:

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation & Setup

1.  Clone the repository:
    ```sh
    git clone [https://github.com/GavinZHU2020/FirstPortForlio.git](https://github.com/GavinZHU2020/FirstPortForlio.git)
    ```

2.  Navigate into the project directory:
    ```sh
    cd FirstPortForlio
    ```

3.  Install the dependencies:
    ```sh
    npm install
    ```

4.  **(Optional) Firebase Setup:**
    To run the blog, you will need to set up your own Firebase project and create a `src/firebaseConfig.ts` file with your credentials. 

5.  Start the development server:
    ```sh
    npm run dev
    ```
The application will be available at `http://localhost:5173`.

---
*This project was updated by Wenkai Zhu for Assessment 3 (Phase 2) of the CS5709 module.*