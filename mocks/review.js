const reviews = [
    {
        id: 1,
        booking_id: 1,  // Aiman's completed booking: Proton X70
        car_id: 1,
        user_id: 3,  // Aiman
        rating: 5,
        comment: 'Amazing service! The car was in perfect condition and the booking process was incredibly smooth. The Proton X70 handled beautifully on the highway. I will definitely rent from Carago again.',
        createdAt: '2025-01-16',
        status: 'approved',  // approved, pending, rejected
        isDisplayed: true  // Show on main page
    },
    {
        id: 2,
        booking_id: 8,  // Aiman's cancelled booking: Toyota Vellfire
        car_id: 6,
        user_id: 3,  // Aiman
        rating: 4,
        comment: 'Great car with spacious interior, perfect for family trips. The only reason I cancelled was due to a change in plans, not the service. Would love to rent again in the future.',
        createdAt: '2025-01-19',
        status: 'approved',
        isDisplayed: true
    },
    {
        id: 3,
        booking_id: 3,  // Aiman's completed booking: Fiat Egea
        car_id: 3,
        user_id: 3,  // Aiman
        rating: 4,
        comment: 'Fuel efficient and comfortable for city driving. The pickup process took a little longer than expected, but overall a very pleasant experience.',
        createdAt: '2025-01-26',
        status: 'approved',
        isDisplayed: false  // Not displayed on main page
    },
    {
        id: 4,
        booking_id: 7,  // Hana's booking: Mercedes-Benz C-Class
        car_id: 8,
        user_id: 2,  // Hana (staff)
        rating: 5,
        comment: 'Absolutely luxurious experience! The Mercedes-Benz C-Class exceeded all my expectations. Smooth ride, premium interior, and excellent customer service from the team.',
        createdAt: '2025-02-17',
        status: 'approved',
        isDisplayed: true
    },
    {
        id: 5,
        booking_id: 10,  // Hana's booking: Mazda CX-5
        car_id: 11,
        user_id: 2,  // Hana (staff)
        rating: 5,
        comment: 'The Mazda CX-5 is perfect for long trips! Great fuel economy and very comfortable seats. Carago made the entire rental experience hassle-free.',
        createdAt: '2025-03-08',
        status: 'pending',  // Pending approval
        isDisplayed: false
    },
    {
        id: 6,
        booking_id: 4,  // Nik Adil's booking: Perodua Axia
        car_id: 4,
        user_id: 1,  // Nik Adil (admin)
        rating: 4,
        comment: 'Great budget option for short city trips. The Perodua Axia is economical and easy to park. Perfect for running errands around KL.',
        createdAt: '2025-01-25',
        status: 'approved',
        isDisplayed: false
    },
    {
        id: 7,
        booking_id: 13,  // Bella's completed booking: Honda Civic
        car_id: 5,
        user_id: 4,  // Bella (new customer)
        rating: 5,
        comment: 'Amazing service! The car was in perfect condition and the booking process was incredibly smooth. I will definitely rent from Carago again.',
        createdAt: '2024-11-19',
        status: 'approved',
        isDisplayed: true
    },
    {
        id: 8,
        booking_id: 14,  // Bella's completed booking: Mercedes-Benz C-Class
        car_id: 8,
        user_id: 4,  // Bella (new customer)
        rating: 4,
        comment: 'Great car, but the pickup process took a little longer than expected. Otherwise a very comfortable ride.',
        createdAt: '2024-08-23',
        status: 'approved',
        isDisplayed: false
    }
];

module.exports = reviews;
