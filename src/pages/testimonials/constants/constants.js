export const reviews = [
  {
      id: 'review1',
      txt: "Their main focus is ensuring your data remains secure...",
      user: 'Korede Bright',
      time: 'Feb 14, 2023',
      imgSrc: 'user1.png'
  },
  {
      id: 'review2',
      txt: "Amazing service, quick response, and I had my password back in just 2 days!",
      user: 'Anouk Mommers',
      time: 'Jan 31, 2023',
      imgSrc: 'user2.png'
  },
  {
      id: 'review3',
      txt: "Chris did an incredible job helping me recover my wallet password. I highly recommend them to anyone...",
      user: 'Bravia Media',
      time: 'Feb 19, 2023',
      imgSrc: 'user3.png'
  },
  {
      id: 'review4',
      txt: "It felt almost unbelievable when Chris successfully recovered my password after months of waiting. He was kind and patient throughout the process...",
      user: 'Olivia',
      time: 'Feb 21, 2023',
      imgSrc: 'user4.png'
  },
]


export const sliderSettings = {
    infinite: true,
    autoplay: true,
    speed: 8000,
    slidesToShow: 4,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 999,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}