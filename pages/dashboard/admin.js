import { Component } from "react";
import AdminView from '../../component/views/dashboard/adminView';
import DashboardHead from '../../component/layouts/Dashboard/DashboardHead';
import DashboardBody from '../../component/layouts/Dashboard/DashboardBody';

class Admin extends Component {

    static async getInitialProps({query}){

        return {query: query};
    }

    render(){
        return(
            <div>
                <DashboardHead title="Admin"/>
                <DashboardBody >
                    <AdminView token={this.props.query.token}/>
                </DashboardBody>
            </div>
        )
    }

}

export default Admin;