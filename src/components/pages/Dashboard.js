import React, { Component } from 'react'
import './dashboard.scss'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            truckList: [
                { label: 'CG13 AN 8335', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AN 8336', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AN 8337', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AN 8339', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AP 4415', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AP 4442', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AP 4443', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AP 4446', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AP 4447', company: 'Jai Ambuj RoadLines' },
                { label: 'CG13 AP 4448', company: 'Jai Ambuj RoadLines' },

            ],
            freightList: [
                { label: 'Jai Ambuj Roadlines', company: 'JARL' },
                { label: 'Anoop road Carrier', company: 'ARC' },
                { label: 'G.M Roadlines', company: 'G.M Roadlines' },
                { label: 'CMC', company: 'CMC' },
                { label: 'Satya Roadlines', company: 'Satya Roadlines' },
                { label: 'Barbarik', company: 'Barbarik' },

            ],
            DeliveryTo: [
                { label: 'GP3', company: 'GP3' },
                { label: 'Baraud', company: 'Baraud' },
                { label: 'Bijari', company: 'Bijari' },
                { label: 'Jampali', company: 'Jampali' },
                { label: 'Jindal R', company: 'Jindal R' },
                { label: 'Chall', company: 'Chall' },
                { label: 'Narepalema', company: 'Narepalema' },
                { label: 'Nalwa', company: 'Nalwa' },


            ],
            DeliveryPoint: [
                { label: 'DP Power', company: 'DP Power' },
                { label: 'JPL', company: 'JPL' },
                { label: 'DCPP', company: 'DCPP' },
                { label: 'TRN', company: 'TRN' },
                { label: 'Adani', company: 'Adani' },
            ],
            page: 0,
            rowsPerPage: 10,
            showAddTruck: false,
            selectedTruck: '',
            selectedDate: '',
            loading: '',
            unloading: '',
            diselAmt: '',
            Advance: '',
        }
    }

    addTruckHandler() {
        this.setState({
            showAddTruck: !this.state.showAddTruck
        })
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        });
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: +event.target.value,
            page: 0
        })
    };

    createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
    }

    fetchDetails(event, name) {
        if (name === 'trucklist') {
            this.setState({
                selectedTruck: event.target.value
            })
        } else if (name === 'freightlist') {
            this.setState({
                selectedClient: event.target.value
            })
        } else if (name === 'to') {
            this.setState({
                to: event.target.value
            })
        } else if (name === 'from') {
            this.setState({
                from: event.target.value
            })
        } else if (name === 'date') {
            this.setState({
                selectedDate: event.target.value
            })
        } else if (name === 'loading') {
            this.setState({
                loading: event.target.value
            })
        } else if (name === 'unloading') {
            this.setState({
                unloading: event.target.value
            })
        } else if (name === 'disel') {
            this.setState({
                diselAmt: event.target.value
            })
        } else if (name === 'advance') {
            this.setState({
                enteredAmount: event.target.value
            })
        }
    }

    SaveTruckHandler() {
        let truckList = this.state.truckList
        var obj = {
            'ID': '1',
            "TPNo": '8856443',
            'VechileNo': this.state.selectedTruck,
            'Date': this.state.selectedDate,
            'loading': this.state.loading,
            'Unloading': this.state.unloading,
            'Disel': this.state.diselAmt,
            'Advance': this.state.Advance,
            'ParchiNo': ''
        }
        truckList.push(obj)
        window.localStorage.setItem('list', obj)
    }

    render() {
        const styles = { width: 200, display: 'block', marginBottom: 10 };
        const rows = [
            {
                'ID': '1',
                "TPNo": '8856443',
                'VechileNo': '685',
                'Date': '1/12/22',
                'loading': '29.81',
                'Unloading': '',
                'Disel': '',
                'Advance': '',
                'ParchiNo': ''
            },
            {
                'ID': '1',
                "TPNo": '8856443',
                'VechileNo': '685',
                'Date': '1/12/22',
                'loading': '29.81',
                'Unloading': '',
                'Disel': '',
                'Advance': '',
                'ParchiNo': ''
            }, {
                'ID': '1',
                "TPNo": '8856443',
                'VechileNo': '685',
                'Date': '1/12/22',
                'loading': '29.81',
                'Unloading': '',
                'Disel': '',
                'Advance': '',
                'ParchiNo': ''
            }, {
                'ID': '1',
                "TPNo": '8856443',
                'VechileNo': '685',
                'Date': '1/12/22',
                'loading': '29.81',
                'Unloading': '',
                'Disel': '',
                'Advance': '',
                'ParchiNo': ''
            }, {
                'ID': '1',
                "TPNo": '8856443',
                'VechileNo': '685',
                'Date': '1/12/22',
                'loading': '29.81',
                'Unloading': '',
                'Disel': '',
                'Advance': '',
                'ParchiNo': ''
            }, {
                'ID': '1',
                "TPNo": '8856443',
                'VechileNo': '685',
                'Date': '1/12/22',
                'loading': '29.81',
                'Unloading': '',
                'Disel': '',
                'Advance': '',
                'ParchiNo': ''
            },
        ];

        const columns = [
            { id: 'ID', label: 'ID', minWidth: 50 },
            { id: 'TPNo', label: 'TP Number', minWidth: 170 },
            { id: 'VechileNo', label: 'VECHILE NUMBER', minWidth: 170 },
            { id: 'Date', label: 'DATE', minWidth: 170 },
            { id: 'loading', label: 'LOADING', minWidth: 170 },
            { id: 'Unloading', label: 'UNLOADING', minWidth: 170 },
            { id: 'Disel', label: 'DISEL', minWidth: 170 },
            { id: 'Advance', label: 'ADVANCE', minWidth: 170 },
            { id: 'ParchiNo', label: 'PARCHI NUMBER', minWidth: 170 },
        ];
        const { truckList, freightList, DeliveryTo, DeliveryPoint, page, rowsPerPage, showAddTruck } = this.state
        return (
            <div className='main-div container mt-4'>
                <button className='add-truck-btn' onClick={() => this.addTruckHandler()}>+ Add Truck Detail</button>
                {
                    showAddTruck &&
                    <div className='card-div mt-4 '>
                        <h2>Enter Truck Details</h2>
                        <div className='detail-div row'>
                            <div className='col-md-3'>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={truckList}
                                    onChange={(e) => this.fetchDetails(e, 'trucklist')}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Truck Number" />}
                                />
                            </div>
                            <div className='col-md-3'>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={freightList}
                                    onChange={(e) => this.fetchDetails(e, 'freightlist')}
                                    //   sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Freight List" />}
                                />
                            </div>
                            <div className='col-md-3'>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={DeliveryTo}
                                    onChange={(e) => this.fetchDetails(e, 'to')}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Deliver From" />}
                                />
                            </div>
                            <div className='col-md-3'>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={DeliveryPoint}
                                    onChange={(e) => this.fetchDetails(e, 'from')}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Delivery To" />}
                                />
                            </div>
                            <div className='col-md-3 mt-4'>
                                <DatePicker placeholder="Select Date" style={styles} onChange={(e) => this.fetchDetails(e, 'date')} />
                            </div>
                            <div className='col-md-3 mt-4'>
                                <TextField id="outlined-basic" label="Loading" variant="outlined" onChange={(e) => this.fetchDetails(e, 'loading')} />
                            </div>
                            <div className='col-md-3 mt-4'>
                                <TextField id="outlined-basic" label="Unload" variant="outlined" onChange={(e) => this.fetchDetails(e, 'unload')} />
                            </div>
                            <div className='col-md-3 mt-4'>
                                <TextField id="outlined-basic" label="Disel" variant="outlined" onChange={(e) => this.fetchDetails(e, 'disel')} />
                            </div>
                            <div className='col-md-3 mt-4'>
                                <TextField id="outlined-basic" label="Advance" variant="outlined" onChange={(e) => this.fetchDetails(e, 'advance')} />
                            </div>
                            <div className='btn-div col-md-12 mt-4'>
                                <button className='save-btn' onClick={() => this.SaveTruckHandler()}>Save</button>
                                <button className='cancel-btn' onClick={() => this.addTruckHandler()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                }
                <div className='table-div'>
                    <h2>Truck List</h2>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={this.handleChangePage}
                            onRowsPerPageChange={this.handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        )
    }
}

export default Dashboard;