/* eslint-disable react/destructuring-assignment */
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Home(props: any) {
  // console.log(props, 'props')

  return (
    <div>
      <h1>Create Next App</h1>
      <p>{props.params.slug}</p>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = [
    {
      slug: 'post-59',
    },
    {
      slug: 'post-51',
    },
  ]
  return {
    paths: allPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const post = allPosts.find(p => p.slug === params?.slug)
  // const related = allPosts
  //   /* remove current post */
  //   .filter(p => p.slug !== params?.slug)
  //   /* Find other posts where tags are matching */
  //   .filter(p => p.tags?.some(tag => post.tags?.includes(tag)))
  //   /* return the first three */
  //   .filter((_, i) => i < 3)
  //   /* only return what's needed to render the list */
  //   .map(p => pick(p, ['slug', 'title', 'summary', 'publishedAt', 'image', 'readingTime']))
  // console.log(params, 'params')
  return {
    props: {
      params,
    },
  }
}
