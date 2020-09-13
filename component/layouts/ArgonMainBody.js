
const ArgonMainBody = (props) => {

    return(
        <div className={props.bgClassName}>
            {props.children}
            <script src="/assets/vendor/jquery/dist/jquery.min.js"></script>
            <script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="/assets/vendor/js-cookie/js.cookie.js"></script>
            <script src="/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
            <script src="/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
            <script src="/assets/vendor/anchor-js/anchor.min.js"></script>
            <script src="/assets/vendor/clipboard/dist/clipboard.min.js"></script>
            <script src="/assets/vendor/holderjs/holder.min.js"></script>
            <script src="/assets/vendor/prismjs/prism.js"></script>\
            <script src="/assets/js/argon.min9f1e.js"></script>
            <script src="/assets/js/demo.min.js"></script>
        </div>
    )

}

export default ArgonMainBody;