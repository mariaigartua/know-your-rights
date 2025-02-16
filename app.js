const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('🛡️ Rule-Based Legal Rights Chatbot is Running!');
});

app.post('/chatbot', (req, res) => {
    const { asker, question } = req.body;

    if (!asker || !question) {
        return res.status(400).json({ error: 'Missing required fields: asker and question.' });
    }

    const lowerQuestion = question.toLowerCase();
    let response = "I'm sorry, I don't have guidance for that situation.";

    // Rule-based responses
    if (lowerQuestion.includes('search') || lowerQuestion.includes('bag') || lowerQuestion.includes('car')) {
        response = "You have the right to refuse a search unless there's a warrant (4th Amendment). You can say: 'I do not consent to this search.'";
    }

    if (lowerQuestion.includes('immigration') || lowerQuestion.includes('papers')) {
        response = "You have the right to remain silent about your immigration status (5th Amendment). You can say: 'I choose to remain silent.'";
    }

    if (lowerQuestion.includes('id') || lowerQuestion.includes('identification')) {
        response = "In most states, you only have to show ID when driving or if there's reasonable suspicion of a crime.";
    }

    if (lowerQuestion.includes('lawyer') || lowerQuestion.includes('attorney')) {
        response = "You have the right to an attorney if detained (6th Amendment). Say: 'I want to speak to a lawyer.'";
    }

    if (asker === 'Protest Context' || lowerQuestion.includes('protest') || lowerQuestion.includes('demonstration')) {
        response = "You have the right to peacefully protest (1st Amendment). Stay calm, avoid escalation, and record interactions if needed.";
    }

    res.json({ advice: response });
});

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
