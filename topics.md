Topics covered so far
TypeScript fundamentals

Primitive types and explicit annotations
Type inference
Type errors / type checking
Arrays (Array<T> and T[] syntax)
Tuples
Object type aliases (type Foo = { ... })
Excess property checking
interface vs type
PascalCase vs camelCase naming conventions
import type for type-only imports
Type vs value imports
Union literal types ("primary" | "secondary")

React fundamentals

JSX basics
Components as functions
function declaration vs const arrow function for components
Props and one-way data flow (parent → child)
Destructuring props
Typing props with interfaces
Rendering lists with .map()
The key prop and why it's required
Conditional rendering (ternaries)
Conditional className patterns
Importing assets (images) via ES modules in Vite
useState hook
Event handlers (onClick)
useEffect hook (briefly — with cleanup for timers)

Routing

BrowserRouter setup
Link vs NavLink
Hash links vs route links

Styling

CSS custom properties / design tokens
CSS Modules (.module.css, scoped class names)
object-fit for images
Layered positioning (position: relative + absolute)
transform: scale() vs animating width/height
transform-origin
Transitions

Architecture / project structure

Folder-per-component convention
Separating data from components (src/data/)
Separation of types (PascalCase) from data (camelCase)
Reusable components vs section-specific content

Vite + tooling

Project scaffold
Dev server
tsconfig.app.json types array
Asset imports
Fast refresh

Testing

Vitest + React Testing Library + jest-dom setup
vite.config.ts test block configuration
setupTests.ts
Test file location convention (co-located)
Anatomy of a test: describe / it / expect
render() and screen
getByRole queries
.toBeInTheDocument() matcher
Using fake test data instead of real data
Watch mode
