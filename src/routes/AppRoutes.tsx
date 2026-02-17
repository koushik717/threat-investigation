import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AlertsPage } from '../features/alerts/AlertsPage';
import { InvestigationPage } from '../features/investigation/InvestigationPage';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { SettingsPage } from '../features/settings/SettingsPage';
import { IntelligencePage } from '../features/intelligence/IntelligencePage';
import { InvestigationDashboard } from '../features/investigation/InvestigationDashboard';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/investigation" element={<InvestigationDashboard />} />
                <Route path="/investigation/:id" element={<InvestigationPage />} />
                <Route path="/intelligence" element={<IntelligencePage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    );
};
