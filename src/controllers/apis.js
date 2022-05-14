
const handleSingUp = async (req, res) => {
    // console.log(await req.db.Users.findAll({raw: true}))
    // console.log(req.file)
    req.body.pin_code = 1
    req.body.image = req.file ? req.file.filename : ""
    await req.db.Users.create(req.body)
    // console.log(req.body)
    // console.log(req.file)
    res.send(req.body)
}

const getCounties = async (req, res) => {
    let countries = await req.db.Countries.findAll()
    console.log(countries)
    res.status(200).json(countries)
}


const getStatesByCountryId = async (req, res) => {
    let countries = await req.db.States.findAll(
        {
            where: {
                country_id: req.params.country_id
            },
            // raw: true,
            // attributes: ['id']
        })
    console.log(countries)
    res.status(200).json(countries)
}

module.exports = {
    handleSingUp: handleSingUp,
    getCounties: getCounties,
    getStatesByCountryId: getStatesByCountryId
}