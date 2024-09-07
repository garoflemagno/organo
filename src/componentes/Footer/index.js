import './Footer.css'

function Footer() {
    return(
        <section className='rodape'>
            <div className='icone-social'>
                <img src='/imagens/fb.png' alt='Ícone do Facebook' />
                <img src='/imagens/tw.png' alt='Ícone do Twitter'/>
                <img src='/imagens/ig.png' alt='Ícone do Instagram'/>
            </div>
            <div className='logo-organo'>
                <img src='/imagens/logo.png' alt='Ícone do Organo' />
            </div>
            <div className='texto-desenvolvido'>
                <p>Desenvolvido por Magno Garofle • Projeto ALURA</p>
            </div>

        </section>
    )
}

export default Footer