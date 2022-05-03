const mysqlConnection = require('./src/db/dbconnection');
const app = require('./src/server');
const router = require('./src/server');

// get all
router.get('/blogs', (req, res) => {
    mysqlConnection.query('SELECT * FROM blog', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
            console.log(rows)
        }
        else {
            console.log(err);
        }
    })
});

// get by id
router.get('/blogs/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM blog WHERE blogid = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
});

// delete by id
router.delete('/blogs/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM blog WHERE blogid = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(req.params.id + " " + "deleted succesfully");
        }
        else {
            console.log(err);
        }
    })
});

// insert
router.post('/blogs', (req, res) => {
    let blog = {
        title: req.body.title,
        imagepath: req.body.imagepath,
        description: req.body.description,
        publisheddate: req.body.publisheddate,
        author: req.body.author
    };
    mysqlConnection.query('INSERT INTO blog SET ?', blog, (err, rows, fields) => {
        if (!err) {
            res.send("new blog inserted succesfully");
        }
        else {
            console.log(err);
        }
    })
});

// update by id
router.put('/blogs/:id', (req, res) => {
    let sql = `UPDATE blog SET title = "${req.body.title}", imagepath = "${req.body.imagepath}", description = "${req.body.description}", publisheddate = "${req.body.publisheddate}", author = "${req.body.author}" WHERE blogId = "${req.params.id}"`;
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.send(req.params.id + " " + "blog updated succesfully");
        }
        else {
            console.log(err);
        }
    })
});