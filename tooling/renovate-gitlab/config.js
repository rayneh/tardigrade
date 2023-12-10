module.exports = {
    "extends": ["config:base", ":dependencyDashboard"],
    "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
    "platform": "gitlab",
    "endpoint": "https://gitlab.com/api/v4/",
    "repositories": [
        "constellation-hackathon-2023/common-config",
    ],
    "groupName": "all dependencies",
    "groupSlug": "dependency-updates",
    "lockFileMaintenance": {
        "enabled": false
    },
    "separateMajorMinor": false,
    "branchPrefix": "feature/",
    "commitMessagePrefix": "feat(dependency-update):",
    "onboarding": true,
    "onboardingBranch": "feature/renovate-onboarding",
    "onboardingCommitMessage": "Add configuration for renovate",
    "onboardingPrTitle": "Add configuration for renovate",
    "optimizeForDisabled": true,
    "labels": ["Renovate"],
    "dependencyDashboardLabels": ["Renovate"],
    "dependencyDashboardTitle": "The outdated dependencies found by renovate are updated",
    "dependencyDashboardAutoclose": true,
    "assignees": [
        "@raynn",
        "@GiraeffleAeffle"
    ],
    "reviewers": [
        "@raynn",
        "@GiraeffleAeffle"
    ],
    "baseBranches": ["main"],
    "semanticCommits": "false",
    "hostRules": [
        {
            "matchHost": "gitlab.com",
            "hostType": "ansible",
            "username": process.env.RENOVATE_USERNAME,
            "password": process.env.RENOVATE_TOKEN
        },
        {
            "matchHost": "registry.gitlab.com",
            "username": process.env.RENOVATE_USERNAME,
            "password": process.env.RENOVATE_TOKEN
        },
        {
            "baseUrl": "https://artifactory.gitlab.com",
            "username": process.env.ARTIFACTORY_SERVICE_ACCOUNT_NAME,
            "password": process.env.ARTIFACTORY_SERVICE_ACCOUNT_PASSWORD
        }
    ]
}
