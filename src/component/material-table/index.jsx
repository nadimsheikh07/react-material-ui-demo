import React from "react";
import MaterialTable from 'material-table';
import { crudService } from '../../_services';

class MaterialDataTable extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            columns: this.props.columns
        }

        this.tableRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.tableRef.current) {
            this.tableRef.current.onQueryChange()
        }
    }

    render() {
        const { columns } = this.state
        const { selection, refresh } = this.props
        const actions = []
        const options = {
            selection: selection,
            actionsColumnIndex: -1,
            search: true,
            sorting: true,
            filtering: true,
        }

        if (this.props.deleteAll) {
            actions.push({
                icon: 'delete',
                tooltip: 'Delete',
                onClick: (event, rowData) => {
                    this.props.deleteAll(rowData);
                }
            })
        }
        if (this.props.addData) {
            actions.push({
                icon: 'add',
                tooltip: 'Add',
                isFreeAction: true,
                onClick: () => {
                    this.props.addData();
                }
            })
        }

        if (refresh) {
            actions.push({
                icon: 'refresh',
                tooltip: 'Refresh Data',
                isFreeAction: true,
                onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange()
            })
        }


        return (
            <MaterialTable
                tableRef={this.tableRef}
                title={this.props.title}
                data={query =>
                    new Promise((resolve, reject) => {
                        crudService._getAll(this.props.url, query)
                            .then(
                                result => {
                                    if (result.status === 200) {
                                        resolve({
                                            data: result.data.data,
                                            page: result.data.page - 1,
                                            totalCount: Number(result.data.total),
                                        })
                                    }
                                }
                            );
                    })
                }
                options={options}
                actions={actions}
                columns={columns}
            />);
    }
}

export default MaterialDataTable;