# glitch-status-animation

A reusable React component for animated status transitions with a glitch effect using ASCII characters.

## Installation

```bash
npm install glitch-status-animation
```

## Usage

```tsx
import { StatusAnimation } from 'glitch-status-animation';

function MyComponent() {
  const [status, setStatus] = useState("Initial");
  const [animating, setAnimating] = useState(false);

  return (
    <StatusAnimation
      currentStatus={status}
      isAnimating={animating}
      className="text-primary"
      fontSize="text-2xl"
      fontFamily="font-bold"
    />
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `currentStatus` | `string` | Yes | - | The status text to display |
| `isAnimating` | `boolean` | Yes | - | Triggers animation when status changes |
| `className` | `string` | No | `""` | Additional CSS classes |
| `fontSize` | `string` | No | `"text-sm"` | Tailwind font size class |
| `fontFamily` | `string` | No | `"font-medium"` | Tailwind font weight class |

## License

MIT

---

Made by [Anton Gridz](https://antongridz.com/)

