const blogs = [
    {
        id: 1,
        title: "Top 5 Tips for First-Time Car Renters in Malaysia",
        excerpt: "Planning to rent a car for the first time? Here are essential tips to ensure a smooth and worry-free experience.",
        content: `<p>Renting a car for the first time can be overwhelming, but with the right preparation, it can be a breeze. Here are our top 5 tips:</p>

        <h3>1. Understand Your Insurance Options</h3>
        <p>Most rental companies offer various insurance packages. In Malaysia, basic insurance is usually included, but consider additional coverage for peace of mind, especially if you're planning long-distance trips.</p>

        <h3>2. Check the Vehicle Thoroughly</h3>
        <p>Before driving off, inspect the car for any existing damage. Take photos and ensure any scratches or dents are documented by the rental company to avoid disputes later.</p>

        <h3>3. Know the Fuel Policy</h3>
        <p>Most rental companies in Malaysia operate on a "full-to-full" policy. You receive the car with a full tank and must return it full. Keep your fuel receipt as proof.</p>

        <h3>4. Plan Your Route</h3>
        <p>Malaysia has excellent highways, but tolls can add up. Use navigation apps like Waze or Google Maps to plan your route and budget for toll costs.</p>

        <h3>5. Read the Fine Print</h3>
        <p>Understand mileage limits, additional driver fees, and late return penalties. Most companies charge hourly rates for late returns.</p>

        <p>Happy driving!</p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Tips & Guides",
        featuredImage: "/customer-assets/img/blog/first-time-renters.jpg",
        status: "published",
        views: 1542,
        createdAt: "2025-01-15T09:30:00",
        updatedAt: "2025-01-15T09:30:00"
    },
    {
        id: 2,
        title: "Why SUVs Are Perfect for Malaysian Road Trips",
        excerpt: "Discover why Sport Utility Vehicles are the ideal choice for exploring Malaysia's diverse landscapes and highways.",
        content: `<p>Malaysia's varied terrain—from bustling cities to mountainous highlands—makes SUVs an excellent choice for road trips. Here's why:</p>

        <h3>Space and Comfort</h3>
        <p>SUVs like the Proton X70 and Honda CR-V offer ample legroom and cargo space, perfect for families or groups traveling with luggage.</p>

        <h3>Better Ground Clearance</h3>
        <p>Whether you're heading to Cameron Highlands or navigating flooded city streets during monsoon season, SUVs provide superior ground clearance.</p>

        <h3>Powerful Performance</h3>
        <p>Modern SUVs come with robust engines that handle highway cruising and uphill climbs effortlessly, making long-distance travel less tiring.</p>

        <h3>Safety Features</h3>
        <p>Most SUVs are equipped with advanced safety systems including ABS, traction control, and multiple airbags—essential for Malaysian road conditions.</p>

        <h3>Popular Routes for SUV Adventures</h3>
        <ul>
            <li>Kuala Lumpur to Cameron Highlands</li>
            <li>Penang to Langkawi (via ferry)</li>
            <li>Johor Bahru to Desaru Coast</li>
            <li>KL to Genting Highlands</li>
        </ul>

        <p>Book your SUV rental with Carago today and experience the difference!</p>`,
        authorId: 2, // Hana (staff)
        category: "Vehicle Insights",
        featuredImage: "/customer-assets/img/blog/suv-road-trip.webp",
        status: "published",
        views: 2103,
        createdAt: "2025-01-10T14:20:00",
        updatedAt: "2025-01-12T10:15:00"
    },
    {
        id: 3,
        title: "Understanding Car Rental Insurance: What's Covered?",
        excerpt: "A comprehensive guide to car rental insurance in Malaysia and what protection you really need.",
        content: `<p>Car rental insurance can be confusing. This guide breaks down what's typically covered in Malaysia:</p>

        <h3>Basic Coverage (Usually Included)</h3>
        <ul>
            <li><strong>Third-Party Liability:</strong> Covers damages to other vehicles or property</li>
            <li><strong>Theft Protection:</strong> Protection against vehicle theft</li>
            <li><strong>Fire and Accident:</strong> Coverage for fire damage and collision accidents</li>
        </ul>

        <h3>Optional Add-Ons</h3>
        <ul>
            <li><strong>Collision Damage Waiver (CDW):</strong> Reduces your liability for vehicle damage</li>
            <li><strong>Personal Accident Insurance:</strong> Medical coverage for driver and passengers</li>
            <li><strong>Windscreen Protection:</strong> Covers windscreen and window damage</li>
        </ul>

        <h3>What's NOT Covered</h3>
        <p>Most policies exclude:</p>
        <ul>
            <li>Damage from reckless driving or DUI</li>
            <li>Off-road driving damage</li>
            <li>Interior damage (stains, burns)</li>
            <li>Driving outside permitted areas</li>
        </ul>

        <h3>Our Recommendation</h3>
        <p>For most renters, basic coverage plus CDW provides adequate protection. If you're traveling with family, consider adding Personal Accident Insurance.</p>

        <p>Contact Carago for personalized insurance advice!</p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Tips & Guides",
        featuredImage: "/customer-assets/img/blog/insurance-guide.jpg",
        status: "published",
        views: 987,
        createdAt: "2025-01-08T11:00:00",
        updatedAt: "2025-01-08T11:00:00"
    },
    {
        id: 4,
        title: "Best Cars for City Driving in Kuala Lumpur",
        excerpt: "Navigate KL's busy streets with ease. Here are our top picks for urban car rentals.",
        content: `<p>Kuala Lumpur's traffic requires the right vehicle. Here are our recommendations:</p>

        <h3>1. Perodua Myvi - The City Champion</h3>
        <p>Compact, fuel-efficient, and easy to park. The Myvi is perfect for solo travelers or couples exploring KL.</p>
        <p><strong>Best for:</strong> Budget travelers, short trips, city exploration</p>

        <h3>2. Honda City - Comfort Meets Efficiency</h3>
        <p>More spacious than compact cars while remaining nimble in traffic. Great fuel economy too!</p>
        <p><strong>Best for:</strong> Business travelers, small families</p>

        <h3>3. Toyota Vios - Reliable and Practical</h3>
        <p>A bestseller for a reason. The Vios offers reliability, comfort, and excellent resale value.</p>
        <p><strong>Best for:</strong> Families, week-long rentals</p>

        <h3>Parking Tips for KL</h3>
        <ul>
            <li>Use parking apps like ParkEasy and Flexi Parking</li>
            <li>Shopping malls offer affordable all-day parking</li>
            <li>Avoid parking on yellow lines (RM100 fine!)</li>
            <li>Most hotels charge RM10-20 for overnight parking</li>
        </ul>

        <h3>Traffic Hours to Avoid</h3>
        <p>Monday-Friday: 7:30-9:30 AM and 5:00-7:30 PM</p>

        <p>Book your city car with Carago and beat the KL traffic!</p>`,
        authorId: 2, // Hana (staff)
        category: "Vehicle Insights",
        featuredImage: "/customer-assets/img/blog/city-driving.jpg",
        status: "published",
        views: 1876,
        createdAt: "2025-01-05T16:45:00",
        updatedAt: "2025-01-06T09:20:00"
    },
    {
        id: 5,
        title: "How to Save Money on Your Next Car Rental",
        excerpt: "Expert money-saving tips for budget-conscious travelers renting cars in Malaysia.",
        content: `<p>Car rental doesn't have to break the bank. Here are proven ways to save:</p>

        <h3>1. Book Early</h3>
        <p>Early bird discounts can save you 15-30%. Peak seasons (school holidays, festive periods) see prices spike by 50% or more.</p>

        <h3>2. Rent for Longer Periods</h3>
        <p>Weekly rates are often 20-30% cheaper than daily rates. Consider extending your rental if you're close to a week.</p>

        <h3>3. Compare Fuel Policies</h3>
        <p>Full-to-full policies are usually cheapest. Avoid pre-paid fuel options—you'll likely overpay.</p>

        <h3>4. Skip Unnecessary Add-Ons</h3>
        <p>GPS? Use your phone. Child seats? Bring your own if possible. Each add-on costs RM15-30 per day.</p>

        <h3>5. Check Your Credit Card Benefits</h3>
        <p>Many premium credit cards include rental car insurance. Check with your bank before purchasing additional coverage.</p>

        <h3>6. Return On Time</h3>
        <p>Late returns can cost RM50-100 per hour. Plan your schedule with buffer time.</p>

        <h3>7. Join Loyalty Programs</h3>
        <p>Frequent renters can earn points toward free rentals and upgrades. Carago's loyalty program offers 10% off after your third booking!</p>

        <h3>Seasonal Discounts</h3>
        <p>Best times to rent in Malaysia:</p>
        <ul>
            <li>January-February (post-holiday lull)</li>
            <li>September-October (between school holidays)</li>
            <li>Weekdays vs weekends (20% difference)</li>
        </ul>

        <p>Start saving today with Carago's best price guarantee!</p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Tips & Guides",
        featuredImage: "/customer-assets/img/blog/save-money.jpg",
        status: "published",
        views: 3241,
        createdAt: "2025-01-02T10:00:00",
        updatedAt: "2025-01-02T10:00:00"
    },
    {
        id: 6,
        title: "Electric Vehicles: The Future of Car Rentals in Malaysia",
        excerpt: "Explore how EVs are transforming the car rental industry and what it means for Malaysian travelers.",
        content: `<p>Malaysia is rapidly embracing electric vehicles. Here's what renters need to know:</p>

        <h3>Current EV Landscape in Malaysia</h3>
        <p>As of 2025, Malaysia has over 1,000 public charging stations, with major highways now equipped with DC fast chargers.</p>

        <h3>Benefits of Renting an EV</h3>
        <ul>
            <li><strong>Lower Fuel Costs:</strong> Charging costs 70% less than petrol</li>
            <li><strong>Quiet and Smooth:</strong> Instant torque for effortless acceleration</li>
            <li><strong>Environmental Impact:</strong> Zero emissions during operation</li>
            <li><strong>Government Incentives:</strong> Free parking at selected malls</li>
        </ul>

        <h3>Challenges to Consider</h3>
        <ul>
            <li>Charging infrastructure still developing outside major cities</li>
            <li>Slightly higher rental rates (for now)</li>
            <li>Trip planning requires charging station awareness</li>
        </ul>

        <h3>Popular EV Models for Rent</h3>
        <p>Coming soon to Carago:</p>
        <ul>
            <li>BYD Atto 3 - Best value SUV</li>
            <li>Tesla Model 3 - Premium sedan</li>
            <li>Nissan Leaf - Affordable compact</li>
        </ul>

        <h3>Charging Guide</h3>
        <p><strong>Home charging:</strong> 8-12 hours (AC charger)<br>
        <strong>Public DC fast charging:</strong> 30-45 minutes (80% charge)<br>
        <strong>Apps to use:</strong> ChargEV, JomCharge, PlugShare</p>

        <h3>Is an EV Right for Your Trip?</h3>
        <p>✅ Perfect for: City trips, KL-Penang highway, short-medium distances<br>
        ❌ Not ideal for: Remote areas, cross-country trips (yet)</p>

        <p>Carago will be launching EV rentals in Q2 2025. Join our waitlist today!</p>`,
        authorId: 2, // Hana (staff)
        category: "Industry News",
        featuredImage: "/customer-assets/img/blog/electric-vehicles.jpg",
        status: "published",
        views: 1654,
        createdAt: "2024-12-28T13:30:00",
        updatedAt: "2025-01-14T08:45:00"
    },
    {
        id: 7,
        title: "Road Safety Checklist Before Your Journey",
        excerpt: "Essential safety checks every driver should perform before hitting the road.",
        content: `<p>Safety first! Complete this checklist before every journey:</p>

        <h3>External Checks (Walk Around the Car)</h3>
        <ul>
            <li>✓ Tire pressure and tread depth</li>
            <li>✓ All lights working (headlights, brake lights, indicators)</li>
            <li>✓ Mirrors properly adjusted</li>
            <li>✓ Windscreen clean and wipers functional</li>
            <li>✓ No visible damage or leaks under the car</li>
        </ul>

        <h3>Internal Checks</h3>
        <ul>
            <li>✓ Seat and steering wheel position adjusted</li>
            <li>✓ Seatbelts functioning for all seats</li>
            <li>✓ Dashboard warning lights (if any remain on, contact rental company)</li>
            <li>✓ Fuel level adequate for your journey</li>
            <li>✓ Air conditioning working</li>
        </ul>

        <h3>Emergency Kit (Check Trunk)</h3>
        <ul>
            <li>✓ Spare tire and jack</li>
            <li>✓ Warning triangle</li>
            <li>✓ First aid kit</li>
            <li>✓ Flashlight</li>
            <li>✓ Fire extinguisher</li>
        </ul>

        <h3>Documents to Carry</h3>
        <ul>
            <li>Valid driving license (Malaysian or International)</li>
            <li>Rental agreement</li>
            <li>Insurance documents</li>
            <li>Emergency contact numbers</li>
        </ul>

        <h3>Malaysian Road Regulations Reminder</h3>
        <ul>
            <li>Speed limits: 110 km/h (highway), 90 km/h (rural), 50 km/h (urban)</li>
            <li>Seatbelts mandatory for all passengers</li>
            <li>Mobile phone use illegal while driving</li>
            <li>Zero tolerance for drink-driving (legal limit: 0.08% BAC)</li>
        </ul>

        <h3>Emergency Numbers</h3>
        <p><strong>Police:</strong> 999<br>
        <strong>Ambulance:</strong> 999<br>
        <strong>Highway Patrol (PLUS):</strong> 1800-88-0000<br>
        <strong>Carago 24/7 Roadside Assistance:</strong> 03-XXXX-XXXX</p>

        <p>Drive safe with Carago!</p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Safety",
        featuredImage: "/customer-assets/img/blog/road-safety.png",
        status: "published",
        views: 892,
        createdAt: "2024-12-20T09:15:00",
        updatedAt: "2024-12-20T09:15:00"
    },
    {
        id: 8,
        title: "Top 10 Road Trip Destinations in Malaysia",
        excerpt: "Pack your bags! Discover Malaysia's most scenic and exciting road trip routes perfect for your rental car.",
        content: `<p>Malaysia offers incredible diversity for road trippers. Here are our top 10 destinations:</p>

        <h3>1. Cameron Highlands</h3>
        <p><strong>Distance from KL:</strong> 200 km (3 hours)<br>
        <strong>Best time:</strong> Year-round<br>
        <strong>Highlights:</strong> Tea plantations, strawberry farms, cool climate<br>
        <strong>Recommended car:</strong> SUV (hilly terrain)</p>

        <h3>2. Penang Island</h3>
        <p><strong>Distance from KL:</strong> 350 km (4 hours)<br>
        <strong>Best time:</strong> December-February<br>
        <strong>Highlights:</strong> Street food capital, heritage sites, beaches<br>
        <strong>Recommended car:</strong> Compact (city driving)</p>

        <h3>3. Langkawi</h3>
        <p><strong>Distance from KL:</strong> 430 km + ferry (6 hours total)<br>
        <strong>Best time:</strong> November-April<br>
        <strong>Highlights:</strong> Duty-free shopping, cable car, pristine beaches<br>
        <strong>Recommended car:</strong> Sedan or SUV</p>

        <h3>4. Malacca (Melaka)</h3>
        <p><strong>Distance from KL:</strong> 150 km (2 hours)<br>
        <strong>Best time:</strong> Year-round<br>
        <strong>Highlights:</strong> UNESCO heritage site, Portuguese/Dutch architecture<br>
        <strong>Recommended car:</strong> Any type</p>

        <h3>5. Desaru Coast</h3>
        <p><strong>Distance from KL:</strong> 330 km (4 hours)<br>
        <strong>Best time:</strong> March-October<br>
        <strong>Highlights:</strong> Beach resorts, water sports, golf<br>
        <strong>Recommended car:</strong> SUV or MPV (family-friendly)</p>

        <h3>6. Ipoh</h3>
        <p><strong>Distance from KL:</strong> 200 km (2.5 hours)<br>
        <strong>Best time:</strong> Year-round<br>
        <strong>Highlights:</strong> Limestone caves, colonial architecture, famous food<br>
        <strong>Recommended car:</strong> Sedan</p>

        <h3>7. Genting Highlands</h3>
        <p><strong>Distance from KL:</strong> 50 km (1 hour)<br>
        <strong>Best time:</strong> Year-round<br>
        <strong>Highlights:</strong> Casino, theme park, cool weather<br>
        <strong>Recommended car:</strong> SUV (mountain roads)</p>

        <h3>8. Tioman Island</h3>
        <p><strong>Distance from KL:</strong> 320 km + ferry (5 hours total)<br>
        <strong>Best time:</strong> March-October<br>
        <strong>Highlights:</strong> Diving, snorkeling, jungle trekking<br>
        <strong>Recommended car:</strong> Any (parking at Mersing jetty)</p>

        <h3>9. Kuala Terengganu</h3>
        <p><strong>Distance from KL:</strong> 440 km (5.5 hours)<br>
        <strong>Best time:</strong> March-September<br>
        <strong>Highlights:</strong> Crystal Mosque, islands, local culture<br>
        <strong>Recommended car:</strong> Sedan or SUV</p>

        <h3>10. Taman Negara</h3>
        <p><strong>Distance from KL:</strong> 240 km (3.5 hours)<br>
        <strong>Best time:</strong> March-September (dry season)<br>
        <strong>Highlights:</strong> Ancient rainforest, canopy walk, wildlife<br>
        <strong>Recommended car:</strong> SUV (unpaved roads possible)</p>

        <h3>Road Trip Planning Tips</h3>
        <ul>
            <li>Download offline maps before leaving</li>
            <li>Book accommodations in advance during peak season</li>
            <li>Check Touch 'n Go card balance for tolls</li>
            <li>Pack snacks and water (rest stops can be far apart)</li>
        </ul>

        <p>Ready for adventure? Book your road trip car with Carago today!</p>`,
        authorId: 2, // Hana (staff)
        category: "Travel Guides",
        featuredImage: "/customer-assets/img/blog/road-trip-destinations.webp",
        status: "published",
        views: 4567,
        createdAt: "2024-12-15T14:00:00",
        updatedAt: "2025-01-10T11:30:00"
    },
    {
        id: 9,
        title: "What to Do If You Have an Accident in a Rental Car",
        excerpt: "Step-by-step guide on handling accidents in rental vehicles - stay calm and follow these procedures.",
        content: `<p>Accidents happen. Here's exactly what to do if you're involved in one while driving a rental car:</p>

        <h3>Immediate Steps (At the Scene)</h3>

        <h4>1. Ensure Safety First</h4>
        <ul>
            <li>Turn on hazard lights immediately</li>
            <li>Move the vehicle to the roadside if possible and safe</li>
            <li>Set up warning triangle 50-100m behind the car</li>
            <li>Check for injuries - call ambulance (999) if needed</li>
        </ul>

        <h4>2. Do NOT Admit Fault</h4>
        <p>Never say "I'm sorry" or "It's my fault" at the scene. Exchange information politely but stick to facts only.</p>

        <h4>3. Document Everything</h4>
        <ul>
            <li>Take photos from multiple angles (vehicle damage, road conditions, traffic signs)</li>
            <li>Record other driver's details (IC, license, insurance, phone number)</li>
            <li>Get witness contact information if available</li>
            <li>Note exact location, time, weather conditions</li>
        </ul>

        <h4>4. Call the Police</h4>
        <p>In Malaysia, you MUST file a police report within 24 hours for insurance claims. Dial 999 or visit the nearest police station.</p>

        <h4>5. Contact the Rental Company IMMEDIATELY</h4>
        <p>Call Carago's 24/7 emergency hotline: 03-XXXX-XXXX<br>
        Provide: Your booking reference, location, brief description of accident</p>

        <h3>After the Accident</h3>

        <h4>Within 24 Hours:</h4>
        <ul>
            <li>File police report at any police station (bring IC and driver's license)</li>
            <li>Get police report number</li>
            <li>Inform your insurance company if using personal coverage</li>
        </ul>

        <h4>Insurance Claim Process:</h4>
        <ol>
            <li>Submit police report to Carago</li>
            <li>Complete accident claim form</li>
            <li>Provide all photos and documentation</li>
            <li>Pay applicable excess/deductible (usually RM1,000-3,000)</li>
            <li>Insurance handles the rest</li>
        </ol>

        <h3>Common Scenarios and Liability</h3>

        <p><strong>Minor scratches/dents (under RM500):</strong><br>
        Often covered by damage waiver. Review your rental agreement.</p>

        <p><strong>Major collision:</strong><br>
        Your excess applies (amount specified in rental agreement). Insurance covers the rest.</p>

        <p><strong>Other party's fault:</strong><br>
        Their insurance pays. Still file police report and inform rental company.</p>

        <p><strong>Hit-and-run or vandalism:</strong><br>
        Police report essential. Comprehensive coverage typically applies.</p>

        <h3>What Your Rental Agreement Says</h3>
        <p>Review your Carago rental agreement - it typically includes:</p>
        <ul>
            <li>Mandatory police report requirement</li>
            <li>Excess/deductible amount (your maximum liability)</li>
            <li>Coverage exclusions (DUI, off-road, unauthorized drivers)</li>
            <li>Timeline for reporting accidents</li>
        </ul>

        <h3>Tips to Avoid Accidents</h3>
        <ul>
            <li>Familiarize yourself with the car before driving</li>
            <li>Adjust mirrors and seat properly</li>
            <li>Avoid driving when tired (Malaysian highways are long!)</li>
            <li>Give extra space in wet conditions</li>
            <li>Watch for motorcycles (they're everywhere!)</li>
        </ul>

        <p>Prevention is better than cure. Drive safely with Carago!</p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Safety",
        featuredImage: "/customer-assets/img/blog/accident-guide.jpg",
        status: "published",
        views: 1234,
        createdAt: "2024-12-10T10:30:00",
        updatedAt: "2024-12-10T10:30:00"
    },
    {
        id: 10,
        title: "Carago's New Mobile App: Book Faster, Drive Smarter",
        excerpt: "Introducing the all-new Carago mobile app with instant booking, digital car keys, and exclusive app-only discounts!",
        content: `<p>We're thrilled to announce the launch of the Carago mobile app - your complete car rental solution in your pocket!</p>

        <h3>🚀 Key Features</h3>

        <h4>1. Lightning-Fast Booking</h4>
        <p>Book a car in under 60 seconds! Our streamlined app interface lets you:</p>
        <ul>
            <li>Browse available cars in real-time</li>
            <li>Filter by price, category, features</li>
            <li>See car location on the map</li>
            <li>Complete booking with saved payment methods</li>
        </ul>

        <h4>2. Digital Car Keys (Coming Soon)</h4>
        <p>Skip the counter! Unlock your rental car directly from the app using Bluetooth technology. Available for select vehicles starting Q2 2025.</p>

        <h4>3. 24/7 Roadside Assistance</h4>
        <p>One-tap access to emergency support. Share your real-time location instantly with our support team.</p>

        <h4>4. Trip Management</h4>
        <ul>
            <li>View all upcoming and past bookings</li>
            <li>Extend rentals with a tap</li>
            <li>Submit damage reports with photos</li>
            <li>Track loyalty points and rewards</li>
        </ul>

        <h4>5. Exclusive App-Only Deals</h4>
        <p>App users enjoy:</p>
        <ul>
            <li>15% off first booking</li>
            <li>Flash sales notifications</li>
            <li>Birthday month discounts</li>
            <li>Early access to new vehicle models</li>
        </ul>

        <h3>📱 Download Now</h3>
        <p>Available on:</p>
        <ul>
            <li>Apple App Store (iOS 14+)</li>
            <li>Google Play Store (Android 8+)</li>
        </ul>

        <h3>�� Launch Promotion</h3>
        <p><strong>Download the app by January 31, 2025 and get:</strong></p>
        <ul>
            <li>RM50 credit for your first booking</li>
            <li>Double loyalty points on first 3 rentals</li>
            <li>Free upgrade (subject to availability)</li>
        </ul>

        <p>Use promo code: <strong>CARAGOAPP2025</strong></p>

        <h3>User Reviews</h3>
        <blockquote>
        "Super easy to use! Booked a car for my Penang trip in less than a minute. Love the clean interface!" - Ahmad K.
        </blockquote>

        <blockquote>
        "The roadside assistance feature saved me when I had a flat tire. Support arrived in 20 minutes!" - Sarah L.
        </blockquote>

        <h3>What's Coming Next?</h3>
        <p>We're constantly improving! Upcoming features include:</p>
        <ul>
            <li>AI-powered trip recommendations</li>
            <li>In-app fuel payment integration</li>
            <li>Carbon footprint tracking</li>
            <li>Multi-language support (Chinese, Tamil, Malay)</li>
        </ul>

        <h3>Feedback Welcome!</h3>
        <p>We'd love to hear from you. Rate the app and share your suggestions at <strong>feedback@carago.com</strong></p>

        <p>Download Carago app today and experience the future of car rental!</p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Company News",
        featuredImage: "/customer-assets/img/blog/mobile-app-launch.jpeg",
        status: "published",
        views: 2890,
        createdAt: "2025-01-20T08:00:00",
        updatedAt: "2025-01-20T08:00:00"
    },
    {
        id: 11,
        title: "Comparing Car Categories: Which One Suits Your Needs?",
        excerpt: "Not sure whether to rent a sedan, SUV, or MPV? This comprehensive guide helps you choose the perfect vehicle type.",
        content: `<p>Choosing the right car category can make or break your trip. Here's a detailed comparison:</p>

        <h3>🚗 Compact Cars (e.g., Perodua Myvi, Axia)</h3>
        <p><strong>Best for:</strong> Solo travelers, couples, city driving<br>
        <strong>Price range:</strong> RM80-120/day<br>
        <strong>Fuel efficiency:</strong> ★★★★★ (15-20 km/L)</p>

        <p><strong>Pros:</strong></p>
        <ul>
            <li>Most affordable option</li>
            <li>Easy to park and maneuver</li>
            <li>Excellent fuel economy</li>
            <li>Low toll charges (Class 1)</li>
        </ul>

        <p><strong>Cons:</strong></p>
        <ul>
            <li>Limited trunk space</li>
            <li>Less comfortable for long distances</li>
            <li>Not ideal for more than 3 passengers</li>
        </ul>

        <h3>🚙 Sedans (e.g., Honda City, Toyota Vios)</h3>
        <p><strong>Best for:</strong> Business trips, small families, highway driving<br>
        <strong>Price range:</strong> RM130-180/day<br>
        <strong>Fuel efficiency:</strong> ★★★★☆ (13-17 km/L)</p>

        <p><strong>Pros:</strong></p>
        <ul>
            <li>Balanced comfort and economy</li>
            <li>Spacious trunk for luggage</li>
            <li>Smooth highway cruising</li>
            <li>Professional appearance</li>
        </ul>

        <p><strong>Cons:</strong></p>
        <ul>
            <li>Limited ground clearance (flooded roads)</li>
            <li>Not spacious for 5 adults on long trips</li>
        </ul>

        <h3>🚙 SUVs (e.g., Proton X70, Honda CR-V)</h3>
        <p><strong>Best for:</strong> Families, road trips, highland drives<br>
        <strong>Price range:</strong> RM200-300/day<br>
        <strong>Fuel efficiency:</strong> ★★★☆☆ (10-14 km/L)</p>

        <p><strong>Pros:</strong></p>
        <ul>
            <li>High ground clearance (floods, hills)</li>
            <li>Spacious interior and cargo space</li>
            <li>Commanding road view</li>
            <li>Advanced safety features</li>
            <li>Powerful engines for hills</li>
        </ul>

        <p><strong>Cons:</strong></p>
        <ul>
            <li>Higher rental and fuel costs</li>
            <li>Larger turning radius (city parking)</li>
            <li>Higher toll charges (Class 2-3)</li>
        </ul>

        <h3>🚐 MPVs (e.g., Toyota Avanza, Honda BR-V)</h3>
        <p><strong>Best for:</strong> Large families, group travel, extra luggage<br>
        <strong>Price range:</strong> RM180-250/day<br>
        <strong>Fuel efficiency:</strong> ★★★☆☆ (11-15 km/L)</p>

        <p><strong>Pros:</strong></p>
        <ul>
            <li>7-seater capacity</li>
            <li>Flexible seating configurations</li>
            <li>Maximum cargo space with seats folded</li>
            <li>Good value for large groups</li>
        </ul>

        <p><strong>Cons:</strong></p>
        <ul>
            <li>Less sporty/luxurious feel</li>
            <li>Can feel bulky in tight spaces</li>
            <li>Moderate fuel consumption</li>
        </ul>

        <h3>🏎️ Luxury Cars (e.g., Mercedes C-Class, BMW 3 Series)</h3>
        <p><strong>Best for:</strong> Special occasions, corporate events<br>
        <strong>Price range:</strong> RM350-600/day<br>
        <strong>Fuel efficiency:</strong> ★★☆☆☆ (8-12 km/L)</p>

        <p><strong>Pros:</strong></p>
        <ul>
            <li>Premium comfort and features</li>
            <li>Latest technology and safety</li>
            <li>Make a great impression</li>
            <li>Superior ride quality</li>
        </ul>

        <p><strong>Cons:</strong></p>
        <ul>
            <li>Very expensive</li>
            <li>High insurance excess (RM5,000+)</li>
            <li>Premium fuel required (RON97/98)</li>
        </ul>

        <h3>📊 Quick Decision Matrix</h3>

        <table>
        <tr><th>Your Situation</th><th>Best Choice</th></tr>
        <tr><td>Solo business trip to KL</td><td>Sedan (Honda City)</td></tr>
        <tr><td>Couple's weekend in Penang</td><td>Compact (Myvi)</td></tr>
        <tr><td>Family of 4 to Cameron Highlands</td><td>SUV (Proton X70)</td></tr>
        <tr><td>Group of 6 friends to Langkawi</td><td>MPV (Avanza)</td></tr>
        <tr><td>Wedding day transportation</td><td>Luxury (Mercedes)</td></tr>
        <tr><td>Budget backpacker</td><td>Compact (Axia)</td></tr>
        </table>

        <h3>Cost Comparison Example (3-day rental + fuel for 500km trip)</h3>

        <ul>
            <li><strong>Compact:</strong> RM360 rental + RM100 fuel = RM460</li>
            <li><strong>Sedan:</strong> RM540 rental + RM150 fuel = RM690</li>
            <li><strong>SUV:</strong> RM900 rental + RM200 fuel = RM1,100</li>
            <li><strong>MPV:</strong> RM750 rental + RM175 fuel = RM925</li>
        </ul>

        <h3>Still Unsure?</h3>
        <p>Contact our Carago team for personalized recommendations based on your:</p>
        <ul>
            <li>Number of passengers</li>
            <li>Amount of luggage</li>
            <li>Destination and route</li>
            <li>Budget</li>
        </ul>

        <p>Choose wisely and drive happy with Carago!</p>`,
        authorId: 2, // Hana (staff)
        category: "Vehicle Insights",
        featuredImage: "/customer-assets/img/blog/car-categories.jpg",
        status: "published",
        views: 2456,
        createdAt: "2024-12-05T15:20:00",
        updatedAt: "2025-01-18T09:10:00"
    },
    {
        id: 12,
        title: "Behind the Scenes: How Carago Maintains Our Fleet",
        excerpt: "Ever wondered how we keep our rental cars in pristine condition? Take a peek into Carago's quality control process.",
        content: `<p>At Carago, vehicle quality isn't just important - it's everything. Here's how we maintain our fleet:</p>

        <h3>🔧 Our Maintenance Philosophy</h3>
        <p>"Every car should drive like it's brand new" - that's our promise. We achieve this through rigorous standards:</p>

        <h3>After Every Rental: Deep Cleaning Protocol</h3>
        <ol>
            <li><strong>Exterior Wash & Wax</strong> (15 minutes)
                <ul>
                    <li>Pressure wash chassis and wheels</li>
                    <li>Hand wash body panels</li>
                    <li>Polish chrome and glass</li>
                    <li>Tire shine and rim cleaning</li>
                </ul>
            </li>
            <li><strong>Interior Detailing</strong> (30 minutes)
                <ul>
                    <li>Vacuum carpets, seats, trunk</li>
                    <li>Wipe all surfaces (dashboard, console, door panels)</li>
                    <li>Clean air vents and cup holders</li>
                    <li>Sanitize steering wheel, gear shift, door handles</li>
                    <li>Clean windows inside and out</li>
                    <li>Odor treatment if needed</li>
                </ul>
            </li>
            <li><strong>Quality Check</strong> (10 minutes)
                <ul>
                    <li>Inspect for new damage</li>
                    <li>Check all lights and indicators</li>
                    <li>Test air conditioning</li>
                    <li>Verify tire pressure</li>
                    <li>Top up fluids (washer fluid, coolant)</li>
                </ul>
            </li>
        </ol>

        <h3>📅 Regular Service Schedule</h3>

        <p><strong>Every 5,000 km or 3 months:</strong></p>
        <ul>
            <li>Engine oil and filter change</li>
            <li>Tire rotation</li>
            <li>Brake inspection</li>
            <li>Air filter check</li>
            <li>Battery test</li>
        </ul>

        <p><strong>Every 10,000 km or 6 months:</strong></p>
        <ul>
            <li>Full diagnostic scan</li>
            <li>Transmission fluid check</li>
            <li>Suspension inspection</li>
            <li>Wheel alignment and balancing</li>
            <li>Replace air cabin filter</li>
        </ul>

        <p><strong>Every 20,000 km or 12 months:</strong></p>
        <ul>
            <li>Major service (as per manufacturer)</li>
            <li>Brake pad replacement if needed</li>
            <li>Spark plug inspection</li>
            <li>Comprehensive safety check</li>
        </ul>

        <h3>🛡️ Safety First: Pre-Rental Inspection</h3>
        <p>Before EVERY rental, our team completes a 25-point checklist:</p>

        <p><strong>Mechanical:</strong></p>
        <ul>
            <li>✓ Engine starts smoothly</li>
            <li>✓ No warning lights on dashboard</li>
            <li>✓ Brakes responsive (pedal feel test)</li>
            <li>✓ Steering smooth and centered</li>
            <li>✓ Transmission shifts properly</li>
        </ul>

        <p><strong>Safety Equipment:</strong></p>
        <ul>
            <li>✓ All seatbelts functional</li>
            <li>✓ Airbag system active</li>
            <li>✓ Fire extinguisher present and valid</li>
            <li>✓ Warning triangle in trunk</li>
            <li>✓ First aid kit stocked</li>
            <li>✓ Spare tire and jack present</li>
        </ul>

        <p><strong>Comfort & Convenience:</strong></p>
        <ul>
            <li>✓ Air conditioning blows cold</li>
            <li>✓ All windows operate smoothly</li>
            <li>✓ Radio/infotainment working</li>
            <li>✓ USB charging ports functional</li>
            <li>✓ Door locks and central locking OK</li>
        </ul>

        <h3>🚗 Fleet Refresh Policy</h3>
        <p>We don't keep cars forever. Our replacement criteria:</p>
        <ul>
            <li>Maximum vehicle age: 5 years</li>
            <li>Maximum mileage: 150,000 km</li>
            <li>Appearance condition score below 8/10</li>
            <li>Repair costs exceeding 30% of market value</li>
        </ul>

        <p>This means you're always driving relatively new, well-maintained vehicles!</p>

        <h3>📊 Our Fleet Statistics (2024)</h3>
        <ul>
            <li>Average vehicle age: 2.3 years</li>
            <li>Average mileage: 45,000 km</li>
            <li>Breakdown rate: 0.2% (industry avg: 1.5%)</li>
            <li>Customer satisfaction (vehicle condition): 4.8/5.0</li>
        </ul>

        <h3>💬 What Our Customers Say</h3>

        <blockquote>
        "Rented the Proton X70 - it was spotless! Smelled brand new and drove perfectly. You can tell Carago takes care of their cars." - Razak M.
        </blockquote>

        <blockquote>
        "I've used many rental companies, but Carago's vehicles are consistently the cleanest. Even the trunk was vacuumed!" - Jennifer T.
        </blockquote>

        <h3>🔍 Transparency Matters</h3>
        <p>We photograph every vehicle before and after rental. You receive a copy of the condition report, protecting both you and us.</p>

        <h3>Green Initiative 🌱</h3>
        <p>Our eco-friendly practices:</p>
        <ul>
            <li>Waterless car wash products (saves 150L water per wash)</li>
            <li>Biodegradable cleaning chemicals</li>
            <li>Recycled oil disposal through certified partners</li>
            <li>Solar panels powering our service center</li>
        </ul>

        <h3>Meet Our Team</h3>
        <p>Behind every clean car is a dedicated technician:</p>
        <ul>
            <li>12 certified mechanics</li>
            <li>8 professional detailers</li>
            <li>5 quality control inspectors</li>
            <li>All trained to manufacturer specifications</li>
        </ul>

        <h3>Have Questions About Our Maintenance?</h3>
        <p>We're happy to share! Email <strong>quality@carago.com</strong> or ask during your next pickup.</p>

        <p>Quality you can see, reliability you can trust - that's the Carago difference!</p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Company News",
        featuredImage: "/customer-assets/img/blog/fleet-maintenance.jpg",
        status: "published",
        views: 1123,
        createdAt: "2024-11-28T11:45:00",
        updatedAt: "2024-11-28T11:45:00"
    },
    {
        id: 13,
        title: "Driving in Malaysia During Monsoon Season: Essential Tips",
        excerpt: "Stay safe on wet roads! Expert advice for navigating Malaysia's monsoon season in your rental car.",
        content: `<p>Malaysia's monsoon season (November-March) brings heavy rain and challenging driving conditions. Here's how to stay safe:</p>

        <h3>⛈️ Understanding Malaysian Monsoon Patterns</h3>

        <p><strong>Northeast Monsoon (November-March):</strong></p>
        <ul>
            <li>Affects: East Coast (Kelantan, Terengganu, Pahang)</li>
            <li>Intensity: Heavy, continuous rainfall</li>
            <li>Risk: Major flooding, road closures</li>
        </ul>

        <p><strong>Southwest Monsoon (May-September):</strong></p>
        <ul>
            <li>Affects: West Coast, less severe</li>
            <li>Intensity: Afternoon thunderstorms</li>
            <li>Risk: Flash floods in low-lying areas</li>
        </ul>

        <h3>🚗 Pre-Trip Preparation</h3>

        <h4>1. Choose the Right Vehicle</h4>
        <p>Recommended for monsoon season:</p>
        <ul>
            <li>✅ SUVs (higher ground clearance: 200mm+)</li>
            <li>✅ Vehicles with good tire tread (minimum 3mm)</li>
            <li>❌ Avoid: Low-riding sedans, sports cars</li>
        </ul>

        <h4>2. Check Before You Go</h4>
        <ul>
            <li>Test windscreen wipers (should clear glass in one swipe)</li>
            <li>Ensure all lights work (visibility is crucial)</li>
            <li>Verify tire condition with our staff</li>
            <li>Check weather forecast and road conditions</li>
        </ul>

        <h4>3. Pack an Emergency Kit</h4>
        <ul>
            <li>Waterproof flashlight</li>
            <li>Power bank (fully charged)</li>
            <li>Emergency contact numbers (printed, not just in phone)</li>
            <li>Towels or absorbent cloths</li>
            <li>Drinking water and snacks</li>
        </ul>

        <h3>🌧️ Driving Techniques for Wet Roads</h3>

        <h4>Reduce Speed Significantly</h4>
        <p>Our recommendations:</p>
        <ul>
            <li>Highway: 80-90 km/h (vs normal 110 km/h)</li>
            <li>Rural roads: 60-70 km/h (vs normal 90 km/h)</li>
            <li>Urban: 40 km/h (vs normal 50 km/h)</li>
        </ul>

        <h4>Increase Following Distance</h4>
        <p>Apply the "4-second rule":</p>
        <ol>
            <li>Pick a fixed object (lamp post, sign)</li>
            <li>When the car ahead passes it, count: "One thousand one, one thousand two..."</li>
            <li>You should reach that object after 4 seconds (not 3 in dry conditions)</li>
        </ol>

        <h4>Avoid Hydroplaning</h4>
        <p>If your car starts sliding on water:</p>
        <ul>
            <li>❌ DON'T brake hard or steer sharply</li>
            <li>✅ Ease off accelerator gently</li>
            <li>✅ Hold steering wheel straight</li>
            <li>✅ Let car slow naturally</li>
            <li>✅ Avoid sudden movements</li>
        </ul>

        <h4>Navigating Flooded Roads</h4>
        <p><strong>CRITICAL:</strong> If water is above your knee height, DO NOT ATTEMPT TO CROSS!</p>

        <p><strong>Safe water depths:</strong></p>
        <ul>
            <li>Compact cars: Maximum 15cm (6 inches)</li>
            <li>Sedans: Maximum 20cm (8 inches)</li>
            <li>SUVs: Maximum 30cm (12 inches)</li>
        </ul>

        <p><strong>If you must cross shallow flooding:</strong></p>
        <ol>
            <li>Stop and assess depth (watch other vehicles)</li>
            <li>Shift to low gear (1st or 2nd)</li>
            <li>Drive slowly but steadily (walking pace: 5-10 km/h)</li>
            <li>Keep engine revving (don't let water enter exhaust)</li>
            <li>Test brakes afterward (pump gently to dry them)</li>
        </ol>

        <h3>⚠️ What NOT to Do</h3>

        <ul>
            <li>❌ Never drive through fast-moving water</li>
            <li>❌ Don't use cruise control in rain</li>
            <li>❌ Don't overtake in heavy rain (reduced visibility)</li>
            <li>❌ Don't park under trees or near riverbanks</li>
            <li>❌ Don't wait in car if water rises - evacuate to higher ground!</li>
        </ul>

        <h3>🆘 If You Get Stuck in Flood</h3>

        <ol>
            <li><strong>Stay calm</strong></li>
            <li><strong>Do NOT restart engine</strong> (water may have entered - causes severe damage)</li>
            <li><strong>Call Carago emergency hotline:</strong> 03-XXXX-XXXX</li>
            <li><strong>If water is rising:</strong> Exit vehicle immediately, move to higher ground</li>
            <li><strong>If safe:</strong> Wait in car until help arrives, keep doors unlocked</li>
        </ol>

        <h3>📍 High-Risk Flood Zones to Avoid</h3>

        <p>Check real-time flood status:</p>
        <ul>
            <li><strong>Apps:</strong> MyPublicInfoBanjir, Waze (reports flooding)</li>
            <li><strong>Websites:</strong> publicinfobanjir.water.gov.my</li>
            <li><strong>Twitter:</strong> @bernamadotcom (real-time updates)</li>
        </ul>

        <p><strong>Historically flood-prone areas:</strong></p>
        <ul>
            <li>Kelantan: Most districts during Dec-Jan</li>
            <li>Terengganu: Kuala Terengganu, Kemaman</li>
            <li>Pahang: Kuantan, Pekan, Temerloh</li>
            <li>Selangor: Shah Alam (certain roads), Klang</li>
            <li>KL: Jalan Mahameru, Jalan Loke Yew after heavy rain</li>
        </ul>

        <h3>🛡️ Insurance Coverage Notes</h3>

        <p>Your Carago rental insurance typically covers:</p>
        <ul>
            <li>✅ Flood damage (if you followed safety protocols)</li>
            <li>✅ Towing from flooded area</li>
        </ul>

        <p>NOT covered:</p>
        <ul>
            <li>❌ Engine damage from attempting to restart in flood</li>
            <li>❌ Damage from driving into clearly dangerous flood water</li>
            <li>❌ Ignoring road closure signs</li>
        </ul>

        <h3>☀️ After the Rain Stops</h3>

        <ul>
            <li>Drive cautiously - roads may still be slippery</li>
            <li>Watch for potholes (water may hide road damage)</li>
            <li>Expect traffic congestion from accidents/flooding</li>
            <li>Check car for any water ingress (floor mats, trunk)</li>
        </ul>

        <h3>Alternative Travel During Severe Weather</h3>

        <p>If conditions are too dangerous:</p>
        <ul>
            <li>Postpone non-essential trips</li>
            <li>Contact Carago to extend rental if stranded</li>
            <li>Check bus/train alternatives (KTM, ETS often run during floods)</li>
        </ul>

        <h3>Emergency Numbers</h3>

        <ul>
            <li><strong>Police/Ambulance:</strong> 999</li>
            <li><strong>Civil Defense (BOMBA):</strong> 994</li>
            <li><strong>JKR (Road Works Dept):</strong> 1800-88-7755</li>
            <li><strong>Carago 24/7 Assistance:</strong> 03-XXXX-XXXX</li>
        </ul>

        <p>Remember: No destination is worth risking your safety. When in doubt, wait it out!</p>

        <p>Stay safe and dry with Carago!</p>`,
        authorId: 2, // Hana (staff)
        category: "Safety",
        featuredImage: "/customer-assets/img/blog/monsoon-driving.jpg",
        status: "published",
        views: 3456,
        createdAt: "2024-11-15T10:00:00",
        updatedAt: "2024-12-01T14:30:00"
    },
    {
        id: 14,
        title: "Carago Year-End Report 2024: Thank You for an Amazing Year!",
        excerpt: "As 2024 comes to a close, we reflect on our achievements, challenges, and exciting plans for 2025. Thank you for being part of our journey!",
        content: `<p>Dear Carago Community,</p>

        <p>As we bid farewell to 2024, we want to take a moment to celebrate this incredible year with you - our valued customers who made it all possible.</p>

        <h3>📊 2024 by the Numbers</h3>

        <ul>
            <li><strong>18,500+ successful rentals</strong> (up 42% from 2023!)</li>
            <li><strong>3.2 million kilometers</strong> driven by our customers</li>
            <li><strong>127 vehicles</strong> in our fleet (started 2024 with 85)</li>
            <li><strong>4.8/5.0 average rating</strong> across all platforms</li>
            <li><strong>89% customer return rate</strong> (industry avg: 45%)</li>
            <li><strong>Zero major accidents</strong> attributed to vehicle failure</li>
        </ul>

        <h3>🏆 Major Milestones</h3>

        <h4>Q1 2024: Expansion Begins</h4>
        <ul>
            <li>Opened second location in Penang (March)</li>
            <li>Introduced luxury car category</li>
            <li>Launched corporate partnership program</li>
        </ul>

        <h4>Q2 2024: Going Digital</h4>
        <ul>
            <li>Website redesign with instant booking</li>
            <li>Integrated payment gateway (FPX, e-wallets)</li>
            <li>Implemented 24/7 chatbot support</li>
        </ul>

        <h4>Q3 2024: Customer Focus</h4>
        <ul>
            <li>Introduced loyalty rewards program</li>
            <li>Extended operating hours to 24/7 (airport locations)</li>
            <li>Added free GPS and dashcam to all vehicles</li>
        </ul>

        <h4>Q4 2024: Innovation</h4>
        <ul>
            <li>Launched mobile app (October)</li>
            <li>Piloted digital car key technology</li>
            <li>Partnered with local tourism boards</li>
        </ul>

        <h3>🌟 Most Popular Vehicles of 2024</h3>

        <ol>
            <li><strong>Proton X70</strong> - 3,200 rentals (family road trip favorite!)</li>
            <li><strong>Perodua Myvi</strong> - 2,800 rentals (budget champion)</li>
            <li><strong>Honda City</strong> - 2,100 rentals (business traveler's choice)</li>
            <li><strong>Toyota Avanza</strong> - 1,500 rentals (group trip winner)</li>
            <li><strong>Honda CR-V</strong> - 890 rentals (luxury comfort pick)</li>
        </ol>

        <h3>🗺️ Top Destinations Our Cars Traveled To</h3>

        <ol>
            <li>Penang (George Town) - 4,200 trips</li>
            <li>Cameron Highlands - 2,800 trips</li>
            <li>Langkawi - 1,900 trips</li>
            <li>Melaka - 1,700 trips</li>
            <li>Genting Highlands - 1,400 trips</li>
            <li>Desaru Coast - 980 trips</li>
            <li>Ipoh - 850 trips</li>
        </ol>

        <p>Collectively, our customers drove the equivalent of <strong>80 trips around Earth!</strong> 🌍</p>

        <h3>💚 Sustainability Initiatives</h3>

        <p>We're committed to reducing our environmental impact:</p>
        <ul>
            <li>🌱 Planted 500 trees (one for every 37 rentals)</li>
            <li>♻️ Recycled 2,100 liters of used oil</li>
            <li>💧 Saved 19,000 liters of water with eco-friendly washing</li>
            <li>📱 Went 90% paperless with digital documents</li>
            <li>⚡ Installed solar panels at our main service center</li>
        </ul>

        <h3>🎓 What We Learned</h3>

        <p><strong>From your feedback, we discovered:</strong></p>
        <ul>
            <li>86% of you prefer contactless pickup</li>
            <li>72% book within 48 hours of travel date (last-minute planners!)</li>
            <li>You value vehicle cleanliness over age (thankfully, we excel at both!)</li>
            <li>Weekend rates are your #1 pricing concern (we're working on it!)</li>
        </ul>

        <h3>😊 Customer Stories That Touched Our Hearts</h3>

        <blockquote>
        "Carago saved our wedding day! Our original car broke down, and you delivered a decorated replacement within 2 hours. Forever grateful!" - Aishah & Faiz
        </blockquote>

        <blockquote>
        "I'm a cancer survivor, and your team went above and beyond to make my dream road trip to Langkawi comfortable and memorable. Thank you for your compassion." - Uncle Lee
        </blockquote>

        <blockquote>
        "As a solo female traveler, I felt completely safe with your 24/7 support. The dashcam feature gave me extra peace of mind." - Priya S.
        </blockquote>

        <h3>🚀 Exciting Plans for 2025</h3>

        <h4>Coming in Q1 2025:</h4>
        <ul>
            <li>Electric vehicle fleet launch (BYD Atto 3, Tesla Model 3)</li>
            <li>Third location opening in Johor Bahru</li>
            <li>Subscription-based rental plans (monthly unlimited)</li>
        </ul>

        <h4>Q2 2025 and Beyond:</h4>
        <ul>
            <li>Airport kiosk for instant pickup</li>
            <li>Partner hotels with exclusive packages</li>
            <li>Insurance bundling options</li>
            <li>Multi-language customer support (Chinese, Tamil)</li>
            <li>Referral rewards program</li>
        </ul>

        <h3>🎁 Thank You Gift: Exclusive 2025 Promotion</h3>

        <p>To show our appreciation, enjoy:</p>

        <p><strong>20% OFF your first 2025 booking!</strong><br>
        Use code: <strong>THANKYOU2024</strong><br>
        Valid until: January 31, 2025<br>
        Minimum 2-day rental</p>

        <h3>📣 We're Listening</h3>

        <p>Your feedback drives our improvement. In 2024, we implemented:</p>
        <ul>
            <li>✅ Free car seat add-on (you requested it!)</li>
            <li>✅ Flexible cancellation up to 24 hours</li>
            <li>✅ SMS booking confirmations</li>
            <li>✅ Clearer damage report documentation</li>
        </ul>

        <p><strong>Still want to see something?</strong> Email us at <strong>suggestions@carago.com</strong></p>

        <h3>🤝 Supporting Our Community</h3>

        <p>In 2024, Carago contributed to:</p>
        <ul>
            <li>Flood relief efforts in Kelantan (free vehicle support for aid workers)</li>
            <li>Sponsorship of local sports teams</li>
            <li>Partnerships with universities (student discounts)</li>
            <li>Support for Malaysian tourism recovery</li>
        </ul>

        <h3>👥 Meet Some of Our Amazing Team</h3>

        <p>Behind every smooth rental is our dedicated team:</p>
        <ul>
            <li><strong>Ahmad</strong> - Our top-rated driver/delivery specialist (400+ 5-star reviews!)</li>
            <li><strong>Siti</strong> - Customer service hero (resolved 98% of issues on first contact)</li>
            <li><strong>Kumar</strong> - Lead mechanic (30 years experience, zero tolerance for subpar vehicles)</li>
            <li><strong>Melissa</strong> - Operations manager (somehow keeps everything running perfectly)</li>
        </ul>

        <p>We've grown to a family of 45 employees who share one mission: making your journey unforgettable.</p>

        <h3>🙏 Final Thoughts</h3>

        <p>2024 wasn't without challenges - fuel price hikes, supply chain issues, economic uncertainty. But your trust in Carago never wavered.</p>

        <p>You didn't just rent cars from us. You celebrated milestones, created memories, explored new places, visited loved ones, closed business deals, and lived your lives - and we were honored to be part of it.</p>

        <p>Here's to 2025: more adventures, smoother roads, and even better service.</p>

        <p>Thank you for choosing Carago. Thank you for your patience. Thank you for your loyalty.</p>

        <p><strong>Let's make 2025 our best year yet - together!</strong></p>

        <p>With gratitude,<br>
        <strong>Nik Adil Rifaie & The Entire Carago Team</strong></p>

        <hr>

        <p><em>P.S. - Share your favorite Carago memory from 2024 on social media with #Carago2024 for a chance to win a FREE weekend rental! Winner announced January 15.</em></p>`,
        authorId: 1, // Nik Adil (admin)
        category: "Company News",
        featuredImage: "/customer-assets/img/blog/year-end-2024.jpeg",
        status: "published",
        views: 5678,
        createdAt: "2024-12-31T10:00:00",
        updatedAt: "2024-12-31T10:00:00"
    },
    {
        id: 15,
        title: "Understanding Toll Charges on Malaysian Highways: A Complete Guide",
        excerpt: "Navigate Malaysia's toll roads confidently. Learn about Touch 'n Go, RFID, and how to budget for highway tolls.",
        content: `<p>Malaysia's highway toll system can be confusing for first-time drivers. This guide explains everything you need to know:</p>

        <h3>💳 Payment Methods</h3>

        <h4>1. Touch 'n Go Card (Most Popular)</h4>
        <ul>
            <li>Prepaid card for toll payments</li>
            <li>Available at petrol stations, 7-Eleven, Touch 'n Go kiosks</li>
            <li>Initial card cost: RM10 (refundable)</li>
            <li>Reload amounts: RM20, RM50, RM100, RM200</li>
            <li><strong>Tip:</strong> Keep at least RM50 balance for highway trips</li>
        </ul>

        <h4>2. RFID (Radio Frequency Identification)</h4>
        <ul>
            <li>Sticker on windscreen for cashless toll payment</li>
            <li>Linked to Touch 'n Go eWallet</li>
            <li>Drive through without stopping</li>
            <li>Free RFID tag (available at selected R&R)</li>
            <li><strong>Note:</strong> Not all rental cars are RFID-enabled (Carago is upgrading fleet in 2025)</li>
        </ul>

        <h4>3. SmartTAG</h4>
        <ul>
            <li>In-car device that beeps when passing toll</li>
            <li>Uses Touch 'n Go card inserted in device</li>
            <li>Available in most Carago vehicles</li>
            <li><strong>Remember:</strong> Ensure card is inserted before approaching toll!</li>
        </ul>

        <h4>4. Cash (Being Phased Out)</h4>
        <ul>
            <li>Some tolls still accept cash</li>
            <li>Longer queues, slower process</li>
            <li>Not recommended for regular highway use</li>
        </ul>

        <h3>🛣️ Major Highway Systems & Costs</h3>

        <h4>PLUS Highway (Peninsular Malaysia's Main Network)</h4>

        <p><strong>Popular Routes & Approximate Tolls:</strong></p>

        <table>
        <tr><th>Route</th><th>Distance</th><th>Toll (Class 1)</th></tr>
        <tr><td>KL to Penang</td><td>350 km</td><td>RM54.70</td></tr>
        <tr><td>KL to Johor Bahru</td><td>330 km</td><td>RM51.60</td></tr>
        <tr><td>KL to Ipoh</td><td>200 km</td><td>RM28.90</td></tr>
        <tr><td>KL to Melaka</td><td>150 km</td><td>RM17.10</td></tr>
        <tr><td>KL to Kuantan</td><td>260 km</td><td>RM32.00</td></tr>
        </table>

        <p><em>*Class 1 = Compact cars, sedans</em></p>

        <h4>Other Major Highways:</h4>

        <ul>
            <li><strong>ELITE (KL-Airport-Putrajaya):</strong> RM9.50 full length</li>
            <li><strong>KESAS (Shah Alam-Petaling Jaya):</strong> RM2.50-4.20</li>
            <li><strong>LDP (Damansara-Puchong):</strong> RM2.10-3.90</li>
            <li><strong>SMART Tunnel (KL):</strong> RM2.00-4.00</li>
            <li><strong>Senai-Desaru (JB-Desaru):</strong> RM17.20</li>
        </ul>

        <h3>🚗 Vehicle Classifications</h3>

        <p>Toll rates vary by vehicle class:</p>

        <ul>
            <li><strong>Class 1:</strong> Cars, taxis, vans (Myvi, City, Vios) - <em>Standard rate</em></li>
            <li><strong>Class 2:</strong> Larger MPVs, small trucks (Avanza, CR-V) - <em>+20-40%</em></li>
            <li><strong>Class 3:</strong> Buses, large trucks - <em>+100-200%</em></li>
        </ul>

        <p><strong>Example (KL to Penang):</strong></p>
        <ul>
            <li>Honda City (Class 1): RM54.70</li>
            <li>Proton X70 (Class 2): RM76.60</li>
        </ul>

        <p><em>When booking with Carago, check the vehicle class to budget accordingly.</em></p>

        <h3>💰 Budgeting Tips</h3>

        <h4>Rule of Thumb:</h4>
        <p>For Class 1 vehicles, budget approximately <strong>RM0.15-0.20 per kilometer</strong> on major highways.</p>

        <h4>Sample Trip Budgets (Round Trip, Class 1):</h4>

        <ul>
            <li><strong>KL to Penang:</strong> RM110 tolls + RM180 fuel (600 km @ 17km/L) = <strong>RM290 total</strong></li>
            <li><strong>KL to JB:</strong> RM103 tolls + RM160 fuel (500 km) = <strong>RM263 total</strong></li>
            <li><strong>KL to Cameron Highlands:</strong> RM30 tolls + RM80 fuel (250 km) = <strong>RM110 total</strong></li>
        </ul>

        <h3>📱 Helpful Apps & Tools</h3>

        <h4>1. Touch 'n Go eWallet</h4>
        <ul>
            <li>Check card balance</li>
            <li>Reload via online banking</li>
            <li>Track toll expenses</li>
            <li>Manage RFID account</li>
        </ul>

        <h4>2. Waze / Google Maps</h4>
        <ul>
            <li>Estimates toll costs before you drive</li>
            <li>Shows toll-free alternative routes</li>
            <li>Real-time traffic to avoid jams at toll plazas</li>
        </ul>

        <h4>3. PLUS App</h4>
        <ul>
            <li>Official PLUS highway app</li>
            <li>Rest area (R&R) locations</li>
            <li>Traffic camera feeds</li>
            <li>Roadwork and closure alerts</li>
        </ul>

        <h3>🎟️ Toll-Free Alternatives</h3>

        <p>Want to save money? Use federal roads (but expect slower travel):</p>

        <ul>
            <li><strong>KL to Ipoh:</strong> Federal Route 1 (free, but +2 hours)</li>
            <li><strong>KL to Melaka:</strong> Route 53 via Sepang (free, +1 hour)</li>
            <li><strong>Within KL:</strong> Many city routes have no tolls during off-peak</li>
        </ul>

        <p><em>Note: Fuel savings from highways often offset toll costs due to better efficiency.</em></p>

        <h3>🚨 Common Mistakes to Avoid</h3>

        <ol>
            <li><strong>Insufficient Touch 'n Go balance</strong>
                <ul>
                    <li>Problem: Toll barrier won't open, causes massive jam behind you</li>
                    <li>Solution: Reload at R&R before balance hits RM10</li>
                </ul>
            </li>
            <li><strong>Wrong lane at toll plaza</strong>
                <ul>
                    <li>SmartTAG/RFID lanes: Look for blue signs</li>
                    <li>Touch 'n Go lanes: Orange signs</li>
                    <li>Cash lanes: Green signs (if available)</li>
                </ul>
            </li>
            <li><strong>Driving too fast through SmartTAG</strong>
                <ul>
                    <li>Speed limit: 30 km/h at toll plaza</li>
                    <li>Going too fast may prevent card detection</li>
                </ul>
            </li>
            <li><strong>Lost toll ticket (for open toll systems)</strong>
                <ul>
                    <li>You'll be charged maximum rate from furthest entry point</li>
                    <li>Can cost 3-5x the normal rate!</li>
                </ul>
            </li>
        </ol>

        <h3>🔧 Troubleshooting Common Issues</h3>

        <p><strong>SmartTAG not beeping?</strong></p>
        <ul>
            <li>Check if Touch 'n Go card is inserted correctly</li>
            <li>Verify card has sufficient balance</li>
            <li>Ensure device is plugged into car power</li>
        </ul>

        <p><strong>RFID not detecting?</strong></p>
        <ul>
            <li>Ensure eWallet is linked and has balance</li>
            <li>Drive slowly through RFID lane (max 30 km/h)</li>
            <li>Check if RFID tag is properly affixed to windscreen</li>
        </ul>

        <p><strong>Barrier won't open?</strong></p>
        <ul>
            <li>Don't reverse! (Dangerous and illegal)</li>
            <li>Press intercom button on toll booth</li>
            <li>Staff will assist or open barrier manually</li>
            <li>Have backup cash ready just in case</li>
        </ul>

        <h3>💡 Pro Tips from Carago</h3>

        <ol>
            <li><strong>Travel during off-peak hours</strong> to avoid toll plaza congestion (before 7am or after 10am)</li>
            <li><strong>Use rest areas strategically</strong> - PLUS R&R have petrol, food, restrooms, and Touch 'n Go reload</li>
            <li><strong>Keep toll receipts</strong> if claiming business expenses</li>
            <li><strong>Download offline maps</strong> in case you want to take toll-free routes</li>
            <li><strong>Check for toll promotions</strong> during festive seasons (sometimes 20% off!)</li>
        </ol>

        <h3>📞 Emergency Contacts</h3>

        <ul>
            <li><strong>PLUS Highway Patrol:</strong> 1800-88-0000</li>
            <li><strong>Touch 'n Go Customer Service:</strong> 1300-88-7663</li>
            <li><strong>Carago 24/7 Support:</strong> 03-XXXX-XXXX</li>
        </ul>

        <h3>🎁 Carago Bonus</h3>

        <p>All long-term rentals (7+ days) receive a complimentary Touch 'n Go card with RM30 preloaded balance!</p>

        <p>Happy toll-free driving with Carago!</p>`,
        authorId: 2, // Hana (staff)
        category: "Tips & Guides",
        featuredImage: "/customer-assets/img/blog/toll-guide.webp",
        status: "draft",
        views: 0,
        createdAt: "2025-01-22T16:30:00",
        updatedAt: "2025-01-22T16:30:00"
    }
];

module.exports = blogs;
