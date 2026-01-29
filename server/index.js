const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock Data
// Mock Data
const events = [
    { id: 1, title: 'Hackathon 2025', date: '2025-03-15', description: 'Annual 24h Hackathon', image: 'https://images.unsplash.com/photo-1504384308090-c54be3855485?q=80&w=600&auto=format&fit=crop' },
    { id: 2, title: 'AI Workshop', date: '2025-04-10', description: 'Intro to GenAI', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop' },
    { id: 3, title: 'Tech Talk: Future', date: '2025-05-20', description: 'Expert insights on future tech', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' },
    { id: 4, title: 'Coding Bootcamp', date: '2025-06-01', description: 'Intensive python course', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=600&auto=format&fit=crop' },
    { id: 5, title: 'Robotics Expo', date: '2025-07-15', description: 'Showcase of student robots', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
    { id: 6, title: 'GitHub Workshop', date: '2025-08-10', description: 'Master Version Control with Git & GitHub.', image: '/images/github_logo.png' }
];

const projects = [
    { id: 1, title: 'Smart Campus', domain: 'IoT', description: 'Automating text messaging', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600&auto=format&fit=crop' },
    { id: 2, title: 'Health AI', domain: 'AI/ML', description: 'Diagnosing diseases early', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop' },
    { id: 3, title: 'EcoTracker', domain: 'App Dev', description: 'Carbon footprint tracking app', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=600&auto=format&fit=crop' },
    { id: 4, title: 'Drone Delivery', domain: 'Robotics', description: 'Autonomous delivery system', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600&auto=format&fit=crop' },
    { id: 5, title: 'BlockVote', domain: 'Blockchain', description: 'Secure voting system', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop' }
];

const members = []; // In-memory store for join requests

// API Routes
app.get('/api/events', (req, res) => {
    res.json(events);
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/join', (req, res) => {
    const { name, email, department, year } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }
    const newMember = { id: members.length + 1, name, email, department, year, joinedAt: new Date() };
    members.push(newMember);
    console.log('New Member Joined:', newMember);
    res.status(201).json({ message: 'Successfully joined IVC!', member: newMember });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
