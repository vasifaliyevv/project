import React from "react";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import styles from './Carousel.module.css';
function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "end",
            transform:"translate(-700px,30px)",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "end",
            transform:"translate(700px,30px)",

            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
          },
        ]}
        speed={1000}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
<div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>Acessories</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>
</div>
<div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>Acessories</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>
</div>
<div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>Acessories</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>
</div>
<div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>Acessories</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>

</div><div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>Acessories</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>

</div><div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>Acessories</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>

</div><div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>Acessories</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>

</div>



       
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;