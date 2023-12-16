import { Card, Container, Row, Col, Image } from "react-bootstrap"
import avatarImage from "../assets/image/AVATAR.JPG"
import thegodinoImage from "../assets/image/THEGODINO.JPG"
import elementalImage from "../assets/image/ELEMENTAL.JPG"
import nemoImage from "../assets/image/NEMO.JPG"
import bwImage from "../assets/image/BW.JPG"
import ironman3Image from "../assets/image/IRONMAN3.JPG"

const Trending = () => {
    return (
    <div>
        <Container>
            <br />
            <h1 className="text-white"> TRENDING</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="Trending">
                <Card className="filmImage">
                <Image src={avatarImage} alt="TRENDING" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">AVATAR</Card.Title>
                <Card.Text className="text-left text-center">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Selamatkan Dunia Pandora dengan Avatar! Terjunlah ke dalam keindahan luar biasa dan pertempuran epik di dunia yang luar biasa ini. Dengan efek visual yang memukau dan cerita yang mendalam, Avatar membawa Anda ke dalam petualangan tanpa tanding, memperlihatkan keajaiban teknologi dan alam yang menyatu harmonis. Saksikan perjuangan Jake Sully, antara dua dunia, manusia dan Na'vi, dalam pencarian perdamaian. Dengan gambaran yang mengesankan, Avatar menawarkan pengalaman sinematik yang tak terlupakan. Jelajahi kehidupan baru, rasakan kekuatan ekspresi, dan nikmati pesona Dunia Pandora, karena keajaiban baru menanti untuk diungkap!</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={thegodinoImage} alt="TRENDING" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">THE GOD DINO</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Selamat datang di era legendaris The Dino God! Saksikan keajaiban dunia prasejarah di mana kekuatan dinosaurus dipertemukan dengan kebijaksanaan yang melampaui zaman. Dalam kisah epik ini, ikuti perjalanan penuh tantangan seorang pahlawan yang memimpin melawan kekuatan purba untuk menyelamatkan dunia. Dengan efek visual yang memukau, aksi mendebarkan, dan misteri yang menggoda, The Dino God membawa Anda ke dalam dunia yang mengguncang imajinasi. Bersiaplah untuk terhanyut dalam petualangan seru yang menggabungkan kekuatan, keberanian, dan keindahan prasejarah dalam satu pengalaman luar biasa. The Dino God: Tantangan prasejarah yang tak terlupakan menanti Anda!"</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={elementalImage} alt="TRENDING" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ELEMENTAL</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Alami keajaiban unsur-unsur alam dalam Elemental! Merasakan pesona dan kekuatan dari api, air, udara, dan tanah yang bersatu dalam satu pementasan epik. Dalam dunia ini, energi elemen menciptakan kisah magis yang memukau dengan efek visual mempesona dan cerita mendalam. Bersiaplah untuk menyaksikan harmoni alam semesta dalam bentuk yang belum pernah Anda bayangkan. Elemental mengundang Anda untuk menyelami keindahan dan kekuatan elemen, menawarkan petualangan ajaib yang akan melampaui batas imajinasi Anda. Jangan lewatkan momen magis ini, karena kekuatan alam menunggu untuk menghipnotis Anda dalam satu pengalaman spektakuler!"</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={nemoImage} alt="TRENDING" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">NEMO</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Selamatkan keajaiban laut dengan NEMO! Dalam petualangan laut yang mendebarkan ini, ikuti Nemo, sang penjelajah laut pemberani, dalam pencarian untuk melindungi kehidupan bawah laut. Dengan grafis mengagumkan dan cerita yang menyentuh, NEMO membawa Anda ke dalam dunia keindahan bawah laut yang belum pernah Anda alami sebelumnya. Temukan rahasia lautan, hadapi bahaya, dan saksikan keajaiban alam dalam pementasan visual yang luar biasa. Bergabunglah dengan NEMO dalam sebuah perjalanan tak terlupakan untuk memelihara kehidupan laut. NEMO: Melibatkan, melindungi, dan menginspirasi dunia bawah laut!"</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={bwImage} alt="TRENDING" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MARVEL BLACK WINDOW</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Suarakan kegelapan dengan BLACK WIDOW! Bergabunglah dengan Scarlett Johansson sebagai agen rahasia Marvel, Natasha Romanoff, dalam petualangan solonya yang penuh aksi dan intrik. Dengan cerita mendalam yang mengupas lapisan kehidupan misterius Black Widow, jelajahi masa lalu yang gelap dan kisah kepahlawanannya yang tak terungkap. Diwarnai oleh aksi tak terbendung, pertarungan epik, dan penuh ketegangan, BLACK WIDOW menjanjikan pengalaman sinematik mendebarkan. Saksikan kebangkitan seorang pahlawan yang luar biasa, dan ikuti jejaknya yang menggemparkan dalam alam rahasia dunia mata-mata"</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="filmImage">
                <Image src={ironman3Image} alt="TRENDING" className="image"/>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">IRON MAN 3</Card.Title>
                <Card.Text className="text-left">
                </Card.Text>
                <Card.Text className="text-left text-center"
                >"Kembalinya Tony Stark yang legendaris dalam IRON MAN 3! Robert Downey Jr. kembali memerankan tokoh ikonik ini dalam sebuah petualangan yang mengguncang bumi. Dalam konfrontasi pribadi yang membawa Tony pada batasnya, dia menghadapi musuh tak terduga yang mengancam segalanya. Dengan efek khusus yang memukau, IRON MAN 3 memadukan aksi spektakuler, intrik, dan humor yang penuh gaya. Saksikan transformasi Iron Man menjadi pahlawan yang lebih kuat dan tekadnya untuk melindungi dunia. IRON MAN 3 menjanjikan pengalaman penuh adrenalin yang tak terlupakan di dunia pahlawan Marvel.</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Trending