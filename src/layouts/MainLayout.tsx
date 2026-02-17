import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import './MainLayout.css';

export const MainLayout = () => {
    return (
        <div className="app-layout">
            <Sidebar />
            <div className="app-layout__content-wrapper">
                <Header />
                <main className="app-layout__main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
