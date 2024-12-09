import { Task, TaskCategory, TaskState } from "./task.model";
import { User } from "./user.model";

export const fakeUsers: User[] = [
  {
    id: "U001",
    name: "Alice Johnson",
    password: "password123",
    email: "alice.johnson@example.com",
  },
  {
    id: "U002",
    name: "Bob Smith",
    password: "securePass456",
    email: "bob.smith@example.com",
  },
  {
    id: "U003",
    name: "Charlie Taylor",
    password: "charlie789",
    email: "charlie.taylor@example.com",
  },
  {
    id: "U004",
    name: "Diana Green",
    password: "diana2024",
    email: "diana.green@example.com",
  },
  {
    id: "U005",
    name: "Emma Davis",
    password: "emma@321",
    email: "emma.davis@example.com",
  },
  {
    id: "U006",
    name: "Frank Wilson",
    password: "frank!999",
    email: "frank.wilson@example.com",
  },
  {
    id: "U007",
    name: "Grace White",
    password: "grace#abc",
    email: "grace.white@example.com",
  },
  {
    id: "U008",
    name: "Henry Moore",
    password: "henry2000",
    email: "henry.moore@example.com",
  },
  {
    id: "U009",
    name: "Ivy Brown",
    password: "ivy-secure",
    email: "ivy.brown@example.com",
  },
  {
    id: "U010",
    name: "Jack Clark",
    password: "jack@777",
    email: "jack.clark@example.com",
  },
];

export const fakeTaskCategories: TaskCategory[] = [
  { name: "Bug", color: "#FF0000" },
  { name: "Feature", color: "#008000" },
  { name: "Improvement", color: "#0000FF" },
  { name: "Documentation", color: "#FFA500" },
  { name: "Testing", color: "#800080" },
  { name: "Research", color: "#00CED1" },
  { name: "Design", color: "#FFC0CB" },
  { name: "Deployment", color: "#A52A2A" },
  { name: "Maintenance", color: "#708090" },
  { name: "Support", color: "#FFD700" },
];

export const fakeTasks = [
    {
      assigneeId: "0RY0r4XrlubHaBV0PTFo6FDXrKI2", 
      assigneeName: "Sarah Smith",
      categoryId: "xMC3Amgk8JLO6p5df7AT", // Bug
      reporterId: "iXrykZX7Q9dAusSUTCJYUoBKfBY2", 
      reporterName: "Testor",
      title: "Enhance login security features",
      description: "Improve the security protocols of the login process to ensure a more secure user experience.",
      state: "DONE",
      startDate: new Date('2024-12-01T08:00:00Z'),
      endDate: new Date('2024-12-01T12:00:00Z'),
      createdAt: new Date('2024-12-01T07:45:00Z')
    },
    {
      assigneeId: "8O9neIbuUZUHVGn882tpwjYaI7w1", 
      assigneeName: "James Wilson",
      categoryId: "3RZjSrGGeSovJStnTVTW", // Deployment
      reporterId: "VLcytYIROvSQxSh1lkCoVtHuF143", 
      reporterName: "John Doe",
      title: "Deploy latest backend update",
      description: "Deploy the latest set of updates to the backend infrastructure for improved performance.",
      state: "DONE",
      startDate: new Date('2024-12-02T09:00:00Z'),
      endDate: new Date('2024-12-02T13:00:00Z'),
      createdAt: new Date('2024-12-02T08:30:00Z')
    },
    {
      assigneeId: "OBSXIzSP1lONHK8a9DApje0cmaX2", 
      assigneeName: "Michael Brown",
      categoryId: "TuzWB2WQdST73J3t1q1k", // Design
      reporterId: "mV2KtjaaXjTvdQL0Hwqrg7byU623", 
      reporterName: "Daniel Clark",
      title: "Design new user dashboard UI",
      description: "Create the wireframes and initial design concepts for the new user dashboard interface.",
      state: "DONE",
      startDate: new Date('2024-12-03T10:00:00Z'),
      endDate: new Date('2024-12-03T14:00:00Z'),
      createdAt: new Date('2024-12-03T09:50:00Z')
    },
    {
      assigneeId: "UXbIFs3xS8XJaZ9ECtuJ2Xje1Ys2", 
      assigneeName: "Olivia Lee",
      categoryId: "KBZb5DA847GaxsByLDmj", // Documentation
      reporterId: "errWpgAOsKaQoUp0OfmfwlygUS92", 
      reporterName: "Emma White",
      title: "Update API documentation for v2",
      description: "Revise and update the API documentation to reflect changes made in version 2.",
      state: "DOING",
      startDate: new Date('2024-12-04T08:30:00Z'),
      endDate: new Date('2024-12-04T12:30:00Z'),
      createdAt: new Date('2024-12-04T08:00:00Z')
    },
    {
      assigneeId: "VLcytYIROvSQxSh1lkCoVtHuF143", 
      assigneeName: "John Doe",
      categoryId: "1qUrBOgMlflIYcAQ4nKE", // Feature
      reporterId: "jBKn4PXLKESC1ktcYPV6Y0FkD7u1", 
      reporterName: "Testo",
      title: "Implement search feature for users",
      description: "Develop and implement a search functionality for users to find other members easily.",
      state: "DONE",
      startDate: new Date('2024-12-05T10:00:00Z'),
      endDate: new Date('2024-12-05T14:00:00Z'),
      createdAt: new Date('2024-12-05T09:45:00Z')
    },
    {
      assigneeId: "errWpgAOsKaQoUp0OfmfwlygUS92", 
      assigneeName: "Emma White",
      categoryId: "QQ23QZlZku5TtLssMVAm", // Improvement
      reporterId: "0RY0r4XrlubHaBV0PTFo6FDXrKI2", 
      reporterName: "Sarah Smith",
      title: "Improve mobile responsiveness for homepage",
      description: "Enhance the homepage design to be fully responsive across all mobile devices.",
      state: "DONE",
      startDate: new Date('2024-12-06T09:00:00Z'),
      endDate: new Date('2024-12-06T13:00:00Z'),
      createdAt: new Date('2024-12-06T08:45:00Z')
    },
    {
      assigneeId: "iXrykZX7Q9dAusSUTCJYUoBKfBY2", 
      assigneeName: "Testor",
      categoryId: "8LA8pPy0U4sL1RZFdEyB", // Maintenance
      reporterId: "8O9neIbuUZUHVGn882tpwjYaI7w1", 
      reporterName: "James Wilson",
      title: "Fix performance issues in the login screen",
      description: "Investigate and fix any performance problems on the login screen that affect user experience.",
      state: "TODO",
      startDate: new Date('2024-12-07T11:00:00Z'),
      endDate: new Date('2024-12-07T15:00:00Z'),
      createdAt: new Date('2024-12-07T10:45:00Z')
    },
    {
      assigneeId: "mV2KtjaaXjTvdQL0Hwqrg7byU623", 
      assigneeName: "Daniel Clark",
      categoryId: "hzISsSXcXFGSL7N36cHI", // Research
      reporterId: "UXbIFs3xS8XJaZ9ECtuJ2Xje1Ys2", 
      reporterName: "Olivia Lee",
      title: "Conduct user research for new feature",
      description: "Gather user feedback and insights to inform the development of the upcoming new feature.",
      state: "IN PROGRESS",
      startDate: new Date('2024-12-08T13:00:00Z'),
      endDate: new Date('2024-12-08T17:00:00Z'),
      createdAt: new Date('2024-12-08T12:30:00Z')
    },
    {
      assigneeId: "8O9neIbuUZUHVGn882tpwjYaI7w1", 
      assigneeName: "James Wilson",
      categoryId: "juArGH6K4EhRgqXC8aov", // Support
      reporterId: "0RY0r4XrlubHaBV0PTFo6FDXrKI2", 
      reporterName: "Sarah Smith",
      title: "Provide technical support for integration issues",
      description: "Assist the integration team with resolving any technical support issues that arise during integration.",
      state: "DONE",
      startDate: new Date('2024-12-09T09:00:00Z'),
      endDate: new Date('2024-12-09T13:00:00Z'),
      createdAt: new Date('2024-12-09T08:45:00Z')
    },
    {
      assigneeId: "8O9neIbuUZUHVGn882tpwjYaI7w1",
      assigneeName: "James Wilson",
      categoryId: "xMC3Amgk8JLO6p5df7AT", // Bug
      reporterId: "iXrykZX7Q9dAusSUTCJYUoBKfBY2",
      reporterName: "Testor",
      title: "Fix intermittent login issue",
      description: "Investigate and resolve the bug causing sporadic login failures for certain users.",
      state: "DONE",
      startDate: new Date('2024-12-05T08:30:00Z'),
      endDate: new Date('2024-12-05T11:30:00Z'),
      createdAt: new Date('2024-12-03T14:00:00Z')
    },
    {
      assigneeId: "errWpgAOsKaQoUp0OfmfwlygUS92",
      assigneeName: "Emma White",
      categoryId: "TuzWB2WQdST73J3t1q1k", // Design
      reporterId: "iXrykZX7Q9dAusSUTCJYUoBKfBY2",
      reporterName: "Testor",
      title: "Redesign the landing page",
      description: "Enhance the visual appeal of the landing page by updating the layout and color scheme.",
      state: "DONE",
      startDate: new Date('2024-12-07T10:00:00Z'),
      endDate: new Date('2024-12-07T15:00:00Z'),
      createdAt: new Date('2024-12-06T12:00:00Z')
    },
    {
      assigneeId: "VLcytYIROvSQxSh1lkCoVtHuF143",
      assigneeName: "John Doe",
      categoryId: "KBZb5DA847GaxsByLDmj", // Documentation
      reporterId: "iXrykZX7Q9dAusSUTCJYUoBKfBY2",
      reporterName: "Testor",
      title: "Update API documentation",
      description: "Ensure that the API documentation is accurate and includes examples for all endpoints.",
      state: "DOING",
      startDate: new Date('2024-12-10T09:00:00Z'),
      endDate: new Date('2024-12-10T17:00:00Z'),
      createdAt: new Date('2024-12-09T10:00:00Z')
    },
    {
      assigneeId: "UXbIFs3xS8XJaZ9ECtuJ2Xje1Ys2",
      assigneeName: "Olivia Lee",
      categoryId: "8LA8pPy0U4sL1RZFdEyB", // Maintenance
      reporterId: "iXrykZX7Q9dAusSUTCJYUoBKfBY2",
      reporterName: "Testor",
      title: "Optimize database performance",
      description: "Improve query efficiency and database indexing to enhance application performance.",
      state: "TODO",
      startDate: new Date('2024-12-12T11:00:00Z'),
      endDate: new Date('2024-12-12T15:00:00Z'),
      createdAt: new Date('2024-12-10T16:00:00Z')
    }
  ];

