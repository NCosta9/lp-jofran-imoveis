import Banner2 from "../../components/Banner/Banner2";
import Destaques from "../../components/Destaques";
import FooterHome from "../../components/FooterHome/FooterHome";
import Header from "../../components/Header/Header";
import IconBoxes from "../../components/IconBoxes/IconBoxes";
import Oportunidades from "../../components/Oportunidades";

export default function Home() {
    return (
        <>
            <Header />
            <Banner2 />
            <IconBoxes />
            <Destaques />
            <Oportunidades />
            <FooterHome />
        </>
    )
}