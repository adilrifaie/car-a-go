const { VisitorLog } = require('../models');
const { Op } = require('sequelize');

module.exports = async (req, res, next) => {
    try {
        const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
        const userAgent = req.headers['user-agent'] || null;

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const alreadyVisited = await VisitorLog.findOne({
            where: {
                ipAddress: ip,
                visitedAt: { [Op.gte]: startOfDay }
            }
        });

        if (!alreadyVisited) {
            await VisitorLog.create({ ipAddress: ip, userAgent, visitedAt: new Date() });
        }
    } catch (err) {
        // non-fatal — never block a request due to visitor tracking failure
    }
    next();
};
