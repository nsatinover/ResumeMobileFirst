const coding = [
    'Coding',
    '.NET',
    'C#',
    'Java',
    'TSQL'
]

const testing = [
    'Testing',
    'JUnit',
    'XUnit'
];

const collaboration = [
    'Collaboration',
    'Jira',
    'Version One'
];

const skillsRowOne = [coding, testing, collaboration];

const versioning = [
    'Versioning',
    'TFS',
    'Git Bash'
];

const environment = [
    'Environment',
    'Visual Studio',
    'IntelliJ',
    'VS Code'
];

const additional = [
    'Add.',
    'SSRS',
    'HTML',
    'CSS'
];

const skillsRowTwo = [versioning, environment, additional];


function createListItems(arr) {
    let items = '';

    arr.forEach(innerArr => {
        items += `<ul>`
        items += `<h4>${innerArr.shift()}</h4>`;

        for (let i = 0; i < innerArr.length; i++) {
            items += `<li>${innerArr[i]}</li>`;
        }
        items += `</ul>`
    });

    return items;
}

document.querySelector('#skillsRowOne').innerHTML = `
        ${createListItems(skillsRowOne)}
`;

document.querySelector('#skillsRowTwo').innerHTML = `
        ${createListItems(skillsRowTwo)}
`;