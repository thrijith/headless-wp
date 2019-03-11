import Link from 'next/link'

export default () => (
	<div id="navigation">
		<Link href="/"><a href="/">Home</a></Link>
		<Link href="/posts"><a href="/posts">Blog</a></Link>
		<style jsx>{`
#navigation {
  overflow: hidden;
  background-color: #333;
}

#navigation a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
    `}</style>
	</div>
)
