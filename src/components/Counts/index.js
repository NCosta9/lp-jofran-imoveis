import './counts.css'
import CountUp from 'react-countup';
export default function Counts() {
    return (
        <>
            <section id="counts" class="counts">
                <div class="container">

    

                    <div class="row counters position-relative justify-content-center">

                        <div class="col-lg-3 col-6 text-center">
                        <CountUp end={536} duration={5} className='mt-3'/>
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Clientes</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                        <CountUp end={60} duration={5} className='mt-3' />
                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Casas</p>
                        </div>
                     

                    </div>

                </div>
            </section>
        </>
    )
}