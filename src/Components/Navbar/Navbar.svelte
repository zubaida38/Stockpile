<script>
  export let navlists = [];
  export let header;
  console.log(navlists);
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="nav-bar">
  <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      {header}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {#each navlists as list}
          <li class="nav-item">
            <a class="nav-link light-color" href={list.url}>{list.label}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .navbar {
    /* padding: 0 20px !important; */
    padding: 1rem !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }

  .navbar-nav li a {
    font-weight: 600;
    text-transform: uppercase;
    float: left;
    text-align: right;
    line-height: 2rem;
    -o-transition:all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-font-smoothing: antialiased;
  }
  .navbar-nav > li > a:hover {
    font-size: large;
  }
</style>

