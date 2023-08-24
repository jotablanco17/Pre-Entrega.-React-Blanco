const footerTitulo = 'este es mi footer'
const Footer = (props) => {
    return (
        <div>
        <h2>{footerTitulo}</h2>
        <h4>{props.subFooter}</h4>
        </div>
        
    )
}

export default Footer