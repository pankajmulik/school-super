const menu = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        childrens: [
            {
                title: "Principal Desk",
                path: "/PrincipalDesk",
            },
            {
                title: "whySuperSchool",
                path: "/WhySuperSchool",
            },
            {
                title: "Our Vision & Mission",
                path: "/OurVisionMission",
            },
            {
                title: "Achievements",
                // childrens: [
                //     {
                //         title: "StudentAchievements",
                //         path: "/StudentAchievements",
                //     },
                //     {
                //         title: "SchoolAchievements",
                //         path: "/SchoolAchievements",
                //     },
                // ],
                path: "/Achievements",
            },
            {
                title: "Co-curriculum Activity",
                path: "/CoCurriculumActivity",
            },
        ],
    },
    {
        title: "Academics",
        childrens: [
            {
                title: "Courses",
                path: "/courses",
            },
            {
                title: "Faculty & Staff",
                path: "/faculty-staff",
            },
            {
                title: "School Amenties",
                path: "/school-amenties",
            },
            {
                title: "Calender & Events",
                path: "/calender-events",
            },
        ],
    },
    {
        title: "Admission",
        path:'/admission'
        // childrens: [
        //     {
        //         title: "Admission Process",
        //         path: "/admission-process",
        //     },
        //     {
        //         title: "Fee Structure",
        //         path: "/fee-structure",
        //     },
        //     {
        //         title: "Parent Referral Program",
        //         path: "/parent-referral-program",
        //     },
        //     {
        //         title: "FAQs",
        //         path: "/faqs",
        //     },
        // ],
    },
    {
        title: "Contact Us",
        path: "/contact-us",
    },
    {
        title: "News & Media",
        childrens: [
            {
                title: "News",
                path: "/news",
            },
            {
                title: "Blogs",
                path: "/blogs",
            },
            // {
            //     title: "Awards",
            //     path: "/awards",
            // },
            // {
            //     title: "In the News",
            //     path: "/parent-referral-program",
            // },
        ],
    },
]

export default menu;