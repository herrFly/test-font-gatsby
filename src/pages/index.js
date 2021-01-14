import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "@fontsource/lato/300.css" 

import "../../static/assets/css/main.css"
import "../../static/assets/css/noscript.css"
import "../../static/assets/css/fontawesome-all.min.css"



export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lichtbildenthusiastin - Deine Fotografin</title>
        <link to="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <header></header>
      <main>
       

			<div id="wrapper" className="divided">

					<section className="banner onload-image-fade-in onload-content-fade-right - style3 fullscreen orient-right content-align-left image-position-center">
						<div className="content" id="bannerText">
							<h3>SCHÖN, DASS DU DA BIST!</h3>
							<p>Nichts verfliegt so schnell wie die Zeit und ich möchte Euch zur Seite stehen um Eure großen und kleinen Momente für immer festzuhalten!</p>
							<p>Ich strebe danach Euer: „Ach weißt du noch damals!“ mit Fotos zu ergänzen und Euch Erinnerungen zu schenken an die Ihr noch lange freudig zurück denkt.</p>
              				<p>In den letzten 10 Jahren durfte ich viele Menschen auf einem Stück Ihres Weges begleiten. Wie am ersten Tag bin ich Feuer und Flamme für meinen Beruf der mir so viel Abwechslung verschafft und Einblicke eröffnet.</p>
              				<p>Ich würde mich freuen auch Euch bald ein Stück begleiten zu dürfen! Lasst uns zusammen Erinnerungen erschaffen!</p>
              			<ul className="actions default" id="buttonsBanner">
							<li><Link to="#Terminanfrage" className="button big wide smooth-scroll-middle">Terminanfrage</Link></li>
                			<li><Link to="AboutMe" className="button big wide smooth-scroll-middle">Über Mich</Link></li>
						</ul>
						</div>
						<div className="image" id="bannerImg" >
							<img src="img/banner.png" alt="" />
							<p id="imgText"><div id="nameBeruf">Claudia Nürnberger - Fotografenmeisterin</div>
							Brandenburg | Berlin | deutschlandweit</p>
						</div>
					</section>

					<section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-left" id="first">
						<div className="content">
							<h2>Familie</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className="actions stacked">
								<li><Link to="familie" className="button">Learn More</Link></li>
							</ul>
						</div>
						<div className="image">
							<img src="images/spotlight01.jpg" alt="" />
						</div>
					</section>

					<section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-right">
						<div className="content">
							<h2>Hochzeiten</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className="actions stacked">
								<li><Link to="hochzeiten" className="button">Learn More</Link></li>
							</ul>
						</div>
						<div className="image">
							<img src="images/spotlight02.jpg" alt="" />
						</div>
					</section>

					<section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-left">
						<div className="content">
							<h2>Babybauch</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className="actions stacked">
								<li><Link to="babybauch" className="button">Learn More</Link></li>
							</ul>
						</div>
						<div className="image">
							<img src="images/spotlight03.jpg" alt="" />
						</div>
					</section>

					<section className="spotlight onscroll-image-fade-in style2 content-align-left image-position-center orient-right">
						<div className="content">
							<h2>Hunde</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
							<ul className="actions stacked">
								<li><Link to="hunde" className="button">Learn More</Link></li>
							</ul>
						</div>
						<div className="image">
							<img src="images/spotlight02.jpg" alt="" />
						</div>
					</section>

					<section className="wrapper style1 align-center" id="Terminanfrage">
						<div className="inner medium">
							<h2>Get in touch</h2>
							<form method="post" action="#">
								<div className="fields">
									<div className="field half">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" value="" />
									</div>
									<div className="field half">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" value="" />
									</div>
									<div className="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="6"></textarea>
									</div>
								</div>
								<ul className="actions special">
									<li><input type="submit" name="submit" id="submit" value="Send Message" /></li>
								</ul>
							</form>

						</div>
					</section>

					<footer className="wrapper style1 align-center">
						<div className="inner">
							<ul className="icons">
								<li><Link to="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></Link></li>
								<li><Link to="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></Link></li>
								<li><Link to="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></Link></li>
								<li><Link to="#" className="icon brands style2 fa-linkedin-in"><span className="label">LinkedIn</span></Link></li>
								<li><Link to="#" className="icon style2 fa-envelope"><span className="label">Email</span></Link></li>
							</ul>
							<p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
						</div>
					</footer>

			</div>
      </main>
    </>
  )
}
