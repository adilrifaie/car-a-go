const slugify = require('slugify');

/**
 * Generate a URL-friendly slug from a title
 * @param {string} title - The title to convert to a slug
 * @returns {string} The generated slug
 */
function generateSlug(title) {
    return slugify(title, {
        lower: true,
        strict: true,
        trim: true,
        locale: 'tr',
        remove: /[*+~.()'"!:@?&]/g
    });
}

/**
 * Generate a unique slug by checking against existing slugs in the database
 * @param {string} title - The title to convert to a slug
 * @param {Object} Model - The Sequelize model to check against
 * @param {number|null} currentId - The ID of the current record (for updates)
 * @returns {Promise<string>} The unique slug
 */
async function generateUniqueSlug(title, Model, currentId = null) {
    let baseSlug = generateSlug(title);
    let slug = baseSlug;
    let counter = 1;

    // Check if slug exists in database
    while (true) {
        const existing = await Model.findOne({
            where: { slug },
            attributes: ['id']
        });

        // If no record found, or it's the current record being edited, slug is unique
        if (!existing || (currentId && existing.id === parseInt(currentId))) {
            break;
        }

        // Slug exists, try with counter
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}

module.exports = {
    generateSlug,
    generateUniqueSlug
};
