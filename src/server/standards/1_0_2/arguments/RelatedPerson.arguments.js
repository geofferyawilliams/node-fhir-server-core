module.exports = {
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address',
		documentation: 'An address in any kind of address/part.',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-city',
		documentation: 'A city specified in an address.',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-country',
		documentation: 'A country specified in an address.',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-postalcode',
		documentation: 'A postal code specified in an address.',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-state',
		documentation: 'A state specified in an address.',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-address-use',
		documentation: 'A use code specified in an address.',
	},
	BIRTHDATE: {
		name: 'birthdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-birthdate',
		documentation: 'The Related Person\'s date of birth.',
	},
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-email',
		documentation: 'A value in an email contact.',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-gender',
		documentation: 'Gender of the person.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-identifier',
		documentation: 'A patient Identifier.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-name',
		documentation: 'A portion of name in any name part.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-patient',
		documentation: 'The patient this person is related to.',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-phone',
		documentation: 'A value in a phone contact.',
	},
	PHONETIC: {
		name: 'phonetic',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-phonetic',
		documentation: 'A portion of name using some kind of phonetic matching algorithm.',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RelatedPerson-telecom',
		documentation: 'The value in any kind of contact.',
	},
};