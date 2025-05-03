import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        // Passing the search query as a URL parameter for better state persistence
        navigate(`/browse?search=${query}`);
    };

    return (
        <div className="w-full max-w-xl mx-auto my-20">
            <Carousel>
                <CarouselContent>
                    {category.map((cat) => (
                        <CarouselItem key={cat} className="md:basis-1/2 lg:basis-1/3">
                            <Button 
                                onClick={() => searchJobHandler(cat)} 
                                variant="outline" 
                                className="rounded-full w-full text-center"
                                aria-label={`Search for ${cat} jobs`}
                            >
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Previous Category" />
                <CarouselNext aria-label="Next Category" />
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;
