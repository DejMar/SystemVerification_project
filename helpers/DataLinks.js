export const comparingLinks = {
    dataPath: '../../SystemVerification_project/data',
    testResultsPath: '../../SystemVerification_project/test-results',
    dataResultsPath: '../../SystemVerification_project/data-results',

    articleFile: 'Articles.json',
    actualArticles: `ArticleInfo_${new Date().toISOString().split('T')[0]}.json`,

    Offerings_File: 'Offerings.json',
    Offerings_ActualLinks: `Offerings_${new Date().toISOString().split('T')[0]}.json`,

    ExperienceQA_File: 'ExperienceQA.json',
    ExperienceQA_ActualLinks: `ExperienceQA_${new Date().toISOString().split('T')[0]}.json`,

    Careers_File: 'Careers.json',
    Careers_ActualLinks: `Careers_${new Date().toISOString().split('T')[0]}.json`,

    About_File: 'About.json',
    About_ActualLinks: `About_${new Date().toISOString().split('T')[0]}.json`
}

export const MenuItems = {
    About: {
        name: 'About',
        subMenus: {
            FindUsAndOurOffices: 'Find us & our offices',
            AboutUsAndOurHistory: 'About us & our history',
            Partners: 'Partners'
        }
    },
    Offerings: {
        name: 'Offerings',
        subMenus: {
            // Add submenus for Offerings if available
            Expertise: 'Expertise',
            Assessments: 'Assessments',
            SubscriptionServices: 'Subscription Services',
            DedicatedTeam: 'Dedicated Team'
        },
        subMenus: {
            Expertise: {
                UserAcceptanceTest: 'User Acceptance Test – UAT',
                ImplementingBusinessSupportSystems: 'Implementing Business Support Systems',
                TestAutomation: 'Test Automation',
                DevOps: 'DevOps',
                FunctionAndIntergrationTest: 'Function and Intergration Test',
                LowCodeAndAITesting: 'Low code and AI testing'
            },
            Assessments: {
                AIGeneratedCodeAnalysis: 'AI generated code analysis',
                TechnicalDueDiligence: 'Technical Due Diligence',
                PerformanceCheck: 'Performance Check',
                HealthCheck: 'Health Check',
                ImprovingDeliveryFlow: 'Improving Delivery Flow'
            },
            SubscriptionServices: {
                SoftwareQualityDashboard: 'Software Quality Dashboard',
                TestAutomationAsAService: 'Test Automation as a Service',
                PerformanceTestAsAService: 'Performance Test as a Service',
                AzureDevOpsAsAService: 'Azure DevOps as a Service'
            },
            DedicatedTeam: {
                Nearshoring: 'Nearshoring',
                ExtendedTeam: 'Extended Team',
                Outsourcing: 'Outsourcing',
                Greenhouse: 'Greenhouse'
            }
        }
    },
    ExperienceQA: {
        name: 'Experience QA',
        subMenus: {
            CustomerCases: 'Customer Cases',
            Industries: 'Industries',
            NewsAndArticles: 'News & Articles',
            Blog: 'Blog',
            Webinars: 'Webinars',
            Technologies: 'Technologies'
        }
    },
    Careers: {
        name: 'Careers',
        subMenus: {
            WorkAtSystemVerification: 'Work at System Verification',
            AUniqueWorkplace: 'A unique workplace',
            TheConsultantRole: 'The Consultant role',
            OpenPositions: 'Open postions'
        }
    },
    Articles: {
        name: 'Articles',
        subMenus: {
            // Add submenus for Articles if available
        }
    }
};