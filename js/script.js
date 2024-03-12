
const HerosectionDiv = document.getElementById("herosection_id_layout1");

function updateDivecontend(){
    const windowWith = window.innerWidth;
    if(windowWith < 990){
        HerosectionDiv.innerHTML=`
        <div class="container-fluid container-lg p-2 herosection_sm"  id="herosection_id_layout1" >
          <div class="row">
                <div class="col-12 col-lg-6 hero_layout1_sm">
                   <h1>Your Fence, Your Peace  of Mind </h1>
                   <h3>Bring Your Dream In Life</h3>
                   <p style="margin-bottom: 10px; max-width:550px; margin-top: 20px;">Deepam Industries offers a wide variety of fencing solutions to meet the needs of contractors, businesses, homeowners, and more </p>
                   <button class="hero_layout1_booking_buttton_sm">Book Now</button>
                   <div>
                    <img class="img-fluid"style="width:70%; margin-top:20px;" src="assert/Group 14279.png">
                   </div>
                </div>
                <div class="col-12 col-lg-6 hero_layout2">
                  <img class="img-fluid" src="assert/illustration.png" alt="">
                </div>
          </div>
    </div>` 
    }
    else{
        const htmltag=(`<div class="container-fluid container-lg p-2 herosection"  id="herosection_id_layout1" >
        <div class="row">
              <div class="col-12 col-lg-6 hero_layout1">
                 <h1>Your Fence, Your Peace </h1>
                 <h1> of Mind </h1>
                 <h3>Bring Your Dream In Life</h3>
                 <p style="margin-bottom: -5px; margin-top: 20px;">Deepam Industries offers a wide variety of fencing solutions to meet </p>
                 <p style="margin-top: -5px;">the needs of contractors, businesses, homeowners, and more</p>
                 <button class="hero_layout1_booking_buttton">Book Now</button>
                 <div>
                  <img class="img-fluid" src="assert/Group 14279.png">
                 </div>
              </div>
              <div class="col-12 col-lg-6 hero_layout2">
                <img class="img-fluid" src="assert/illustration.png" alt="">
              </div>
        </div>
  </div>`)
        HerosectionDiv.innerHTML=htmltag
    }
}
updateDivecontend()

window.addEventListener("resize",updateDivecontend)