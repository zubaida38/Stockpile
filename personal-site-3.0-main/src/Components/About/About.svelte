<script>
  import Carousel from "../Carousel/Carousel.svelte";
  export let aboutData = {};
  const { HEADING, TITLE, BIRTHDAY, TRAITS_HEADER, DESCRIPTION, TRAITS } = aboutData;
  let birthday = new Date(BIRTHDAY);
  function calculateAge() { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="about-me" class="section grey-bgcolor">
  <div class="container">
    <h1 class="title text-center">{HEADING}</h1>
    <div class="row section-body">
      <div class="col-md-6">
        <h3 class="title">{TITLE}</h3>
        <p class="desc">{DESCRIPTION}</p>
        <br/> 
        <h5>{TRAITS_HEADER}</h5>
        <ul>
          {#each TRAITS as list}
            <li>{list}</li>
          {/each}
        </ul>
      </div>
      <div class="col-md-6">
        <h3 class="title text-center">Swipe through my GitHub Projects</h3>
        <Carousel></Carousel> 
      </div>
    </div>
  </div>
</section>

<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style scoped>
  .desc {
    font-size: 16px;
    line-height: 1.5;
  }
  #about-me {
    padding-top: 100px;
  }
  section ul li {
    margin: 10px 0;
  }
  .col-md-6 {
    height: auto;
  }
  .title {
    padding-bottom: 25px;
  }
  section ul {
    padding-left: 23px;
  }
</style>

