import Counts from '../Counts'
import './jumbotrons.css'
export default function Jumbotrons() {
  return (
    <>

      <div class="jumbotrons text-center">
        <div className='row'>
          <div className='col-lg-6 col-md-6  order-2 order-lg-1'>
          <Counts />
          </div>
          <div className='col-lg-6 col-md-6 d-flex  order-1 order-lg-2'>
            <div class="container p-3 text-end">
              <h1 class="fw-bold text-light mt-4">A sua procura chegou ao fim!</h1>
              <p class=" text-light">
                Cadastre-se e conheça mais sobre o imóvel que vai mudar como você vive a vida
              </p>
            </div>
          </div>

        </div>

      </div>


    </>
  )
}