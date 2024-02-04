import type { SlidersIcon } from '#build/components'; import type { SlidersIcon
} from '#build/components'; import type { SlidersIcon } from
'#build/components'; import type { SlidersIcon } from '#build/components';
<template>
  <section class="hero-slider">
    <Swiper
      ref="SliderRef"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      @slideChange="handleSlideChange"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(slide, index) in _sliders" :key="index">
        <div class="slider__item">
          <img :src="slide.img" alt="" width="100%" />
          <div class="overlay">
            <div class="container">
              <div
                class="content"
                :class="index === currentSlide ? 'active' : ''"
              >
                <p class="description">
                  {{ slide.description }}
                </p>
                <div class="line"></div>

                <div class="title">
                  {{ slide.title }}
                </div>
                <div class="line"></div>

                <a class="hg-btn" v-if="slide.href" href="http://linox.candelaria.test/" target="_blank">
                  <span class="text"> {{ slide.titleHref }} </span>

                  <span class="icon">
                    <ArrowUpRightIcon class="mb-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<script setup>
const currentSlide = ref(0);
const SliderRef = ref(null);

const handleSlideChange = (e) => {
  currentSlide.value = e.realIndex;
};

const _sliders = [
  {
    title: "Candelaria 2024 - Puno",
    description: "Venta de entradas para la fiesta de la Candelaria 2024",
    img: "/images/banner/candelaria.png",
    titleHref: "Comprar entradas",
    href: "http://linox.candelaria.test/",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp1.jpg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp2.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp3.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp4.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp5.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp6.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp7.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp8.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp9.jpeg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Somos una empresa de arquitectura y construcción",
    img: "/images/banner/emp10.jpeg",
  },

];
</script>
<style lang="scss">
.hero-slider {
  //background puntos

  .swiper-slide {
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
    .slider__item {
      width: 100%;
      height: 600px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(rgba(255,255,255,0.2) 1px, transparent .5px);
        background-size: 5px 5px;

        display: flex;
        align-items: flex-end;

        .container {
          padding: 2rem 0;

          .content {
            transform: translateY(300%);
            opacity: 0.5;
            // scale: 0.9;

            &.active {
              transform: translateY(0);
              transition: transform 0.6s ease-in-out, opacity 0.8s ease-in-out,
                scale 0.8s ease-in-out;
              opacity: 1;
              //   scale: 1;
            }
            p.description {
              font-size: 10px;
              color: white;
              line-height: 10px;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              background-color: black;
              display: inline-block;
              padding: 0.5rem 1rem;
              margin-bottom: 0;
            }
            .line {
              width: 100%;
            }
            .title {
              font-size: 20px;
              font-weight: 500;
              background-color: white;
              padding: 1rem;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}

.hg-btn {
  padding: 0.8rem 1.6rem;
  background-color: transparent;
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;
  position: relative;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;
  .text {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    color: white;
  }

  .icon {
    margin-left: 0.6rem;
    border-left: 2px solid white;
    padding-left: 0.6rem;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    color: white;
    svg {
      transition: all 0.3s ease-in-out;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1rem;
    height: 1rem;
    background-color: white;
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  &:hover {
    border: 2px solid $primary;
    &::before {
      height: 100%;
      width: 100%;
    }
    .text,
    .icon {
      color: $primary;
      &.icon {
        border-color: $primary;
        svg {
          transform: rotateZ(45deg);
        }
      }
    }
  }
}
</style>
