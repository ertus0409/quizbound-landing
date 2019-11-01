export default {
  namespaced: true,

  state: {
    posts: [
      {
        title: 'Demo Post',
        date: 'December 22, 2018',
        author: 'John Leider',
        body: `
          <p>In ac felis quis tortor malesuada pretium. Nam at tortor in tellus interdum sagittis. Sed fringilla mauris sit amet nibh. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Phasellus dolor.</p>

          <p>Fusce fermentum. Cras ultricies mi eu turpis hendrerit fringilla. Nam eget dui. Fusce a quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.</p>

          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <p>Felis bibendum ut tristique et egestas. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Id aliquet lectus proin nibh nisl condimentum id. At elementum eu facilisis sed. Blandit aliquam etiam erat velit scelerisque in.</p>
        `,
        tags: ['demo', 'post'],
        more: '/posts/demo-post',
        slug: 'demo-post'
      },
      {
        title: 'Hello world!',
        date: 'December 21, 2018',
        author: 'John Leider',
        body: `
          <p>Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Sagittis id consectetur purus ut faucibus. Viverra justo nec ultrices dui sapien eget mi.</p>
        `,
        slug: 'hello-world'
      },
      {
        title: 'Lorem Ipsum',
        date: 'December 20, 2018',
        author: 'John Leider',
        body: `
          <p>Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Sagittis id consectetur purus ut faucibus. Viverra justo nec ultrices dui sapien eget mi.</p>
        `,
        slug: 'lorem-ipsum'
      },
      {
        title: 'Great news!',
        date: 'December 14, 2018',
        author: 'John Leider',
        body: `
          <p>Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Sagittis id consectetur purus ut faucibus. Viverra justo nec ultrices dui sapien eget mi.</p>
        `,
        slug: 'great-news'
      }
    ]
  }
}
