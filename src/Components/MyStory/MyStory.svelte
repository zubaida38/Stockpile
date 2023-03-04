<script>
  export let myWorkData = {};
  const { HEADING, ACCOMPLISHMENTS } = myWorkData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->

<section id="mystory" class="section">
  <div class="container">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="row section-body">
      {#each ACCOMPLISHMENTS as list}
        <div class="col-md-8 mystory">
          <div>
            <h4>{list.TITLE}</h4>
            <p class="description">{list.DESCRIPTION}</p>
          </div> 
          <div> 
            <h5>{list.ACC_DESC}</h5> 
            <ul>   
              {#each list.ACCOMPLISHMENTS as acc}
                <li>{acc}</li>
              {/each}
            </ul>
          </div>
          <div>
            <h5>Position</h5>
            <p class="user-details">
              {list.DESIGNATION}
            </p>
          </div>
        </div>
        <!--
        <div class="col-md-6 img2">
          <hr> 
          <img src="{list.IMAGE_URL}" width="100vw" alt="{list.TITLE}">
        </div>
        -->
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style scoped lang='scss'>

  $accent: #d447b9;
  hr {
    border-bottom: 1px solid $accent;
  }
  .row {
    justify-content: center;
  }
  #mystory {
    padding-top: 100px;
    align-items: center;
  }
  .mystory {
    padding: 3rem 2rem;
    padding-left: 1.7rem;
    padding-right: 2.7rem;
    // border-right: 4px solid $accent;
    // border-left: 1px solid $accent;
    border-top: 2px solid $accent;
    // border-bottom: 4px solid $accent;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .description {
      text-align: justify;
    }
    li {
      text-align: justify;
    }
  }
  .img2 {
    margin: auto; 
  }
  .img {
    padding: 3rem 2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    img {
      text-align: center;
      margin: auto;
    }
  }
  .mystory img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .user-details {
    display: inline-block;
    font-size: 14px;
  }
  h4 {
    margin-bottom: 25px;
    text-decoration: underline;
  }
</style>