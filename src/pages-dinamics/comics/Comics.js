import comic from "../../data/comic"
import { Link } from "react-router-dom";
const { Component } = require("react");


class Comics extends Component {

    render() {

        return (
            <section id="comic">
                <header>
                    <h1>Lista de Comics</h1>
                </header>
				{
					comic.map(c =>
					<article key={c.id}>
						<header>		
							<Link to={`/comics/${c.id}`}>
								<h2>{c.title}</h2>
							</Link>
						</header>
						<figure>
							<img id="img-noticia" src={c.image}/>
						</figure>
						<p>
							{c.content}
						</p>
						<span>Autor: {c.author}</span>
					</article>
					)
				}
            </section>
        )
    }
}

export default Comics;