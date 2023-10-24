import MyIntro from '../components/MyIntro';
import MyServices from '../components/MyServices';
import OurSuccess from '../components/OurSuccess';
import OurResults from '../components/OurResults';
import OtherServices from '../components/OtherServices';
import TheFooter from '../components/TheFooter';

function HomeView () {
    return (
        <div>
            <h1>This is an HomeView page</h1>
            <MyIntro></MyIntro>
            <MyServices></MyServices>
            <OurSuccess></OurSuccess>
            <OurResults></OurResults>
            <OtherServices></OtherServices>
            <TheFooter></TheFooter>
        </div>

    )
}

export default HomeView;