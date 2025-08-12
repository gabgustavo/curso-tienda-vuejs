const testing = async (req, res) => { 
    console.log('Controller is working');
    return res.status(200).send({
        message: 'Testing endpoint is working'
    });
}

module.exports = {
    testing
};