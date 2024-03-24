import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import React from 'react'
import CarouselItem from './CarouselItem'

const MultiItemCarousel = () => {
  const topMeals = [
    {
      title: "Margherita Pizza",
      image_url: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
    },
    {
      title: "Grilled Salmon with Asparagus",
      image_url: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    },
    {
      title: "Chicken Alfredo Pasta",
      image_url: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_640.jpg"
    },
    {
      title: "Vegetable Stir-Fry",
      image_url: "https://cdn.pixabay.com/photo/2011/05/25/14/49/fry-up-7627_640.jpg"
    },
    {
      title: "Cheeseburger with Fries",
      image_url: "https://cdn.pixabay.com/photo/2016/01/22/20/23/burger-1156564_640.jpg"
    },
    {
      title: "Caesar Salad",
      image_url: "https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_640.jpg"
    },
    {
      title: "Sushi Platter",
      image_url: "https://cdn.pixabay.com/photo/2016/11/25/16/11/sushi-1858701_640.jpg"
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: false
    
  };
  return (
    <div className="">

      <Slider {...settings}>
        {topMeals.map((item) => <CarouselItem image={item.image_url} title={item.title}/>)}
      </Slider>
      
    </div>
  )
}

export default MultiItemCarousel
