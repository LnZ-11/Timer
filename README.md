# Timer App

A sophisticated, multi-timer application built with modern web technologies. Create, manage, and track multiple timers simultaneously with visual countdown indicators, alarm notifications, and a clean, responsive interface.

## ✨ Features

- **Multiple Timer Support**: Create and manage multiple timers running simultaneously
- **Visual Countdown**: Circular progress indicators with real-time countdown display
- **Audio Notifications**: Sound alerts when timers reach zero (configurable on/off)
- **Intuitive Interface**: Clean, modern UI with responsive design
- **Real-time Updates**: Live countdown with second-by-second accuracy
- **Completion Time Display**: Shows when each timer will finish
- **Easy Management**: Add, remove, and reset timers with simple controls

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Modern React with latest features
- **TypeScript** - Type-safe development

### UI & Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI 5.1.10** - Component library built on Tailwind
- **Motion** - Animation library for smooth transitions

### State Management & Logic
- **Zustand 5.0.8** - Lightweight state management
- **Custom Timer Logic** - Real-time countdown implementation

### Additional Libraries
- **React Countdown Circle Timer** - Circular progress visualization
- **Use Sound** - Audio notification system
- **React Icons** - Icon components
- **Ant Design Icons** - Additional icon set

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd timer-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
timer-app/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── counter.tsx     # Individual timer display
│   │   ├── timer.tsx       # Timer creation interface
│   │   ├── digits.tsx      # Numeric input component
│   │   └── circleCountdown.tsx # Circular progress component
│   ├── stores/             # State management
│   │   └── useTimerList.ts # Zustand store for timers
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── public/                 # Static assets
│   └── sound/             # Audio files
└── README.md
```

## 🎯 Usage

1. **Set Timer Duration**: Use the number inputs to set hours, minutes, and seconds
2. **Start Timer**: Click the "Start" button to begin countdown
3. **Monitor Progress**: Watch the circular progress indicator and digital countdown
4. **Manage Multiple Timers**: Create additional timers as needed
5. **Audio Alerts**: Toggle alarm sound on/off for each timer
6. **Completion Time**: View when each timer will finish
7. **Cleanup**: Remove individual timers or clear all at once

## 🔧 Key Components

- **TimerSetter**: Interface for creating new timers with input validation
- **Counter**: Individual timer display with countdown logic and controls
- **CircleCountdown**: Animated circular progress indicator
- **Digits**: Reusable numeric input component
- **useTimerList**: Zustand store managing timer state and actions

## 🎨 Design Features

- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Dark/Light Theme**: Built-in theme support via DaisyUI
- **Smooth Animations**: Motion-powered transitions and effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Modern Typography**: Clean, readable font choices

## 📦 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and not licensed for public use.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
