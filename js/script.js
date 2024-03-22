
// navigation bar start

const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('section')

let currentsection = 'Home';
window.addEventListener('scroll',()=>{
      sectionEls.forEach(sectionEl => {
          if(window.scrollY >= (sectionEl.offsetTop - 200)){
             currentsection = sectionEl.id;
          }
      });
 navLinkEls.forEach(navlinkel =>{
      if(navlinkel.href.includes(currentsection)){
            document.querySelector('.activemode').classList.remove('activemode')
            navlinkel.classList.add('activemode');
      }
 });
});

// navigation bar end

function contactformclose(){
      const contactform = document.getElementById('whatsappform')
      contactform.style.setProperty('visibility',' hidden');
}
function bookingbutton(){
      const contactform = document.getElementById('whatsappform')
      contactform.style.setProperty('visibility','visible');
}
document.addEventListener("DOMContentLoaded", function() {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
    });


const HerosectionDiv = document.getElementById("herosection_id_layout1");

function updateDivecontend(){
    const windowWith = window.innerWidth;
    if(windowWith < 990){
                  HerosectionDiv.innerHTML=`
                  <div class="container-fluid container-lg p-2 herosection_sm"  id="herosection_id_layout1" >
                        <div class="row">
                              <div class="col-12 col-lg-6 hero_layout1_sm">
                              <h1 >Your Fence, Your Peace  of Mind </h1>
                              <h3>Bring Your Dream In Life</h3>
                              
                              <img class="img-fluid" src="assert/illustration.png" alt="">
                              </div>
                              <div class="col-12 col-lg hero_layout1_sm style="margin-top: 100px;" >
                              <div class="companybanner_hero_sm">
                              <img src="assert/companylogo2.png" width="100px"><h2>Deepam Industries</h2>
                            </div>
                                   <p>Welcome to Deepam Industries, your trusted partner for all your fencing and solar needs in Tamil Nadu, India.We are a company dedicated to providing high-quality products, exceptional service, and expert installation for both residential and commercial properties.   Our experienced team of installers will ensure your fence is erected quickly, efficiently, and according to the highest standards.</p>
                                   <button onclick="bookingbutton()" class="hero_layout1_booking_buttton_sm ">Book Now</button>
                                
                                    <div class="customerreviewsvg">
                                    <a href="https://www.google.com/search?q=deepam+industries+fencing+theni&sca_esv=5d2091cbd4f7042a&rlz=1C1CHBF_en-GBIN1102&sxsrf=ACQVn09koRhELuqgdc8OCbhgRzh-HmaA0g%3A1710854889877&ei=6ZL5ZZaJNaOyvr0Pgam6uA8&oq=deepam+industries+fenci&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2RlZXBhbSBpbmR1c3RyaWVzIGZlbmNpKgIIADIHECEYChigATIHECEYChigAUiqNlC4BlinKXACeACQAQCYAfIBoAG4EqoBBTAuMy44uAEByAEA-AEBmAIHoAK7DMICBRAhGKABwgIEECMYJ8ICChAjGIAEGIoFGCfCAgUQABiABMICBhAAGBYYHsICAhAmwgIFECEYnwXCAgQQIRgVmAMAiAYBkgcDMi03oAeRNA&sclient=gws-wiz-serp" target="_blank">
                                          <img class="img-fluid"style="width:70%; margin-top:20px;" src="assert/Group 14281.svg">
                                    </a>
                                    </div> 
                              </div>
                        </div>
                 </div>` 
            }
    else{
            const htmltag=(`<div class="container-fluid container-lg p-2 herosection"  id="herosection_id_layout1"  >
            <div class="row">
                  <div  class="col-12 col-lg-6 hero_layout1">
                        <h1>Your Fence, Your Peace </h1>
                        <h1> of Mind </h1>
                        <div class="companybanner_hero">
                            <img src="assert/companylogo2.png" width="100px"><h2>Deepam Industries</h2>
                        </div>
                           <h3>Bring Your Dream In Life</h3>
                           <p style="margin-bottom: -5px; margin-top: 20px; text-align: justify; max-width:450px ;color: #003334;">Welcome to Deepam Industries, your trusted partner for all your fencing and solar needs in Tamil Nadu, India.We are a company dedicated to providing high-quality products, exceptional service, and expert installation for both residential and commercial properties.  </p>
                           <button onclick="bookingbutton()" class="hero_layout1_booking_buttton">Book Now</button>
                        <div class="customerreviewsvg">
                            <a href="https://www.google.com/search?q=deepam+industries+fencing+theni&sca_esv=5d2091cbd4f7042a&rlz=1C1CHBF_en-GBIN1102&sxsrf=ACQVn09koRhELuqgdc8OCbhgRzh-HmaA0g%3A1710854889877&ei=6ZL5ZZaJNaOyvr0Pgam6uA8&oq=deepam+industries+fenci&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2RlZXBhbSBpbmR1c3RyaWVzIGZlbmNpKgIIADIHECEYChigATIHECEYChigAUiqNlC4BlinKXACeACQAQCYAfIBoAG4EqoBBTAuMy44uAEByAEA-AEBmAIHoAK7DMICBRAhGKABwgIEECMYJ8ICChAjGIAEGIoFGCfCAgUQABiABMICBhAAGBYYHsICAhAmwgIFECEYnwXCAgQQIRgVmAMAiAYBkgcDMi03oAeRNA&sclient=gws-wiz-serp" target="_blank">
                            <img class="img-fluid" src="assert/Group 14281.svg">
                            </a>
                        </div>
                      </div>
                     <div class="col-12 col-lg hero_layout2" id="animContainer">
                  
                  </div>
            </div>
      </div>`)
            HerosectionDiv.innerHTML=htmltag
      }
      // animation section starts
      var animation = bodymovin.loadAnimation({
            container: document.getElementById('animContainer'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'working.json' // lottie file path
          })
          


        // animation section ends
}
updateDivecontend()
  

window.addEventListener("resize",updateDivecontend)


// animation area---------------------------------------------------
var animation = bodymovin.loadAnimation({
      container: document.getElementById('quateanimate'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'quate.json' // lottie file path
    })
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('instalation_animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'workinprogress.json' // lottie file path
    })
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('workdone_animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'jobdone.json' // lottie file path
    })
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('contactanimation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'contact.json' // lottie file path
    })
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('hourssupport'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'hours.json' // lottie file path
    })
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('googleload'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'googlesound.json' // lottie file path
    })
    
const logoimg = document.querySelector('.logoimg')

window.addEventListener("scroll", function() {
      logoimg.style.setProperty('visibility','hidden');
      
    });

    AOS.init();