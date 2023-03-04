<script>
  export let bannerData = {};
  const { HEADING, DESCRIPTION, TWITTER_URL, TWITTER_TAGLINE } = bannerData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section class="main-bgcolor light-color" id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>{HEADING}</h1>
        <h3>{DESCRIPTION}</h3>

        <!-- <a href={TWITTER_URL} target="_blank" class="light-color">
          {TWITTER_TAGLINE}
        </a> -->
      </div>
      <div class="col-md-6">
        <img src="images/network.png" alt="" class="img-fluid" />
      </div>
    </div>
  </div>
  <!-- <img src="images/wave1.png" alt="" class="wave-img" /> -->
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style>
  section {
    padding-top: 5%;
  }

  h1 {
    font-size: 52px;
    font-weight: 350;
    margin-top: 100px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 24px;
    font-weight: 200;
    /* text-transform: uppercase; */
  }

  .img-fluid {
    height: auto;
    margin: 1rem;
  }
  .row {
    padding-bottom: 3rem;
  }
</style>
