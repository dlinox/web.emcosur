<template>
  <footer class="footer">
    <div class="container">
      <div class="_logo">
        <img src="/logo.png" alt="logo" width="100" />
      </div>
      <div class="_enterprise">
        <h3>EMCOSUR K&F</h3>
        <ul>
          <li>Puno -Perú</li>
          <li>
            <strong> Teléfonos: </strong> <a href="tel:986868650">986868650</a>
          </li>
          <li>
            <strong> Correo: </strong>
            <a href="mailto:kf.emcosur@gmail.com" target="_blank">
              kf.emcosur@gmail.com</a
            >
          </li>
          <li>
            <strong> Dirección: </strong>
            <a href="https://goo.gl/maps/1q2w3e4r5t6y7u8i9o0p" target="_blank">
              JR RICARDO PALMA 191
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copy">
      <span>© 2024 EMCOSUR K&F. Todos los derechos reservados.</span>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  background-color: $secondary;
  .container {
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    ._logo {
      img {
        width: 100px;
      }
    }
    ._enterprise {
      h3 {
        font-size: 1rem;
        color: #444444;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          a {
            color: $primary;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .copy {
    background-color: $primary;
    padding: 0.8rem;
    text-align: center;

    span {
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
  }
}
</style>
