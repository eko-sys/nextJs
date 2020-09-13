import Bootstrap from '../../layouts/Bootsrap/Main';
import { Component } from 'react';

class HistoryDatable extends Component {

    constructor(props){
        super(props)
    }
    
    onClickDetail(trxid){

    }

    render(){

        const script = document.createElement("script");

        script.src = "/myAssets/js/datatables.js";
        script.async = true;

        document.body.appendChild(script);

        return(
            <Bootstrap>
                <h2 className='mb-3'>History Pembelian</h2>
                    <table id="dtHistory" className="table" width="100%">
                    <thead>
                        <tr>
                            <th className="th-sm">Kode order
                            </th>
                            <th className="th-sm">Produk
                            </th>
                            <th className="th-sm">Tujuan
                            </th>
                            <th className="th-sm">Tanggal
                            </th>
                            <th className="th-sm">Lihat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.data.map(data => {

                            return(
                                <tr>
                                    <td>{data.order_id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.target}</td>
                                    <td>{data.order_on}</td>
                                    <td onClick={() => {
                                        this.onClickDetail(data.order_id)
                                    }}><a href="#">Detail</a></td>
                                </tr>
                            )

                          })
                        }
                        </tbody>
                        <tfoot>
                        </tfoot>
                        </table>
            </Bootstrap>
        )
    }
}

export default HistoryDatable