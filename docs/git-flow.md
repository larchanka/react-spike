[Back to documentation's list](./)

# The Flow

We are working with a branching model for Git. It has attracted a lot of attention because it is very well suited to collaboration and scaling the development team.

# Key Benefits

- Parallel Development
- Collaboration
- Release Staging Area
- Support For Emergency Fixes

# Branches

Tha main branch is **master**. All other branches should be created based on **master**.

#### Naming

Feature branches: [feature/]
Spike branches: [chore/]
Hotfix branches: [hotfix/]

# Commits

Every commit should start from the Jira task code, i.e. `GWT-2244: text of the commit`. It allows to recognise the story behind this commit.

# Pull requests

Every pull request should include describtion (probably copied from the jira task), and list of changes and tested browsers, i.e.

```markdown
#### Added
- [x] js/jsx
- [x] scss
- [x] unit-tests
- [ ] selenium-tests

#### Added Translations
- [ ] NL
- [ ] EN
- [ ] DE

#### Tested
- [x] Chrome
- [x] Safari
- [ ] Firefox
- [ ] IE 10
- [ ] IE 11
- [x] Edge
- [ ] Opera
- [ ] iOS Safari
- [ ] iOS Chrome
- [ ] Android Firefox
- [ ] Android Browser
- [ ] Android Chrome
- [ ] Opera Mini

#### Misc

- [ ] Tested UX of affected UI changes
```
