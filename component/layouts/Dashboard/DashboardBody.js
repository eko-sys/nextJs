
const DashboardBody = (props) => {
    return(
        <div className={props.bgClassName}>
            {props.children}
            
            <script
			  src="https://code.jquery.com/jquery-3.5.1.js"
			  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
			  crossOrigin="anonymous">
            </script>
            <script src="/mdAssets/js/core/popper.min.js"></script>
            <script src="/mdAssets/js/core/bootstrap-material-design.min.js"></script>
            <script src="/mdAssets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
            <script src="/mdAssets/js/plugins/moment.min.js"></script>
            <script src="/mdAssets/js/plugins/sweetalert2.js"></script>
            <script src="/mdAssets/js/plugins/jquery.validate.min.js"></script>
            <script src="/mdAssets/js/plugins/jquery.bootstrap-wizard.js"></script>
            <script src="/mdAssets/js/plugins/bootstrap-selectpicker.js"></script>
            <script src="/mdAssets/js/plugins/bootstrap-datetimepicker.min.js"></script>
            <script src="/mdAssets/js/plugins/jquery.dataTables.min.js"></script>
            <script src="/mdAssets/js/plugins/bootstrap-tagsinput.js"></script>
            <script src="/mdAssets/js/plugins/jasny-bootstrap.min.js"></script>
            <script src="/mdAssets/js/plugins/fullcalendar.min.js"></script>
            <script src="/mdAssets/js/plugins/jquery-jvectormap.js"></script>
            <script src="/mdAssets/js/plugins/nouislider.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
            <script src="/mdAssets/js/plugins/arrive.min.js"></script>
            <script src="/mdAssets/js/plugins/chartist.min.js"></script>
            <script src="/mdAssets/js/plugins/bootstrap-notify.js"></script>
            <script src="/mdAssets/js/material-dashboard.js?v=2.1.2" type="text/javascript"></script>
            <script src="/mdAssets/js/err/nav.js"></script>
        </div>
    )
}

export default DashboardBody;