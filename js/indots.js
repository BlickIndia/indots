var checkitem=function(){var e;e=$("#myCarousel"),$("#myCarousel .carousel-inner .item:first").hasClass("active")?(e.children(".left").hide(),e.children(".right").show()):$("#myCarousel .carousel-inner .item:last").hasClass("active")?(e.children(".right").hide(),e.children(".left").show()):e.children(".carousel-control").show()};checkitem(),$("#myCarousel").on("slid.bs.carousel","",checkitem);