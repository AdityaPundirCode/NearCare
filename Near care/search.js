const cityDetails = {
            Delhi: [
                { name: "Dr. Vaishali Sharma Clinic", location: "Pansheel Park", price: 3000, specialty: "Cardiologist" },
                { name: "Amar Medical Centre", location: "Saket", price: 1200, specialty: "Homoeopath" },
                { name: "Singhal Spine & Fracture Centre", location: "Rohini", price: 1000, specialty: "Orthopedist" },
                { name: "Goels Clinic", location: "South Delhi", price: 1500, specialty: "General Surgeon" },
                { name: "Alive Wellness Clinics", location: "Pansheel Park", price: 2100, specialty: "Dermatologist" },
                { name: "Multispeciality Dental Clinic", location: "Mayur Vihar Ph-III", price: 400, specialty: "Dentist" }
            ],
            Mumbai: [
                { name: "Hair Science Clinic", location: "Andheri", price: 500, specialty: "Dermatologist" },
                { name: "Bright 32 Dental Care & Orthodontic Centre", location: "Kandivali East", price: 500, specialty: "Orthodontist, Cosmetic/Aesthetic Dentist, Dentist" },
                { name: "Goyal Eye Care", location: "Worli", price: 1200, specialty: "Orthodontist" },
                { name: "Suasth One Step Clinic", location: "Peddar Road", price: 3500, specialty: "Psychologist" },
                { name: "Parel Hospital", location: "Parel", price: 1200, specialty: "Spine Surgeon, Dermatologist" },
                { name: "Jawline / Milky Whites Dental Home for Kids", location: "Vileparle West", price: 1000, specialty: "Dentist" }
            ],
            Ghaziabad: [
                { name: "Dr Vishal's Joint Replacement & Sports Injury Centre", location: "Indirapuram", price: 800, specialty: "Orthodontist" },
                { name: "Varenya Clinic", location: "Vasundhara", price: 600, specialty: "dermatologist" },
                { name: "Trikaay Homoeopathy", location: "Indirapuram", price: 700, specialty: "Homoeopath" },
                { name: "ANUGRAHA Urology, Skin, Hair and Laser Clinic", location: "Indirapuram", price: 900, specialty: "Dermatologist, Urologist" },
                { name: "Gautam Clinic Pvt Ltd", location: "Vaishali", price: 700, specialty: "Ayurveda" },
                { name: "Snehita Women's Health Clinic", location: "Raj Nagar Extension", price: 500, specialty: "Gynecologist"}
            ],
            Lucknow: [
                { name: "Hemang Dental Orthodontic & Implant Clinic", location: "Indira Nagar", price: 300, specialty: "Dentist" },
                { name: "Arogya Ayurvedic Chikitsalaya", location: "Niralanagar", price: 500, specialty: "Sexologist" },
                { name: "Charak Hospital", location: "Dubagga", price: 700, specialty: "ENT Specialist" },
                { name: "Ravi Clinic- A Centre of Classical Homeopathy", location: "Indira Nagar", price: 300, specialty: "Homoeopath" },
                { name: "Gopi Krishna Laser Stone Centre", location: "Aliganj", price: 600, specialty: "General Surgeon" },
                { name: "Vardhman Hospital", location: "Aliganj", price: 800, specialty: "Pediatrician, Psychiatrist, Ostetrician" }
            ],
            Bangalore: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            hyderabad: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Kanpur: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Jodhpur: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Jaipur: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Prayagraj: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Indore: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Pune: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Goa: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Chennai: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Vellore: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Thiruvananthapuram: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Ahmedabad: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Kolkata: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Punjab: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Nanital: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ],
            Shimla: [
                { name: "Dr. A", location: "Central Delhi", price: 500, specialty: "Cardiologist" },
                { name: "Dr. B", location: "South Delhi", price: 600, specialty: "Dermatologist" },
            ],
            Patna: [
                { name: "Dr. C", location: "Andheri", price: 700, specialty: "Orthopedic" },
                { name: "Dr. D", location: "Bandra", price: 800, specialty: "ENT Specialist" },
            ]
        };

        const urlParams = new URLSearchParams(window.location.search);
        let city = urlParams.get('query');
        let normalizedCity;
        let cityKey;

        const cityNameElement = document.getElementById('city-name');
        const detailsContainer = document.getElementById('details-container');

        (function() {
            if (!city) {
                cityNameElement.textContent = "Unknown City";
                detailsContainer.innerHTML = "<p>No details available for this city.</p>";
                return;
            }

            normalizedCity = city.trim().toLowerCase();
            cityKey = Object.keys(cityDetails).find(key => key.toLowerCase() === normalizedCity);

            if (cityKey) {
                cityNameElement.textContent = cityKey;

                const details = cityDetails[cityKey];
                if (details && details.length) {
                    details.forEach((detail) => {
                        const card = document.createElement('div');
                        card.className = "card";
                        card.innerHTML = `
    <div class="doctor-info">
        <h3>${detail.name}</h3>
        <p><strong>Location:</strong> ${detail.location}</p>
        <p><strong>Price:</strong> ₹${detail.price}</p>
        <p><strong>Specialty:</strong> ${detail.specialty}</p>
    </div>
    <div class="button-container">
        <button class="book-now">Book Now</button>
    </div>
`;
                        detailsContainer.appendChild(card);
                    });
                } else {
                    detailsContainer.innerHTML = `<p>No doctors are listed for ${cityKey} currently.</p>`;
                }
            } else {
                cityNameElement.textContent = city;
                detailsContainer.innerHTML = "<p>No details available for this city.</p>";
            }
        })();

        console.log('City from query parameter:', city);
        console.log('Normalized city:', normalizedCity);
        console.log('City key in cityDetails:', cityKey);
        console.log('Details for the city:', cityDetails[cityKey]);