const { Component } = require("react");
import Main from '../../layouts/Dashboard/Main';

class AdminView extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        return(
            <div>
                <Main token={this.props.token}>
                </Main>
            </div>
        )
    }

}

export default AdminView