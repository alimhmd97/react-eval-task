import Carousel from "react-bootstrap/Carousel";
import curImg1 from "../../assets/cur.jpg";
import curImg2 from "../../assets/1.jpg";
import curImg3 from "../../assets/cur2.jpg";
import { UiButton } from "../../UI/button";

function CustomCarousel() {
  return (
    <Carousel
      fade
      slide={true}
      controls={false}
      style={{
        transform: "rotate(270deg)",
        width: "100%",
        overflow: "initial",
      }}
      interval={1000}>
      {" "}
      <Carousel.Item style={{ transform: "rotate(90deg)" }}>
        <img className='d-block w-100' src={curImg1} alt='First slide' />
        <Carousel.Caption>
          <h5>Copy The Best Traders</h5>
          <p> & profit together!</p>{" "}
          <div style={{ display: "flex" }}>
            <UiButton name={"join"} styleWidth={"70px"} />{" "}
          </div>
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
      <Carousel.Item style={{ transform: "rotate(90deg)" }}>
        <img className='d-block w-100' src={curImg2} alt='First slide' />
        <Carousel.Caption>
          <h5>Copy The Best Traders</h5>
          <p> & profit together!</p>{" "}
          <div style={{ display: "flex" }}>
            <UiButton name={"join"} styleWidth={"70px"} />{" "}
          </div>
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
      <Carousel.Item style={{ transform: "rotate(90deg)" }}>
        <img className='d-block w-100' src={curImg3} alt='First slide' />
        <Carousel.Caption>
          <h5>Copy The Best Traders</h5>
          <p> & profit together!</p>{" "}
          <div style={{ display: "flex" }}>
            <UiButton name={"join"} styleWidth={"70px"} />{" "}
          </div>
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
      <Carousel.Item style={{ transform: "rotate(90deg)" }}>
        <img className='d-block w-100' src={curImg3} alt='First slide' />
        <Carousel.Caption>
          <h5>Copy The Best Traders</h5>
          <p> & profit together!</p>{" "}
          <div style={{ display: "flex" }}>
            <UiButton name={"join"} styleWidth={"70px"} />{" "}
          </div>
        </Carousel.Caption>{" "}
      </Carousel.Item>
    </Carousel>
  );
}

export { CustomCarousel };
