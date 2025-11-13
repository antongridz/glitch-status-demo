# Glitch Status Animation Demo

A minimal Next.js demo project showcasing a reusable React text glitch animation component. This component provides smooth, eye-catching transitions between status messages with a glitch effect.

**🔗 [Live Demo on Vercel](https://glitch-status-demo.vercel.app)**

## Inspiration

This glitch animation was inspired by [@tomjohndesign](https://x.com/tomjohndesign).

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the demo.

## Component API

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `currentStatus` | `string` | Yes | - | The status text to display |
| `isAnimating` | `boolean` | Yes | - | Triggers animation when status changes |
| `className` | `string` | No | `""` | Additional CSS classes |
| `fontSize` | `string` | No | `"text-sm"` | Tailwind font size class |
| `fontFamily` | `string` | No | `"font-medium"` | Tailwind font weight class |

### Example Usage

```tsx
import { StatusAnimation } from "@/src/components/StatusAnimation";

function App() {
  const [status, setStatus] = useState("Initial");
  const [animating, setAnimating] = useState(false);

  return (
    <div>
      <StatusAnimation
        currentStatus={status}
        isAnimating={animating}
        className="text-primary font-mono"
        fontSize="text-2xl"
        fontFamily="font-bold"
      />
      <button onClick={() => {
        setAnimating(true);
        setStatus("New Status");
      }}>
        Change Status
      </button>
    </div>
  );
}
```

## npm Package

The component is also available as an npm package:

```bash
npm install glitch-status-animation
```

```tsx
import { StatusAnimation } from 'glitch-status-animation';
```

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling

## License

MIT License
