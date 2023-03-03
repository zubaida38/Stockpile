<script>
  import Navbar from "./Components/Navbar/Navbar.svelte";
  import Banner from "./Components/Banner/Banner.svelte";
  import Services from "./Components/Services/Services.svelte";
  import About from "./Components/About/About.svelte";
  import MyStory from "./Components/MyStory/MyStory.svelte";
  import Social from "./Components/Social/Social.svelte";
  // import SocialHover from "./Components/SocialHover/Social.svelte";
  import Footer from "./Components/Footer/Footer.svelte";
  import DATA from "./Data/data";
  console.log(DATA);
</script>

<!-- Navbar -->
<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.NAV_HEADER} />
<!-- Banner -->
<Banner bannerData={DATA.BANNER_DATA} />
<!-- Services -->
<Services serviceData={DATA.SERVICE_DATA} />
<!-- About -->
<About aboutData={DATA.ABOUT_DATA} />
<!-- MyStory -->
<MyStory myWorkData={DATA.MYWORK_DATA} />
<!-- Social Media -->
<!-- <Social socialData={DATA.SOCIAL_DATA} /> -->
<!-- <SocialHover socialData={DATA.SOCIAL_DATA} /> -->
<!-- Footer -->
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />
