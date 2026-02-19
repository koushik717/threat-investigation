import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { DataGrid } from '../../ui/DataGrid';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import type { Alert } from '../../services/mockData';
import { Filter, ChevronDown, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ColDef, ICellRendererParams, CellStyle } from 'ag-grid-community';

export const GET_ALERTS = gql`
    query GetAlerts {
        alerts {
            id
            timestamp
            severity
            status
            title
            category
            source
            entity
        }
    }
`;

export const AlertsPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { data, loading, error } = useQuery<{ alerts: Alert[] }>(GET_ALERTS);
    const [filterText, setFilterText] = useState('');

    const filteredAlerts = useMemo(() => {
        const alerts = data?.alerts || [];
        if (!filterText) return alerts;
        return alerts.filter(alert =>
            alert.title.toLowerCase().includes(filterText.toLowerCase()) ||
            alert.entity.toLowerCase().includes(filterText.toLowerCase()) ||
            alert.id.toLowerCase().includes(filterText.toLowerCase())
        );
    }, [data, filterText]);

    const getSeverityVariant = (severity: Alert['severity']) => {
        switch (severity) {
            case 'critical': return 'critical';
            case 'high': return 'warning';
            case 'medium': return 'warning';
            case 'low': return 'success';
            case 'info': return 'info';
            default: return 'default';
        }
    };

    const getStatusVariant = (status: Alert['status']) => {
        switch (status) {
            case 'new': return 'accent';
            case 'investigating': return 'warning';
            case 'resolved': return 'success';
            case 'false_positive': return 'neutral';
            default: return 'default';
        }
    };

    const handleRowClick = (data: Alert) => {
        navigate(`/investigation/${data.id}`);
    };

    const columnDefs = useMemo<ColDef<Alert>[]>(() => [
        { field: 'id', headerName: t('columns.id'), width: 120, cellStyle: { fontFamily: 'var(--font-family-mono)' } as CellStyle },
        {
            field: 'severity',
            headerName: t('columns.severity'),
            width: 120,
            cellRenderer: (params: ICellRendererParams<Alert>) => (
                <Badge variant={getSeverityVariant(params.value)}>{params.value.toUpperCase()}</Badge>
            )
        },
        {
            field: 'status',
            headerName: t('columns.status'),
            width: 140,
            cellRenderer: (params: ICellRendererParams<Alert>) => (
                <Badge variant={getStatusVariant(params.value)}>{params.value.replace('_', ' ')}</Badge>
            )
        },
        { field: 'title', headerName: t('columns.title'), flex: 2, minWidth: 200, cellStyle: { fontWeight: '500' } as CellStyle },
        { field: 'entity', headerName: t('columns.entity'), width: 150 },
        { field: 'category', headerName: t('columns.category'), width: 150 },
        {
            field: 'timestamp',
            headerName: t('columns.time'),
            width: 180,
            valueFormatter: (params) => format(new Date(params.value), 'MMM d, HH:mm:ss')
        },
    ], [t]);

    if (loading) {
        return (
            <div className="u-flex-col u-items-center u-justify-center" style={{ height: '100%' }}>
                <div>{t('alerts.loading')}</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="u-flex-col u-items-center u-justify-center" style={{ height: '100%', color: 'var(--color-critical)' }}>
                <div>{t('alerts.error', { message: error.message })}</div>
            </div>
        );
    }

    return (
        <div className="u-flex-col" style={{ gap: 'var(--space-6)', height: '100%' }}>
            {/* Page Header */}
            <div className="u-flex u-items-center u-justify-between">
                <div>
                    <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 600 }}>{t('alerts.title')}</h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                        {t('alerts.description')}
                    </p>
                </div>
                <div className="u-flex" style={{ gap: 'var(--space-2)' }}>
                    <Button variant="secondary" leftIcon={<RefreshCw size={16} />}>{t('alerts.refresh')}</Button>
                    <Button>{t('alerts.export')}</Button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="u-flex u-items-center u-justify-between" style={{
                backgroundColor: 'var(--color-bg-secondary)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)'
            }}>
                <div className="u-flex" style={{ gap: 'var(--space-4)', flex: 1 }}>
                    <Input
                        placeholder={t('alerts.searchPlaceholder', { count: 10000 })}
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                        style={{ maxWidth: '300px' }}
                    />
                    <Button variant="secondary" leftIcon={<Filter size={16} />} rightIcon={<ChevronDown size={14} />}>
                        {t('filters.severity')}
                    </Button>
                    <Button variant="secondary" leftIcon={<Filter size={16} />} rightIcon={<ChevronDown size={14} />}>
                        {t('filters.status')}
                    </Button>
                </div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    {t('alerts.showing', { count: filteredAlerts.length })}
                </div>
            </div>

            {/* Data Grid */}
            <div style={{ flex: 1, minHeight: 0, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <DataGrid
                    rowData={filteredAlerts}
                    columnDefs={columnDefs}
                    onRowClick={handleRowClick}
                />
            </div>
        </div>
    );
};
