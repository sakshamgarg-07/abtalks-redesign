# ABTalks Redesign — AI Workflow & Prompt Log



ABTalks is a 60-day coding challenge platform for Indian college students.

The goal of this redesign was to create a mobile-first experience where students can:

- Understand the 60-day challenge
- Track their coding streak and progress
- Complete daily challenges
- Submit GitHub, LinkedIn and live deployment proof
- Build a public record of their work

## Technology

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React
- Mock JSON/data
- GitHub
- Vercel



AI assistance was used throughout the design and development process for:

1. Understanding the problem statement
2. Planning the information architecture
3. Designing the mobile-first user experience
4. Generating and improving React components
5. Debugging React and routing issues
6. Improving responsive styling
7. Designing realistic mock data
8. Reviewing edge cases
9. Testing the submission flow
10. Preparing the project for GitHub and Vercel deployment



### 1. Mobile design

The primary target viewport is 390px because the brief states that students commonly use the platform on their phones.

The desktop layout was treated as a secondary consideration.

### 2.

A major product idea introduced in this redesign is the Proof Stack.

Instead of treating a streak as only a number, completed challenge days become a visible collection of proof-of-work.

Each completed day can contain:

- GitHub proof
- LinkedIn proof
- Live deployment proof

This turns the 60-day challenge into an accumulating portfolio of work.

### 3. Proof Health

The Challenge Day screen includes a Proof Health indicator.

It dynamically tracks whether the student has supplied:

- GitHub URL
- LinkedIn URL
- Live deployment URL

The state changes from:

0/3 → 1/3 → 2/3 → 3/3

The submission button becomes available only when all required proof is present.

### 4. Streak Recovery

The dashboard does not treat a missed day as the complete loss of progress.

The student can see that their streak was interrupted while their completed projects and overall progress remain.

This is intended to reduce the negative motivation caused by losing a streak after one missed day.

### 5. Submission success state

After submitting all required proof, the student receives a completion state showing:

- Day completion
- XP earned
- Streak information
- Proof submission confirmation
- Link back to the dashboard

## Edge cases considered

The interface was designed with the following real-world cases in mind:

- First day with no streak
- Missed challenge day
- Empty student profile
- Incomplete proof submission
- Completed proof submission

## Routes

The required routes are:

/
/dashboard
/day/12

## AI tools used

AI coding assistance was used through ChatGPT during the project.

The AI was used as a development partner for:

- Planning
- UI/UX decisions
- React implementation
- Debugging
- Code review
- Deployment guidance

All final implementation decisions, testing and project integration were performed by the project team.

## Deployment

The project is deployed using Vercel.

Repository:
https://github.com/sakshamgarg-07/abtalks-redesign

Live deployment:
https://abtalks-redesign-rho.vercel.app/

## Team workflow

The project is maintained in GitHub and collaborators can contribute through the repository.

Changes are tested locally and production builds are verified before deployment.
## Actual Prompt History

The following are representative prompts used during the development of ABTalks:

1. "Build a responsive student-focused landing page for a 60-day coding challenge."

2. "Create a mobile-first dashboard showing streak, challenge progress, today's challenge, projects and badges."

3. "Create a Challenge Day page with GitHub commit, LinkedIn post and live deployment proof fields."

4. "Add proof health that tracks whether all three proof links have been provided."

5. "Make the submission button work only when GitHub, LinkedIn and live deployment URLs are provided."

6. "Help debug the React error caused by the lucide-react GitHub icon."

7. "Make the landing page See How It Works button scroll to the How It Works section."

8. "Help deploy the Vite React project to GitHub and Vercel."

9. "Review the project for missing requirements and edge cases."

10. "Create documentation for the AI-assisted development workflow."