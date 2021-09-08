<?php
/**
 * Template name:  Contact page
 * Template Post Type: page
 */
 get_header(); ?>

<main>
<div class="header-contact">
        <h1><?php echo the_field( "title_page", 162);?></h1>
    </div>
    <div class="all-main">
        <div class="container">
            <div class="title">
                <span></span>
                <h3><?php echo the_field( "title_section_contact", 162);?></h3>
            </div>
            <div class="main">
                <div class="all-contact-info">
                    <div class="top-contact">
                        <div class="headline-top-contact">
                            <img src="<?php $image_contact_1 = get_field("image_contact_1", 162); echo $image_contact_1['url'];?>" alt="GPS">
                            <h4><?php echo the_field( "title_page", 162);?></h4>
                        </div>
                        <div class="contact-num-mail">
                            <p><b><?php echo the_field( "name_field_contact_1", 162);?></b> <a href="mailto:<?php echo the_field( "email_name_contact", 162);?>"><?php echo the_field( "email_name_contact", 162);?></a></p>
                            <p><b><?php echo the_field( "name_field_contact_2", 162);?></b> <a href="tel:<?php echo the_field( "mobile_phone_contact", 162);?>"><?php echo the_field( "mobile_phone_contact", 162);?></a></p>
                        </div>
                    </div>
                    <div class="bottom-contact">
                        <div class="headline-bott-contact">
                            <img src="<?php $image_contact_2 = get_field("image_contact_2", 162); echo $image_contact_2['url'];?>" alt="GPS">
                            <h4><?php echo the_field( "title_section_contact_2", 162);?></h4>
                        </div>
                        <div class="contact-address">
                            <?php echo do_shortcode( '[FilialsSection]' ); ?>
                            <!--<a href="contact-link.html">
                                <p>ул. Блюхера, д. 16/4</p>
                            </a>
                            <a href="contact-link.html">
                                <p>Ул. Дуси Ковальчук, д. 32</p>
                            </a>
                            <a href="contact-link.html">
                                <p>ул. Ипподромовская, д 48</p>
                            </a>
                            <a href="contact-link.html">
                                <p>ул. Маяковского, д. 64</p>
                            </a>-->
                        </div>
                    </div>
                </div>
                <div class="map" id="map"></div>
            </div>
        </div>
    </div>
    <div class="for-footer">
        <div class="container"></div>
    </div>
</main>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6RVEIlps_jh4lAn7sBtcj0lrWtXxBCXQ&callback=initMap"></script> 
<?php get_footer(); ?>