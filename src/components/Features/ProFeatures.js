import CarouselCasas from "../Carousel/CarouselCasas";
import './features.css'

export default function ProFeatures() {
    return(
        <>
        
        <section id="features" class="features" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1" >
            <div class="icon-box mt-5 mt-lg-0" data-aos="fade-right" data-aos-duration="300"> 
            <i class="bi bi-check2-circle"></i>              
            <h4>Design Moderno e Acabamentos de alta qualidade</h4>
              <p>Qualidade nos materiais utilizados,caracteristicas interiores que todo mundo sonha em ter.</p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-right" data-aos-duration="500">
            <i class="bi bi-check2-circle"></i>              
            <h4>Bem localizada</h4>
              <p>Proximidade com locais de trabalho, escolas, transporte público, áreas comerciais e serviços essenciais fundamental para muitas pessoas.</p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-right" data-aos-duration="700">
            <i class="bi bi-check2-circle"></i>              
            <h4>Ampla aréa de Lazer </h4>
              <p>Um quintal espaçoso, jardim bem cuidado ou varanda que são aspectos valorizados por muitas pessoas, especialmente aquelas com crianças ou que gostam de passar tempo ao ar livre.</p>
            </div>
            <div class="icon-box mt-5" data-aos="fade-right" data-aos-duration="900">
            <i class="bi bi-check2-circle"></i>             
             <h4>Excelente Custo Financeiro</h4>
              <p>O melhor valor que você pode encontrar e com as melhores condições de financiamento, na decisão de compra.</p>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">

            <CarouselCasas/>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}