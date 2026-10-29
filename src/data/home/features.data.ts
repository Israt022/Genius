export type FeatureSectionData = {
    id: string;
    badge: string;
    heading: string;
    description: string;
    benefits: string[];
    image: {
        src: string;
        alt: string;
        position?: string;
    };
    imageSide?: "left" | "right";
};

export const featuresData: FeatureSectionData[] = [
    {
        id: "biometrics",
        badge: "AI Face Biometrics",
        heading: "AI Face Biometric",
        description:
            "Grow your eCommerce business with custom solutions and streamlined order processing. Start your success story today!",
        benefits: ["Authentication", "Secure", "Cloud System"],
        image: {
            src: "/assets/home/face-biometric.png",
            alt: "AI face biometric verification interface",
            position: "center",
        },
        imageSide: "right",
    },
    {
        id: "attendance",
        badge: "Attendance Management",
        heading: "Realtime and Easy",
        description:
            "Track employee attendance in real time with a simple, reliable system. Manage presence, overtime, and leave requests from one place.",
        benefits: [
            "Online presence",
            "Overtime request",
            "Leave request",
        ],
        image: {
            src: "/assets/home/attendance.png",
            alt: "Employee attendance management mobile interface",
            position: "center",
        },
        imageSide: "left",
    },
    {
        id: "payroll",
        badge: "Payroll Management",
        heading: "Payroll Made Simple",
        description:
            "Simplify payroll processing and give your team convenient access to their salary information and payslips.",
        benefits: [
            "Automated payroll",
            "Digital payslips",
            "Salary reports",
        ],
        image: {
            src: "/assets/home/payroll.png",
            alt: "Employee payroll and digital payslip interface",
            position: "center",
        },
        imageSide: "right",
    },
];