import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.send(true);
});

app.post('/submit', (req, res) => {
    const { Name, Email, Phone, GithubLink, StopwatchTime } = req.body;
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
    data.submissions.push({ Name, Email, Phone, GithubLink, StopwatchTime });
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data));
    res.send({ success: true });
});


app.get('/read', (req, res) => {
    try {
        const indexParam = req.query.index;
        
        // Check if index is undefined
        if (indexParam === undefined) {
            console.log("Index parameter is missing");
            return res.status(400).send({ error: "Index parameter is missing" });
        }

        // Convert index to string and parse it as an integer
        const index = parseInt(indexParam as string, 10);

        // Check if index is a valid number
        if (isNaN(index)) {
            console.log("Invalid index:", indexParam);
            return res.status(400).send({ error: "Invalid index" });
        }

        const dataPath = path.join(__dirname, 'db.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

        // Log the data to ensure it is read correctly
        console.log("Data:", data);

        if (Array.isArray(data.submissions) && index >= 0 && index < data.submissions.length) {
            res.send(data.submissions[index]);
        } else {
            console.log("Submission not found. Index:", index);
            res.status(404).send({ error: "Submission not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});

app.get('/submissions', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
    res.send(data.submissions);
});

app.delete('/submissions/:index', (req, res) => {
    try {
        const index = parseInt(req.params.index, 10);
        const dataPath = path.join(__dirname, 'db.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

        console.log('Deleting submission at index:', index);
        console.log('Current submissions:', data.submissions);

        if (index >= 0 && index < data.submissions.length) {
            data.submissions.splice(index, 1);
            fs.writeFileSync(dataPath, JSON.stringify(data));
            res.send({ success: true });
        } else {
            res.status(404).send({ error: "Submission not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});


app.put('/submissions/:index', (req, res) => {
    try {
        const index = parseInt(req.params.index, 10);
        const dataPath = path.join(__dirname, 'db.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

        console.log('Updating submission at index:', index);
        console.log('Current submissions:', data.submissions);

        if (index >= 0 && index < data.submissions.length) {
            // Update the submission data
            data.submissions[index] = req.body;

            fs.writeFileSync(dataPath, JSON.stringify(data));
            res.send({ success: true });
        } else {
            res.status(404).send({ error: "Submission not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
