import { gql } from '@apollo/client';
// Query for me
export const QUERY_ME = gql`
    query me {
        me {
        _id
        username
        email
        savedBooks {
            bookId
            title
            authors
            description
            image
            link
        }
        }
    }
    `;
