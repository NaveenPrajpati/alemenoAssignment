export const courses = [
    {
        id: 1, // Unique identifier for the course 
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor 
        description: 'Learn the basics of React Native development and build your first mobile app',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail:'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1600', 
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: 2,
        name: "Introduction to React Native",
        instructor: "John Doe",
        description: "Learn the basics of React Native development and build your first mobile app",
        enrollmentStatus: "Close",
        thumbnail: "https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to React Native",
            content: "Overview of React Native, setting up your development environment."
          },
          {
            week: 2,
            topic: "Building Your First App",
            content: "Creating a simple mobile app using React Native components."
          }
        ],
        students: [
          {
            id: 101,
            name: "Alice Johnson",
            email: "alice@example.com"
          },
          {
            id: 102,
            name: "Bob Smith",
            email: "bob@example.com"
          }
        ]
      },
      {
        id: 3,
        name: "Advanced React Native Development",
        instructor: "Jane Smith",
        description: "Take your React Native skills to the next level with advanced topics and project-based learning",
        enrollmentStatus: "In progress",
        thumbnail: "https://images.pexels.com/photos/2208003/pexels-photo-2208003.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: "10 weeks",
        schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: ["Solid understanding of React Native basics", "Experience with building mobile apps"],
        syllabus: [
          {
            week: 1,
            topic: "Advanced State Management",
            content: "Using Redux for state management in complex React Native applications."
          },
          {
            week: 2,
            topic: "Performance Optimization",
            content: "Techniques for optimizing the performance of React Native apps."
          }
        ],
        students: [
          {
            id: 103,
            name: "Charlie Brown",
            email: "charlie@example.com"
          },
          {
            id: 104,
            name: "Daisy Miller",
            email: "daisy@example.com"
          }
        ]
      },
      {
        id: 4,
        name: "Introduction to React Native",
        instructor: "John Doe",
        description: "Learn the basics of React Native development and build your first mobile app",
        enrollmentStatus: "Open",
        thumbnail: "https://images.pexels.com/photos/2208003/pexels-photo-2208003.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
          "Basic JavaScript knowledge",
          "Familiarity with React"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Introduction to React Native",
            content: "Overview of React Native, setting up your development environment."
          },
          // ... (similar structure for other weeks)
          {
            week: 8,
            topic: "Project Development",
            content: "Building a full-fledged project using the skills you've learned."
          }
        ],
        students: [
          {
            id: 101,
            name: "Alice Johnson",
            email: "alice@example.com"
          },
          {
            id: 102,
            name: "Bob Smith",
            email: "bob@example.com"
          },
          // ... (similar structure for other students)
          {
            id: 105,
            name: "Mary Brown",
            email: "mary@example.com"
          }
        ]
      },
      {
        id: 5,
        name: "Advanced React Development",
        instructor: "Jane Doe",
        description: "Take your React skills to the next level by learning advanced concepts and techniques",
        enrollmentStatus: "Closed",
        thumbnail: "https://images.pexels.com/photos/2208003/pexels-photo-2208003.jpeg?auto=compress&cs=tinysrgb&w=1600",
        duration: "6 weeks",
        schedule: "Wednesdays and Fridays, 10:00 AM - 12:00 PM",
        location: "Online",
        prerequisites: [
          "Solid understanding of React fundamentals",
          "Experience with building React applications"
        ],
        syllabus: [
          {
            week: 1,
            topic: "Component Composition and Lifecycle Hooks",
            content: "Exploring advanced component composition techniques and understanding React lifecycle hooks."
          },
          // ... (similar structure for other weeks)
        ],
        // No students for this course (enrollment closed)
      },
  {
    id: 6,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description: "Learn the basics of React Native development and build your first mobile app",
    enrollmentStatus: "Open",
    thumbnail: "https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic JavaScript knowledge",
      "Familiarity with React"
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content: "Overview of React Native, setting up your development environment."
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components."
      }
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com"
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com"
      }
    ]
  },
  {
    id: 7,
    name: "Mastering React",
    instructor: "Jane Doe",
    description: "Take your React skills to the next level by learning advanced concepts and techniques",
    enrollmentStatus: "In Progress",
    thumbnail: "https://i.imgur.com/67890.jpg",
    duration: "12 weeks",
    schedule: "Wednesdays and Fridays, 10:00 AM - 12:00 PM",
    location: "Online",
    prerequisites: [
      "Solid understanding of React fundamentals"
    ],
    syllabus: [
      {
        week: 1,
        topic: "Performance Optimization",
        content: "Learn how to optimize your React apps for performance and scalability."
      },
      {
        week: 2,
        topic: "State Management",
        content: "Master different state management techniques for React applications."
      }
    ],
    students: [
      {
        id: 201,
        name: "Charlie Brown",
        email: "charlie@example.com"
      },
      {
        id: 202,
        name: "David Jones",
        email: "david@example.com"
      }
    ]
  },
  {
    id: 8,
    name: "Node.js for Beginners",
    instructor: "Peter Jones",
    description: "Learn the basics of Node.js and build your first server-side application",
    enrollmentStatus: "Open",
    thumbnail: "https://images.pexels.com/photos/2208003/pexels-photo-2208003.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 2:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of JavaScript"
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Node.js",
        content: "Overview of Node.js, setting up your development environment, and creating your first Node.js application."
      },
    ]
  }
      
  
];

let course = {
    id: 1, // Unique identifier for the course 
    name: 'Introduction to React Native',
    instructor: 'John Doe', // Name of the course instructor 
    description: 'Learn the basics of React Native development and build your first mobile app',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: 'https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=1600', //Link to the course thumbnail 
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
    ],
    students: [
        {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
        {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
        },
        // Additional enrolled students...
    ],
}

