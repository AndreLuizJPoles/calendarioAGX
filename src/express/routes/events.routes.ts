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
        //TODO: Implementar para criar um evento.
    });

app.get('/events/:month', (req, res) => {
    //TODO: Implementar para recuperar todos os eventos de um mês específico.
});