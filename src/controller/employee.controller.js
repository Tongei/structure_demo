const create = (req, res) => {
    res.json({
        message : "Successfully created employee"
    })
}

const remove = (req, res) => {
    res.json({
        message : "Successfully removed employee"
    })
}

const get_all = (req, res) => {
    res.json({
        message : "Successfully fetched all employee records using nodemon"
    })
}

const update = (req, res) => {
    res.json({
        message : "Successfully updated employee"
    })
}

module.exports = {
    get_all,
    create,
    remove,
    update,
};
