import './Page.scss';

function Page(props) {
    return (
        <section id="page">
            {props.children}
        </section>
    );
}

export default Page;
