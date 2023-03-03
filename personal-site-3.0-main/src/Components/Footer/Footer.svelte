<script>
  export let footerData = {};
  export let header = "";
  const { DESCRIPTION, CONTACT_DETAILS, SUBSCRIBE_NEWSLETTER, SUBSCRIBE } =
    footerData;
  const { HEADING, ADDRESS, MOBILE, EMAIL } = CONTACT_DETAILS;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section class="main-bgcolor light-color" id="footer">
  <!-- <img src="images/wave2.png" alt="" class="wave-img" /> -->
  <div class="container">
    <div class="row section-body">
      <!-- <div class="col-md-6 footer-box company">
        <div class="company_brand m-top-3">{HEADING}</div>
        <p>{DESCRIPTION}</p>
      </div> -->
      <div class="col-md-12 footer-box">
        <!-- <div class="company_brand m-top-3">Links</div> -->
        <!-- <p>
          <i class="fas fa-envelope" />
          {EMAIL}
        </p> -->
        <div class="social-icons section-body">
          <div class="flex-social-item">
            <a class="linkedin" href="https://linkedin.com/in/jmoussa" rel="noopener noreferrer" target="_blank"><span>LinkedIn</span></a>
            <!-- <span class="social-media-link">LinkedIn</span> -->
          </div>
          <div class="flex-social-item">
            <a class="instagram" href="https://instagram.com/jmoussa.io" rel="noopener noreferrer" target="_blank"><span>Instagram</span></a>
            <!-- <span class="social-media-link">Instagram</span> -->
          </div>
          <div class="flex-social-item">
            <a class="twitter" href="https://twitter.com/j__moussa" rel="noopener noreferrer" target="_blank"><span>Twitter</span></a>
            <!-- <span class="social-media-link">Twitter</span> -->
          </div>
          <div class="flex-social-item">
            <a class="blog" href="https://amazing-utensil-72d.notion.site/8dca62036a49442f96d6b50ab992a1f3?v=1aa0aef9f9f2482fa2f69c8f97ea019c" rel="noopener noreferrer" target="_blank"><span>Blog</span></a>
            <!-- <span class="social-media-link">Blog</span> -->
          </div>
          <div class="flex-social-item">
            <a class="github" href="https://github.com/jmoussa" rel="noopener noreferrer" target="_blank"><span>GitHub</span></a>
            <!-- <span class="social-media-link">Github</span> -->
          </div>
          <div class="flex-social-item">
            <a class="my-resume" href="./resume.pdf" rel="noopener noreferrer" target="_blank"><span>Resume</span></a>
            <!-- <span class="social-media-link">Resume</span> -->
          </div>
        </div>
      </div>
      
      <!-- <div class="col-md-4 footer-box">
        <p class="footer-title">{SUBSCRIBE_NEWSLETTER}</p>
        <input
          type="email"
          class="form-control round-border"
          placeholder="Your Email"
        />
        <button type="button" class="btn btn-outline-light round-border">
          {SUBSCRIBE}
        </button>
      </div> -->
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------Style----------------------->

<!------------------------------------------->
<style lang='scss'>
$accent: #d447b9;
.m-top-3 {
  margin-top: 3%;
}
.social-icons {
  margin: auto;
  /* Grid styles */
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}
.flex-social-item{
  a{
    // width: 100%;
    transition: 0.5s;
    color: #FFFFFF;
    background: #30343F;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    font-family: fontawesome;

    padding: 1rem;	
    margin: 1rem;
    line-height: 3.2rem;
    -o-transition:all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-font-smoothing: antialiased;
    span{
      padding-left: 5px;
    }
  }
  a:hover {
    color: #d447b9;
    font-size: larger;
    line-height:18pt;
  }
}


/* font awesome icons */
.instagram:before {
	content: '\f16d';
	font-size: 18px;
}
.twitter:before {
	content:'\f099';
	font-size: 18px;
}
.blog:before {
	content:'\f249';
	font-size: 18px;
}
.github:before {
	content:'\f113';
	font-size: 18px;
}
.my-resume:before {
	content: '\f2c3';
	font-size: 16px;
}
.linkedin:before {
	content: '\f08c';
	font-size: 18px;
}
.description {
  padding: 1rem;
}
  .company {
    p {
      margin-bottom: 0;
      padding-bottom: 0;
    }
    
  }
  
  .footer-title {
    font-weight: bold;
    text-transform: uppercase;
  }

  .footer-box button {
    margin-top: 30px;
  }

  .round-border {
    border-radius: 20px !important;
  }
  .wave-img {
    /* width: 100%; */
    height: auto;
  }
</style>

