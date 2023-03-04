<script>
  export let serviceData = {};
  const { HEADING, ALL_SERVICES, SERVICE_LIST } = serviceData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="services" class="section">
  <div class="container text-center">
    <h2 class="title">{HEADING}</h2>
    <div class="row section-body">
      {#each SERVICE_LIST as list}
        <div class="col-md-4 service">
          <img src={list.URL} alt={list.LABEL} class="service-img" />
          <h4>{list.LABEL}</h4>
          <p>{list.DESCRIPTION}</p>
        </div>
      {/each}
      <a class="vectorezy" target="_blank" href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a>
    </div>
    <!-- <buttom class="btn btn-primary round-border main-bgcolor">
      {ALL_SERVICES}
    </buttom> -->
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style lang='scss'>
  $accent: #d447b9;
  .vectorezy {
    padding: 0;
    margin: 0;
    font-size: 12px;
    text-decoration: none;
    color: inherit;
    line-height: 3.2rem;
    -o-transition:all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-font-smoothing: antialiased;

  }
  .vectorezy:hover {
    color: $accent;
    font-size: 14px;
    // background-color: #30343F;
  }
  #services {
    padding-top: 100px;
  }
  .service-img {
    height: 300px;
    margin-top: 20px;
  }

  .service h4 {
    padding: 5px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  .title {
    text-transform: uppercase;
  }
  .service {
    p {
      text-align: justify;
      padding: 0 1rem;
    }
    padding-bottom: 2rem;
  }
  .title::before {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, 30343F 100%);
    height: 5px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(60px);
  }

  .title::after {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, 30343F 100%);
    height: 10px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
    transform: translateY(14px);
  }

  section .btn-primary {
    box-shadow: none;
    padding: 8px 25px;
    border: none;
  }
</style>

