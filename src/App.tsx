import { ThemeProvider } from '@/styles/theme-provider';
import { useRoutes } from 'react-router-dom';
import Home from './pages/home';
import { ModeToggle } from './components/ui/mode-toggle';

const routes = [{ path: '/', element: <Home /> }];

function App() {
    const children = useRoutes(routes);

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <span className="fixed right-5 top-5">
                <ModeToggle></ModeToggle>
            </span>
            <div className="flex min-h-screen w-screen items-center justify-center bg-white dark:bg-slate-700">
                {children}
            </div>
        </ThemeProvider>
    );
}

export default App;
