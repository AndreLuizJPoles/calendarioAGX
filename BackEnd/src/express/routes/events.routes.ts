import { createEvent } from "../../mongodb/events.mongo";

const eventRoute = express.Router();

app.route('/events/:id')
    .get((req, res) => {
        //TODO: Implementar para recuperar um evento pelo id
    })
    .put((req, res) => {
        //TODO: Implementar para atualizar um evento pelo id.
    });

app.route('/events')
    .get((req, res) => {
        //TODO: Implementar para recuperar todos os eventos.
    })
    .post((req, res) => {
        let event = req.body; //TODO: Validar se o body está correto.
        createEvent(event);
    });

app.get('/events/:month', (req, res) => {
    //TODO: Implementar para recuperar todos os eventos de um mês específico.
});