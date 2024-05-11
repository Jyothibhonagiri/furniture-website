function Home() {
    return (
        <div className="container">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img src="https://www.ulcdn.net/media/Slideshow/FHS_slideshow.jpg?1715279417" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="https://www.ulcdn.net/media/Slideshow/SBI-Reliance_retail-voucher.png?1698753986" class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <img src="https://www.ulcdn.net/media/Slideshow/New_arraival__slideshow.jpg?1714046117" class="d-block w-100" alt="..." />
                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="explore-content">
                <h1 style={{ marginTop: "3%", color: "red" }}>Explore Our Furniture Range</h1>
                <div className="imgcontainer">
                    <div >
                        <img src="https://www.ulcdn.net/media/web-home-popular-categories/deal_zone_icon-15_Desktop.svg?1665149548" width="40px" height="40px"></img>
                        <h6>Deal Zone</h6>
                    </div>

                    <div>
                        <img src="https://www.ulcdn.net/media/Web-home-popular-categories/store_icon.png?1535694121" width="30px" height="30px"></img>
                        <h6>50+ Stores</h6>
                    </div>

                    <div>
                        <img src="https://www.ulcdn.net/media/web-home-popular-categories/UL_CATEGORY_ICONS-Lighting.svg?1665149591" width="30px" height="30px"></img>
                        <h6>Lighting</h6>
                    </div>

                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs87lhI3u8qgYSqtRbeBl79gwQgcLupTsJQQ&s" width="30px" height="30px"></img>
                        <h6>Bed</h6>
                    </div>

                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0masiwgBRjMbjpx5YBQ83enzbttSfdeayEQ&s" width="30px" height="30px"></img>
                        <h6>Sofa</h6>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EqyuQKYxEZbXIx5uYr-r2hlMORB5ziuH0g&s" width="30px" height="30px"></img>
                        <h6>Dinning</h6>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-gBe-XA_lN2809SbhPmNDX-cGMKxFGD9Cw&s" width="30px" height="30px"></img>
                        <h6>Wardropes</h6>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTer7iI2N9-gRlFOn-auu_w9URFtz2ScpUMug&s" width="30px" height="30px"></img>
                        <h6>Coffee Tables</h6>
                    </div>


                </div>
            </div>
            <div className="demo">
                <h1 style={{ marginTop: "3%", color: "gray" }} >Visit Our Stores</h1>

                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Chennai.png?1681723241" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Hyderabad.png?1681723199" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Kochi.png?1681723465" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
            <hr></hr>
            <div className="footer" style={{marginTop:"4%"}}>
                <p>SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY OF THE WEEK.</p>
                <input type="text" placeholder="enter your email"></input> <button style={{backgroundColor:"orange"}}>Subscribe</button>
                 <hr></hr>
                 <div className="div-content">
                 <div><u><b>The Company:</b></u></div>
                 <div><u><b>More Information:</b></u></div>
                 <div><u><b>Explore More:</b></u></div>
                 <div><u><b>Address:</b></u></div>
                 <div>about us</div>
                 <div>fees and payments</div>
                 <div>refer and earn</div>
                 <div>Reliance Retail Limited,</div>
                 <div>help</div>
                 <div>shipping and delivery</div>
                 <div>gifts and cards</div>
                 <div>3rd Floor, Court House, Lokmanya Tilak Marg,</div>
                 <div>blog</div>
                 <div>terms and conditions</div>
                 <div>Team</div>
                 <div>Dhobi Talao, Mumbai- 400 002, Maharashtra, India</div>
                
                 </div>
                 <p style={{marginTop:"3%",textAlign:"left"}}><b>Contact us:</b></p>
                 <div className="img-content">
                 <img src="https://www.thehindu.com/theme/images/th-online/whatsapp-header-icon.svg"/>
                 <img src="https://www.thehindu.com/theme/images/th-online/twitter-x.svg"/>
                 <img src="https://www.thehindu.com/theme/images/th-online/footer-icon-fb.svg"/>
                 <img src="https://www.thehindu.com/theme/images/th-online/footer-icon-insta.svg"/>
                 <img src="https://www.thehindu.com/theme/images/th-online/footer-icon-linkedin.svg"/>
                 <img src="https://www.thehindu.com/theme/images/th-online/footer-icon-youtube.svg"/>
                 <img src="https://www.thehindu.com/theme/images/th-online/footer-icon-drizzle.svg"/>
                 </div>
            </div>
        </div >
    )
}

export default Home