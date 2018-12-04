import React from 'react';

const TableHeader = (()=>{
    return( 
        <div className="mt-4">
        <h6 className="font-weight-bold">Employee List</h6>
        <table className="table">
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Designation</th>
                    <th>Age</th>
                    <th>Joining Date</th>
                </tr>
            </thead>
        </table>
    </div>
     )
});

export default TableHeader;