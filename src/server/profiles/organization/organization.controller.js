const { resolveFromVersion } = require('../../utils/resolve.utils');
const errors = require('../../utils/error.utils');

module.exports.getOrganization = ({ profile, logger, config }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific organization & bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));

		/**
		* return service.getOrganization(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getOrganization(req, logger, context)
			.then((organizations) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (organizations) {
					for (let resource of organizations) {
						if (!req.organization || req.organization === resource.organizationId) {
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Organization(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Organization/${resource.id}`
							});
						}
					}
				}

				results.entry = entries;
				results.total = entries.length;

				res.status(200).json(results);
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getOrganizationById = ({ profile, logger }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let version = req.params.version;
		// Create a context I can pass some data through
		let context = { version };
		// Get a version specific organization
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));

		return service.getOrganizationById(req, logger, context)
			.then((organization) => {
				if (organization) {
					res.status(200).json(new Organization(organization));
				} else {
					next(errors.notFound('Organization not found', version));
				}
			})
			.catch((err) => {
				next(errors.internal(err.message, version));
			});
	};
};
