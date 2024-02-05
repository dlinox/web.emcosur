<template>
  <header>
    <div class="header__top">
      <div class="container">
        <div class="_contact">
          <a
            class="_item"
            href="https://goo.gl/maps/1q2w3e4r5t6y7u8i9o0p"
            target="_blank"
          >
            <i class="fa-solid fa-location-dot"></i>
            <span> JR RICARDO PALMA 191</span>
          </a>
        </div>
        <div class="_social">
          <a
            class="_item"
            href="https://www.facebook.com/profile.php?id=61555943546151&sfnsn=wa&mibextid=RUbZ1f"
            target="_blank"
          >
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="header__nav">
      <div class="container">
        <div class="_logo">
          <NuxtLink href="/">
            <img src="/logo.png" alt="logo-emcosur-k&f" />
          </NuxtLink>
        </div>
        <nav class="_nav">
          <ul>
            <li>
              <NuxtLink to="#candelaria">Candelaria</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#about_us">Nosotros</NuxtLink>
            </li>

            <li>
              <NuxtLink to="#services"> Servicios </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#concat">Contactanos</NuxtLink>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style lang="scss">
$header__top__height: 2.5rem;

.header__top {
  height: $header__top__height;
  width: 100%;
  background-color: #f5f5f5;
  .container {
    display: flex;
    justify-content: space-between;
    height: 100%;

    ._social,
    ._contact {
      display: flex;
      align-items: center;
      height: 100%;

      color: white;
      ._item {
        display: flex;
        align-items: center;
        span {
          font-size: 0.8rem;
          margin-left: 0.5rem;
          color: $primary;
        }

        i {
          height: $header__top__height;
          width: $header__top__height;
          background-color: $primary;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
      }
    }
  }
}
.header__nav {
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  height: 7rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    ._logo {
      img {
        height: 5rem;
      }
    }
    ._nav {
      ul {
        display: flex;
        list-style: none;
        li {
          margin-left: 1rem;
          a {
            text-transform: uppercase;
            font-size: 1rem;
            text-decoration: none;
            color: $primary;
            font-weight: bold;
            &:hover {
              color: darken($primary, 10%);
            }
          }
        }
      }
    }
  }
}
</style>
