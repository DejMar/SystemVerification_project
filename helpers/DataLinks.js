
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
        }
    },
    ExperienceQA: {
        name: 'Experience QA',
        subMenus: {
            // Add submenus for Experience QA if available
        }
    },
    Careers: {
        name: 'Careers',
        subMenus: {
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

