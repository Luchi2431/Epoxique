function checkAdminkey(req, res, next) {
    const adminKey = req.headers['x-admin-key'];
    const validKey = process.env.ADMINPANEL_SECRET_KEY;

    if(adminKey && adminKey == validKey)
    {
        next();
    } else
    {
        res.status(403).json({message: 'Acces denied - invalid admin key'});
    }
    
}

module.exports = checkAdminkey;