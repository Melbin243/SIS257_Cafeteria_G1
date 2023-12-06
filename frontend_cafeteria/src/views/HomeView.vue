<script setup lang="ts">

</script>

<template>
  <section class="hero-section" id="section_1">
    <div class="section-overlay"></div>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col-12 mt-auto mb-5 text-center">
                <small></small>
                <h1 class="text-white mb-5">BIENVENIDOS</h1>
            </div>
            <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                <p class="text-light fs-5 mb-4 pb-3">
                    Bienvenido a nuestro acogedor rincón delicioso, donde cada taza cuenta una historia única
                    En nuestra cafetería, nos dedicamos a brindarte más que solo café, ofrecemos una experiencia sensorial que cautivará tus sentidos
                </p>
                <div class="location-wrap mx-auto py-3 py-lg-0">
                    <h5 class="text-white">
                    </h5>
                </div>
            </div>
        </div>
    </div>

    <div class="video-wrap">
        <video autoplay="" loop="" muted="" class="custom-video" poster="">
            <source src="@/assets/video/video.mp4" type="video/mp4">
        </video>
    </div>
</section>


<section class="about-section section-padding" id="section_2">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                <div class="services-info">
                    <h2 class="text-white mb-4">Acerca de Nosotros</h2>
                    <p class="text-white">En el corazón de Sucre, hemos creado un espacio acogedor 
                        donde el aroma del café fresco se mezcla con sonrisas amigables y momentos memorables.
                         Nuestra historia es tan única como el primer sorbo de tu bebida favorita, y estamos emocionados de compartirla contigo.</p>
                    <h6 class="text-white mt-4">Experiencia única en la vida</h6>
                    <p class="text-white">Todo comenzó con una pasión compartida por el café y el deseo de crear un lugar especial para la comunidad. Jose David, un apasionado amante del café, decidió dar vida a CAFE CAPITAL como un tributo a la artesanía del café y a la conexión humana.</p>
                    <h6 class="text-white mt-4">Siempre estamos a su servicio</h6>
                    <p class="text-white">24/7, 365 días al año, CAFE CAPITAL está listo para atenderte. Tu conveniencia es nuestra prioridad, y estamos aquí para servirte en cualquier momento que nos necesites.</p>
                </div>
            </div>

            <div class="col-lg-6 col-12">
                <div class="about-text-wrap">
                    <img src="@/assets/images/imagen20.jpg" class="about-image img-fluid">
                </div>
            </div>
        </div>
    </div>
</section>


<div class="find-us" style="background-color: #EE5007;" >
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2 style="display: flex; justify-content: center;">Nuestras Delicias</h2>
                    </div>
                </div>
            </div>
            <div class="row" style="margin:  60px; justify-content: space-between;">
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe1.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe2.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe3.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe4.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe5.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe6.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe7.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe8.jpg" alt="Product Image" class="product-image">
                </div>
                <div class="col-md-4">
                    <p style="font-size: 50px; color: black;"></p>
                    <img src="@/assets/images/cafe9.jpg" alt="Product Image" class="product-image">
                </div>
            </div>
        </div>
    </div>


<section class="contact-section section-padding" id="section_6">
    <div class="container" style="background-color: #EE5007;" >
        <div class="row">
            <div class="col-lg-8 col-12 mx-auto">
                <h2 class="text-center mb-4">Contactenos</h2>
                <nav class="d-flex justify-content-center">
                    <div class="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                        role="tablist">
                        <button class="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-ContactForm" type="button" role="tab"
                            aria-controls="nav-ContactForm" aria-selected="false">
                            <h5>Contacto</h5>
                        </button>
                        <button class="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-ContactMap" type="button" role="tab"
                            aria-controls="nav-ContactMap" aria-selected="false">
                            <h5>Ubicacion</h5>
                        </button>
                    </div>
                </nav>

                <div class="tab-content shadow-lg mt-5" id="nav-tabContent" style="background-color: black;" >
                    <div class="tab-pane fade show active" id="nav-ContactForm" role="tabpanel"
                        aria-labelledby="nav-ContactForm-tab">
                        <form class="custom-form contact-form mb-5 mb-lg-0" action="#" method="post"
                            role="form">
                            <div class="contact-form-body">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <input type="text" name="contact-name" id="contact-name"
                                            class="form-control" placeholder="Full name" required>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <input type="email" name="contact-email" id="contact-email"
                                            pattern="[^ @]*@[^ @]*" class="form-control"
                                            placeholder="Email address" required>
                                    </div>
                                </div>
                                <input type="text" name="contact-company" id="contact-company"
                                    class="form-control" placeholder="Company" required>
                                <textarea name="contact-message" rows="3" class="form-control"
                                    id="contact-message" placeholder="Message"></textarea>
                                <div class="col-lg-4 col-md-10 col-8 mx-auto">
                                    <button type="submit" class="form-control">Enviar mensaje</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="nav-ContactMap" role="tabpane"
                        aria-labelledby="nav-ContactMap-tab" style="background-color: #EE5007;" >
                        <iframe class="google-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3815107984365!2d-65.26208312578215!3d-19.046956611417627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf3678f24e69%3A0x4259c75054d6819!2sCaf%C3%A9%20Capital!5e0!3m2!1ses-419!2sbo!4v1700707029741!5m2!1ses-419!2sbo"
                            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</template>
<style scoped>

.find-us {
    background-color: #ffffff;
    padding: 40px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-heading {
    text-align: center;
    margin-bottom: 30px;
}

.product-image {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.product-image:hover {
    transform: scale(1.05);
}

@media (max-width: 767px) {
    .col-md-4 {
        width: 100%;
        margin-bottom: 0px;
    }
}
</style>


