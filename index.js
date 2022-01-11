import express from 'express';
import routes from './src/routes/crmroutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// Serving Static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);