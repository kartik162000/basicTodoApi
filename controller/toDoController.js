const tasks = require('../data');
const getAllTask = (req, res) => {
    res.status(200).send(tasks)
};

const getTaskById = (req, res) => {
    const { id } = req.params;
    let todo = tasks.find((task) => task.id === Number(id))
    if (!todo) {
        res.status(404).send("id not found");
    }
    else
        res.status(200).send(todo);
}
const createTask = (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        ...req.body,
        isComplete: false
    };
    tasks.push(newTask);
    res.status(201).send(newTask);
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    const todo = tasks.findIndex((task) => task.id === Number(id));
    if (todo === -1) {
        res.status(404).send("id not found");
    }
    else {
        tasks.splice(todo, 1);
        res.status(200).send("deleted");
    }
};

const updateByPut = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const todo = tasks.findIndex((task) => task.id === Number(id));
    if (todo === -1) {
        res.status(404).send("id not found");
    }
    else {
        tasks[todo].id = Number(id);
        tasks[todo] = { ...data };
        res.status(200).send(tasks[todo]);
    }
};

const updateByPatch = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const todo = tasks.findIndex((task) => task.id === Number(id));
    if (todo === -1) {
        res.status(404).send("id not found");
    }
    else {
        tasks[todo] = { ...tasks[todo], ...data };
        console.log(tasks[todo]);
        res.status(200).send(tasks[todo]);
    }
};

module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    deleteTask,
    updateByPut,
    updateByPatch
};
