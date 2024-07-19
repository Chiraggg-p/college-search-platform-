const searchInput = document.getElementById('college-search');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');
const collegeInfo = document.getElementById('college-info');

const colleges = [
    {
        "id": 1,
        "name": "Stanford University",
        "description": "Stanford University is a private research university in Stanford, California.",
        "location": "Stanford, CA"
    },
    {
        "id": 2,
        "name": "Massachusetts Institute of Technology",
        "description": "Massachusetts Institute of Technology[MIT] is a private research university in Cambridge, Massachusetts.",
        "location": "Cambridge, MA"
    },
    {
        "id": 3,
        "name": "Harvard University",
        "description": "Harvard University is a private Ivy League research university in Cambridge, Massachusetts.",
        "location": "Cambridge, MA"
    },
    {
        "id": 4,
        "name": "California Institute of Technology",
        "description": "The California Institute of Technology (Caltech) is a private research university in Pasadena, California.",
        "location": "Pasadena, CA"
    },
    {
        "id": 5,
        "name": "University of California, Berkeley",
        "description": "The University of California, Berkeley (UC Berkeley) is a public research university in Berkeley, California.",
        "location": "Berkeley, CA"
    },

    {
        "id": 6,
        "name": "Guru Gobind Singh Indraprastha University (GGSIPU)",
        "description": "Guru Gobind Singh Indraprastha University (GGSIPU) is a public state university located in Delhi, India. It offers various undergraduate and postgraduate programs.",
        "location": "Delhi, India"
    },
    {
        "id": 7,
        "name": "Guru Tegh Bahadur Institute of Technology (GTBIT)",
        "description": "Guru Tegh Bahadur Institute of Technology (GTBIT) is an engineering college affiliated with Guru Gobind Singh Indraprastha University (GGSIPU) located in Delhi, India.",
        "location": "Delhi, India"
    },
    {
        "id": 8,
        "name": "Maharaja Agrasen Institute of Technology (MAIT)",
        "description": "Maharaja Agrasen Institute of Technology (MAIT) is a private engineering college affiliated with Guru Gobind Singh Indraprastha University (GGSIPU) located in Delhi, India.",
        "location": "Delhi, India"
    },
    {
        "id": 9,
        "name": "Indian Institute of Technology Bombay",
        "description": "IIT Bombay is a public technical and research university located in Powai, Mumbai.",
        "location": "Mumbai, Maharashtra"
    },
    {
        "id": 10,
        "name": "Indian Institute of Technology Delhi",
        "description": "IIT Delhi is a public technical and research university located in Hauz Khas, New Delhi.",
        "location": "New Delhi, Delhi"
    },
    {
        "id": 11,
        "name": "Indian Institute of Technology Madras",
        "description": "IIT Madras is a public technical and research university located in Chennai, Tamil Nadu.",
        "location": "Chennai, Tamil Nadu"
    },
    {
        "id": 12,
        "name": "Indian Institute of Science",
        "description": "The Indian Institute of Science (IISc) is a public research university for higher education and research in science, engineering, design, and management located in Bangalore, Karnataka.",
        "location": "Bangalore, Karnataka"
    },
    {
        "id": 13,
        "name": "Indian Institute of Technology Kharagpur",
        "description": "IIT Kharagpur is a public technical and research university located in Kharagpur, West Bengal.",
        "location": "Kharagpur, West Bengal"
    }


    // Add more colleges to the array
];

searchBtn.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim().toLowerCase();
    if (searchQuery) {
        const filteredColleges = colleges.filter(college => {
            return college.name.toLowerCase().includes(searchQuery) || college.description.toLowerCase().includes(searchQuery);
        });
        const html = filteredColleges.map(college => {
            return `
                <h2>${college.name}</h2>
                <p>${college.description}</p>
                <p>Location: ${college.location}</p>
                <button class="more-info-btn" data-college-id="${college.id}">More Info</button>
            `;
        }).join('');
        searchResults.innerHTML = html;
    }
});