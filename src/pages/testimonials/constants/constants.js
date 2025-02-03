export const reviews = [
    {
        id: 'review1',
        txt: "Their top priority is keeping your information secure...",
        user: 'Korede Bright',
        time: 'Feb 14, 2023',
        imgSrc: 'user1.png'
    },
    {
        id: 'review2',
        txt: "Great service, immediate reactions and I’ve got my password back (in 2 days!).",
        user: 'Anouk Mommers',
        time: 'Jan 31, 2023',
        imgSrc: 'user2.png'
    },
    {
        id: 'review3',
        txt: "Chris did an excellent job helping me recover my wallet password . I recommend %200 to anyone...",
        user: 'Bravia Media',
        time: 'Feb 19, 2023',
        imgSrc: 'user3.png'
    },
    {
        id: 'review4',
        txt: "Chris recovering my password after a good few months was too good to be true. He was patient and understanding...",
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