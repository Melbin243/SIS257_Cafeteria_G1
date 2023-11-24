<script setup lang="ts"></script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <div class="find-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2 style="color: white;">DIRECCIÓN DE LA TIENDA</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <div id="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3815107984365!2d-65.26208312578215!3d-19.046956611417627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf3678f24e69%3A0x4259c75054d6819!2sCaf%C3%A9%20Capital!5e0!3m2!1ses-419!2sbo!4v1700707029741!5m2!1ses-419!2sbo"
                            width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="left-content">
                        <h4 style="color: white;">VISÍTANOS</h4>
                        <p style="color: white;">Estamos ubicados en la ciudad de Sucre - Chuquisaca - Bolivia.<br><br>Direcion: calle Aniceto Arce</p>
                        <ul class="social-icons">
                            <h4 style="color:  white;">NUESTRAS REDES SOCIALES</h4>
                            <div class="contenedor">
                            <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com/?lang=es" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://web.whatsapp.com/" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                            </div>

                        </ul>
                        <ul class="social-icons">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.contenedor{
  display: flex;
  justify-content: center;
  gap: 30px;
}

.contenedor a {
  font-size: 30px;
  transition: all ease 300ms;
}

.contenedor a:hover{
  transform: scale(1.2);
}

</style>