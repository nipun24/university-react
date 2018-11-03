exports.default = {
    // University
    university: {
        label: 'University',
        fields: [
            {
                fieldname: 'name',
                fieldtype: 'Data',
                is_pk: 1,
                label: "Name"
            },
            {
                fieldname: 'address',
                fieldtype: 'Text',
                label: 'Address'
            }
        ],
        permissions: {
            'university_admin': {
                read: 1,
                write: 1,
                delete: 1
            },
            'all': {
                read: 1
            }
        }
    }
}