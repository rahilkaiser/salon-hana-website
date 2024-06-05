

const testimonials = [
    {
        name: "Jane Doe",
        text: "Fantastic service! Highly recommend.",
        rating: 5,
        date: "March 12, 2024",
    },
    {
        name: "John Smith",
        text: "Great experience from start to finish.",
        rating: 4,
        date: "April 2, 2024",
    },
    {
        name: "Alice Johnson",
        text: "The staff were very friendly and professional.",
        rating: 5,
        date: "May 10, 2024",
    },
];

export const Testemonials = () => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="max-w-sm w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                            {/*<img*/}
                            {/*    className="w-24 h-24 rounded-full mb-4"*/}
                            {/*    // src={testimonial.image}*/}
                            {/*    alt={`${testimonial.name}'s picture`}*/}
                            {/*/>*/}
                            <div className="flex items-center mb-2">
                                <div className="text-yellow-500">
                                    {"★".repeat(testimonial.rating)}
                                    {"☆".repeat(5 - testimonial.rating)}
                                </div>
                                <span className="ml-2 text-gray-600">{testimonial.date}</span>
                            </div>
                            <p className="text-gray-800 text-center mb-4">{testimonial.text}</p>
                            <div className="text-gray-700 font-bold text-center">{testimonial.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
