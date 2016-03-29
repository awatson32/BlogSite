import {async, register} from 'platypus';
import BaseService from '../base/base.svc';
import PostsRepository from '../../repositories/posts/posts.repo';

export default class EntriesService extends BaseService {
    
    constructor(private postsRepository: PostsRepository) {
        super();
    }
    
    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.http.json<models.IResponse>({
            method: 'GET',
            url: this.host + '/posts',
        }).then((success) => {
            return success.response.data;
        });
    }
}

register.injectable('entries-svc', EntriesService);
