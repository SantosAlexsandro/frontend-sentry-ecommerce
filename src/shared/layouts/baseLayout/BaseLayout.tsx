import * as React from "react";
import { Box } from "@mui/material";
import "./slider.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: "1",
    image:
      "https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/5298/1726266813.png&w=1920&h=400&q=100",
  },
  {
    id: "2",
    image:
      "https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/5294/1726265328.png&w=1920&h=400&q=100",
  },
];

interface BaseLayoutProps {
  children?: React.ReactNode; // Definindo `children` como ReactNode
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box>
      {children}
      </Box>
    </>
  );
};
