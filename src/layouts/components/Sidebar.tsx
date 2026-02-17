import { NavLink } from 'react-router-dom';
import {
    ShieldAlert,
    Search,
    LayoutDashboard,
    Settings,
    Activity
} from 'lucide-react';
import clsx from 'clsx';
import './Sidebar.css';

export const Sidebar = () => {
    const navItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', to: '/dashboard' },
        { icon: <ShieldAlert size={20} />, label: 'Alerts', to: '/alerts' },
        { icon: <Search size={20} />, label: 'Investigation', to: '/investigation' },
        { icon: <Activity size={20} />, label: 'Intelligence', to: '/intelligence' },
        { icon: <Settings size={20} />, label: 'Settings', to: '/settings' },
    ];

    return (
        <aside className="app-sidebar">
            <div className="app-sidebar__header">
                <div className="app-logo">
                    <ShieldAlert className="app-logo__icon" size={28} />
                    <span className="app-logo__text">ThreatConsole</span>
                </div>
            </div>

            <nav className="app-sidebar__nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            clsx('app-sidebar__link', isActive && 'app-sidebar__link--active')
                        }
                    >
                        <span className="app-sidebar__link-icon">{item.icon}</span>
                        <span className="app-sidebar__link-text">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="app-sidebar__footer">
                <div className="user-profile">
                    <div className="user-avatar">AD</div>
                    <div className="user-info">
                        <span className="user-name">Admin User</span>
                        <span className="user-role">Security Analyst</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};
