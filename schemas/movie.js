export default {
    name: 'movies',
    type:'document',
    title:'Movies',
    fields:[
        {
            name:'poster',
            type: 'image',
            title:'Movie Poster',
        },
        {
            name:'name',
            type: 'string',
            title:'Movie Name',
        },
        {
            name: 'trailerURL',
            type: 'url',
            title: 'Trailer Link'
        },
        {
            name: 'cast',
            title: 'Cast Membership',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'releaseDate',
            title: 'Release date',
            type: 'date',
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}]
        },
      
    ]
}