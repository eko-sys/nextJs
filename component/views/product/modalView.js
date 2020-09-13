import Loader from 'react-loader-spinner';

class ProductModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            numberTarget: '',
            productTarget: '',
            listProduct: null,
            typeProduct: {
                provaider_id: null
            },
            title: () => {
                if(this.props.type === 'pulsa'){
                    return 'Pulsa';
                }else if(this.props.type === 'data'){
                    return "Paket Data";
                }else if(this.props.type === 'vdata'){
                    return "Voucher Data";
                }
            },
            loading: false,
            buttonVis: false
        }
    }

   apiPpob(provaider){
        const currentUrl = window.location.href;
        const uriSegment = currentUrl.split('/');
        const host = uriSegment[2];

        this.setLoading(true)
        const apiUrl = `http://${host}/api/product/pulsa`;
        fetch(apiUrl,{
            method: 'get',
            headers: {
                "Authorization": `Bearer ${this.props.token}`
            }
        }).then(res => res.json()).then(res => {
            this.setState({
                listProduct: res.data
            });

            this.setLoading(false)

            this.setState({
                typeProduct: {
                    provaider_id: provaider
                }
            })
        })
   }

   orderHandler(){
       const {productTarget, numberTarget} = this.state;

       if(numberTarget || productTarget){
        this.setState({
            buttonVis: true
        })
        this.apiPpobReqOrder(numberTarget, productTarget);
       }else{
           alert('Oops!, nomor atau produk kelupaan :)')
       }
   }

   apiPpobReqOrder(number, product){
        const currentUrl = window.location.href;
        const uriSegment = currentUrl.split('/');
        const host = uriSegment[2];
        
        this.setLoading(true)
        const apiUrl = `http://${host}/api/product/pulsa/request?action=order&service=${product}&target=${number}`;
        fetch(apiUrl,{
            method: 'post',
            headers: {
                "Authorization": `Bearer ${this.props.token}`
            }
        }).then(res => res.json()).then(res => {
            this.setLoading(false)
            this.setState({
                buttonVis: false
            })

            if(res.result == false){
                alert(res.data)
            }else if(res.status === false){
                alert(res.msg)
            }else{
                alert('Produk berhasil dibeli laman akan segera dialihkan dalam 3 detik')

                setTimeout(() => {
                    location.replace('/dashboard/home');
                }, 3000)
            }
        })
   }

   setLoading(val){
        this.setState({
            loading: val
        })
   }

   onChangeNumber(number){
    const three = ['0895', '0896', '0897', '0898', '0899'];
    const smart = ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'];
    const axis = ['0838', '0831', '0832', '0833'];
    const tsel = ['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823', ];
    const xl = ['0817', '0818', '0819', '0859', '0877', '0878'];
    const isat = ['0814', '0815', '0816', '0855', '0856', '0857', '0858'];
    const byU = ['0851'];

    const frontNumb = number.target.value.slice(0, 4)

        this.setState({
            numberTarget: number.target.value    
        })
        
        if(three.includes(frontNumb)){
            this.apiPpob(3);
        }else if(smart.includes(frontNumb)){
            this.apiPpob(5);
        }else if(xl.includes(frontNumb)){
            this.apiPpob(6);
        }else if(tsel.includes(frontNumb)){
            this.apiPpob(1);
        }else if(isat.includes(frontNumb)){
            this.apiPpob(2);
        }else if(axis.includes(frontNumb)){
            this.apiPpob(4);
        }else if(byU.includes(frontNumb)){
            this.apiPpob(7);
        }
   }

   onChangeSelect(e){
       this.setState({
            productTarget: e.target.value
       })
   }

   toRpID(value){
        var reverse = value.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
    }

    render(){
        return(
                <div className="modal fade" id="productModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.state.title()}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <div className="input-group input-group-merge input-group-alternative">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                    </div>
                                    <input value={this.state.numberTarget} className="form-control" onChange={(e) => {
                                        this.onChangeNumber(e)
                                    }} placeholder="No Tujuan" type="number" required/>
                                </div>
                            </div>

                            <div className="form-group">
                            <div className="input-group input-group-merge input-group-alternative">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                    </div>
                                        <select value={this.state.productTarget} onChange={(e) => {
                                            this.onChangeSelect(e);
                                        }} className="form-control">
                                            { this.state.listProduct ?
                                                <>
                                                    <option value="">Pilih Product</option>
                                                    { this.state.listProduct.map(data => {
                                                        if(data.provaider_id == this.state.typeProduct.provaider_id && data.type == this.props.type){
                                                            return(
                                                                <option value={data.product_code}>{data.product_name}</option>
                                                            )
                                                        }
                                                      })
                                                    }
                                                </>
                                             :
                                                <option>Service unrecognized</option>
                                            }
                                        </select>
                                </div>
                            </div>
                        </div>

                        <div className="text-center" >
                            { this.state.productTarget ?
                                this.state.listProduct.map(data => {
                                    if(this.state.productTarget == data.product_code){
                                        return(
                                            <div>
                                                <h5>{data.note}</h5>
                                                <h5>Harga: {this.toRpID(data.price)}</h5>
                                            </div>
                                        )
                                    }
                                })
                                :
                                null
                            }
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
                            <button type="button" onClick={() => {
                                this.orderHandler();
                            }} className="btn btn-primary" disabled={this.state.buttonVis} >Beli</button>
                        </div>
                        </div>
                    </div>
                    
                    { this.state.loading ?
                        <div className="fixed-bottom d-flex justify-content-center">
                            <Loader type="ThreeDots" color="#ffff00" height={70} width={70} />
                        </div>
                     :
                        null
                    }
                </div>
        )
    }

}

export default ProductModal;