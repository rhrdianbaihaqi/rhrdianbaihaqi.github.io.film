import { Card, Container, Row, Col, Image } from "react-bootstrap"
import dilanImage from "../assets/image/DILAN1990.jpg"
import mariposaImage from "../assets/image/MARIPOSA.jpg"
import gitacintaImage from "../assets/image/GITACINTA.jpg"


const Empatsilinder = () => {
    return (
    <div>
        <Container>
            <br />
            <h1 className="text-white"> ROMANCE</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="Empatsilinder">
                <Card className="filmImage">
                <Image src={dilanImage} alt="ROMANCE" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">DILAN 1990</Card.Title>
                <Card.Text className="text-left text-center">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Merayakan nostalgia cinta dalam DILAN 1990! Iqbaal Ramadhan dan Vanesha Prescilla membawa kisah cinta yang timeless dalam sekuel ini. Terletak di atmosfer tahun 1990, film ini memikat penonton dengan nuansa romantis dan ketegangan emosional antara Dilan dan Milea. Saksikan keindahan cinta pertama, diwarnai dengan nuansa musik era 90-an yang memikat. DILAN 1990 mempersembahkan kisah cinta abadi yang melibatkan penonton dalam nostalgia masa remaja. Dengan adegan penuh getaran romantis, film ini membawa Anda kembali ke masa-masa indah cinta muda. DILAN 1990: Membawa kembali kenangan manis cinta masa lalu."</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={mariposaImage} alt="ROMANCE" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MARIPOSA</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Terbanglah bersama keajaiban dan keindahan dalam MARIPOSA! Film animasi yang memukau ini membawa penonton ke dunia penuh keajaiban di mana keberanian dan impian bertemu. Mengikuti kisah Mariposa, seorang putri peri yang berani, penonton akan tersesat dalam petualangan magis yang menguak misteri dan persahabatan. Dengan animasi indah dan cerita yang penuh inspirasi, MARIPOSA mengajak Anda merayakan keunikan dan kekuatan dari setiap individu. Bersiaplah untuk terbang tinggi dan menyelami pesona dunia yang penuh keajaiban, di mana impian menjadi kenyataan dan persahabatan menjadi pilar kekuatan. MARIPOSA"</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={gitacintaImage} alt="ROMANCE" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">GITA CINTA DARI SMA</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"GITA CINTA DARI SMA menghadirkan kisah cinta yang memikat dari masa sekolah menengah. Film ini mengikuti petualangan romantis antara remaja, menggambarkan liku-liku hubungan mereka di tengah tawa, tangis, dan kebahagiaan. Dengan bintang-bintang muda yang memukau, GITA CINTA DARI SMA memainkan melodi nostalgia masa muda, merayakan kisah cinta murni dan pertemanan abadi. Saksikan pergulatan perasaan dan pencarian identitas diri dalam film ini yang penuh dengan kehangatan dan keindahan. GITA CINTA DARI SMA: Membawa Anda kembali ke kenangan indah masa remaja, di mana cinta adalah lagu penuh warna kehidupan. GITA CINTA DARI SMA"</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Empatsilinder