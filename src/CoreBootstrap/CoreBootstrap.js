import Grid from "./Grid";
import Accordion from "./Accordion";
import Alerts from "./Alerts";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Progress from "./Progress";
import Spinner from "./Spinner";
import Modal from "./Modal";

function CoreBootstrap() {
    return (<div className="m-4">
        <Modal />
        <Spinner />
        <Progress />
        <Carousel />
        <Cards />
        <Alerts />
        <Accordion />
        <Grid />
    </div>);
}

export default CoreBootstrap;