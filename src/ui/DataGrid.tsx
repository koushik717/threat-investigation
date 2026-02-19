import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import { ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface DataGridProps<TData = unknown> {
    rowData: TData[];
    columnDefs: ColDef<TData>[];
    onRowClick?: (data: TData) => void;
    height?: string | number;
}

export const DataGrid = <TData,>({ rowData, columnDefs, onRowClick, height = '100%' }: DataGridProps<TData>) => {
    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        minWidth: 100,
    }), []);


    const onGridReady = (params: GridReadyEvent) => {
        params.api.sizeColumnsToFit();
    };

    return (
        <div className="ag-theme-alpine-dark" style={{ height, width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                onRowClicked={(e) => onRowClick && onRowClick(e.data)}
                pagination={true}
                paginationPageSize={20}
                rowSelection="single"
                animateRows={true}
            />
        </div>
    );
};
