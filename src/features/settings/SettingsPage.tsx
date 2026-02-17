import { useState } from 'react';
import { ProfileSettings } from './components/ProfileSettings';
import { Button } from '../../ui/Button';
import { Moon, Sun, Monitor } from 'lucide-react';
import { clsx } from 'clsx';
import { useTheme } from '../../context/ThemeContext';
import './SettingsPage.css';

export const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const { theme, setTheme } = useTheme();

    const tabs = [
        { id: 'profile', label: 'Profile' },
        { id: 'appearance', label: 'Appearance' },
        { id: 'notifications', label: 'Notifications' },
    ];

    return (
        <div className="settings-container">
            <h1 className="settings-title">Settings</h1>

            <div className="settings-layout">
                <div className="settings-sidebar">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={clsx('settings-nav-item', activeTab === tab.id && 'settings-nav-item--active')}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="settings-content">
                    {activeTab === 'profile' && <ProfileSettings />}

                    {activeTab === 'appearance' && (
                        <div className="settings-section">
                            <h3 className="settings-section-title">Theme Preferences</h3>
                            <div className="theme-options">
                                <div
                                    className={clsx('theme-card', theme === 'light' && 'theme-card--active')}
                                    onClick={() => setTheme('light')}
                                >
                                    <div className="theme-preview theme-preview--light">
                                        <div className="theme-preview-header"></div>
                                        <div className="theme-preview-content"></div>
                                    </div>
                                    <div className="theme-label">
                                        <Sun size={16} /> Light
                                    </div>
                                </div>

                                <div
                                    className={clsx('theme-card', theme === 'dark' && 'theme-card--active')}
                                    onClick={() => setTheme('dark')}
                                >
                                    <div className="theme-preview theme-preview--dark">
                                        <div className="theme-preview-header"></div>
                                        <div className="theme-preview-content"></div>
                                    </div>
                                    <div className="theme-label">
                                        <Moon size={16} /> Dark
                                    </div>
                                </div>

                                <div
                                    className={clsx('theme-card', theme === 'system' && 'theme-card--active')}
                                    onClick={() => setTheme('system')}
                                >
                                    <div className="theme-preview theme-preview--system">
                                        <div className="theme-preview-header"></div>
                                        <div className="theme-preview-content"></div>
                                    </div>
                                    <div className="theme-label">
                                        <Monitor size={16} /> System
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="settings-section">
                            <h3 className="settings-section-title">Notification Preferences</h3>
                            <div className="notification-setting">
                                <div className="notification-info">
                                    <span className="notification-label">Email Alerts</span>
                                    <span className="notification-desc">Receive summaries of critical alerts via email.</span>
                                </div>
                                <Button variant="secondary" size="sm">Configure</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
