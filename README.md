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

## Publishing to GitHub

1. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `glitch-status-demo` (or your preferred name)
   - Don't initialize with README, .gitignore, or license (we already have these)

2. **Push your code to GitHub**:
   ```bash
   # Add the remote repository (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/glitch-status-demo.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Verify**: Your code should now be visible on GitHub!

## Deploying to Vercel

### Option 1: Deploy via GitHub Integration (Recommended)

1. **Push your code to GitHub** (see above)

2. **Import your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Select your `glitch-status-demo` repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

3. **Your site is live!**:
   - Vercel will provide you with a live URL (e.g., `glitch-status-demo.vercel.app`)
   - Every push to your main branch will automatically trigger a new deployment

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (from the project root)
cd glitch-status-demo
vercel

# Follow the prompts to link your project
```

## Publishing the Component to npm

The component is prepared for npm publishing in the `package/` directory.

### Prerequisites

1. **Create an npm account** (if you don't have one):
   - Go to [npmjs.com](https://www.npmjs.com) and sign up

2. **Login to npm**:
   ```bash
   npm login
   ```

### Publishing Steps

1. **Navigate to the package directory**:
   ```bash
   cd package
   ```

2. **Build the package**:
   ```bash
   npm install
   npm run build
   ```

3. **Publish to npm**:
   ```bash
   npm publish
   ```

   **Note**: Make sure the package name `glitch-status-animation` is available on npm. If it's taken, update the `name` field in `package/package.json` to something unique.

4. **Verify**: Your package should now be available at `https://www.npmjs.com/package/glitch-status-animation`

### Installing the Published Package

Once published, others can install it with:

```bash
npm install glitch-status-animation
```

Then use it in their projects:

```tsx
import { StatusAnimation } from 'glitch-status-animation';

function MyComponent() {
  return (
    <StatusAnimation
      currentStatus="Loading..."
      isAnimating={true}
      className="text-primary"
      fontSize="text-xl"
      fontFamily="font-bold"
    />
  );
}
```

### Updating the Package

When you make changes to the component:

1. Update the version in `package/package.json` (following [semver](https://semver.org/))
2. Rebuild: `npm run build`
3. Publish: `npm publish`

## Using the Component Locally

### Option 1: Copy the Component

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
      className="text-primary"
      fontSize="text-xl"
      fontFamily="font-bold"
    />
  );
}
```

### Option 2: Install from npm (after publishing)

```bash
npm install glitch-status-animation
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
