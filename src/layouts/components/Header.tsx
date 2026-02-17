import { Bell, HelpCircle, Search } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import './Header.css';

export const Header = () => {
    return (
        <header className="app-header">
            <div className="app-header__search">
                <Input
                    placeholder="Search indicators, alerts, or entities..."
                    leftIcon={<Search />}
                    className="header-search-input"
                />
            </div>

            <div className="app-header__actions">
                <Button variant="ghost" size="sm" className="icon-btn">
                    <HelpCircle size={20} />
                </Button>
                <div className="notification-wrapper">
                    <Button variant="ghost" size="sm" className="icon-btn">
                        <Bell size={20} />
                    </Button>
                    <span className="notification-badge"></span>
                </div>
            </div>
        </header>
    );
};
