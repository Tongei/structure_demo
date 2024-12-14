const create = (req, res) => {
    res.json({
        message : "Successfully created customer"
    })
}

const remove = (req, res) => {
    res.json({
        message : "Successfully removed customer"
    })
}

const get_all = (req, res) => {
    res.json({ 
        message : "Successfully fetched all records customer"
    })
}

const update = (req, res) => {
    res.json({
        message : "Successfully updated customer"
    })
}

module.exports = {
    get_all,
    create,
    remove,
    update,
};