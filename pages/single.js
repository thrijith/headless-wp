import Navigation from '../components/Navigation'
import React, { Component } from 'react'
import axios from 'axios';
import { Fragment } from 'react'
import Head from 'next/head'

export default class extends Component {

	// Resolve promise and set initial props.
	static async getInitialProps( context ) {

		const siteurl = 'pmcsk.test';

		const slug = context.query.slug

		// Make request for posts.
		const response = await axios.get( 'http://' + siteurl + `/wp-json/wp/v2/posts?slug=${ slug }` )

		// Return our only item in array from response to posts object in props.
		return {
			post: response.data[0]
		}
	}

	render() {
		return (
			<Fragment>
				<Navigation/>
				<Head>
					<title dangerouslySetInnerHTML={ { __html: this.props.post.title.rendered } } />
					<meta name="description" content={ this.props.post.title.rendered } />
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<h1 dangerouslySetInnerHTML={ { __html: this.props.post.title.rendered } } />
				<article
					className="entry-content"
					dangerouslySetInnerHTML={ {
						__html: this.props.post.content.rendered
					} } />
			</Fragment>
		)
	}
}
