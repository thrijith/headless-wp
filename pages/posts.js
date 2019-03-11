import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

export default class extends Component {

	// Resolve promise and set initial props.
	static async getInitialProps () {

		const siteurl = 'pmcsk.test';

		// Make request for posts.
		const response = await axios.get( 'http://' + siteurl + '/wp-json/wp/v2/posts');

		// Return response to posts object in props.
		return {
			posts: response.data
		}
	}

	render() {
		return (
			<Fragment>
				<Navigation/>
				<Head>
					<title>Blog Page</title>
					<meta name="description" content="Headless WP Blog Page" />
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<h1>Our Posts Page!</h1>
				<ul>
					{
						this.props.posts.map( post => {
							return (
								<li key={ post.id }>
									<Link href={ `/posts/${ post.slug }` }>
										<a href={ `/posts/${ post.slug }` } dangerouslySetInnerHTML={ {
											__html: post.title.rendered
										} } />
									</Link>
								</li>
							)
						})
					}
				</ul>
			</Fragment>
		)
	}
}
