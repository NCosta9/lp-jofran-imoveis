import './footerHome.css';


export default function FooterHome() {
  return (
    <>
      <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.2763876731797!2d-48.27093302497524!3d-15.946936526729584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bdb61670343f1%3A0x1b0687c2f032f98e!2sJofran%20Im%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1707416868763!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen></iframe>

      <footer id="footerHome">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3 className='logo'><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/jofran/logos/LOGO%20VECTOR.png?t=2024-04-24T15%3A40%3A12.366Z" alt="" className="logo-img" /></h3>
                  <p>
                    Quadra 70,4- Loja 01, Centro<br />Santo Antônio do Descoberto- GO<br />
                    <strong>Telefone:</strong> (61) 99610-2277<br />
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Acesso Rápido</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">- Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://www.jofranimoveis.com.br/imoveis/a-venda">- Catálogo</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/sobre">- Sobre a Jofran</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://blog.jofranimoveis.com.br1">- Blog</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://imobiliaria.jofranimoveis.com.br/forms-lp">- Contato</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="termos">- Termos de Serviço</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="politicas">- Politica de Privacidade</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Outros links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://imobiliaria.jofranimoveis.com.br/meu-imovel">Negocie Seu Imóvel Aqui  </a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/trabalhe Conosco">Seja Nosso Corretor</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Jofran Imóveis</h4>
                <p>Há mais de 10 anos realizando sonhos!  Já ajudamos várias pessoas a sair do aluguel através da realização da casa propria! Nós não vendemos casas, nós realizamos sonhos.</p>
                {/* <form action="" method="post">
                  <input type="email" name="email"/>
                  <input type="submit" value="Subscribe"/>
                </form>
     */}
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>JOFRAN IMOVEIS CONSTRUTORA E IMOBILIARIA LTDA, CNPJ : 26.712.485/0001-30, CRECI: 40.016/G0 </span></strong>. Todos os direitos reservados
          </div>
          <div className="credits">

            Criado por <a href="https://promovaonline.com.br">PromovaOnline</a>
          </div>
        </div>
      </footer>

    </>

  );
}