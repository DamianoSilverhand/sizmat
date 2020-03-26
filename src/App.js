import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12,logo } from './assets';

function App() {
  return (
        <HashRouter basename="/">
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/wishes" component={About} />
          </div>
        </HashRouter>
      );
}

function Foot (){
	return(
		<footer className="page-footer">
		                    <div class = "container">
		                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
		                           <h5 className="title align">Happy Birthday My Love</h5>
		                           <hr className="deep-purple1 accent-2 mb-4 mt-0 d-inline-block mx-auto" />
		                           <p className="align">May God bless you with all of the wonderful desires of your heart and bless you to keep the many blessings that you already have.</p> <br/>
		                           <p className="align">Since you came into my life, all colors have become clearer. You brought light and colors in my dark life. Happy birthday, my love. </p><br/>
		                           <p className="align"> <span  role="img" aria-label="wrapped-heart" style={{ fontSize :50 + 'px'}}>💝🎈🎈💖</span></p>
		                         </div>
		                        </div>
		                       </footer>
	);
}

function Nav (){
	return(
		<div className="bg-dark">
		                    <div className="container-fluid mb-4">
		                      <div className="row">
		                        <nav className="col navbar navbar-expand-lg navbar-dark">
		                          <Link to="/" className="navbar-brand mb-0" ><img src={logo} style={{ width:40, height:30, borderaRadius: 50 + "%"}} alt="site logo"/><span role="img" aria-label="wrapped-heart">💝</span>Happy Birthday Matimba<span role="img" aria-label="wrapped-heart">💝</span></Link>
		                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		                            <span className="navbar-toggler-icon"></span>
		                          </button>
		                          <div id="navbarContent" className="collapse navbar-collapse">
		                            <ul className="navbar-nav ml-auto">
		                              <li className="nav-item align">
		                                <Link  className="nav-link" to="/">Home</Link>
		                              </li>
		                              <li className="nav-item align">
		                                <Link to = "/wishes" className="nav-link" >Birthday Wishes</Link>
		                              </li>
		                            </ul>
		                          </div>
		                        </nav>
		                      </div>
		                    </div>
		                  </div>
	)
}

function  Home (){
let backG = {
        backgroundImage: "url(" + img09 + ")",

};
	return (
	<div className="container" style={backG}>
	                    <Nav/>
	        <div className="row">
	          <div className="col mb-4 mb-lg-0">
	            <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
	                          <ol className="carousel-indicators">
	                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="9" ></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
	                          </ol>
	              <div className="carousel-inner">
	                <div className=" imgcar carousel-item active" >
	                  <img src={img01} className=" d-block w-100" alt="pzi maiden" />
	                </div>
	                <div className="carousel-item imgcar" >
	                  <img src={img02} className="d-block w-100" alt="pzi maiden2" />
	                </div>
	                <div className="carousel-item" >
	                  <img src={img03} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	                <div className="carousel-item" >
	                  <img src={img04} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	                <div className="carousel-item" >
	                  <img src={img05} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	               <div className="carousel-item" >
	                  <img src={img06} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	                <div className="carousel-item" >
	                  <img src={img02} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	               <div className="carousel-item" >
	                  <img src={img07} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	               <div className="carousel-item" >
	                  <img src={img08} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	                <div className="carousel-item" >
	                  <img src={img09} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	               <div className="carousel-item" >
	                  <img src={img10} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	                <div className="carousel-item" >
	                  <img src={img11} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	               <div className="carousel-item" >
	                  <img src={img12} className="imgcar d-block w-100" alt="pzi maiden2" />
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	        <Foot/>
	      </div>
);
}

const About = () => (
	<div className="container blaze">
	            <Nav/>
	            <div className="row">
	              <div className="col">
	                <nav aria-label="breadcrumb">
	                <ol className="breadcrumb">
	                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
	                <li className="breadcrumb-item active" aria-current="page">Birthday Wishes</li>
	                </ol>
	                </nav>
	                </div>
	               </div>
	              <div className="row">
	                <div className="col">
	                  <div className="alert alert-info alert-dismissible fade show" role="alert">
	                   <p> From All Of Us, With Love! </p><br/>
	                   <p>Enjoy Your Day Magu</p>
	                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
	                        <span aria-hidden="true">&times;</span>
	                      </button>
	                    </div>
	                </div>
	              </div>
	              <div className="row">
	                <div className="col">
	                <h2 className="align">Tracy and Sitabile</h2>
	                  <div className="embed-responsive embed-responsive-16by9">
	                    <iframe
	                      className="embed-responsive-item"
	                      src="https://www.youtube.com/embed/bkxulmUqa0U"
	                      frameborder="0"
	                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	                      allowfullscreen>
	                    </iframe>
	                  </div>
	                </div>
	              </div>
	              <div className="row">
	                <div className="col">
	                  <h3 className="align">Mum Matimba</h3>
	                  <p>We wish you a very wonderful birthday, you deserve it for being such an amazing Mum</p>
	                </div>
	              </div>
	               <hr className="horizontal"/>
	              <div className="row">
	                <div className="col">
	                <h2 className ="align">Temwa and Jeremiah</h2>
	                  <div className="embed-responsive embed-responsive-16by9">
	                    <iframe
	                      className="embed-responsive-item"
	                      src="https://www.youtube.com/embed/UVSfUsGgYDY"
	                      title="Mother and Son"
	                      frameborder="0"
	                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
	                      allowfullscreen>
	                    </iframe>
	                  </div>
	                </div>
	                 </div>
	             <div className="row">
	          <div className="col">
	                  <h3 className="align">Adorable Sister</h3>
	                  <p>On this day God Blessed me with a sister from another Mother and I want to wish her the best in life </p>
	                </div>
	              </div>
	              <hr className="horizontal"/>
	             <div className="row">
	                <div className="col">
	                <h2 className ="align">Ngabina and Temwa</h2>
	                  <div className="embed-responsive embed-responsive-16by9">
	                    <iframe
	                      className="embed-responsive-item"
	                      src="https://www.youtube.com/embed/6In3Ce4KWrY"
	                      frameborder="0"
	                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
	                      allowfullscreen>
	                    </iframe>
	                  </div>
	                </div>
	              </div>
	               <div className="row">
	                <div className="col">
	                  <h3 className="align">To Our Lovely Sister</h3 >
	                  <p>A year older, a year wiser, may your be blessed with more than enough of all that you need </p>
	                </div>
	              </div>
	               <hr className="horizontal"/>
	             <div className="row">
	              <div className="col">
	              <h2 className ="align">Damiano</h2>
	                <div className="embed-responsive embed-responsive-16by9">
	                  <iframe
	                    className="embed-responsive-item"
	                    src="https://www.youtube.com/embed/ymVKIAHEDLY"
	                    frameborder="0"
	                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
	                    allowfullscreen>
	                  </iframe>
	                </div>
	              </div>
               </div>                                                                                                                                                                                                                      <div className="row">
              <div className="col">
                <h3 className="align">My Obyagu</h3>
                <p>Happy Birthday Banyina Luyando, Words cant express how wonderful you are my beautiful one. I wish you a joyous birthday and many more to come.</p>
                <br/>
           <p className="align"><span  role="img" aria-label="wrapped-heart" style={{ fontSize :20 + 'px'}}>❤</span>Pure and Simple<span  role="img" aria-label="wrapped-heart" style={{ fontSize :20 + 'px'}}>❤</span></p>
              </div>                                                                                                                                                                                                                   </div>
            </div>
)

export default App;
