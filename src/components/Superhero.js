import { Card, Container, Row, Col, Image } from "react-bootstrap"
import avangersImage from "../assets/image/AVENGERS.JPG"
import captainameImage from "../assets/image/CAPTAINAME.JPG"
import spindermanImage from "../assets/image/SPINDERMAN.jpg"


const Superhero = () => {
    return (
    <div>
        <Container>
            <br />
            <h1 className="text-white"> SUPER HERO</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="Superhero">
                <Card className="filmImage">
                <Image src={avangersImage} alt="SUPER HERO" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">avangersImage</Card.Title>
                <Card.Text className="text-left text-center">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Rakit kekuatan super dan saksikan keharmonisan pahlawan dalam AVENGERS! Dalam film epik ini, Iron Man, Thor, Hulk, Captain America, Black Widow, dan Hawkeye bergabung dalam pertarungan melawan ancaman kosmik yang menggemparkan. Dipenuhi dengan aksi mendebarkan, humor, dan efek visual yang memukau, AVENGERS menghadirkan pertempuran epik yang mengubah takdir dunia. Pahlawan super ini bersatu untuk melindungi bumi dari kehancuran, membawa pertarungan mereka ke tingkat baru dengan sekuel yang mempesona. Siapkan diri untuk pengalaman sinematik luar biasa, karena AVENGERS menggabungkan kekuatan tak terhentikan untuk menyelamatkan dunia dari kegelapan yang mengancam."</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={captainameImage} alt="SUPER HERO" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Bangkitnya pahlawan dari masa lalu, CAPTAIN AMERICA! Chris Evans memerankan Steve Rogers, seorang prajurit yang diubah menjadi simbol keadilan dalam saga Marvel ini. Saksikan perjalanan epiknya, mulai dari pengalaman pembentukan hingga pertempuran mendebarkan melawan musuh yang tak terbayangkan. Dengan kombinasi aksi spektakuler, cerita yang mengharukan, dan pesan keberanian, CAPTAIN AMERICA membawa Anda ke dalam dunia penuh patriotisme dan kepahlawanan. Terjunlah dalam petualangan luar biasa ini, di mana prinsip-prinsip keadilan dan pengorbanan membentuk seorang pahlawan super. CAPTAIN AMERICA: Membuktikan bahwa keberanian adalah kekuatan sejati yang dapat mengubah dunia.</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={spindermanImage} alt="TZM 2 STROKE" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SPINDERMAN</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Terbang di langit New York, SPIDER-MAN mengukir jejak sebagai pahlawan yang tak terbantahkan! Dalam film penuh keajaiban ini, Tom Holland membawa kehidupan Peter Parker, seorang remaja dengan kekuatan luar biasa. Saksikan perjalanan penuh aksi, humor, dan pertarungan epik saat Spider-Man menghadapi musuh-musuh baru yang menakutkan. Dengan efek visual yang memukau dan cerita yang memikat, SPIDER-MAN mengajak Anda menyelami dunia superhero dengan cara yang tak terduga. Siapkan diri untuk terbang tinggi bersama Spider-Man, mengejar keadilan dan menghadapi tantangan yang membentuk nasibnya sebagai pelindung kota. SPIDER-MAN: Terbanglah bersama pahlawan yang menginspirasi!"</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Superhero