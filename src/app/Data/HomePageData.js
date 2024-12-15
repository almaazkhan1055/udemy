export const HomePageData = {
  header: {
    logo: (
      <svg
        viewBox="0 0 91 34"
        fill="none"
        className="size-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.025 0l7.026 4.056v4.056h-.001z"
          fill="#A435F0"
        />
        <path
          d="M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.763v-9.245zM45.866 22.63c-1.114.992-2.383 1.478-3.83 1.478-2.64 0-4.41-1.504-4.61-3.833h11.89s.08-.752.08-1.458c0-2.19-.7-4.015-2.13-5.505-1.398-1.49-3.222-2.22-5.443-2.22-2.341 0-4.258.73-5.779 2.22-1.49 1.49-2.25 3.436-2.25 5.87v.12c0 2.403.76 4.319 2.25 5.749 1.49 1.429 3.467 2.159 5.87 2.159 2.794 0 5.017-1.102 6.685-3.002l-2.733-1.578zm-6.994-7.463c.82-.639 1.825-.973 2.95-.973 1.064 0 1.946.334 2.707 1.004.726.61 1.118 1.359 1.152 2.22H37.52c.118-.89.568-1.64 1.353-2.25zM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8v-3.262h1.342c.824 0 1.59-.31 2.32-1.994l.73-1.686-6.296-15.54h3.741l4.471 11.192 4.593-11.192h3.74l-7.53 17.758zM28.377 5.649v7.257c-1.206-1.08-3.082-1.723-4.896-1.723-2.16 0-3.984.76-5.474 2.31-1.46 1.521-2.19 3.406-2.19 5.687 0 2.282.73 4.167 2.19 5.718 1.49 1.521 3.315 2.282 5.474 2.282 2.49 0 4.064-.979 4.896-1.746v1.411h3.65V5.65h-3.65zm-1.095 16.878c-.882.882-2.007 1.339-3.315 1.339-1.308 0-2.372-.457-3.254-1.339-.85-.882-1.277-2.007-1.277-3.345 0-1.339.426-2.464 1.277-3.346.882-.882 1.946-1.338 3.254-1.338s2.433.456 3.315 1.338c.912.882 1.37 2.007 1.37 3.346 0 1.338-.458 2.463-1.37 3.345zM68.222 11.214c-2.772 0-4.213 1.15-5.2 2.258-.395-.753-1.507-2.258-4.105-2.258-2.196 0-3.49 1.11-4.136 1.9V11.52h-3.618v15.327h3.618v-8.82c0-2.068 1.278-3.558 2.98-3.558 1.735 0 2.738 1.308 2.738 3.406v8.971h3.619v-8.82c0-2.098 1.246-3.558 3.04-3.558 1.734 0 2.737 1.308 2.737 3.405v8.972h3.65v-9.488c0-3.996-2.148-6.142-5.323-6.142z"
          fill="#000"
        />
      </svg>
    ),
    input: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
    links: [
      {
        name: "Explore",
        url: "/explore",
      },
      {
        name: "Plans & Pricing",
        url: "/pricing",
      },
      {
        name: "Udemy Business",
        url: "/business",
      },
      {
        name: "Teach on Udemy",
        url: "/teach",
      },
      {
        name: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        ),
        url: "/cart",
      },
    ],
    menu: {
      title: "Browse Certifications",
      categories: [
        {
          name: "Certification preparation",
          url: "/certifications",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Development",
          url: "/development",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Business",
          url: "/business",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Finance & Accounting",
          url: "/finance-accounting",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "IT & Software",
          url: "/it-software",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Office Productivity",
          url: "/office-productivity",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Personal Development",
          url: "/personal-development",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Design",
          url: "/design",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Marketing",
          url: "/marketing",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Lifestyle",
          url: "/lifestyle",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Photography & Video",
          url: "/photography-video",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Health & Fitness",
          url: "/health-fitness",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Music",
          url: "/music",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
        {
          name: "Teaching & Academics",
          url: "/teaching-academics",
          subcategories: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Programming Languages",
            "Game Development",
            "Database Design & Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
          ],
        },
      ],
      popularTopics: [
        "JavaScript",
        "React JS",
        "Angular",
        "CSS",
        "Next.js",
        "HTML",
        "Node.js",
        "ASP.NET Core",
      ],
    },
    userOptions: [
      {
        name: "Log in",
        url: "/login",
      },
      {
        name: "Sign up",
        url: "/signup",
      },
    ],
    languageSelector: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      options: ["English", "Español", "Français", "Deutsch", "中文"],
    },
  },
  carousel: [
    "https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
    "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
  ],
  sliderbanner: [
    {
      heading: "Learning that gets you",
      description:
        "Skills for your present (and your future). Get started with us..",
    },
    {
      heading: "Skills that drive you forward",
      description:
        "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
    },
  ],
  courseList: {
    heading: "All the skills you need in one place",
    desc: "From critical skills to technical topics, Udemy supports your professional development.",
    tabsData: [
      {
        name: "Data Science",
        topics: [
          {
            name: "ChatGPT",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Ai Powered Guide",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Masterclass",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT & Gemini",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT For Data Science",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Mastering SEO With ChatGpt",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Science",
            totalLearners: "7M",
            courses: [
              {
                name: "Data Science Course",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python For Data Science",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "R Programming A-Z",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Data Science A-Z",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Data Science Machine Learning",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Complete A.I & Machine Learning",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Python",
            totalLearners: "46.6M",
            courses: [
              {
                name: "Complete Python Bootcamp",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "100 days of Code",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Automate the Boring Stuff",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python For Data Science",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Master Programming",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python Programming",
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Machine Learning",
            totalLearners: "8M",
            courses: [
              {
                name: "Machine Learning A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning Python",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning & Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Complete Machine Learning Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Machine Learning with R Studio",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Deep Learning",
            totalLearners: "2M",
            courses: [
              {
                name: "Deep Learning Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Deep Learning A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Python Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Tensorflow 2.0 Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Data Science : Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Advanced AI Deep Reinforcement",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Artificial Intellengence (AI)",
            totalLearners: "3M",
            courses: [
              {
                name: "Artificial Intellengence (AI) Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Artificial Intellengence (AI) A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Artificial Intellengence (AI) Reinforcement",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Beginner Guide Artificial Intellengence (AI)",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Artificial Intellengence (AI) Modern",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Anyword Ai",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Statistics",
            totalLearners: "1M",
            courses: [
              {
                name: "Statistics Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics for Data Science",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Probablity & Statistics",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics for Business Analytics",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics & Hypothesis Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Statistics A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Natural Language Processing (NLP)",
            totalLearners: "791200",
            courses: [
              {
                name: "Natural Language Processing (NLP) Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) Modern",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) Python",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Natural Language Processing (NLP) & Deep Learning",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Natural Language Processing (NLP) Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "IT Certifications",
        topics: [
          {
            name: "Amazon AWS",
            totalLearners: "4M",
            courses: [
              {
                name: "Amazon AWS Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS A-Z",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS Cloud",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS Certifications Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS Cloud Practitioner",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "Amazon AWS API's",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AWS Certified Cloud Practitioner",
            totalLearners: "2M",
            courses: [
              {
                name: "AWS Certified Cloud Practitioner Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "AWS Certified Cloud Practitioner Exam Training",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "AWS Certified Cloud Practitioner 2024",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "AWS Certified Cloud Practitioner Certifications",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AZ-900: Microsoft Azure Fundamentals",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AWS Certified Solutions Architect - Associate",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Kubernetes",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "AWS Certified Developer - Associate",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Cisco Certified Network Associate (CCNA)",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "CompTIA Security+",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Leadership",
        topics: [
          {
            name: "Leadership",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Management Skills",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Project Management",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Personal Productivity",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Emotional Intelligence",
            totalLearners: "987,000",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Digital Transformation",
            totalLearners: "356,900",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Strategy",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Conflict Management",
            totalLearners: "243,600",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Web Development",
        topics: [
          {
            name: "Web Development",
            totalLearners: "13.3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "JavaScript",
            totalLearners: "17.7M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "React JS",
            totalLearners: "8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Angular",
            totalLearners: "4M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Java",
            totalLearners: "15.5M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Android Development",
            totalLearners: "8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "iOS Development",
            totalLearners: "4M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "CSS",
            totalLearners: "9M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Communication",
        topics: [
          {
            name: "Communication Skills",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Presentation Skills",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Public Speaking",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Writing",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "PowerPoint",
            totalLearners: "2M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Communication",
            totalLearners: "396,300",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Writing",
            totalLearners: "278,700",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
      {
        name: "Business Analytics & Intelligence",
        topics: [
          {
            name: "Microsoft Excel",
            totalLearners: "18.8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "SQL",
            totalLearners: "8M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Microsoft Power BI",
            totalLearners: "4M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Analysis",
            totalLearners: "3M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Business Analysis",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Tableau",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Visualization",
            totalLearners: "1M",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
          {
            name: "Data Modeling",
            totalLearners: "555,600",
            courses: [
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
              {
                name: "ChatGPT Complete Guide",
                tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
                image:
                  "https://img-c.udemycdn.com/course/240x135/5170404_d282_9.jpg",
                rating: "4.5",
                buyers: "41,388",
                price: "2,699",
                tag: "BestSeller",
              },
            ],
          },
        ],
      },
    ],
  },
  testimonials: {
    heading:
      "Trusted by over 16,000 companies and millions of learners around the world",
    brands: [
      "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
      "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
      "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
      "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
      "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
      "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
      "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
      "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
    ],
  },
  WhatWeOffer: {
    heading: "Learning focused on your goals",
    offers: [
      {
        title: "Hands-on training",
        desc: "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
        sticker:
          "https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png",
      },
      {
        title: "Certification prep",
        desc: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
        sticker:
          "https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png",
        explore: "Explore Our Courses",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/133c991fb3b3f1f93a3e842f4baa7f44/desktop-certification-prep-2x.png",
      },
      {
        title: "Insights and analytics",
        desc: "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
        sticker:
          "https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png",
        enterprise: "Enterprise Plan",
        explore: "Find out More",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/6q4N9BvIQusFoheoALJhGj/678c1a0bb6c2a22d95461d409492231e/desktop-insights-and-analytics-2x.png",
      },
      {
        title: "Customizable content",
        desc: "Create tailored learning paths for team and organization goals and even host your own content and resources.",
        sticker:
          "https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png",
        explore: "Find out More",
        enterprise: "Enterprise Plan",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png",
      },
    ],
  },
  plans: {
    heading: "Accelerate growth — for you or your organization",
    desc: "Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.",
    planCards: [
      {
        name: "Personal Plan",
        audience: "For you",
        details: "Individual",
        price: "Starting at ₹850 per month",
        billing: "Billed monthly or annually. Cancel anytime.",
        btnText: "Start Subscription",
        features: [
          "Access to 12,000+ top courses",
          "Certification prep",
          "Goal-focused recommendations",
          "AI-powered coding exercises",
        ],
      },
      {
        name: "Team Plan",
        audience: "For your team",
        details: "2 to 20 people",
        price: "₹1,167 a month per user",
        billing: "Billed annually. Cancel anytime.",
        btnText: "Start Subscription",
        features: [
          "Access to 12,000+ top courses",
          "Certification prep",
          "Goal-focused recommendations",
          "AI-powered coding exercises",
          "Analytics and adoption reports",
        ],
      },
      {
        name: "Enterprise Plan",
        audience: "For your whole organization",
        details: "More than 20 people",
        price: "Contact sales for pricing",
        billing: null,
        btnText: "Request a Demo",
        features: [
          "Access to 27,000+ top courses",
          "Certification prep",
          "Goal-focused recommendations",
          "AI-powered coding exercises",
          "Advanced analytics and insights",
          "Dedicated customer success team",
          "International course collection featuring 15 languages",
          "Customizable content",
          "Hands-on tech training with add-on",
          "Strategic implementation services with add-on",
        ],
      },
    ],
  },
  reviews: {
    heading: "See what others are achieving through learning",
    reviewCards: [
      {
        review:
          "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg",
        about: "37,076 responses collected",
        link: {
          name: "View Web Development courses",
          href: "#",
        },
      },
      {
        review:
          "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
        name: "Alvin Lim",
        about: "Technical Co-Founder, CTO at Dimensional",
        link: {
          name: "View this iOS & Swift course",
          href: "#",
        },
      },
      {
        review:
          "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg",
        name: "William A. Wachlin",
        about: "Partner Account Manager at Amazon Web Services",
        link: {
          name: "View this AWS course",
          href: "#",
        },
      },
      {
        review:
          "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
        img: "https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png",
        name: "Ian Stevens",
        about:
          "Head of Capability Development, North America at Publicis Sapient",
        link: {
          name: "Read full story",
          href: "#",
        },
      },
    ],
  },
  trending: {
    heading: "Top trends for the future of work",
    desc: "Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace with change.",
    btn: "Get the report",
    img: "https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png",
  },
  topTrending: {
    heading: "Trending Now",
    cards: [
      {
        title: "ChatGPT is a top skill",
        courses: [
          {
            name: "See ChatGPT courses",
            learners: "3,864,279",
            btn: "Show all trending skills",
          },
        ],
      },
      {
        title: "Development",
        courses: [
          {
            name: "Python",
            learners: "46,596,587",
          },
          {
            name: "Web Development",
            learners: "13,781,259",
          },
          {
            name: "Data Science",
            learners: "7,566,437",
          },
        ],
      },
      {
        title: "Design",
        courses: [
          {
            name: "Blender",
            learners: "2,814,226",
          },
          {
            name: "Graphic Design",
            learners: "4,408,781",
          },
          {
            name: "User Experience (UX) Design",
            learners: "2,026,710",
          },
        ],
      },
      {
        title: "Business",
        courses: [
          {
            name: "PMI Project Management Professional (PMP)",
            learners: "2,446,253",
          },
          {
            name: "Microsoft Power BI",
            learners: "4,415,631",
          },
          {
            name: "Project Management",
            learners: "3,818,974",
          },
        ],
      },
    ],
  },
  viewersFav: {
    heading: "Learners are viewing",
    courses: [
      {
        name: "React- The Complete Guide 2024",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
        rating: "4.6",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Moder React with Redux 2024",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg",
        rating: "4.9",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Complete React Js Course",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/3033196_e7f4_3.jpg",
        rating: "4.7",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "React Basics in 1 hour",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/837094_75da_2.jpg",
        rating: "4.5",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Complete React Developer",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/2365628_0b60_9.jpg",
        rating: "4.9",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "The Ultimate React Course",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/4471614_361e_8.jpg",
        rating: "4.6",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "React Js Crash course",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/4774346_6916_2.jpg",
        rating: "4.9",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Node with React",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/1254420_f6cb_4.jpg",
        rating: "4.6",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "React- The Complete Guide 2024",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
        rating: "4.6",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Moder React with Redux 2024",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg",
        rating: "4.9",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Complete React Js Course",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/3033196_e7f4_3.jpg",
        rating: "4.7",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "React Basics in 1 hour",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/837094_75da_2.jpg",
        rating: "4.5",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Complete React Developer",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/2365628_0b60_9.jpg",
        rating: "4.9",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "The Ultimate React Course",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/4471614_361e_8.jpg",
        rating: "4.6",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "React Js Crash course",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/4774346_6916_2.jpg",
        rating: "4.9",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
      {
        name: "Node with React",
        tutor: ["Kalim khan", "Talib chowdhary", "Aftab Khan"],
        image: "https://img-c.udemycdn.com/course/240x135/1254420_f6cb_4.jpg",
        rating: "4.6",
        buyers: "41,388",
        price: "2,699",
        tag: "BestSeller",
      },
    ],
  },
  article: [
    {
      articleCard: {
        img: "https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals",
        logo: "https://cms-images.udemycdn.com/96883mtakkm8/5V0hDnhhh2fSRa52V5cSEo/bde951fca77bf8b4f8010a60679b4ce4/logo-boozallenhamilton-2.svg",
        heading:
          "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
        acheivements: [
          {
            percent: "93%",
            desc: "retention rate among participating employees",
          },
          {
            percent: "65%",
            desc: "of learners noted a positive impact on their productivity",
          },
        ],
        btn: "Read full story",
      },
    },
    {
      articleCard: {
        img: "https://cms-images.udemycdn.com/96883mtakkm8/3tdKdJqRtZAyDDmdZR3qGV/eaf1d940743664c58edc9260842498d7/capitalone-2x.png",
        logo: "https://cms-images.udemycdn.com/96883mtakkm8/4xxiw3L8tPFq9If2UpielM/44483c55e7e23bd33472d30fa122982d/logo-capitalone-2.svg",
        heading:
          "Capital One Accelerates Transformational Learning through Udemy Business",
        acheivements: [
          {
            percent: "95%",
            desc: "of learners rated Udemy as “very helpful” to their success",
          },
          {
            percent: "65%",
            desc: "increase in retention for in-demand tech roles",
          },
        ],
        btn: "Read full story",
      },
    },
    {
      articleCard: {
        img: "https://cms-images.udemycdn.com/96883mtakkm8/2OmbIN8MOcdVxDzlqQz4Dc/3471754f5a5f41a7f1c49f05ecfaa4b8/eventbrite-2x.png",
        logo: "https://cms-images.udemycdn.com/96883mtakkm8/7t3OTcocacVyt6MzWIMtZT/9e7032d7afda76eaa05a30950af8035f/logo-eventbrite-1.svg",
        heading:
          "Eventbrite Navigates Change Through Skill-Building and Leadership Development",
        acheivements: [
          {
            percent: "4,800+",
            desc: "increase in employee enrollments for professional development courses",
          },
          {
            percent: "65%",
            desc: "revenue growth supported by a business model backed by learning",
          },
        ],
        btn: "Read full story",
      },
    },
    {
      articleCard: {
        img: "https://cms-images.udemycdn.com/96883mtakkm8/2BWi1GI2khQbIOymlyEhzB/673c2d81fe7c9314d0673e42e666f2b9/toyota-2x.png",
        logo: "https://cms-images.udemycdn.com/96883mtakkm8/3rU6Qg7IG5NO7SCObXcMvq/80c5abf606ffa38350717a0eec38e933/logo-toyota-1.svg",
        heading:
          "Toyota Tsusho Enhances its L&D Program to Improve Employee Outcomes",
        acheivements: [
          {
            percent: "50%",
            desc: "training cost reduction per person",
          },
          {
            percent: "+7,000",
            desc: "hours of upskilling",
          },
        ],
        btn: "Read full story",
      },
    },
  ],
  footer: {
    footer1: {
      heading:
        "Top companies choose Udemy Business to build in-demand career skills.",
      img: [
        "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
        "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg",
        "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
        "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
        "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
      ],
    },
    footer2: {
      categories: {
        title: "Explore Top Skills and Certifications",
        cards1: [
          {
            title: "Certifications by Issuer",
            items: [
              "Amazon Web Services (AWS) Certifications",
              "Six Sigma Certifications",
              "Microsoft Certifications",
              "Cisco Certifications",
              "Tableau Certifications",
              "See all Certifications",
            ],
          },
          {
            title: "Web Development",
            items: [
              "Web Development",
              "JavaScript",
              "React JS",
              "Angular",
              "Java",
            ],
          },
          {
            title: "IT Certifications",
            items: [
              "Amazon AWS",
              "AWS Certified Cloud Practitioner",
              "AZ-900: Microsoft Azure Fundamentals",
              "AWS Certified Solutions Architect - Associate",
              "Kubernetes",
            ],
          },
          {
            title: "Leadership",
            items: [
              "Leadership",
              "Management Skills",
              "Project Management",
              "Personal Productivity",
              "Emotional Intelligence",
            ],
          },
          {
            title: "Certifications by Skill",
            items: [
              "Cybersecurity Certification",
              "Project Management Certification",
              "Cloud Certification",
              "Data Analytics Certification",
              "HR Management Certification",
              "See all Certifications",
            ],
          },
          {
            title: "Data Science",
            items: [
              "Data Science",
              "Python",
              "Machine Learning",
              "ChatGPT",
              "Deep Learning",
            ],
          },
          {
            title: "Communication",
            items: [
              "Communication Skills",
              "Presentation Skills",
              "Public Speaking",
              "Writing",
              "PowerPoint",
            ],
          },
          {
            title: "Business Analytics & Intelligence",
            items: [
              "Microsoft Excel",
              "SQL",
              "Microsoft Power BI",
              "Data Analysis",
              "Business Analysis",
            ],
          },
        ],
        cards2: [
          {
            title: "About",
            items: ["About us", "Careers", "Contact us", "Blog", "Investors"],
          },
          {
            title: "Discovery Udemy",
            items: [
              "Get the app",
              "Teach on Udemy",
              "Plans and Pricing",
              "Affiliate",
              "Help and Support",
              "Udemy for Business",
            ],
          },
          {
            title: "Udemy for Business",
            items: ["Udemy Business"],
          },
          {
            title: "Legal & Accessibility",
            items: [
              "Accessibility statement",
              "Privacy policy",
              "Sitemap",
              "Terms",
            ],
          },
        ],
      },
    },
    footer3: {
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg",
      links: ["© 2024 Udemy, Inc.", "cookie settings", "English"],
    },
  },
};
