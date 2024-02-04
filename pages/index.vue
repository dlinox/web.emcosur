<template>
  <SectionsHeroSlider />
  <!-- <section class="hero">
    <div class="_overlay"></div>
    <video autoplay muted loop id="_video" width="100%" object-fit="cover">
      <source src="~/assets/video/slider1.mp4" type="video/mp4" />
    </video>
  </section> -->
  <section id="about_us" class="section__about-us">
    <div class="_content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="heading dark">
              <span class="_des">Nosotros</span>
              <h1 class="_title">EMCOSUR K & F S.A.C.</h1>
            </div>

            <p class="text-white">
              EMCOSUR K & F SAC especializada en CONSTRUCCIÓN DE EDIFICIOS.
            </p>
            <p class="text-white">
              Fue creada y fundada el 24/09/2012, registrada dentro de las
              sociedades mercantiles y comerciales como una SOCIEDAD ANONIMA
              CERRADA.
            </p>
          </div>

          <div class="_slider col-12 col-lg-8">
            <div class="_slider__content">
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
                <SwiperSlide v-for="(slide, index) in imagAboutUs" :key="slide">
                  <div class="slider__item">
                    <img :src="slide.img" alt="imagen" width="100%" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="mission_vision" class="section__mission_vision">
    <div class="container">
      <div class="row">
        <div class="col col-md-6">
          <div class="heading light mb-4">
            <h2 class="_title">Misión</h2>
            <p>
              "Contribuir en el desarrollo personal y profesional de nuestra
              gente, incentivando valores cuyos logros se extiendan en la
              empresa y en la sociedad."
            </p>
          </div>
        </div>
        <div class="col col-md-6">
          <div class="heading light mb-4">
            <h2 class="_title">Visión</h2>
          </div>

          <p>
            "Llegar a nivel de conocimientos en el ámbito minero, industrial y
            civil, a la vez lograr que nuestro trabajo sea altamente competitivo
            basado en los valores para nuestra empresa y sus trabajadores,
            implementando y contribuyendo al desenvolvimiento de las operaciones
            de la empresa de una manera social y ambientalmente responsable."
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="candelaria" class="section__event">
    <div class="row g-0">
      <div class="col-12 d-none d-md-block col-md-6 _slider_candelaria">
        <Swiper
          ref="SlideCandelariarRef"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          @slideChange="handleSlideChange"
          :autoplay="{
            delay: 10000,
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
          <SwiperSlide v-for="(slide, index) in imgCandelaria" :key="slide">
            <div class="slider__item">
              <img :src="slide" alt="imagen" width="100%" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="col py-5">
        <div class="container">
          <div class="heading light">
            <span class="_des">Candelaria</span>
            <h1 class="_title">Candelaria 2024</h1>
          </div>

          <div class="_content">
            <h3 class="_text mb-4">
              Venta de entradas para la fiesta de la Candelaria 2024
            </h3>

            <a href="http://linox.candelaria.test/" target="_blank" class="btn">
              <span> Comprar entradas </span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="services" class="section__services border">
    <div class="container">
      <div class="heading light mb-4">
        <span class="_des">Servicios</span>
        <h1 class="_title">Nuestros servicios</h1>
      </div>

      <div class="row">
        <div
          class="col col-12 col-md-6 mb-4"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="card">
            <div class="_img">
              <img :src="service.img" alt="imagen" width="100%" />
            </div>

            <div class="_content">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="concat" class="section__concat">
    <div class="container">
      <div class="heading light">
        <span class="_des">Contactanos</span>
        <h1 class="_title">Ubicanos en</h1>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.892686177868!2d-70.02192980839942!3d-15.841717681280999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d6994a3dfbe65%3A0xe0503348594cca82!2sEmcosur%20K%26F%20S.A.C!5e0!3m2!1ses!2spe!4v1707054315162!5m2!1ses!2spe"
      width="100%"
      height="500"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
</template>
<script setup>
const currentSlide = ref(0);
const SliderRef = ref(null);

const handleSlideChange = (e) => {
  currentSlide.value = e.realIndex;
};

const imagAboutUs = ref([
  {
    title: "Titlulo de la imageb",
    description: "Descipcion de la imagen.",
    img: "/images/about_us/primary.jpg",
  },
  {
    title: "Titlulo de la imageb",
    description: "Descipcion de la imagen.",
    img: "/images/banner/emp1.jpg",
  },
  {
    title: "Titlulo de la imageb",
    description: "Descipcion de la imagen.",
    img: "/images/banner/emp3.jpeg",
  },
  {
    title: "Titlulo de la imageb",
    description: "Descipcion de la imagen.",
    img: "/images/banner/emp4.jpeg",
  },
  
]);

const imgCandelaria = [
  "/images/candelaria/img1.jpg",
  "/images/candelaria/img.jpg",
  "/images/candelaria/img3.avif",
  "/images/candelaria/img4.png",
  "/images/candelaria/img5.avif",
  "/images/candelaria/img6.jpg",
  "/images/candelaria/img7.avif",
];

const services = [
  {
    title: "EJECUCIÓN DE OBRAS DE ING. CIVIL",
    description:
      "Ejecución profesional de proyectos de ingeniería civil, garantizando precisión y calidad.",
    img: "/images/services/000163887M.jpg",
  },
  {
    title: "CONSULTORÍA",
    description:
      "Orientación experta para mejorar eficiencia y mitigar riesgos en proyectos de construcción.",
    img: "/images/services/Construccion-Modular.pdf.webp",
  },
  {
    title: "ELABORACIÓN DE PROYECTOS",
    description:
      "Desarrollo de planos detallados para una planificación precisa de proyectos.",
    img: "/images/services/Sin título.jpg",
  },
  {
    title: "EJECUCIÓN DE PROYECTOS ARQUITECTÓNICOS",
    description: "Ejecución creativa y precisa de proyectos arquitectónicos.",
    img: "/images/services/Sin CDSCS.jpg",
  },
  {
    title: "ALQUILER DE EQUIPOS LIVIANOS PARA CONSTRUCCIÓN",
    description: "Soluciones rentables con equipos livianos para construcción.",
    img: "/images/services/96235237_107734810935275_4838353901021298688_n.jpg",
  },
  {
    title: "VACIADO DE LOSAS CON CONCRETO PREMEZCLADO",
    description: "Vaciado eficiente de losas con concreto de alta calidad.",
    img: "/images/services/cdscsd.jpg",
  },
  {
    title: "SUPERVISIÓN Y RESIDENCIA DE OBRAS",
    description: "Gestión y supervisión integral para el éxito del proyecto.",
    img: "/images/services/vfdvdf.jpg",
  },
  {
    title: "ALQUILER DE MAQUINARIA PESADA",
    description: "Alquiler de maquinaria robusta y operadores calificados.",
    img: "/images/services/Sin vdvdfvfdvf.jpg",
  },
  {
    title: "ALQUILER DE CAMIONETAS",
    description: "Flota confiable para transporte seguro y oportuno.",
    img: "/images/services/descarga.jpg",
  },
  {
    title: "CONSTRUCCIONES METÁLICAS",
    description:
      "Construcción de estructuras metálicas duraderas y funcionales.",
    img: "/images/services/estructuras-metalicas-1.png",
  },
  {
    title: "DEMOLICIONES",
    description: "Demoliciones controladas para dar paso a nuevos desarrollos.",
    img: "/images/services/demoliciones-construccion-grupo-valentinus.jpg",
  },

  {
    title: "DISEÑO Y CONSTRUCCIÓN DE VIVIENDAS UNIFAMILIARES Y MULTIFAMILIARES",
    description:
      "Diseño y construcción de hogares adaptados a sus necesidades.",
    img: "/images/services/rffvfdv.jpg",
  },
  {
    title: "EJECUCIÓN Y MANTENIMIENTO DE CARRETERAS",
    description:
      "Servicios integrales para construcción y mantenimiento de carreteras.",
    img: "/images/services/1585117850yW3wdSCi.jpg",
  },
  {
    title: "REFACCIONAMIENTOS",
    description:
      "Renovaciones creativas para mejorar estética y funcionalidad.",
    img: "/images/services/Construcciones-y-Refacciones1.jpg",
  },
];
</script>

<style lang="scss">
.hero {
  position: relative;
  width: 100%;
  max-height: 550px;
  overflow: hidden;
  display: flex;
  align-items: center;
  ._overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;

    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 5px 5px;
    opacity: 0.2;
  }

  ._video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
}

.section__about-us {
  width: 100%;
  position: relative;
  height: auto;
  background-image: url("~/assets/images/bg1.avif");
  background-size: cover;
  background-position: center;

  ._content {
    background-color: rgba($color: $primary, $alpha: 0.95);
    padding-top: 3rem;
    position: relative;
    .container {
      height: 100%;
      .row {
        height: 100%;
        ._slider {
          height: 350px;
          transform: translateY(50px);

          ._slider__content {
            height: 300px;
            overflow: hidden;

            .slider__item {
              height: 300px;
              display: flex;
              align-items: center;
              background-color: yellowgreen;

              img {
                height: 100%;
                object-position: center;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
}

.section__event {
  ._slider_candelaria {
    .slider__item {
      height: 400px;
      display: flex;
      align-items: center;
      background-color: yellowgreen;
      img {
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }
  }
  ._content {
    ._text {
      font-size: 1.25rem;
      color: #808080;
    }
  }
}

.section__services {
  padding: 4rem 0;
  background-color: #fafafa;
  .card {
    background-color: white;
    display: inline-flex;
    padding: 1rem;
    width: 100%;
    //fondo de lineas

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    ._img {
      height: 120px;
      width: 120px;
      overflow: hidden;
      img {
        border-radius: 100%;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    ._content {
      width: calc(100% - 130px);
      padding: 1rem;
      h5 {
        font-size: 1.25rem;
        font-weight: 600;
      }
      p {
        font-size: 1rem;
        color: #808080;
      }
    }
  }
}
.section__concat {
  position: relative;
  background-image: radial-gradient(
    rgba(212, 212, 212, 0.5) 1px,
    transparent 1px
  );
  background-size: 5px 5px;

  background-color: #f5f5f5;
  padding: 4rem 0 0 0;

  iframe {
    z-index: 2;
  }
}
.section__mission_vision {
  padding: 4rem 0;
  background-color: #fafafa;
}
.heading {
  ._des {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
  ._title {
    font-size: 2.25rem;
    font-family: "Protest Strike", sans-serif;
  }

  &.dark {
    color: white;
    ._des {
      color: $third;
    }
    ._title {
      color: white;
    }
  }
  &.light {
    ._des {
      color: $third;
    }
    ._title {
      color: #454545;
    }
  }
}

.btn {
  padding: 1rem 2rem;
  background-color: $primary;
  border: 2px solid $primary;
  color: white;
  transition: all 0.3s ease;
  span {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }

  i {
    font-size: 1.25rem;
  }
  &:hover {
    background-color: white;
    color: $primary;
  }
}
</style>
