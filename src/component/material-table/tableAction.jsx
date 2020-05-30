import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LockIcon from '@material-ui/icons/Lock';

export const TableAction = (deleteData, editData, editPass = false) => {
    return (
        {
            field: 'action',
            title: 'Action',
            sorting: false,
            filtering: false,
            render: rowData => (
                <React.Fragment>
                    {deleteData && <IconButton aria-label="delete" onClick={() => { deleteData(rowData) }}><DeleteIcon fontSize="small" /></IconButton>}
                    {editData && <IconButton aria-label="edit" onClick={() => { editData(rowData) }}><EditIcon fontSize="small" /></IconButton>}
                    {editPass && <IconButton aria-label="edit" onClick={() => { editPass(rowData) }}><LockIcon fontSize="small" /></IconButton>}
                </React.Fragment >
            )
        }
    )
}
