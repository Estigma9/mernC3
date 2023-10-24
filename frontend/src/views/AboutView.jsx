import OurHistory from '../components/OurHistory';
import OurResults from '../components/OurResults';
import OurSuccess from '../components/OurSuccess';
import TheFooter from '../components/TheFooter';

function AboutView () {
    return (
        <div>           
            <OurHistory></OurHistory>
            <OurResults></OurResults>
            <OurSuccess></OurSuccess>
            <TheFooter></TheFooter>
        </div>
    );
};

export default AboutView;