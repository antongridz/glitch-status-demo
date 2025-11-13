# Glitch Status Animation Demo

A minimal Next.js demo project showcasing a reusable React text glitch animation component. This component provides smooth, eye-catching transitions between status messages with a glitch effect.

## What This Project Does

This project demonstrates a `StatusAnimation` component that:
- Animates text transitions with a glitch effect using ASCII characters
- Provides smooth left-to-right character-by-character animation
- Supports customizable styling via Tailwind CSS classes
- Can be easily integrated into any React/Next.js project

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

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
glitch-status-demo/
├── src/
│   ├── components/
│   │   └── StatusAnimation.tsx  # The reusable glitch animation component
│   └── app/
│       ├── page.tsx             # Demo page showcasing the component
│       ├── layout.tsx           # Root layout
│       └── globals.css          # Global styles with Tailwind
└── README.md                    # This file
```

## How to Deploy to Vercel

1. **Push your code to GitHub** (or another Git provider)

2. **Import your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will automatically detect Next.js and configure the build settings

3. **Deploy**:
   - Click "Deploy"
   - Your project will be built and deployed automatically
   - You'll get a live URL (e.g., `your-project.vercel.app`)

**Alternative: Deploy via Vercel CLI**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

## How to Extract the Component

### Option 1: Copy to Another Project

1. Copy the `src/components/StatusAnimation.tsx` file to your project
2. Ensure your project has React and TypeScript set up
3. Import and use the component:

```tsx
import { StatusAnimation } from './components/StatusAnimation';

function MyComponent() {
  return (
    <StatusAnimation
      currentStatus="Loading..."
      isAnimating={true}
      className="text-blue-400"
      fontSize="text-xl"
      fontFamily="font-bold"
    />
  );
}
```

### Option 2: Publish to npm

1. **Create a new npm package**:
   ```bash
   mkdir status-animation-component
   cd status-animation-component
   npm init -y
   ```

2. **Set up the package structure**:
   ```
   status-animation-component/
   ├── src/
   │   └── StatusAnimation.tsx
   ├── package.json
   └── README.md
   ```

3. **Update package.json**:
   ```json
   {
     "name": "status-animation",
     "version": "1.0.0",
     "main": "src/StatusAnimation.tsx",
     "types": "src/StatusAnimation.tsx",
     "peerDependencies": {
       "react": "^18.0.0 || ^19.0.0",
       "react-dom": "^18.0.0 || ^19.0.0"
     }
   }
   ```

4. **Publish to npm**:
   ```bash
   npm login
   npm publish
   ```

5. **Install in other projects**:
   ```bash
   npm install status-animation
   ```

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
        className="text-green-400 font-mono"
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

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling

## License

This project is open source and available under the MIT License.
