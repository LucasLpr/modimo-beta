import Api from '@/services/Api'

export default {
    postComment (token, parent_id, parent_name, content) {
        return Api().post('/api/comments/comment',
        {
            'parent_id': parent_id,
            'parent_name': parent_name,
            'content': content
            }, {
            headers: {
                'x-access-token': token
            }
        })
    }
}