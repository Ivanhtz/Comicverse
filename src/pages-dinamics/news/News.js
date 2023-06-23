import noticias from "../../data/news";
import { Link } from "react-router-dom";
import "./News.css"
import React, { useEffect, useState } from 'react';
const { Component } = require("react");

class News extends Component {

	render() {

		return (
			<div className="newsPage__body">
				<section className="newsPage__section">
					<header>
						<h1 className="newsPage__h1" style={{ textAlign: "center", color: "white" }}>Lista de Noticias</h1>
					</header>
					<div className="content-wrapper">
						<section style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
							{
								noticias.map((noticia =>

									<div className="news-card" key={noticia.id}>
										<Link to={`/noticias/${noticia.id}`}>
											<a className="news-card__card-link"></a>
											<img src={noticia.image} alt="" className="news-card__image" />
											<div className="news-card__text-wrapper">
												<h2 className="news-card__title">{noticia.title}</h2>
												<div className="news-card__post-date">{noticia.date} | {noticia.author}</div>
												<div className="news-card__details-wrapper">
													<p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
													<Link to={`/noticias/${noticia.id}`}><a style={{ textDecoration: "none" }} className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a></Link>
												</div>
											</div>
										</Link>
									</div>
								))
							}

						</section>

					</div>



				</section>
			</div>
		)
	}
}
export default News

