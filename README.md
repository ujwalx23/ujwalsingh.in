# ✨ Ujwal Singh | Personal Developer Portfolio

Welcome to the repository for **ujwalsingh.in**—an elite, highly interactive, and fully responsive developer portfolio built with modern frontend technologies. 

Designed with rich aesthetics, glassmorphism, fluid animations, and mobile-first responsiveness, this site highlights software engineering works, tech stack proficiencies, and reflections. It operates **entirely client-side**, requiring no active backend database.

🔗 **Production URL**: [ujwalsingh.in](https://ujwalsingh.in)

---

## 🌟 Key Features

### 1. 🌐 Multi-Language Client-Side Translation
* Select from 5 different language profiles from the navbar dropdown:
  * **English (EN)**
  * **French (Français - FR)**
  * **Spanish (Español - ES)**
  * **Mandarin (中文 - ZH)**
  * **Hindi (हिन्दी - HI)**
* All page descriptions, skills tabs, timeline milestones, websites lists, and form placeholders translate instantly with a smooth fade-in effect.

### 2. 🤖 Interactive AI Portfolio Assistant
* A custom-designed floating AI chat widget sits at the bottom-right corner of the page.
* It features glassmorphism, pulse glowing state animations, and simulated typing delays.
* Predefined options help recruiters quickly learn about Ujwal's background, top projects, skills, and contact handles.

### 3. 🔑 Gated Secret Admin Panel (`/adminxus23`)
* Access a local admin dashboard at the custom path `/adminxus23` protected by the password `newmatt23`.
* **Thoughts Moderator**: Remove any static or guest thoughts from the public Reflections board. Deletion pushes the target ID to a local blacklist (`localStorage`), dynamically filtering it out site-wide.
* **Contact Inbox**: Read, manage, and delete contact message submissions stored locally in `localStorage`.

### 4. 🗂️ Projects Showcase & Dialog Details
* Search, filter, and discover web apps, canvas games, and utilities in a responsive grid.
* Clicking on any card opens a premium detailed modal rendering tech badges, core features checklists, and live links.
* Features top works including the **Namami Vindhyavasini** temple portal (`https://vnamami.vercel.app/`).

### 5. ✍️ Local Thoughts Guestbook Board
* Share a thought on the public wall! Users can type in custom notes, set a name, and select one of three colorful themes (Coral, Teal, Pink). 
* Includes full local delete controls and floating vertical animations.

---

## 🛠️ Technology Stack

* **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/), Vanilla CSS transitions, custom cubic-bezier animations
* **UI Components**: [shadcn-ui](https://ui.shadcn.com/) (Radix UI primitives)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Package Manager**: [Bun](https://bun.sh/) (or NPM)

---

## 🚀 Running Locally

Follow these steps to run the development server on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ujwalx23/ujwalsingh.in.git
   cd ujwalsingh.in
   ```

2. **Install dependencies**:
   ```bash
   # Using Bun (Recommended)
   bun install
   
   # Or using NPM
   npm install
   ```

3. **Start the development server**:
   ```bash
   # Using Bun
   bun run dev
   
   # Or using NPM
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📄 License & Attribution

Designed and developed by **Ujwal Singh**. Feel free to fork, explore, and use this template as inspiration for your own portfolio.
