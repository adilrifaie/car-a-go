const bookings = [
    {
        id: 1,
        car_id: 1,  // Proton X70
        user_id: 3,  // Aiman (customer)
        startDate: '2025-01-10',
        endDate: '2025-01-15',
        totalDays: 5,
        totalPrice: 1250,  // 250 * 5
        status: 'Approved',
        bookingDate: '2025-01-05',
        pickupLocation: 'KLIA Terminal 1',
        dropoffLocation: 'KL Sentral'
    },
    {
        id: 2,
        car_id: 5,  // Honda Civic
        user_id: 3,  // Aiman (customer)
        startDate: '2025-02-01',
        endDate: '2025-02-05',
        totalDays: 4,
        totalPrice: 1200,  // 300 * 4
        status: 'Pending',
        bookingDate: '2025-01-25',
        pickupLocation: 'KLIA Terminal 2',
        dropoffLocation: 'Pavilion KL'
    },
    {
        id: 3,
        car_id: 3,  // Fiat Egea (currently rented)
        user_id: 3,  // Aiman (customer)
        startDate: '2025-01-20',
        endDate: '2025-01-25',
        totalDays: 5,
        totalPrice: 750,  // 150 * 5
        status: 'Approved',
        bookingDate: '2025-01-18',
        pickupLocation: 'KL Sentral',
        dropoffLocation: 'KLIA Terminal 1'
    },
    {
        id: 4,
        car_id: 4,  // Perodua Axia (currently rented)
        user_id: 1,  // Nik Adil (admin)
        startDate: '2025-01-22',
        endDate: '2025-01-24',
        totalDays: 2,
        totalPrice: 180,  // 90 * 2
        status: 'Approved',
        bookingDate: '2025-01-20',
        pickupLocation: 'Sunway Pyramid',
        dropoffLocation: 'Mid Valley Megamall'
    },
    {
        id: 5,
        car_id: 10,  // Nissan Qashqai (currently rented)
        user_id: 2,  // Hana (staff)
        startDate: '2025-01-23',
        endDate: '2025-01-28',
        totalDays: 5,
        totalPrice: 1600,  // 320 * 5
        status: 'Approved',
        bookingDate: '2025-01-21',
        pickupLocation: 'KLIA Terminal 1',
        dropoffLocation: 'Bukit Bintang'
    },
    {
        id: 6,
        car_id: 2,  // BMW X5 Series
        user_id: 1,  // Nik Adil (admin)
        startDate: '2025-03-10',
        endDate: '2025-03-15',
        totalDays: 5,
        totalPrice: 2000,  // 400 * 5
        status: 'Pending',
        bookingDate: '2025-01-26',
        pickupLocation: 'Pavilion KL',
        dropoffLocation: 'KLIA Terminal 2'
    },
    {
        id: 7,
        car_id: 8,  // Mercedes-Benz C-Class
        user_id: 2,  // Hana (staff)
        startDate: '2025-02-14',
        endDate: '2025-02-16',
        totalDays: 2,
        totalPrice: 900,  // 450 * 2
        status: 'Approved',
        bookingDate: '2025-01-27',
        pickupLocation: 'KL Sentral',
        dropoffLocation: 'Suria KLCC'
    },
    {
        id: 8,
        car_id: 6,  // Toyota Vellfire
        user_id: 3,  // Aiman (customer)
        startDate: '2025-01-15',
        endDate: '2025-01-18',
        totalDays: 3,
        totalPrice: 1200,  // 400 * 3
        status: 'Cancelled',
        bookingDate: '2025-01-10',
        pickupLocation: 'Bukit Bintang',
        dropoffLocation: 'Mid Valley Megamall'
    },
    {
        id: 9,
        car_id: 9,  // Nissan Almera
        user_id: 1,  // Nik Adil (admin)
        startDate: '2025-02-20',
        endDate: '2025-02-22',
        totalDays: 2,
        totalPrice: 400,  // 200 * 2
        status: 'Pending',
        bookingDate: '2025-01-28',
        pickupLocation: 'KLIA Terminal 2',
        dropoffLocation: 'Sunway Pyramid'
    },
    {
        id: 10,
        car_id: 11,  // Mazda CX-5
        user_id: 2,  // Hana (staff)
        startDate: '2025-03-01',
        endDate: '2025-03-07',
        totalDays: 6,
        totalPrice: 1800,  // 300 * 6
        status: 'Approved',
        bookingDate: '2025-01-29',
        pickupLocation: 'Suria KLCC',
        dropoffLocation: 'KLIA Terminal 1'
    },
    {
        id: 11,
        car_id: 1,  // Proton X70
        user_id: 2,  // Hana (staff)
        startDate: '2025-01-05',
        endDate: '2025-01-08',
        totalDays: 3,
        totalPrice: 750,  // 250 * 3
        status: 'Cancelled',
        bookingDate: '2025-01-02',
        pickupLocation: 'Mid Valley Megamall',
        dropoffLocation: 'Pavilion KL'
    },
    {
        id: 12,
        car_id: 7,  // Hyundai Tucson (in maintenance)
        user_id: 3,  // Aiman (customer)
        startDate: '2025-04-01',
        endDate: '2025-04-05',
        totalDays: 4,
        totalPrice: 1120,  // 280 * 4
        status: 'Pending',
        bookingDate: '2025-01-30',
        pickupLocation: 'KL Sentral',
        dropoffLocation: 'KLIA Terminal 2'
    },
    {
        id: 13,
        car_id: 5,  // Honda Civic
        user_id: 4,  // Bella (new customer)
        startDate: '2024-11-13',
        endDate: '2024-11-18',
        totalDays: 5,
        totalPrice: 1500,  // 300 * 5
        status: 'Cancelled',
        bookingDate: '2024-11-10',
        pickupLocation: 'Pavilion KL',
        dropoffLocation: 'KL Sentral'
    },
    {
        id: 14,
        car_id: 8,  // Mercedes-Benz C-Class
        user_id: 4,  // Bella (new customer)
        startDate: '2024-08-20',
        endDate: '2024-08-22',
        totalDays: 2,
        totalPrice: 900,  // 450 * 2
        status: 'Cancelled',
        bookingDate: '2024-08-15',
        pickupLocation: 'Suria KLCC',
        dropoffLocation: 'Bukit Bintang'
    },
    {
        id: 15,
        car_id: 2,  // BMW X5 Series
        user_id: 4,  // Bella (new customer)
        startDate: '2025-02-10',
        endDate: '2025-02-14',
        totalDays: 4,
        totalPrice: 1600,  // 400 * 4
        status: 'Approved',
        bookingDate: '2025-02-01',
        pickupLocation: 'KLIA Terminal 1',
        dropoffLocation: 'Mid Valley Megamall'
    }
]

module.exports = bookings;